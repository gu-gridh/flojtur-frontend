<template>
  <router-link tag="div" :to="to" class="grid-item-pub">
    <div
      class="PubBigImage"
      :style="`background: url(${image}); background-size: cover`"
    ></div>
    <div class="PublicationInfoContainer">
      <div class="PublicationTitle">
        {{ title }}
      </div>

      <div class="PubBigMetaContainer">
        <div class="PubBigMeta">
          <slot></slot>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "image", "to"],
};
</script>

<style scoped>
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

.PubBigImage {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 180px;
  width: 40%;
  float: left;
}
</style>
