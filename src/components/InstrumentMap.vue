<template>
  <div class="instrument-map">
    <div class="outset-large">
      <div id="MapInterface">
        <Map
          :features="mapFeatures"
          :focusId="focusId"
          @focus="focus"
          @unfocus="unfocus"
        />
      </div>
    </div>
    <table class="history">
      <tbody>
        <tr
          v-for="autom in automs"
          :key="autom.id.value"
          class="history-item"
          :class="{ focus: focusId === autom.loc_nr.value }"
          @mouseover="focus(autom.loc_nr.value)"
          @mouseleave="unfocus()"
        >
          <td>
            {{ formatDates(autom) }}
          </td>
          <td>{{ autom.act_type.extra }}</td>
          <td>{{ autom.loc_nr.extra }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getAutomLocations, formatDates } from "@/assets/db";
import Map from "@/components/Map.vue";

export default {
  props: {
    automs: Array,
  },
  components: { Map },
  data: () => ({
    mapFeatures: [],
    path: [],
    focusId: null,
  }),
  created() {
    this.load();
  },
  methods: {
    formatDates(autom) {
      return formatDates(
        autom.date1.value,
        autom.date2.value,
        autom.date_sign.value,
        true
      );
    },
    async load() {
      // Get all autom locations.
      const featureCollection = await getAutomLocations();

      // We have automs placed on map. Use full autom records to collect the actual locations.
      const features = [];
      for (const feature of featureCollection.features) {
        // Only include locations for the automs given in props.
        const autom = this.automs.find(
          (autom) => autom.id.value == feature.properties.id
        );
        if (!autom) continue;

        feature.properties.locationId = autom.loc_nr.value;
        feature.properties.name = autom.loc_nr.extra;

        // An autom may have multiple history records at the same location. Skip duplictae locations.
        if (
          !features.find(
            (feature2) =>
              feature2.properties.locationId == feature.properties.locationId
          )
        )
          features.push(feature);

        this.mapFeatures = features;
      }
    },
    enrichFeature(feature) {
      // Find full autom record.
      const autom = this.automs.find(
        (autom) => autom.id.value == feature.properties.id
      );
      if (!autom) return;

      // Add location info from autom to the feature.
      feature.properties.locationId = autom.loc_nr.value;
      feature.properties.name = autom.loc_nr.extra;
      return feature;
    },
    focus(id) {
      this.focusId = id;
    },
    unfocus() {
      this.focusId = null;
    },
  },
  watch: {
    automs() {
      this.load();
    },
  },
};
</script>

<style lang="scss" scoped>
.instrument-map {
  margin-top: 50px;
  margin-bottom: 40px;
}

#MapInterface {
  border-radius: 20px;
  width: 100%;
  height: 500px;
  background-size: cover;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.2),
    0 6px 40px 0 rgba(0, 0, 0, 0.19);
}

#MapInterface:hover {
  transition: all 0.2s ease-in-out;
  filter: brightness(110%);
}

/** Override Map component style. */
#MapInterface #map {
  height: 100%;
  border-radius: 20px;
  z-index: 0; /* Fixes border-radius in Safari. */
}

.history {
  margin: 1rem -1rem;
  table-layout: fixed;
  width: calc(100% + 2rem);
  font-size: 24px;
  transition: all 0.2s ease-in-out;
  border-spacing: 0 0.5rem;

  tr.focus {
    background-color: #fff2;

    td:first-child {
      border-radius: 1rem 0 0 1rem;
    }
    td:last-child {
      border-radius: 0 1rem 1rem 0;
    }
  }

  td {
    padding: 1rem;

    &:nth-child(3) {
      width: 50%;
    }
  }
}
</style>
