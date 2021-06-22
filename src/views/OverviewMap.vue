<template>
  <Map :features="features" :popup="true" />
</template>

<script>
import { getAutomLocations, getInstruments } from "@/assets/db";
import Map from "@/components/Map.vue";

export default {
  name: "OverviewMap",
  components: { Map },
  data: () => ({
    features: [],
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
  },
};
</script>

<style>
</style>
