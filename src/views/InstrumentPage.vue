<template>
  <div v-if="instrument">
    <div id="Hero">
      <ZoomViewer :filename="heroImageUrl" />
    </div>

    <div class="container">
      <router-link to="/" tag="div" id="ItemBack" />

      <h1>
        {{ instrument.aut_title.value }}
      </h1>

      <div class="articleIngress" style="margin-top: 20px">
        <p v-if="instrument.intro.value">{{ instrument.intro.value }}</p>
        <p v-else>
          Dolor mollit culpa veniam amet. Irure mollit voluptate deserunt
          commodo in minim exercitation exercitation voluptate minim excepteur
          dolore. Duis labore incididunt ex minim dolore magna. Nulla laborum
          nostrud elit quis aliqua non adipisicing consectetur aliqua veniam.
          Irure esse enim aliquip non id est magna qui pariatur ullamco
          adipisicing reprehenderit eiusmod. Occaecat nulla consequat officia
          velit deserunt. Magna quis aliquip tempor ipsum exercitation nostrud
          commodo. Amet fugiat culpa est duis qui cillum id.
        </p>
      </div>

      <ShowMore label="Läs mer...">
        <div class="articletext">
          <p v-if="instrument.hist_info.value">
            {{ instrument.hist_info.value }}
          </p>
          <p v-else>
            Anim sunt nisi esse aliquip cupidatat exercitation nisi veniam anim
            laborum in elit. Magna reprehenderit do duis enim pariatur
            reprehenderit proident officia et ex voluptate ullamco. Amet minim
            amet laboris et est ea nulla nostrud fugiat Lorem aute minim magna.
            Qui incididunt ex et ullamco non ut aliquip aliquip commodo in
            veniam ipsum fugiat dolore. Sint qui mollit officia ad do ullamco ea
            aliquip commodo sit eu Lorem. Commodo anim excepteur ea nisi magna
            consectetur quis. Laborum reprehenderit commodo occaecat consequat
            elit anim excepteur nostrud eiusmod. Dolore voluptate ipsum veniam
            magna sit exercitation nulla ullamco consectetur magna. Commodo esse
            proident ad magna excepteur officia consectetur dolore consequat.
            Proident mollit deserunt incididunt duis laborum deserunt deserunt
            exercitation ad nulla incididunt deserunt anim ex. Ad id et nulla
            quis cillum adipisicing do laborum commodo commodo.
          </p>
        </div>
      </ShowMore>

      <MetadataLarge :items="metadata1" class="metadata-large" />
    </div>

    <ShowMore label="Visa all metadata..." :dark="true">
      <h2 style="margin-top: 0">Metadata</h2>

      <MetadataSmall :items="metadata2" />

      <div v-if="files.length">
        <h2>Filer</h2>
        <FileGrid :files="files" />
      </div>
    </ShowMore>

    <div class="container">
      <div v-if="instrumentPhotos.length" style="margin-top: 20px">
        <MiniGallery
          title="Speluret"
          masonryId="masonry-speluret"
          :items="galleryItems(instrumentPhotos, 'autom')"
        />
      </div>
      <div v-if="barrels.length" id="valsar" style="margin-top: 20px">
        <BarrelsCardGrid title="Stiftvalsar" :barrels="barrels" />
      </div>

      <div v-if="stopPhotos.length" style="margin-top: 20px">
        <MiniGallery
          title="Pipor"
          masonryId="masonry-speluret"
          :items="galleryItems(stopPhotos, 'stop')"
        />
      </div>

      <InstrumentMap v-if="history.length" :automs="history" />
    </div>
    <div id="foot" style="width: 100%"></div>
  </div>
</template>

<script>
import {
  getInstrument,
  getRecord,
  getBarrels,
  search,
  getInstrumentHistory,
  imageUrlThumb,
  formatValues,
  searchFull,
  formatDates,
  fetchFileSize,
} from "@/assets/db";
import ShowMore from "@/components/ShowMore.vue";
import MetadataLarge from "@/components/MetadataLarge.vue";
import MetadataSmall from "@/components/MetadataSmall.vue";
import FileGrid from "@/components/FileGrid.vue";
import BarrelsCardGrid from "@/components/BarrelsCardGrid.vue";
import MiniGallery from "@/components/MiniGallery.vue";
import InstrumentMap from "@/components/InstrumentMap.vue";
import ZoomViewer from "@/components/ZoomViewer.vue";

