<template>
  <div id="galleries" v-if="instruments.length > 0">
    <div id="herogallery">
      <!-- masonry container, change masonry paramters here -->
      <div
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
                      :src="instrument.img"
                      :alt="`Bild på ${instrument.aut_title}`"
                    />
                  </div>
                  <div
                    class="flip-card-back"
                    :style="`background-image:url(${instrument.img});`"
                  >
                    <div class="cardBlur">
                      <div class="cardInfo">
                        <div
                          class="cardMiniImage"
                          :style="`background-image:url(${instrument.img});`"
                        ></div>
                        <div class="cardInfoObjectTitle">
                          {{ instrument.aut_title }}
                        </div>
                        <div class="cardInfoObject">
                          {{ instrument.place }}, {{ instrument.year }}
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
import { getInstruments } from "@/assets/db";

export default {
  name: "Gallery",
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
        instrument.img = instrument.thumbnail
          ? `https://data.dh.gu.se/flojtur/${instrument.thumbnail}`
          : `interface/heroes/8.jpg`;

        instrument.place = this.createPlaceString(
          instrument["location.location"],
          instrument.fields.loc_nr.extra.split(",")[0]
        );
        instrument.year = (
          instrument.fields.date1.value || instrument.fields.date2.value
        ).slice(0, 4);
      }
    });
  },
  methods: {
    /**
     * Create a reasonable place string from the non-normalized form in the field "address" in DB
     */
    createPlaceString(address, country) {
      const place = address
        .split(/[\d-]+|, */)
        .filter((x) => x)
        .pop();
      return (place || "Okänd plats").trim() + ", " + country;
    },
  },
};
</script>

<style scoped>
#galleries {
  color: black;
  float: left;
  width: 100%;
  padding: 0px 0 0px 0;
  background: rgba(234, 234, 231, 1);
}
#herogallery {
  float: left;
  width: 100%;
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

@media screen and (max-width: 600px) {
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
  height: 100%;
  transform: rotateY(180deg);
  background-size: cover;
}

.cardBlur {
  height: 100%;
  backdrop-filter: blur(35px);
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
  font-size: 170%;
  width: 100%;
  text-align: center;
  margin-top: 20px;
}

.cardMiniImage {
  width: 200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  border-radius: 50%;
  background-size: cover;
}
</style>
