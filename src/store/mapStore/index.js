import getters from './mapGetters';
import mutations from './mapMutations';
import state from './mapState';

export default {
  getters,
  mutations,
  namespaced: true,
  state () {
    return state;
  },  
}