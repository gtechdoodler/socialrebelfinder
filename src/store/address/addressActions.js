import endpoint from 'store/gateway/endpoints.js';
import gateway from 'store/gateway/gateway.js';
import mapper from '@/mappers/Components/AddressCard/apiGetAddressMapper.js';

// action: search
const search = async ({ commit }, { postcode }) => {
  const GET_VALIDATION = endpoint.GET_POSTCODE_VALIDATION.replace('{0}', postcode);
  const GET_SEARCH = endpoint.GET_ADDRESS_SEARCH.replace('{0}', postcode);

  // Set state, so ui can show progress
  commit('isSearching', true);
  try {
    commit('requestPostcode', postcode);

    // Validate postcode and promise reject if invalid
    const validationResponse = await gateway.get(GET_VALIDATION);
    if (!validationResponse.data.result) return Promise.reject('Postcode does not exist');

    // Perform search with valid postcode
    const searchResponse = await gateway.get(GET_SEARCH);
    const mapped = mapper.mapCol(searchResponse.data);
    commit('mappedResults', sortAddresses(mapped));
  } catch {
    // Error logging already handled by gateway, but removing this catch
    // results in an unhandled promise exception logged in the console.
    // As the store is 'application state', there's no need to bubble this
    // up another level, to the components... the ui can react to the error
    // state logged by the gateway.    
    // ** However, I don't like an empty catch, so will investigate a better approach.
  } finally {
    commit('isSearching', false);
  }
};

// action: addSelectedAddress
const addSelectedAddress = ({ commit }, address) => {
  commit('selectedAddress', address);
};

// action: removeSelectedAddress
const removeSelectedAddress = ({ commit }) => {
  commit('selectedAddress', null);
};

// action: reset
const reset = ({ commit }) => {
  commit('reset');
};

const sortAddresses = (data) => {
  if (data && Array.isArray(data.addressCol)) {
    data.addressCol.sort(function (a, b) {
      if (a.locality === b.locality) {
        if (a.street === b.street) {
          if (a.buildingNumber === b.buildingNumber) {
            if (a.buildingName === b.buildingName) return 0;
            return a.buildingName < b.buildingName ? -1 : 1;
          }
          let numA = parseInt(a.buildingNumber),
            numB = parseInt(b.buildingNumber);
          if (!isNaN(numA) && !isNaN(numB)) {
            return numA < numB ? -1 : 1;
          }
          // Otherwise, compare the values as strings
          return a.buildingNumber < b.buildingNumber ? -1 : 1;
        }  
        return a.street < b.street ? -1 : 1;
      }
      return a.locality < b.locality ? -1 : 1;
    });
  }
  return data;
}

export default {
  search,
  addSelectedAddress,
  removeSelectedAddress,
  reset
};