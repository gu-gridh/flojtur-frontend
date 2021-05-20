<template>
  <div id="galleries">
    <div id="herogallery">
      <div v-if="!instruments.length">
        <Spinner />
      </div>
      <!-- masonry container, change masonry paramters here -->
      <div
        v-else
        v-masonry="containerId"
        class="masonContainer"
        item-selector=".grid-item"
        column-width=".grid-sizer"
        gutter="0"
      >
        <div class="grid">
          <div class="grid-sizer"></div>
          <router-link
            :to="{ name: 'InstrumentPage', params: { id: instrument.id } }"
            v-for="instrument in instruments"
            :key="instrument.id"
          >
            <div v-masonry-tile class="grid-item" style>
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      :src="imageUrl(instrument.thumbnail || '')"
                      :alt="`Bild på ${instrument.aut_title}`"
                    />
                  </div>
                  <div
                    class="flip-card-back"
                    :style="`background-image:url(${imageUrl(
                      instrument.thumbnail || ''
                    )});`"
                  >
                    <div class="cardBlur" :class="[`autom-${instrument.id}`]">
                      <div class="cardInfo">
                        <div
                          class="cardMiniImage"
                          :style="`background-image:url(${imageUrl(
                            instrument.thumbnail || ''
                          )});`"
                        ></div>
                        <div class="cardInfoObjectTitle">
                          {{ formatTitle(instrument.aut_title) }}
                        </div>
                        <div class="cardInfoObject">
                          {{ instrument.place }}
                        </div>
                        <div class="cardInfoObject secondary">
                          {{ instrument.year }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDates, getInstruments, imageUrlMedium } from "@/assets/db";
import Spinner from "./Spinner.vue";

export default {
  name: "Gallery",
  components: { Spinner },
  data: function () {
    return {
      containerId: "masonryContainer",
      instruments: [],
    };
  },
  created: function () {
    // get the instruments from database
    getInstruments().then((instruments) => {
      this.instruments = instruments;
      // loop through the instruments and augument the objects with additional data
      for (let instrument of this.instruments) {
        instrument.place = this.createPlaceString(
          instrument["location.location"]
        );

        instrument.year =
          instrument._first &&
          formatDates(
            instrument._first.fields.date1.value,
            instrument._first.fields.date2.value,
            instrument._first.fields.date_sign.value,
            true
          );
      }
    });
  },
  methods: {
    imageUrl: imageUrlMedium,
    formatTitle(title) {
      return title.trim().replace(/(\S)(uret)$/, "$1\u00ad$2");
    },
    /**
     * Create a reasonable place string from the non-normalized form in the field "address" in DB
     */
    createPlaceString(address) {
      const place = address
        .split(/[\d-]+|, */)
        .filter((x) => x)
        .pop();
      return (place || "Okänd plats").trim();
    },
  },
};
</script>

<style scoped>
#galleries {
  color: black;
}
#herogallery {
  hyphens: auto;
}
.masonContainer {
  width: 100%;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
}
.grid {
}

.grid:after {
  content: "";
  display: block;
  clear: both;
}

.grid-sizer,
.grid-item {
  width: 20%;
  transition: all 0.2s ease-in-out;
  background-color: transparent;
}

@media screen and (max-width: 1400px) {
  .grid-sizer,
  .grid-item {
    width: 25%;
  }
}

@media screen and (max-width: 1100px) {
  .grid-sizer,
  .grid-item {
    width: 33.3%;
  }
}

@media screen and (max-width: 700px) {
  /* fluid 5 columns */
  .grid-sizer,
  .grid-item {
    width: 50%;
  }
}

/* ---- .grid-item ---- */

.grid-item {
  float: left;
  transition: all 0.2s ease-in-out;
}

.grid-item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.2s ease-in-out;
}

.grid-item:hover {
}

.flip-card {
  background-color: transparent;
  width: 100%;

  position: relative;

  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  padding-top: 150%;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  margin-top: -150%;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  color: white;
  transform: rotateY(180deg);
  background-size: cover;
}

.cardBlur {
  height: 100%;
  backdrop-filter: blur(35px);
}
.cardBlur.autom-3 {
  /* Masreliezuret blueprint is brighter and has lower contrast. */
  backdrop-filter: blur(10px) saturate(150%) brightness(80%);
}

.cardInfo {
  font-size: 150%;
  -webkit-text-size-adjust: 150%;
  margin: 0;
  width: 100%;
  text-align: center;
  line-height: 1;
  position: absolute;
  top: 45%;
  -ms-transform: translateY(-45%);
  transform: translateY(-45%);
}

.cardInfoObject {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}

.cardInfoObjectTitle {
  font-size: 150%;
  width: 80%;
  min-width: 228px; /* Max two lines of text. */
  margin: auto;
  text-align: center;
  margin-top: 20px;
}

.cardMiniImage {
  width: 200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  background-size: cover;
}

@media screen and (max-width: 800px) {
  .cardMiniImage {
    width: 150px;
    height: 150px;
  }
  .cardInfoObjectTitle {
    font-size: 130%;
  }
  .cardInfoObject.secondary {
    display: none;
  }
}
</style>
