<template>
  <div>
    <header>
      <h2 v-if="title">{{ title }}</h2>
      <span v-if="!full" class="ActivateBonusMaterialText top" @click="toggle">
        {{ collapsed ? "Visa alla valsar..." : "Visa färre valsar..." }}
      </span>
    </header>
    <div
      v-masonry="masonryId"
      item-selector=".grid-item-pub"
      :percent-position="true"
      :gutter="20"
      transition-duration="0s"
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
    <span v-if="!full" class="ActivateBonusMaterialText bottom" @click="toggle">
      {{ collapsed ? "Visa alla valsar..." : "Visa färre valsar..." }}
    </span>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "CardGrid",
  props: ["title", "masonryId", "cards", "full"],
  components: { Card },
  data() {
    return {
      collapsed: !this.full,
    };
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
    },
  },
  watch: {
    // Refresh as card content is being progressively loaded.
    cards: {
      deep: true,
      handler() {
        setTimeout(() => this.$redrawVueMasonry(this.masonryId));
      },
    },
    // Surplus items are shown/hidden with CSS upon collapsing/expanding. Refresh the layout in response.
    collapsed() {
      setTimeout(() => this.$redrawVueMasonry(this.masonryId));
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: baseline;
  margin: 0 0 1em;
}

.ActivateBonusMaterialText {
  &.top {
    margin-left: 1em;
    display: none;
  }

  &.bottom {
    margin: 0 0 1em;
  }

  @media screen and (min-width: 800px) {
    &.top {
      display: block;
    }
    &.bottom {
      display: none;
    }
  }
}

.grid-item-pub {
  float: left;
  color: white;
  height: 140px;
  border-radius: 10px;
  background-color: RGBA(50, 50, 50, 1);
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 4px 20px 0px rgb(0 0 0 / 20%), 0 6px 40px 0 rgb(0 0 0 / 19%);
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