export default {
  name: "InstrumentPage",
  props: ["id"],
  components: {
    ShowMore,
    MetadataLarge,
    MetadataSmall,
    FileGrid,
    BarrelsCardGrid,
    MiniGallery,
    InstrumentMap,
    ZoomViewer,
  },
  data: function () {
    return {
      instrument: null,
      heroImageUrl: null,
      builder: null,
      clockmaker: null,
      casebuilder: null,
      owner: null,
      location: null,
      /** All autom records in the authist chain. */
      history: [],
      barrels: [],
      division: null,
      instrumentPhotos: [],
      stopPhotos: [],
      files: [],
    };
  },
  computed: {
    metadata1() {
      if (!this.instrument) return [];
      return [
        { label: "Typ", value: this.instrument.obj_type.extra },
        { label: "Byggår", value: this.buildYear },
        { label: "Plats", value: this.location, href: "#location" },
        { label: "Byggd av", value: this.builder },
        {
          label: "Signum",
          value: this.instrument.loc_sign.value.replace("-", ""),
        },
        {
          label: "Antal stiftvalsar",
          value: this.barrels && this.barrels.length,
        },
      ].filter((item) => item.value);
    },
    metadata2() {
      if (!this.instrument) return [];
      const values = formatValues(this.instrument);
      const inventoryDate = ((year) =>
        parseInt(year) > 1900 ? year : undefined)(
        this.instrument.date2.value.substring(0, 4)
      );
      return [
        { label: "Urmakare", value: this.clockmaker },
        { label: "Tillverkare av fodral", value: this.casebuilder },
        { label: "Stämmor", value: this.instrument.no_stop.value },
        { label: "Spelverk", value: this.instrument.no_div.value },
        { label: "Plats i byggnaden", value: this.instrument.loc_in_bui.value },
        { label: "Inventerad", value: inventoryDate },
        { label: "Ägare", value: this.owner },
        {
          label: "Valsmekanism",
          value: this.division && this.division.fields.barr_act.extra,
        },
        {
          label: "Spelarmar",
          value: this.division && this.division.fields.no_tones.extra,
        },
        {
          label: "Registreringsarmar",
          value: this.division && this.division.fields.no_reg.extra,
        },
        // TODO Omfång nedre
        // TODO Omfång övre
        // TODO Stämnamn
        { label: "Urverk", value: values.clock_info },
        { label: "Övrig info", value: values.gen_info },
        {
          label: "Mer info",
          value: "Öppna databas",
          href: `https://strand.dh.gu.se/admin/autom/${this.id}`,
        },
      ].filter((item) => item.value);
    },
    buildYear() {
      return (
        this.history.length &&
        formatDates(
          this.history[0].date1.value,
          this.history[0].date2.value,
          this.history[0].date_sign.value
        )
      );
    },
  },
  created() {
    getInstrument(this.id).then((fields) => {
      this.instrument = fields;
      this.title = fields.aut_title.value;
      document.title = this.title;
      this.divisionCount = fields.no_div.value;
      this.stopCount = fields.no_stop.value;
    });
    getInstrumentHistory(this.id)
      .then((automIds) => Promise.all(automIds.map(getInstrument)))
      .then((automs) => (this.history = automs));

    // Find barrels for this instrument.
    getBarrels(this.id).then((barrels) => (this.barrels = barrels));
    search("photo", `equals|autom_nr|${this.id}`).then(({ features }) => {
      this.instrumentPhotos = features;
      const heroImage = features.find((hit) => hit["tag.type"] === "main");
      if (heroImage) this.heroImageUrl = heroImage.thumbnail;
    });
    this.stopPhotos = [];
    searchFull("division", `equals|inst_nr|${this.id}`).then((divisions) =>
      divisions.forEach((division) => {
        this.division = division;
        search("stop", `equals|nr|${division.id}`).then(({ features }) => {
          features.forEach((stop) =>
            search("photo", `equals|stop_nr|${stop.id}`).then(({ features }) =>
              this.stopPhotos.push(...features)
            )
          );
        });
      })
    );

    // Find files.
    // Relationships: autom <- autdoc -> document <- doclink
    search("autdoc", `equals|nr1|${this.id}`).then(async (autdocRes) => {
      const documentIds = autdocRes.features.map(
        (autdoc) => autdoc["document.id"]
      );
      if (!documentIds.length) {
        this.files = [];
        return;
      }

      const [documents, doclinks] = await Promise.all([
        searchFull("document", `in|id|${documentIds}`),
        searchFull("doclink", `in|nr|${documentIds}`),
      ]);
      this.files = doclinks.map((doclink) => {
        const document = documents.find(
          (document) => document.id == doclink["document.id"]
        );
        return {
          title: document.subject,
          url: doclink.fields.laddr.value,
          type: document.fields.docty_info.value,
        };
      });
      this.files.forEach(async (file) => {
        this.$set(file, "size", await fetchFileSize(file.url));
      });
    });
  },
  methods: {
    imageUrlThumb,
    chunk(list, n = 1) {
      const size = Math.ceil(list.length / n);
      return [...Array(n)].map((_, i) => list.slice(i * size, (i + 1) * size));
    },
    galleryItems(photos, category) {
      return photos.map((hit) => ({
        autom: this.id,
        category: category,
        id: hit.id,
        filename: hit.thumbnail,
      }));
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
    "instrument.build2"(field) {
      if (field.value)
        getRecord("person", field.value).then((person) => {
          this.clockmaker = [person.first_name.value, person.fam_name.value]
            .filter(Boolean)
            .join(" ");
        });
    },
    "instrument.build3"(field) {
      if (field.value)
        getRecord("person", field.value).then((person) => {
          this.casebuilder = [person.first_name.value, person.fam_name.value]
            .filter(Boolean)
            .join(" ");
        });
    },
    "instrument.owner"(field) {
      if (field.value)
        getRecord("person", field.value).then((person) => {
          this.owner = [person.first_name.value, person.fam_name.value]
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

<style lang="scss" scoped>
#Hero {
  margin-bottom: 40px;
  overflow: hidden;
  width: 100%;
  height: 70vh;
  background-color: #333333;
  background-size: cover;
  background-position: center 25%;
}

.metadata-large {
  font-size: 32px;
}

@media screen and (max-width: 910px) {
  .metadata-large {
    font-size: 24px;
  }
}
</style>
