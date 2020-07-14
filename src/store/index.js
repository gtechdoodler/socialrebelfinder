import Vue from 'vue';
import vuex from 'vuex';
import address from '../store/address/index.js';
import error from '../store/error/index.js';
import mapStore from '../store/mapStore/index.js';
import { registerStatusError } from './httpStatusConfig.js';

// Provide some user friendly messages for known http status codes
registerStatusError({ status: '400', message: 'There was a problem with the address service.' });
registerStatusError({ status: '404', message: 'There was a problem finding the address service.' });
registerStatusError({ status: '429', message: 'Your allocated number of address searches has been exceeded.' });

// vuex
Vue.use(vuex);
export const store = new vuex.Store({
  modules: {
    address,
    error,
    mapStore
  }
});