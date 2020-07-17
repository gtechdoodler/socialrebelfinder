import AddressSearchGateway from '@/gateway/AddressSearchGateway.js';
import endpoints from './endpoints.js';
import mapper from '@/mappers/Components/AddressCard/apiGetAddressMapper.js';

// action: search
const search = async ({ commit }, { postcode }) => {
  // Set state, so ui can show progress
  commit('isSearching', true);
  try {
    let gateway = new AddressSearchGateway(endpoints);
    let searchResponse = await gateway.search(postcode);
    commit('requestPostcode', postcode);    
    if (searchResponse) {
      const mapped = mapper.mapCol(searchResponse.data);
      commit('mappedResults', sortAddresses(mapped));
    }
  } catch (error) {
    // Error logging already handled by gateway, so simply bubble
    // the exception up to the client to handle ui feedback.
    return Promise.reject(error);
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