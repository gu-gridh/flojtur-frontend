<template>
  <div>
    <div id="Hero" :style="`background-image: url(${heroImageUrl});`"></div>

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

      <ShowMore label="Läs mer...">
        <div class="articletext" style="margin-top: 30px">
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

      <dl class="MetaContainerShort">
        <dt>Tillverkare:</dt>
        <dd>{{ builder }}</dd>
        <dt>Byggår:</dt>
        <dd>{{ buildYear }}</dd>
        <dt>Plats:</dt>
        <dd>
          <a href="#location">{{ location }}</a>
        </dd>
        <template v-if="instrument.loc_in_bui.value">
          <dt>Plats i byggnaden:</dt>
          <dd>{{ instrument.loc_in_bui.value }}</dd>
        </template>
        <dt>Antal stämmor:</dt>
        <dd>{{ instrument.no_stop.value }}</dd>
        <template
          v-if="instrument.loc_sign.value && instrument.loc_sign.value !== '-'"
        >
          <dt>Signum:</dt>
          <dd>{{ instrument.loc_sign.value }}</dd>
        </template>
      </dl>

      <ShowMore label="Visa all metadata...">
        <div id="metaFileEnclosure" class="outset-large">
          <div class="SectionTitles">Metadata</div>

          <dl class="MetaContainerLong">
            <dt>Typ av mekanik:</dt>
            <dd>Komplicerad!</dd>
            <dt>Dokumentation</dt>
            <dd>2020-01-12</dd>
            <dt>Tillverkare:</dt>
            <dd>Per Strand</dd>
            <dt>Byggår:</dt>
            <dd>1815</dd>
            <dt>Dimensioner (cm):</dt>
            <dd>200 x 60 x 60</dd>
            <dt>Plats:</dt>
            <dd>Alingsås museum</dd>
            <dt>Antal pipor:</dt>
            <dd>8</dd>
            <dt>Snygghet:</dt>
            <dd>Jättesnygg!</dd>
            <dt>Typ av mekanik:</dt>
            <dd>Komplicerad!</dd>
            <dt>Dokumentation</dt>
            <dd>2020-01-12</dd>
            <dt>Tillverkare:</dt>
            <dd>Per Strand</dd>
            <dt>Byggår:</dt>
            <dd>1815</dd>
            <dt>Dimensioner (cm):</dt>
            <dd>200 x 60 x 60</dd>
            <dt>Plats:</dt>
            <dd>Alingsås museum</dd>
            <dt>Antal pipor:</dt>
            <dd>8</dd>
            <dt>Snygghet:</dt>
            <dd>Jättesnygg!</dd>
            <dt>Typ av mekanik:</dt>
            <dd>Komplicerad!</dd>
            <dt>Dokumentation</dt>
            <dd>2020-01-12</dd>
          </dl>

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
import { getInstrument, getRecord, search } from "@/assets/db";
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
      heroImageUrl: "/interface/heroes/1.jpg",
      builder: null,
      location: null,
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
      if (!this.instrument) return;
      // Parse year.
      const date1 = parseInt(this.instrument.date1.value);
      const date2 = parseInt(this.instrument.date2.value);
      // Fixed date: has date2 and no date_sign
      if (!this.instrument.date_sign.value) return date2;
      // After some date.
      if (!date2) return `efter ${date1}`;
      // Before some date.
      if (!date1) return `före ${date2}`;
      // Between two dates.
      return `mellan ${date1} och ${date2}`;
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
    search("photoautom", `equals|autom|${this.id}`).then(({ features }) => {
      const heroImage = features.find((hit) => hit["tag.type"] === "main");
      if (heroImage)
        this.heroImageUrl = `https://data.dh.gu.se/flojtur/${heroImage.thumbnail}`;
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
    "instrument.loc_nr"(field) {
      if (field.value)
        getRecord("location", field.value).then((location) => {
          this.location = location.build_name.value;
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
  background-size: cover;
  background-position: center 25%;
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

/* TODO Use h1, h2 etc. */
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
  margin: 40px 0 -20px;
  column-count: 2;
  column-gap: 40px;
  font-weight: 100;
  font-size: 32px;
  line-height: 1.2;
}

dt {
  display: inline;
}
dd {
  display: inline;
  margin-left: 0.2em;
  color: #666;
}
dd::after {
  content: "";
  display: block;
  margin-bottom: 0.8em;
}

@media screen and (max-width: 910px) {
  .MetaContainerShort {
    column-count: 1;
    font-size: 24px;
  }
}

/* TODO Set this font size etc. as body default. */
.MetaContainerLong {
  margin-top: 10px;
  column-count: 5;
  column-gap: 40px;
  font-size: 18px;
  line-height: 1.2;
  padding: 10px 0;
}

.MetaContainerLong dd {
  color: #bbb;
}

@media screen and (max-width: 1600px) {
  .MetaContainerLong {
    column-count: 4;
  }
}

@media screen and (max-width: 1200px) {
  .MetaContainerLong {
    column-count: 3;
  }
}

@media screen and (max-width: 910px) {
  .MetaContainerLong {
    column-count: 2;
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

/* TODO Create component for file button. */
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

/* Map */

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
