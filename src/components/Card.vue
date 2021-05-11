<template>
  <router-link tag="div" :to="to" class="grid-item-pub">
    <div class="PubBigImage" :style="`background-image: url(${image});`"></div>
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
  color: white;
  min-height: 140px;
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

.PublicationInfoContainer {
  margin: 20px;
  margin-left: calc(40% + 20px);
}

.PublicationTitle {
  min-height: 60px;
  line-height: 1.2;
  font-weight: 200;
  font-style: normal;
  font-size: 24px;
  overflow: hidden;
}

.PubBigMetaContainer {
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 200;
  font-style: normal;
  font-size: 18px;
}

.PubBigMeta {
  margin-bottom: 6px;
  font-weight: 200;
  font-style: normal;
  font-size: 16px;
  line-height: 1.25;
}

.PubBigImage {
  background-repeat: no-repeat;
  background-position: center 60%;
  background-size: auto 280px;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40%;
}
</style>
