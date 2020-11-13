<template>
  <div
    v-masonry="masonryId"
    item-selector=".grid-item-pub"
    :percent-position="true"
    :column-width="'.grid-sizer-pub'"
    :gutter="20"
    class="clear-after"
  >
    <div class="grid-sizer-pub"></div>
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
</template>

<script>
import Card from "./Card";

export default {
  name: "CardGrid",
  props: ["masonryId", "cards"],
  components: { Card },
};
</script>

<style>
.gridPub {
}

.clear-after:after {
  content: "";
  display: block;
  clear: both;
}

.grid-sizer-pub,
.grid-item-pub {
  width: 32.1%;
  //transition: all .2s ease-in-out;
  margin-bottom: 20px;
  float: left;
}
@media screen and (max-width: 1400px) {
  .grid-sizer-pub,
  .grid-item-pub {
    width: 48.5%;
  }
}

@media screen and (max-width: 800px) {
  .grid-sizer-pub,
  .grid-item-pub {
    width: 100%;
  }
}
</style>
