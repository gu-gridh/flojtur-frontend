<template>
  <div class="instrument-map">
    <div class="outset-large">
      <div id="MapInterface">
        <Map :features="mapFeatures" :focus="focusFeature" />
      </div>
    </div>
    <table class="history">
      <tbody>
        <tr
          v-for="autom in automs"
          :key="autom.id.value"
          class="history-item"
          :class="{ focus: focusId === autom.id.value }"
          @mouseover="focus(autom.id.value)"
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
    focusId: null,
  }),
  computed: {
    focusFeature() {
      return this.mapFeatures.find(
        (feature) => feature.properties.id === this.focusId
      );
    },
  },
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
      // Get all autom locations and then pick the ones included in this autom history.
      const featureCollection = await getAutomLocations();
      const idAutom = (id) => this.automs.find((autom) => autom.id.value == id);
      const idYear = (id) => idAutom(id) && parseInt(idAutom(id).date2.value);
      this.mapFeatures = featureCollection.features
        .filter((feature) =>
          this.automs.find((autom) => autom.id.value == feature.properties.id)
        )
        .sort((a, b) => idYear(a.properties.id) - idYear(b.properties.id));
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
  transform: scale(1.02);
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
  width: 100%;
  font-size: 24px;
  transition: all 0.2s ease-in-out;
  border-collapse: collapse;

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
