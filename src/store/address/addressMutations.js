const isSearching = (state, value) => {
  state.isSearching = value;
};

const requestPostcode = (state, postcode) => {
  state.requestPostcode = postcode;
};

const mappedResults = (state, mappedObj) => {
  if (mappedObj && mappedObj.addressCol && mappedObj.addressCol.length) {
    state.mappedResults = mappedObj;
    state.resultsCount = mappedObj.addressCol.length;
  }
};

const selectedAddress = (state, address) => {
  state.selectedAddress = address;
};

const reset = (state) => {
  state.isSearching = false;
  state.requestPostcode = '';
  state.mappedResults = null;
  state.resultsCount = 0;
  state.selectedAddress = null;
};

export default {
  isSearching,
  requestPostcode,
  mappedResults,
  selectedAddress,
  reset
};