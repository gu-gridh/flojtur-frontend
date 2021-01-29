<template>
  <div>
    <header v-if="title">
      <h2 v-if="title">{{ title }}</h2>
      <span
        v-if="!full && items.length > limit"
        class="ActivateBonusMaterialText"
        @click="toggle"
      >
        {{ collapsed ? "Visa alla bilder..." : "Visa färre bilder..." }}
      </span>
    </header>
    <div
      v-masonry="masonryId"
      item-selector=".grid-item"
      :percent-position="true"
      :gutter="15"
      transition-duration="0s"
      class="grid"
      :class="{ collapsed }"
    >
      <router-link
        v-for="(item, i) in items"
        :key="item.image"
        tag="div"
        :to="item.link"
        class="grid-item"
        :class="{ hidden: collapsed && i >= limit }"
        :style="`width: calc(100% / ${limit} - 15px * (${limit} - 1) / ${limit})`"
      >
        <img :src="item.image" @load="redraw" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { vueWindowSizeMixin } from "vue-window-size";

export default {
  name: "MiniGallery",
  props: ["title", "masonryId", "items", "full"],
  mixins: [vueWindowSizeMixin],
  data() {
    return {
      collapsed: !this.full,
    };
  },
  computed: {
    limit() {
      return this.windowWidth <= 610
        ? 2
        : this.windowWidth <= 900
        ? 3
        : this.windowWidth <= 1200
        ? 4
        : this.windowWidth <= 1500
        ? 5
        : 6;
    },
  },
  mounted() {
    () => this.redraw(300);
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
    },
    redraw(ms) {
      setTimeout(() => this.$redrawVueMasonry(this.masonryId), ms);
    },
  },
  watch: {
    collapsed() {
      this.redraw();
    },
    limit() {
      this.redraw();
    },
    items: {
      deep: true,
      handler() {
        this.redraw(100);
      },
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: baseline;
  margin: 0 0 1em;
}

.ActivateBonusMaterialText {
  margin-left: 1em;
}

.grid-item {
  width: 13.1%;
  transition: all 0.2s ease-in-out;
  background-color: black;
  margin-top: 0px;
}

.hidden {
  display: none;
}

/* Fallback responsive widths, in case the calculated style attribute is not supported. */
@media screen and (max-width: 1500px) {
  .grid-item {
    width: 18.5%;
  }
}

@media screen and (max-width: 1200px) {
  .grid-item {
    width: 23.5%;
  }
}

@media screen and (max-width: 900px) {
  .grid-item {
    width: 31%;
  }
}

@media screen and (max-width: 610px) {
  .grid-item {
    width: 48%;
  }
}

.grid-item {
  float: left;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  margin-bottom: 15px;
}

.grid-item img {
  display: block;
  width: 100%;
  object-fit: cover;
}

.grid-item:hover {
  display: block;
  transform: scale(1.01);
  filter: brightness(120%);
}
</style>
