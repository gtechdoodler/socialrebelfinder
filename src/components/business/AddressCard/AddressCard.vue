<template>
  <div v-if="addressLine" class="address-card">
      <div class="address-card__line">{{ addressLine }}</div>
      <div class="address-card__btn-wrapper">
        <b-button class="address-card__btn" variant="outline-secondary"
          @click="onAddButtonClick">Here</b-button>
      </div>
  </div>
</template>

<script>
import { addressStringFromArray } from 'utils/addressUtils.js';
import { BButton } from 'bootstrap-vue';

export default {
  name: 'AddressCard',
  components: {
    'b-button': BButton
  },  
  props: {
    address: {
      type: Object,
      validator(obj) {
        return 'buildingName' in obj
          && 'buildingNumber' in obj
          && 'street' in obj
          && 'locality' in obj
          && 'town' in obj
          && 'county' in obj;
      }
    }
  },
  computed: {

    addressLine() {
      // TODO: The getFullAddressString function should be a getter in the address store
      return this.address.getFullAddressString();
    }
  },
  methods: {

    onAddButtonClick() {
      this.$store.dispatch('address/addSelectedAddress', this.address);
    }
  }
}
</script>

<style lang="scss" scoped>
.address-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $padding-datarow 0;
  .address-card__btn-wrapper {
    padding-left: 1em;
  }
}
</style>
