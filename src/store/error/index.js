import actions from './errorActions';
import mutations from './errorMutations';
import state from './errorState';

export default {
  actions,
  mutations,
  namespaced: true,
  state () {
    return state;
  },  
}