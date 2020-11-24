<template>
  <div>
    <header>
      <h2 v-if="title">{{ title }}</h2>
      <span v-if="!full" class="ActivateBonusMaterialText" @click="toggle">
        {{ collapsed ? "Visa alla valsar..." : "Visa färre valsar..." }}
      </span>
    </header>
    <div
      v-masonry="masonryId"
      item-selector=".grid-item-pub"
      :percent-position="true"
      :gutter="20"
      class="grid clear-after outset-small"
      :class="{ collapsed }"
    >
      <Card
        v-for="card in cards"
        :key="card.id || card.to || card.image || card.title"
        v-masonry-tile
        :to="card.to"
        :image="card.image"
        :title="card.title"
      >
        {{ card.content }}
      </Card>
    </div>
  </div>
</template>

<script>
import imagesLoaded from "imagesloaded";
import Card from "./Card";

export default {
  name: "CardGrid",
  props: ["title", "masonryId", "cards", "full"],
  components: { Card },
  data() {
    return {
      collapsed: !this.full,
    };
  },
  mounted() {
    imagesLoaded(`#${this.masonryId}`, () =>
      setTimeout(() => this.$redrawVueMasonry(this.masonryId), 300)
    );
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
    },
  },
  watch: {
    collapsed() {
      setTimeout(() => this.$redrawVueMasonry(this.masonryId));
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

.grid-item-pub {
  float: left;
  color: white;
  height: 140px;
  border-radius: 10px;
  background-color: RGBA(50, 50, 50, 1);
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2),
    0 6px 40px 0 rgba(0, 0, 0, 0.19);
}

.grid-item-pub:hover {
  display: block;
  filter: brightness(120%);
  transform: scale(1.04);
  background-color: RGBA(80, 80, 80, 1);
}

.gridPub {
}

.gridPub:after {
  content: "";
  display: block;
  clear: both;
}

.grid-item-pub {
  width: 32.1%;
  //transition: all .2s ease-in-out;
  margin-bottom: 20px;
  float: left;
}

.grid.collapsed
  .grid-item-pub
  + .grid-item-pub
  + .grid-item-pub
  + .grid-item-pub
  + .grid-item-pub
  + .grid-item-pub
  + .grid-item-pub {
  display: none;
}

@media screen and (max-width: 1400px) {
  .grid-item-pub {
    width: 48.5%;
  }
  .grid.collapsed
    .grid-item-pub
    + .grid-item-pub
    + .grid-item-pub
    + .grid-item-pub
    + .grid-item-pub {
    display: none;
  }
}

@media screen and (max-width: 800px) {
  .grid-item-pub {
    width: 100%;
  }
}
</style>
