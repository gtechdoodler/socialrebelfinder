<template>
  <div class="address-search">
    <b-row class="address-search__row-header" align-h="center">
      <b-col>
        <b-row>
          <b-col sm="8" md="6">
            <v-postcodesearchbox ref="searchBox" label="Postcode" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row v-if="resultsCount" class="results" align-h="center">
      <b-col>
        <v-addresscards />        
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PostcodeSearchBox from 'components/business/PostcodeSearchBox';

export default {
  name: 'AppContainer',
  components: {
    'v-addresscards': () => import("components/business/AddressCardCollection/AddressCardCollection.vue"),
    'v-postcodesearchbox': PostcodeSearchBox
  },
  mounted() {
    this.$refs.searchBox.focus();
  },
  computed: {

    // TODO: Replace literals with namespaced consts
    ...mapState('address', [
      'resultsCount'
    ])
  }
}
</script>

<style lang="scss">
.address-search {
  .address-search__row-header {
    padding: 0;
  }
}
</style>
