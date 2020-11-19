<template>
  <div>
    <div id="Hero"></div>

    <main v-if="instrument" id="main">
      <router-link to="/">
        <div id="ItemBack"></div>
      </router-link>
      <div class="MainTitles" style="margin-top: 60px">
        {{ instrument.title.value }}
      </div>

      <div class="articleIngress" style="margin-top: 20px">
        <p>
          Dolor mollit culpa veniam amet. Irure mollit voluptate deserunt
          commodo in minim exercitation exercitation voluptate minim excepteur
          dolore. Duis labore incididunt ex minim dolore magna.
        </p>
        <p>
          Nulla laborum nostrud elit quis aliqua non adipisicing consectetur
          aliqua veniam. Irure esse enim aliquip non id est magna qui pariatur
          ullamco adipisicing reprehenderit eiusmod. Occaecat nulla consequat
          officia velit deserunt. Magna quis aliquip tempor ipsum exercitation
          nostrud commodo. Amet fugiat culpa est duis qui cillum id.
        </p>
      </div>

      <ShowMore label="Läs mer..." style="padding-top: 30px">
        <div class="articletext">
          <p>
            Anim sunt nisi esse aliquip cupidatat exercitation nisi veniam anim
            laborum in elit. Magna reprehenderit do duis enim pariatur
            reprehenderit proident officia et ex voluptate ullamco. Amet minim
            amet laboris et est ea nulla nostrud fugiat Lorem aute minim magna.
            Qui incididunt ex et ullamco non ut aliquip aliquip commodo in
            veniam ipsum fugiat dolore. Sint qui mollit officia ad do ullamco ea
            aliquip commodo sit eu Lorem.
          </p>
          <p>
            Commodo anim excepteur ea nisi magna consectetur quis. Laborum
            reprehenderit commodo occaecat consequat elit anim excepteur nostrud
            eiusmod. Dolore voluptate ipsum veniam magna sit exercitation nulla
            ullamco consectetur magna.
          </p>
          <p>
            Commodo esse proident ad magna excepteur officia consectetur dolore
            consequat. Proident mollit deserunt incididunt duis laborum deserunt
            deserunt exercitation ad nulla incididunt deserunt anim ex. Ad id et
            nulla quis cillum adipisicing do laborum commodo commodo.
          </p>
        </div>
      </ShowMore>

      <div class="MetaContainerShort">
        Tillverkare: <span>{{ builder }}</span> <br />
        Byggår: <span>{{ buildYear }}</span> <br />
        Plats: <span>{{ instrument.loc_nr.extra }}</span> <br />
        Antal stämmor: <span>{{ instrument.no_stop.value }}</span> <br />
        Snygghet: <span>Fenomenalt stiligt! </span> <br />
        Dimensioner (cm): <span>200 x 60 x 60 </span> <br />
      </div>

      <ShowMore label="Visa all metadata..." style="margin-top: 30px">
        <div id="metaFileEnclosure" class="outset-large">
          <div class="SectionTitles">Metadata</div>

          <div class="MetaContainerLong">
            Typ av mekanik: <span>Komplicerad! </span> <br />
            Dokumentation <span>2020-01-12</span> <br />
            Tillverkare: <span>Per Strand</span> <br />
            Byggår: <span>1815</span> <br />
            Dimensioner (cm): <span>200 x 60 x 60 </span> <br />
            Plats: <span>Alingsås museum </span> <br />
            Antal pipor: <span>8 </span> <br />
            Snygghet: <span>Jättesnygg! </span> <br />
            Typ av mekanik: <span>Komplicerad! </span> <br />
            Dokumentation <span>2020-01-12</span> <br />
            Tillverkare: <span>Per Strand</span> <br />
            Byggår: <span>1815</span> <br />
            Dimensioner (cm): <span>200 x 60 x 60 </span> <br />
            Plats: <span>Alingsås museum </span> <br />
            Antal pipor: <span>8 </span> <br />
            Snygghet: <span>Jättesnygg! </span> <br />
            Typ av mekanik: <span>Komplicerad! </span> <br />
            Dokumentation <span>2020-01-12</span> <br />
          </div>

          <div class="SectionTitles" style="margin-top: 40px">Filer</div>
          <FileGrid :files="[{}, {}]" />
        </div>
      </ShowMore>

      <div class="SectionTitles" style="margin-top: 40px">Valsar</div>

      <div id="valsar" style="margin-top: 20px" class="outset-small">
        <CardGrid
          masonryId="barrels-masonry"
          :cards="
            [1, 2, 3, 4, 5, 6, 7].map((i) => ({
              id: i,
              to: `barrel/${i}`,
              image: `/graphics/thumbnails/001_Aarsta_gen_DSC_1447_thumb.jpg`,
              title: `Vals ${i}`,
            }))
          "
        />
      </div>

      <div class="SectionTitles" style="margin-top: 30px">Speluret</div>

      <div style="margin-top: 20px">
        <MiniGallery
          masonryId="masonry-speluret"
          :items="
            [1, 2, 3, 4, 5, 6, 7].map((i) => ({
              link: `/image/${i}`,
              image: `/graphics/thumbnails/001_Aarsta_gen_DSC_14${
                [39, 41, 42, 44][i % 4]
              }_thumb.jpg`,
            }))
          "
          :collapsed="!instrumentGridExpanded"
        />
      </div>

      <span
        class="ActivateBonusMaterialText"
        style="margin-top: 10px"
        @click="toggleInstrumentGrid"
      >
        {{
          instrumentGridExpanded
            ? "Visa färre bilder..."
            : "Visa alla bilder..."
        }}
      </span>

      <div v-if="locationId">
        <div
          id="location"
          style="margin-top: 50px; margin-bottom: 40px"
          class="outset-large"
        >
          <title>Location</title>

          <div id="MapInterface" style="">
            <Map :locationId="locationId" />
          </div>
        </div>
      </div>
    </main>

    <div id="foot" style="width: 100%"></div>
  </div>
