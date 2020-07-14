import { addressStringFromArray } from 'utils/addressUtils.js';

export default {

  mapEntity(source) {
    let mapped = {};
    mapped.buildingName = source.building_name;
    mapped.buildingNumber = source.building_number;
    mapped.street = source.thoroughfare;
    mapped.locality = source.locality;
    mapped.town = source.town_or_city;
    mapped.county = source.county;
    
    // TODO: This would be more effecient as a getter in the address store
    mapped.getFullAddressString = function() {
      return addressStringFromArray([
        this.buildingNumber,
        this.buildingName,        
        this.street,
        this.locality,
        this.town,
        this.county
      ]);
    }
    return mapped;
  },

  mapCol(source) {
    if (!source || typeof source !== 'object') {
      throw 'Error in apiGetAddressMapper: Expecting not null object';
    }
    if (!Array.isArray(source.addresses)) {
      throw `Error in apiGetAddressMapper: Expecting source array, but received ${typeof source}`;
    }
    let mapped = {};
    mapped.postcode = source.postcode;
    mapped.addressCol = [];
    source.addresses.forEach(el => {
      let entity = this.mapEntity(el);
      mapped.postcode = source.postcode;
      entity.coordinates = [source.longitude, source.latitude];
      mapped.addressCol.push(entity);
    });
    return mapped;
  }
};