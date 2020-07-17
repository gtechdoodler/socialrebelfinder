import { expect } from 'chai';
import { registerStatusError, findStatusError } from '@/gateway/httpStatusConfig.js';

describe('gateway/httpStatusConfig.js', () => {
  describe('registerStatusError and findStatusError', () => {    
    it('configurable status errors registered and retrieved', () => {
      registerStatusError({ status: 250, message: 'No results found for user request' });
      expect(findStatusError(250)).to.be.not.undefined;
    });
  });
});