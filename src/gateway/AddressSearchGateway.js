import gateway from './gateway.js';

// Inject the endpoints to decouple the gateway from a particular API.
// However, a future improvement might be to inject a 'provider'. A provider
// will act as an adapter, and position itself between gateway and endpoint,
// converting data into a consistent model the gateways understand.
// And this might well remove the need for extra component-specific mappers.
function AddressSearchGateway(endpoints) {
  if (!endpoints) throw new Error('Invalid endpoints obj');
  if (!endpoints.GET_POSTCODE_VALIDATION) throw new Error('Missing GET_POSTCODE_VALIDATION');
  if (!endpoints.GET_ADDRESS_SEARCH) throw new Error('Missing GET_ADDRESS_SEARCH');
  
  this.endpoints = endpoints;
}

AddressSearchGateway.prototype = {

  async search(postcode) {
    const GET_VALIDATION = this.endpoints.GET_POSTCODE_VALIDATION.replace('{0}', postcode);
    const GET_SEARCH = this.endpoints.GET_ADDRESS_SEARCH.replace('{0}', postcode);
    // Validate postcode and promise reject if invalid
    const validationResponse = await gateway.get(GET_VALIDATION);
    if (!validationResponse.data.result) return Promise.reject('Postcode does not exist');
    // Perform search with valid postcode
    return await gateway.get(GET_SEARCH);
  }
}

export default AddressSearchGateway;