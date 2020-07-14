import actions from './addressActions';
import mutations from './addressMutations';
import state from './addressState';

// Just investigating a better method of exposing store definitions
// to components, so literals aren't scattered throughout the app.
// Going to pick this up again because I don't think there is a standard
// vuex solution for this.
export const addressStoreDef = {
  namespace: 'address',
  actions: {
  },
  mutations: {
  },
  state: {
    mappedResults: 'address/mappedResults',
    resultsCount: 'address/resultsCount',
    requestPostcode: 'address/requestPostcode',
  }
};

export default {
  namespaced: true,
  actions,
  mutations,
  state () {
    return state;
  },  
}