<template>
  <div>
    <div id="Hero" :style="`background-image: url(${heroImageUrl});`"></div>

    <main v-if="instrument" id="main">
      <router-link to="/">
        <div id="ItemBack"></div>
      </router-link>
      <h1>
        {{ instrument.title.value }}
      </h1>

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

      <div class="clearfix" style="margin-top: 40px">
        <dl
          v-for="(items, i) in chunk(metadata1, 2)"
          :key="i"
          class="MetaContainerShort"
        >
          <div v-for="item in items" :key="item.label">
            <dt>{{ item.label }}:</dt>
            <dd v-if="item.href">
              <a :href="item.href">{{ item.value }}</a>
            </dd>
            <dd v-else>{{ item.value }}</dd>
          </div>
        </dl>
      </div>

      <ShowMore label="Visa all metadata...">
        <div id="metaFileEnclosure" class="outset-large">
          <h2 style="margin-top: 0">Metadata</h2>

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

          <h2>Filer</h2>
          <FileGrid :files="[{}, {}]" />
        </div>
      </ShowMore>

      <h2>Valsar</h2>

      <div
        id="valsar"
        style="margin-top: 20px; margin-bottom: -10px"
        class="outset-small"
      >
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

      <h2>Speluret</h2>

      <div style="margin-top: 20px">
        <MiniGallery
          masonryId="masonry-speluret"
          :items="
            [1, 2, 3, 4, 5, 6, 7].map((i) => ({
              link: {
                name: 'Image',
                params: { automId: this.id, category: 'autom', imageId: i },
              },
              image: `/graphics/thumbnails/001_Aarsta_gen_DSC_14${
                [39, 41, 42, 44][i % 4]
              }_thumb.jpg`,
            }))
          "
        />
      </div>

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
      articleExpanded: false,
      metadataExpanded: false,
    };
  },
  computed: {
    metadata1() {
      return [
        { label: "Tillverkare", value: this.builder },
        { label: "Byggår", value: this.buildYear },
        { label: "Plats", value: this.location, href: "#location" },
        { label: "Plats i byggnaden", value: this.instrument.loc_in_bui.value },
        { label: "Antal stämmor", value: this.instrument.no_stop.value },
        { label: "Signum", value: this.instrument.loc_sign.value },
      ].filter((item) => item.value);
    },
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
    chunk(list, n = 1) {
      const size = Math.ceil(list.length / n);
      return [...Array(n)].map((_, i) => list.slice(i * size, (i + 1) * size));
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

.MetaContainerShort {
  float: left;
  white-space: nowrap;
  width: auto;
  margin: 0px 30px 0 0;
  font-weight: 100;
  font-size: 32px;
  line-height: 1.2;
}

@media screen and (max-width: 910px) {
  .MetaContainerShort {
    font-size: 24px;
  }
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

dt {
  display: inline;
}
dd {
  display: inline;
  margin-left: 0.2em;
  color: #c029bb;
}
dd::after {
  content: "";
  display: block;
  margin-bottom: 0.8em;
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
  color: #fd8ef9;
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
