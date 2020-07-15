<template functional>
  <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
      data-projection="EPSG:4326" style="height: 400px">
    <vl-view :zoom="props.zoom" :center="props.coordinates"></vl-view>
    <vl-geoloc>
      <template slot-scope="geoloc">
        <vl-feature v-if="props.coordinates" id="position-feature">
          <vl-geom-point :coordinates="props.coordinates"></vl-geom-point>
        </vl-feature>
      </template>
    </vl-geoloc>
    <vl-layer-tile id="osm">
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>
  </vl-map>
</template>

<script>
export default {
  props: {
    coordinates: {
      type: Array,
      validator(val) {
        return val && val.length === 2
          && typeof val[0] === 'number' // long
          && typeof val[1] === 'number'; // lat
      }
    },
    zoom: {
      type: Number,
      default: 15
    }
  }
}
</script>