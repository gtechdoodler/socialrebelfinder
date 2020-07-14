import Postcode from 'postcode';

const addressStringFromArray = (addressPartsArray) => {
  if (Array.isArray(addressPartsArray)) {
    return addressPartsArray.filter(Boolean).join(', ');
  }
  return '';
};

const validatePostcode = (postcodeValue) => {
  if (postcodeValue == null) return false;
  return Postcode.isValid(postcodeValue);
};

export { addressStringFromArray, validatePostcode }

export default { addressStringFromArray, validatePostcode }
