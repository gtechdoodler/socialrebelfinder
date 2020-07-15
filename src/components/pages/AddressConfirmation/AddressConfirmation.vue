<template>
  <div class="address-confirmation">
    <b-row>
      <b-col class="address-confirmation__taskbar">
        <b-button v-b-modal.mapModal class="address-confirmation__icon-button" variant="outline-secondary"
          @click="onShowOnMapClick">
          <b-icon-geo-alt /><span>Map</span>
        </b-button>
        <b-button class="address-confirmation__icon-button" variant="outline-secondary"
          @click="onChangeAddressClick">
          <b-icon-search /><span>Change Address</span>
        </b-button>
      </b-col>      
    </b-row>
    <b-row>
      <b-col>
        <v-formrowinput label="Building Name" v-model="buildingName" />
        <v-formrowinput label="Building Number" v-model="buildingNumber" />
        <v-formrowinput label="Street" v-model="street" />
        <v-formrowinput label="Locality" v-model="locality" />
        <v-formrowinput label="Town" v-model="town" />
        <v-formrowinput label="County" v-model="county" />
        <b-row align-h="center">
          <b-col>
            <div class="address-confirmation__footer-tasks">
              <b-button class="address-confirmation__icon-button" variant="primary"
                @click="onReportThemClick">Report Them</b-button>
            </div>
          </b-col>
        </b-row>        
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { addressStringFromArray } from 'utils/addressUtils.js';
import { BButton, BFormGroup, BFormInput } from 'bootstrap-vue';
import FormRowInput from './FormRowInput';
import { mapState } from 'vuex';

export default {
  name: 'AddressConfirmation',
  components: {
    'b-button': BButton,
    'b-form-group': BFormGroup,
    'b-form-input': BFormInput,
    'v-formrowinput': FormRowInput
  },
  data: () => ({
    buildingName: '',
    buildingNumber: '',
    street: '',
    locality: '',
    town: '',
    county: '',
    coordinates: null // valid coordinates will be an array, with 2 elements
  }), 
  computed: {

    // TODO: Replace literals with namespaced consts
    ...mapState('address', [
      'selectedAddress'
    ])
  },
  watch: {

    selectedAddress: {
      handler(obj) {
        if (obj) {
          this.buildingName = obj.buildingName;
          this.buildingNumber = obj.buildingNumber;
          this.street = obj.street;
          this.locality = obj.locality;
          this.town = obj.town;
          this.county = obj.county;
          let coords = obj.coordinates;
          if (Array.isArray(coords) && coords.length === 2) {
            this.coordinates = coords;
          }
        } else {
          this.reset();
        }
      },
      immediate: true
    }
  },  
  methods: {

    reset() {
      this.buildingName = '';
      this.buildingNumber = '';
      this.street = '';
      this.locality ='';
      this.town = '';
      this.county = '';
    },

    onChangeAddressClick() {
      this.$store.dispatch('address/removeSelectedAddress');
    },

    onShowOnMapClick() {
      if (this.selectedAddress) {
        this.$store.commit('mapStore/address', {
          addressString: this.selectedAddress.getFullAddressString(),
          coordinates: this.coordinates
        });
      }
    },

    onReportThemClick() {
      this.$bvModal.msgBoxOk('Thank you. They are busted!').then(value => {
        this.$store.dispatch('address/reset');
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.address-confirmation {
  padding: $padding-std-container;  
  .address-confirmation__taskbar {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 2em;
    .address-confirmation__icon-button {
      margin-left: .5em;
      span {
        padding-left: .5em;
      }
    }
  }
  .address-confirmation__footer-tasks {
    display: flex;
    justify-content: flex-end;
    padding: 1em 0;
  }
}
</style>
