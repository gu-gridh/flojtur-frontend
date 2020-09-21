<template>
  <div>
    <div class="links">
      <div class="ArchiveViewOptions">
        <div
          class="viewOption"
          :class="{ selected: gallerySelected, notselected: !gallerySelected }"
          @click="setSelected('gallery')"
        >
          <a>Galleri</a>
        </div>
        <div class="viewOption">|</div>
        <div
          class="viewOption"
          :class="{ selected: mapSelected, notselected: !mapSelected }"
          @click="setSelected('map')"
        >
          <a>Karta</a>
        </div>
      </div>
    </div>

    <Gallery v-if="gallerySelected" />

    <Map v-if="mapSelected" />
  </div>
</template>

<script>
import Gallery from "./Gallery.vue";
import Map from "./Map.vue";

export default {
  name: "ArchiveView",
  components: {
    Gallery,
    Map
  },
  data: function() {
    return {
      selected: "gallery"
    };
  },
  methods: {
    setSelected(select) {
      this.selected = select;
    }
  },
  computed: {
    gallerySelected() {
      return this.selected === "gallery";
    },
    mapSelected() {
      return this.selected === "map";
    }
  }
};
</script>

<style scoped>
.links {
  height: 100px;
  width: 100%;
  margin-top: 10px;
}
.ArchiveViewOptions {
  width: 360px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  color: black;
  text-align: center;
}
.viewOption {
  float: left;
  width: auto;
  font-size: 20px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 5px;
  transition: all 0.2s;
}
.viewOption.selected {
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: black;
  height: 30px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.viewOption.notselected {
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
</style>
