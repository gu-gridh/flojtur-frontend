<template>
  <div class="instrument-map outset-large">
    <div id="MapInterface">
      <InstrumentMap
        :features="mapFeatures"
        :history="automFeatureZip"
        :focusId="focusId"
        @focus="focus"
        @unfocus="unfocus"
      />
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
import { uniqAs } from "@/assets/util";
import InstrumentMap from "@/components/InstrumentMap.vue";

export default {
  props: {
    automs: Array,
  },
  components: { InstrumentMap },
  data: () => ({
    mapFeatures: [],
    automFeatureZip: [],
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
      ).replace(/./, (s) => s.toUpperCase());
    },
    async load() {
      // Get all autom locations.
      const featureCollection = await getAutomLocations();

      // Zip GeoJSON features with full autom records.
      this.automFeatureZip = this.automs
        .map((autom) => ({
          autom,
          feature: featureCollection.features.find(
            (feature) => feature.properties.id == autom.id.value
          ),
        }))
        // If an autom has no location, the instrument has not moved since the previous record.
        .filter(({ feature }) => !!feature);

      // Add more location info to the features.
      const enrichedFeatures = this.automFeatureZip.map(
        ({ autom, feature }) => {
          feature.properties.locationId = autom.loc_nr.value;
          feature.properties.name = autom.loc_nr.extra;
          return feature;
        }
      );
      this.mapFeatures = uniqAs(
        enrichedFeatures,
        (feature) => feature.properties.locationId
      );
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

.history {
  margin: 1rem 0;
  table-layout: fixed;
  width: 100%;
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
    padding: 12px; // compensate for outset

    &:nth-child(3) {
      width: 50%;
    }
  }
}
</style>
