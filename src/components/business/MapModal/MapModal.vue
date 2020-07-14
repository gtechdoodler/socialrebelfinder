<template>
  <b-modal id="mapModal" hide-footer :title="fullAddressString">
    <v-map :coordinates="coordinates" />
  </b-modal>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Map from 'components/common/Map';

export default {
  components: {
    'v-map': Map
  },
  computed: {

    ...mapGetters('mapStore', [
      'coordinates'
    ]),

    ...mapState('mapStore', [
      'fullAddressString'
    ])
  }
}
</script>