</template>

<script>
import { getInstrument, getRecord } from "@/assets/db";
import ShowMore from "@/components/ShowMore";
import FileGrid from "@/components/FileGrid";
import CardGrid from "@/components/CardGrid";
import MiniGallery from "@/components/MiniGallery";
import Map from "@/components/Map";

export default {
  name: "InstrumentPage",
  props: ["id"],
  components: {
    ShowMore,
    FileGrid,
    CardGrid,
    MiniGallery,
    Map,
  },
  data: function () {
    return {
      instrument: null,
      builder: null,
      // TODO remove temporary fallback values when all data is available in database
      divisionCount: "1",
      stopCount: "2",
      articleExpanded: false,
      metadataExpanded: false,
      instrumentGridExpanded: false,
    };
  },
  computed: {
    buildYear() {
      return (
        this.instrument &&
        [
          parseInt(this.instrument.date1.value),
          parseInt(this.instrument.date2.value),
        ]
          .filter(Boolean)
          .join("–")
      );
    },
    locationId() {
      return this.instrument && parseInt(this.instrument.loc_nr.value);
    },
  },
  created() {
    getInstrument(this.id).then((fields) => {
      this.instrument = fields;
      this.title = fields.title.value;
      document.title = this.title;
      this.divisionCount = fields.no_div.value;
      this.stopCount = fields.no_stop.value;
    });
  },
  methods: {
    toggleArticle() {
      this.articleExpanded = !this.articleExpanded;
    },
    toggleMetadata() {
      this.metadataExpanded = !this.metadataExpanded;
    },
    toggleInstrumentGrid() {
      this.instrumentGridExpanded = !this.instrumentGridExpanded;
    },
  },
  watch: {
    "instrument.build1"(field) {
      if (field.value)
        getRecord("person", field.value).then((person) => {
          this.builder = [person.first_name.value, person.fam_name.value]
            .filter(Boolean)
            .join(" ");
        });
    },
  },
};
</script>

<style scoped>
#Hero {
  padding: 0px 0px 0px 0px;
  overflow: hidden;
  width: 100%;
  height: 70vh;
  background-color: #333333;
  background: url(/interface/heroes/1.jpg);
  background-size: cover;
}

#main {
  /* color: black; */
  width: 80%;
  margin: auto;
  background: rgba(234, 234, 231, 1);
}

#ItemBack {
  cursor: pointer;
  position: absolute;
  left: 30px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: url(/interface/back-black.png);
  background-size: 35px 35px;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2000;
}

.MainTitles {
  font-weight: 100;
  font-style: normal;
  font-size: 60px;
  line-height: 1;
}

.SectionTitles {
  text-align: left;
  font-weight: 100;
  font-style: normal;
  font-size: 35px;
  line-height: 1;
}

.MetaContainerShort {
  width: 780px;
  margin-top: 30px;
  column-count: 2;
  column-gap: 40px;
  font-weight: 100;
  font-size: 32px;
  line-height: 2;
}

.MetaContainerShort span {
  color: #3fa4bd;
}

@media screen and (max-width: 610px) {
  .MetaContainerShort {
    column-count: 1;
    font-size: 24px;
  }
}

.MetaContainerLong {
  margin-top: 10px;
  width: 1350px;
  column-count: 5;
  column-gap: 40px;
  font-size: 18px;
  line-height: 2;
  padding: 10px 0;
}

.MetaContainerLong span {
  color: #4ccded;
}

@media screen and (max-width: 1600px) {
  .MetaContainerLong {
    column-count: 4;
    width: 1015px;
  }
}

@media screen and (max-width: 1200px) {
  .MetaContainerLong {
    column-count: 3;
    width: 750px;
  }
}

@media screen and (max-width: 910px) {
  .MetaContainerLong {
    column-count: 2;
    width: 500px;
  }
}

@media screen and (max-width: 610px) {
  .MetaContainerLong {
    column-count: 1;
    font-size: 22px;
  }
}

#metaFileEnclosure {
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.2),
    0 6px 40px 0 rgba(0, 0, 0, 0.19);
  padding: 30px;
  border-radius: 20px;
  color: white;
  background-color: RGBA(50, 50, 50, 1);
}

/* För Image.html */

.DownloadContainer {
  width: auto;
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

#foot {
  width: 80%;
  color: black;
  font-weight: 300;
}

/* Dessa är för mini-gallerierna */

.grid {
}

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

/* MAp */

#MapInterface {
  border-radius: 20px;
  width: 100%;
  height: 500px;
  background-size: cover;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.2),
    0 6px 40px 0 rgba(0, 0, 0, 0.19);
}

#MapInterface:hover {
  transition: all 0.2s ease-in-out;
  filter: brightness(110%);
  transform: scale(1.02);
}

/** Override Map component style. */
#MapInterface #map {
  height: 100%;
  border-radius: 20px;
  z-index: 0; /* Fixes border-radius in Safari. */
}
</style>
