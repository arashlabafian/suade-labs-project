<template>
  <b-card-code title="Marker, Circle & Polygon Map">
    <l-map v-if="receivedPeople.length" :zoom="zoom">
      <l-tile-layer :url="url" />
      <div v-for="person in receivedPeople" :key="person._id">
        <l-marker
          :lat-lng="[person.location.latitude, person.location.longitude]"
        >
          <l-tooltip :content="person.name" />
        </l-marker>
      </div>
    </l-map>
  </b-card-code>
</template>

<script>
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";
import { Icon } from "leaflet";
import BCardCode from "@/components/base/b-card-code/BCardCode.vue";
import "leaflet/dist/leaflet.css";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    BCardCode,
    LTooltip,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 2,
    };
  },
  computed: {
    receivedPeople() {
      return this.$store.getters["people/getPeople"];
    },
  },
};
</script>

<style lang="scss">
.vue2leaflet-map {
  &.leaflet-container {
    height: 50rem;
  }
}
</style>
