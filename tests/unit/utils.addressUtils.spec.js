import { expect } from 'chai';
import addressUtils from '@/utils/addressUtils.js';

describe('utils/addressUtils.js', () => {
  // addressStringFromArray
  describe('addressStringFromArray', () => {
    const addressString = addressUtils.addressStringFromArray(['2', 'Inchfield', 'Worsthorne']);
    it('index of building number in comma seperated address string is in the right pos', () => {
      expect(addressString.indexOf('2, ')).to.equal(0);
    });
    it('index of street name in comma seperated address string is in the right pos', () => {
      expect(addressString.indexOf('Inchfield, ')).to.equal(3);
    });
    it('index of locality in comma seperated address string is in the right pos', () => {
      expect(addressString.indexOf(', Worsthorne')).to.equal(12);
    });
  });

  // validatePostcode
  describe('validatePostcode', () => {
    it('BB10 3PU is a valid postcode', () => {
      expect(addressUtils.validatePostcode('BB10 3PU')).to.be.true;
    });
    it('PR7 1XB is a valid postcode', () => {
      expect(addressUtils.validatePostcode('PR7 1XB')).to.be.true;
    });
    it('12345678 is an invalid postcode', () => {
      expect(addressUtils.validatePostcode('12345678')).to.be.false;
    });
    it('PR7 1&& is an invalid postcode', () => {
      expect(addressUtils.validatePostcode('PR7 1&&')).to.be.false;
    });
    it('an empty string is an invalid postcode', () => {
      expect(addressUtils.validatePostcode('')).to.be.false;
    });
    it('a null object is an invalid postcode', () => {
      expect(addressUtils.validatePostcode(null)).to.be.false;
    });
    it('undefined is an invalid postcode', () => {
      expect(addressUtils.validatePostcode(undefined)).to.be.false;
    });
  });  
});
