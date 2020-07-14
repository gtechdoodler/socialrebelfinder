<template>
  <div v-if="mappedResults" class="address-card-collection">
    <div class="address-card-collection__header">
      <span class="address-card-collection__status">
        <strong>{{ resultsCount }}</strong> results found for <strong>{{ requestPostcode }}</strong>
      </span>
    </div>
    <template v-if="mappedResults.addressCol">
      <v-addresscard v-for="(address, i) in mappedResults.addressCol" :key="i"
        class="address-card-collection__card" :address="address" />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AddressCard from 'components/business/AddressCard';

export default {
  name: 'AddressCardCollection',
  components: {
    'v-addresscard': AddressCard
  },
  computed: {

    // TODO: Replace literals with namespaced consts
    ...mapState('address', [
      'mappedResults',
      'resultsCount',
      'requestPostcode',
    ])
  }
}
</script>

<style lang="scss" scoped>
.address-card-collection {
  padding: 0 $padding-std-container $padding-std-container;
  .address-card-collection__header {
    display: flex;
    justify-content: space-between;
    padding: 2em 0 .5em 0;
    font-size: $font-size-reduced;
    .address-card-collection__status {
      color: $color-font-light;
    }
  }
  .address-card-collection__card {
    border-top: 1px solid $color-input-datarow-border;
  }
}
</style>
