<template>
  <div v-if="barrel">
    <div id="Valstriptyk">
      <div
        v-if="photos.title"
        class="valsbild title"
        :style="{ backgroundImage: `url(${photos.title})` }"
      ></div>
      <div
        v-if="photos.side"
        class="valsbild side"
        :style="{ backgroundImage: `url(${photos.side})` }"
      ></div>
      <div
        v-if="photos.back"
        class="valsbild back"
        :style="{ backgroundImage: `url(${photos.back})` }"
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
import { getBarrels, search } from "../assets/db";
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
      photos: {},
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
    this.loadData();
    this.loadPhotos();
  },
  methods: {
    async loadData() {
      const allBarrels = await getBarrels();
      this.barrel = allBarrels.find((barrel) => barrel.id === this.id);
      this.automBarrels = allBarrels.filter(
        (barrel) => barrel.fields.i_nr.value === this.barrel.fields.i_nr.value
      );
      this.composerBarrels = allBarrels.filter(
        (barrel) => this.composerName(barrel) === this.composerName(this.barrel)
      );
    },
    async loadPhotos() {
      const result = await search("photo", `equals|barrel_nr|${this.id}`);
      this.photos = {};
      result.features.forEach((photo) => {
        const type = photo["tag.type"];
        this.photos[
          type
        ] = `https://data.dh.gu.se/flojtur/1000x/${photo.filename}`;
      });
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

<style lang="scss" scoped>
#Valstriptyk {
  width: 100%;
  height: 50vh;
}

.valsbild {
  float: left;
  height: 50vh;
  width: 33.33%;

  &.title,
  &.back {
    background-position: 50% 65%;
    background-size: 250%;
    background-repeat: no-repeat;
  }
  &.side {
    background-position: center;
    background-size: cover;
  }
}
.buttons {
  display: flex;
}
.metadata {
  font-size: 24px;
}
</style>   
