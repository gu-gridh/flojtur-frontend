<template>
  <div v-if="barrel">
    <div id="Valstriptyk">
      <div
        class="valsbild"
        style="
          background: url(interface/heroes/vals1.jpg);
          background-position: 50% 65%;
          background-size: 250%;
          background-repeat: no-repeat;
        "
      ></div>
      <div
        class="valsbild"
        style="
          background: url(interface/heroes/vals2.jpg);
          background-position: center;
          background-size: cover;
        "
      ></div>
      <div
        class="valsbild"
        style="
          background: url(interface/heroes/vals3.jpg);
          background-position: 50% 65%;
          background-size: 250%;
          background-repeat: no-repeat;
        "
      ></div>
    </div>

    <div class="container">
      <a href="index.html#herogallery">
        <div id="ItemBack"></div>
      </a>

      <h1 class="MainTitles">{{ barrel.bar_title }}</h1>

      <div class="buttons">
        <PlayButton />
      </div>

      <MetadataLarge :metadata="metadata" class="metadata" />

      <BarrelsCardGrid title="Valsar i samma samling" :barrels="automBarrels" />

      <BarrelsCardGrid
        v-if="composerName(barrel)"
        :title="`Mer av ${composerName(barrel)}`"
        :barrels="composerBarrels"
      />
    </div>
  </div>
</template>

<script>
import { getBarrels } from "../assets/db";
import PlayButton from "../components/PlayButton";
import MetadataLarge from "../components/MetadataLarge";
import BarrelsCardGrid from "../components/BarrelsCardGrid.vue";

export default {
  name: "BarrelPage",
  props: {
    id: [String, Number],
  },
  components: { PlayButton, MetadataLarge, BarrelsCardGrid },
  data() {
    return {
      barrel: null,
      automBarrels: [],
      composerBarrels: [],
    };
  },
  computed: {
    metadata() {
      return [
        { label: "Kompositör", value: this.composerName(this.barrel) },
        { label: "Stycke", value: "1815" },
        { label: "Plats", value: "Årsta slott" },
        { label: "Antal pipor", value: 8 },
      ];
    },
  },
  created() {
    this.load();
  },
  methods: {
    async load() {
      const allBarrels = await getBarrels();
      this.barrel = allBarrels.find((barrel) => barrel.id === this.id);
      this.automBarrels = allBarrels.filter(
        (barrel) => barrel.fields.i_nr.value === this.barrel.fields.i_nr.value
      );
      this.composerBarrels = allBarrels.filter(
        (barrel) => this.composerName(barrel) === this.composerName(this.barrel)
      );
    },
    composerName(barrel) {
      return (
        barrel.music &&
        `${barrel.music["comp.first_name"]} ${barrel.music["comp.fam_name"]}`
      );
    },
  },
};
</script>

<style>
.buttons {
  display: flex;
}
.metadata {
  font-size: 24px;
}
</style>   
