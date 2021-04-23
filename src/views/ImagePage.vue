<template>
  <div>
    <div v-if="photo" id="ItemTopImage">
      <ZoomViewer :filename="photo.filename.value" :cover="false" />
    </div>

    <div v-if="photo" class="container">
      <router-link
        :to="{ name: 'InstrumentPage', params: { id: this.automId } }"
      >
        <div id="ItemBack"></div>
      </router-link>

      <h2 v-if="title" style="margin-top: 70px">{{ title }}</h2>

      <div class="buttons">
        <a
          class="DownloadContainer"
          :href="`https://data.dh.gu.se/flojtur/${photo.filename.value}`"
        >
          <div class="DownloadButton"></div>
          <span class="DownloadLabel">Ladda ner</span>
        </a>
      </div>

      <div id="gallery" style="margin-top: 40px">
        <MiniGallery
          masonryId="masonry-speluret"
          full="1"
          :items="galleryItems"
        />
      </div>
    </div>

    <div id="foot" style="float: left; width: 100%"></div>
  </div>
</template>

<script>
import { getRecord, search } from "@/assets/db";
import ZoomViewer from "@/components/ZoomViewer.vue";
import MiniGallery from "@/components/MiniGallery.vue";

export default {
  name: "ImagePage",
  props: ["automId", "category", "imageId"],
  components: { ZoomViewer, MiniGallery },
  data() {
    return {
      photo: null,
      title: "",
      photos: [],
    };
  },
  computed: {
    galleryItems() {
      return this.photos.map((hit) => ({
        autom: this.automId,
        category: this.category,
        id: hit.id,
        filename: hit.thumbnail,
      }));
    },
  },
  created() {
    this.load();
  },
  methods: {
    async load() {
      this.photo = await getRecord("photo", this.imageId);

      // Create a title from the related record.
      const objectId = this.photo[`${this.category}_nr`].value;
      const object = await getRecord(this.category, objectId);
      if (!object.id.value) return;

      switch (this.category) {
        case "autom":
          this.title = object.aut_title.value;
          break;
        case "barrel":
          this.title = object.bar_title.value;
          break;
        case "stop":
          this.title = object.stop_name.value;

          // Get the division to get the instrument.
          var division = await getRecord("division", object.nr.value);
          var autom = await getRecord("autom", division.inst_nr.value);
          if (autom.aut_title.value) {
            this.title = `${autom.aut_title.value}, ${object.stop_name.value}`;
          }
      }
    },
  },
  watch: {
    category() {
      this.load();
    },
    imageId() {
      this.load();
    },
    async photo() {
      // Find related photos.
      const objectId = this.photo[`${this.category}_nr`].value;
      const query = `equals|${this.category}_nr|${objectId}`;
      const photoResponse = await search("photo", query);
      this.photos = photoResponse.features.filter(
        (feature) => feature.id != this.photo.id.value
      );
    },
    title() {
      document.title = this.title;
    },
  },
};
</script>

<style scoped>
#ItemBack {
  margin-top: -12px;
 
}



.buttons {
  display: flex;
}

.DownloadContainer {
  display: flex;
  margin-top: 40px;
  margin-left: -10px;
  border-radius: 10px;
  padding: 10px;
}

.DownloadContainer:hover {
  background-color: rgb(245, 245, 245);
}

.DownloadButton {
  cursor: pointer;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: #666666;
  background: url(/interface/download.png);
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 12px;
  width: 30px;
  height: 30px;
  position: relative;
  margin-right: 20px;
}

.DownloadLabel {
  margin-top: 5px;
  cursor: pointer;
  color: black;
  font-weight: 300;
  font-size: 25px;
  position: relative;
}

@media screen and (max-width: 800px) {
  .DownloadLabel {
    margin-top: -4px;
    font-size: 32px;
  }
}
</style>
