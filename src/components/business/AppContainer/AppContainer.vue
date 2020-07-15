<template>
  <b-container class="app-container">
    <b-row class="body" align-h="center">
      <b-col v-if="!selectedAddress" lg="8">
        <p class="app-container__explanation">
          Inconsiderate folk, both young and old, continue to disobey the main man, Boris, and ignore
          <span class="app-container__highlight">social distancing</span> rules his government
          have laid out. Bring out your inner 'dirty rat' and report these flaming eediots.
          <strong>Where do they live?</strong></p>
      </b-col>
      <b-col lg="8">
        <keep-alive>
          <v-addresssearch v-if="!selectedAddress" />
          <v-addressconfirmation v-else />
        </keep-alive>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import AddressSearch from 'components/pages/AddressSearch';

export default {
  name: 'AppContainer',
  components: {
    'v-addresssearch': AddressSearch,
    'v-addressconfirmation': () => import("components/pages/AddressConfirmation/AddressConfirmation.vue")
  },
  computed: {

    // TODO: Replace literals with namespaced consts
    ...mapState('address', [
      'selectedAddress'
    ])
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .app-container__explanation {
    padding: 1.25rem $padding-std-container $padding-std-container;
    margin-bottom: $padding-std-container;
    line-height: 1.5em;
    background-color: $color-para-background;
    .app-container__highlight {
      display: inline-block;
      padding: 0 .25em;
      background-color: $color-highlighter-yellow;
    }
  }
}
</style>
