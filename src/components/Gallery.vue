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
            v-for="instrument in tmpInstruments"
            :key="instrument.id"
          >
            <div v-masonry-tile class="grid-item" style>
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      :src="instrument.img"
                      :alt="`Bild på ${instrument.title}`"
                    />
                  </div>
                  <div class="flip-card-back" :style="instrument.backStyle">
                    <div class="cardInfo">
                      <div
                        class="cardMiniImage"
                        :style="instrument.miniStyle"
                      ></div>
                      <div class="cardInfoObjectTitle">
                        {{ instrument.title }}
                      </div>
                      <div class="cardInfoObject">
                        {{ instrument.place }}, {{ instrument.year }}
                      </div>
                      <div class="cardInfoObject">Besök</div>
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
    getInstruments().then(({ data }) => {
      this.instruments = data["features"];
      // loop through the instruments and augument the objects with additional data
      for (let instrument of this.instruments) {
        instrument.img = `interface/heroes/${instrument.id}.jpg`;
        instrument.backStyle = `background-image:url(interface/heroes/${instrument.id}b.jpg); background-size:cover;`;
        instrument.miniStyle = `background-image:url(interface/heroes/${instrument.id}.jpg); background-size:cover;`;

        if (!instrument.title) {
          instrument.title = "Namn";
        }

        instrument.place = this.createPlaceString(
          instrument["location.address"],
          instrument["location.country"]
        );
        instrument.year = (instrument.date1 || instrument.date2).slice(0, 4);
      }
    });
  },
  computed: {
    tmpInstruments() {
      // since we only have 14 images right now, filter out the rest from the DB
      // TODO when images have been connected in DB, remove this and replace usage
      // of `tmpInstruments` with just `instruments`
      return this.instruments.filter((instrument) => instrument.id < 15);
    },
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
}
</style>
