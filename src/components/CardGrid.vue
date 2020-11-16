<template>
  <div
    v-masonry="masonryId"
    item-selector=".grid-item-pub"
    :percent-position="true"
    column-width=".grid-sizer-pub"
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
      Kompositör<br />Annan info
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
