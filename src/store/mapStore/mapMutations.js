const address = (state, { addressString, coordinates }) => {
  state.fullAddressString = addressString;
  state.coordinates = coordinates;
};

export default {
  address
};