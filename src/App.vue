<template>
  <div id="app">
    <section class="app__header">
      <b-container>
        <b-row align-h="center" class="app__row-header">
          <b-col lg="8">
            <h3 class="app__title">Social Rebel Finder</h3>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <v-appcontainer id="app-container" />
    <v-mapmodal />
  </div>
</template>

<script>
import AppContainer from 'components/business/AppContainer';
import { mapState } from 'vuex';
// TODO: Implement vuex state to showMapModal then wrap v-mapmodal in v-if="showMapModal"

export default {
  name: 'App',
  components: {
    'v-appcontainer': AppContainer,
    'v-mapmodal': () => import('components/business/MapModal/MapModal.vue')
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
  .app__header {
    background-color: #333;
    .app__row-header {
      position: relative;
      padding: 3em $padding-std-container 2em $padding-std-container;
      .app__title {
        margin-block-end: 0;
        font-weight: bold;
        color: #fff;
      }    
    }    
  }
  /* BS overrides */
  legend {
    font-size: $font-size-reduced;
    color: $color-input-label;
  }
}
</style>
