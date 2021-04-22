<template>
  <div
    class="file-grid"
    style="color: white; margin-top: 20px; margin-bottom: 10px"
  >
    <div>
      <a v-for="(file, i) in files" :key="i" href="">
        <div class="grid-item-fil">
          <div
            class="FilImage"
            style="
              background: url(/graphics/fileInvert.png);
              background-size: cover;
            "
          ></div>
          <div class="FilInfoContainer">
            <div class="FilTitle">Typ av information</div>

            <div class="FilMetaContainer">
              <div class="PubBigMeta">Filtyp</div>
              <div class="PubBigMeta">Storlek</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileGrid",
  props: { files: Array },
};
</script>

<style scoped>
.file-grid {
  margin-left: -30px;
}

.file-grid:after {
  content: "";
  display: block;
  clear: both;
}

.grid-item-fil {
  float: left;
  color: white;
  height: 100px;
  margin-left: 30px;
  margin-bottom: 20px;
  border-radius: 10px;
  border-style: dotted;
  border-width: 0.5px;
  border-color: white;
  padding: 10px 20px 10px 20px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}

.grid-item-fil:hover {
  display: block;
  filter: brightness(120%);
  transform: scale(1.04);
  background-color: RGBA(50, 50, 50, 1);
}

.FilInfoContainer {
  width: 160px;
  float: left;
  margin-top: 10px;
}

.FilTitle {
  float: left;
  height: 30px;
  font-weight: 200;
  font-style: normal;
  width: 90%;
  overflow: hidden;
}

.FilMetaContainer {
  cursor: pointer;
  width: 100%;
  margin-left: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  float: left;
  font-weight: 200;
  font-style: normal;
  font-size: 18px;
}

.PubBigMeta {
  width: 90%;
  margin-left: 0px;
  margin-bottom: 4px;
  float: left;
  font-weight: 200;
  font-style: normal;
  font-size: 16px;
}

.FilImage {
  background-repeat: no-repeat;
  background-position: center;
  height: 95px;
  width: 95px;
  background-position: 100px;
  margin-top: 5px;
  float: left;
}
</style>
