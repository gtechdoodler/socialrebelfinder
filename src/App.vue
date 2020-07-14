<template>
		<div id="app">
			<v-appcontainer id="app-container" />
      <v-mapmodal />
      <v-messagemodal />
		</div>
</template>

<script>
import AppContainer from 'components/business/AppContainer';
import { mapState } from 'vuex';
import MessageModal from 'components/common/MessageModal';
// TODO: Implement vuex state to showMapModal then wrap v-mapmodal in v-if="showMapModal"

export default {
  name: 'App',
  components: {
    'v-appcontainer': AppContainer,
    'v-mapmodal': () => import('components/business/MapModal/MapModal.vue'),
    'v-messagemodal': MessageModal
  },
  watch: {
    errorMessage(val) {
      if (val) {
        this.$bvModal.msgBoxOk(`An error occurred: ${val}`).then(() => {
          this.$store.dispatch('error/clear');
        });
      }
    }
  },
  computed: {

    // TODO: Replace literals with namespaced consts
    ...mapState('error', [
      'errorMessage'
    ])
  }
}
</script>

<style lang="scss">
#app {
  color: $color-font-primary;

	/* BS overrides */
	legend {
			font-size: $font-size-reduced;
			color: $color-input-label;
	}	
}
</style>
