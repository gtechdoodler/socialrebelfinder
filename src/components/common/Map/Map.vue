<template>
  <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
      data-projection="EPSG:4326" style="height: 400px">
    <vl-view :zoom="zoom" :center="coordinates"></vl-view>
    <vl-geoloc>
      <template slot-scope="geoloc">
        <vl-feature v-if="coordinates" id="position-feature">
          <vl-geom-point :coordinates="coordinates"></vl-geom-point>
          <vl-style-box>
            <vl-style-icon src="_media/marker.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
          </vl-style-box>
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