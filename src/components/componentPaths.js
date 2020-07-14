// A register of component paths using aliases created in vue.config.js

// TODO: Not happy about using literal paths to import components, but applying anything
// other than something static, means vue can't resolve the dependency. Further investigation
// required, because I want to exec the import like this...
// e.g
// import { business } from './componentPaths.js';
// import PostcodeSearchBox from business.POSTCODE_SEARCH_BOX;
// But this obviously can't be resolved during 'build'.

// Business
const ADDRESS_CARD_COLLECTION = 'components/business/AddressCardCollection/AddressCardCollection.vue';
const POSTCODE_SEARCH_BOX = 'components/business/PostcodeSearchBox';

// Common

// Pages

const business = {
  ADDRESS_CARD_COLLECTION,
  POSTCODE_SEARCH_BOX  
};

const common = {
};

const pages = {
};

export { business };

export default {
  business,
  common,
  pages
}