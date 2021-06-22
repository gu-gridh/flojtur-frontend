<template>
  <div id="map"></div>
</template>

<script>
import { getAutomLocations, getInstruments } from "@/assets/db";
import { makeMap, addGeojson } from "@/assets/map";

export default {
  name: "OverviewMap",
  data: () => ({
    features: [],
    map: null,
    layer: null,
  }),
  async created() {
    const [automs, featureCollection] = await Promise.all([
      getInstruments(),
      getAutomLocations(),
    ]);
    // TODO: Get latest autom, not simply the Inventering one.
    this.features = featureCollection.features.filter((feature) => {
      const autom = automs.find((autom) => autom.id == feature.properties.id);
      return autom && autom.fields.act_type.value == "1";
    });

    this.map = makeMap("map");
    this.layer = addGeojson(this.map, this.features, true);
  },
};
</script>

<style scoped>
#map {
  height: 600px;
  width: 100%;
}
</style>
