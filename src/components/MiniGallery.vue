<template>
  <div
    v-masonry="masonryId"
    item-selector=".grid-item"
    :percent-position="true"
    column-width=".grid-sizer"
    :gutter="15"
    transition-duration="0.2s"
  >
    <div class="grid-sizer"></div>
    <router-link v-for="item in items" :key="item.link" :to="item.link">
      <div class="grid-item">
        <img :src="item.image" />
      </div>
    </router-link>
  </div>
</template>

<script>
import imagesLoaded from "imagesloaded";

export default {
  name: "MiniGallery",
  props: ["masonryId", "items"],
  mounted() {
    imagesLoaded(`#${this.masonryId}`, () =>
      setTimeout(() => this.$redrawVueMasonry(this.masonryId), 100)
    );
  },
};
</script>

<style scoped>
.grid-sizer,
.grid-item {
  width: 13.1%;
  transition: all 0.2s ease-in-out;
  background-color: black;
  margin-top: 0px;
}

@media screen and (max-width: 1500px) {
  .grid-sizer,
  .grid-item {
    width: 18.5%;
  }
}

@media screen and (max-width: 1200px) {
  .grid-sizer,
  .grid-item {
    width: 23.5%;
  }
}

@media screen and (max-width: 900px) {
  .grid-sizer,
  .grid-item {
    width: 31%;
  }
}

@media screen and (max-width: 610px) {
  .grid-sizer,
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
  transition: all 0.2s ease-in-out;
}

.grid-item:hover {
  display: block;
  transform: scale(1.01);
  filter: brightness(120%);
}
</style>
