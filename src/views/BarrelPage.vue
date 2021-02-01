<template>
  <div v-if="barrel">
    <div id="Valstriptyk">
      <router-link
        v-if="photos.title"
        tag="div"
        :to="photos.title.linkRoute"
        class="valsbild title"
        :style="{ backgroundImage: `url(${photos.title.imageUrl})` }"
      ></router-link>
      <router-link
        v-if="photos.side"
        tag="div"
        :to="photos.side.linkRoute"
        class="valsbild side"
        :style="{ backgroundImage: `url(${photos.side.imageUrl})` }"
      ></router-link>
      <router-link
        v-if="photos.back"
        tag="div"
        :to="photos.back.linkRoute"
        class="valsbild back"
        :style="{ backgroundImage: `url(${photos.back.imageUrl})` }"
      ></router-link>
    </div>

    <div class="container">
      <div id="ItemBack" @click="$router.back()"></div>

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
  async created() {
    await Promise.all([this.loadData(), this.loadPhotos()]);
    Object.keys(this.photos).forEach(
      (type) =>
        (this.photos[
          type
        ].linkRoute.params.automId = this.barrel.fields.i_nr.value)
    );
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
        this.photos[type] = {
          imageUrl: `https://data.dh.gu.se/flojtur/1000x/${photo.filename}`,
          linkRoute: {
            name: "ImagePage",
            params: {
              // automId gets properly set when the barrel record has been loaded.
              automId: 0,
              category: "barrel",
              imageId: photo.id,
            },
          },
        };
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
  cursor: pointer;

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
