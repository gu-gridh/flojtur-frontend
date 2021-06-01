<template>
  <div v-if="barrel">
    <div id="Valstriptyk" class="clearfix">
      <router-link
        v-if="photos.side"
        tag="div"
        :to="photos.side.linkRoute"
        class="valsbild side"
        :style="{ backgroundImage: `url(${photos.side.imageUrl})` }"
      ></router-link>
      <router-link
        v-if="photos.title"
        tag="div"
        :to="photos.title.linkRoute"
        class="valsbild title"
        :style="{ backgroundImage: `url(${photos.title.imageUrl})` }"
      ></router-link>
      <router-link
        v-if="photos.back"
        tag="div"
        :to="photos.back.linkRoute"
        class="valsbild back"
        :style="{ backgroundImage: `url(${photos.back.imageUrl})` }"
      ></router-link>
    </div>

    <div class="container">
      <div id="ItemBack" @click="$router.back()"></div>
      <h1 class="MainTitles">{{ barrel.bar_title }}</h1>
      <div v-if="audioFiles.length" class="buttons">
        <PlayButton
          v-for="file in audioFiles"
          :key="file.url"
          :url="file.url"
        />
      </div>
      <MetadataLarge :items="metadata.primary" class="metadata" />
    </div>

    <ShowMore label="Visa all metadata..." :dark="true">
      <h2 style="margin-top: 0">Metadata</h2>
      <MetadataSmall :items="metadata.secondary" />
    </ShowMore>

    <div class="container">
      <BarrelsCardGrid
        title="Stiftvalsar i samma samling"
        :barrels="automBarrels"
      />
      <BarrelsCardGrid
        v-if="composerName(barrel)"
        :title="`Mer av ${composerName(barrel)}`"
        :barrels="composerBarrels"
      />
    </div>
  </div>
</template>

<script>
import { getBarrels, search, formatValues, imageUrlLarge } from "@/assets/db";
import PlayButton from "@/components/PlayButton.vue";
import MetadataLarge from "@/components/MetadataLarge.vue";
import MetadataSmall from "@/components/MetadataSmall.vue";
import ShowMore from "@/components/ShowMore.vue";
import BarrelsCardGrid from "@/components/BarrelsCardGrid.vue";

export default {
  name: "BarrelPage",
  props: {
    id: [String, Number],
  },
  components: {
    PlayButton,
    MetadataLarge,
    MetadataSmall,
    ShowMore,
    BarrelsCardGrid,
  },
  data() {
    return {
      barrel: null,
      photos: {},
      automBarrels: [],
      composerBarrels: [],
      audioFiles: [],
    };
  },
  computed: {
    metadata() {
      const values = formatValues(this.barrel.fields);

      /** Format a numeric value for display. */
      const fnum = (v) =>
        /^[0-9-x,\s]+$/.test(v) ? v.replace("x", " × ").replace("-", "–") : v;
      /** Format a millimeter measure. */
      const mm = (v) => v && `${fnum(v)} mm`;

      return {
        primary: [
          { label: "Vals nr", value: this.id },
          {
            label: "Instrument",
            value: values.i_nr,
            href: `/spelur/${this.barrel.fields.i_nr.value}`,
          },
          { label: "Konstruktionstyp", value: values.const },
          { label: "Träelement", value: values.piece_info },
          { label: "Antal träelement", value: values.no_piece },
          {
            label: "Originaltitel",
            value: ((a, b) => (b ? `${a} "${b}"` : a))(
              this.barrel["music.title"],
              this.barrel["music.sub_title"]
            ),
          },
        ],
        secondary: [
          { label: "Övrigt på ovansidan", value: values.lab_note },
          { label: "Anteckningar motsatt sida", value: values.sec_note },
          { label: "Valsdiameter", value: mm(values.diam) },
          { label: "Valslängd", value: mm(values.length) },
          { label: "Längd tonstift", value: mm(values.mpin_h) },
          { label: "Längd registreringsstift", value: mm(values.rpin_h) },
          { label: "Position registreringsstift", value: values.rpin_pos },
          { label: "Håldimension framsidan", value: mm(values.dim_uhole) },
          { label: "Håldimension baksidan", value: mm(values.dim_dhole) },
          { label: "Monteringsmarkering", value: values.mount_mark },
          {
            label: "Ytbehandling",
            value:
              (this.barrel.fields.surf_treat.extra === "oklar"
                ? "Oklar. "
                : "") + this.barrel.fields.strea_info.value,
          },
          {
            label: "Rutmönster",
            value:
              this.barrel.fields.grid_info.value ||
              (this.barrel.fields.grid.value === "Yes" ? "Ja" : null),
          },
          {
            label: "Stämpel",
            value:
              this.barrel.fields.stamp_desc.extra +
                (this.barrel.fields.stamp_info.value
                  ? ` (${this.barrel.fields.stamp_info.value})`
                  : "") ||
              (this.barrel.fields.stamp.value === "Yes" ? "Ja" : null),
          },
          {
            label: "Rillor",
            value:
              this.barrel.fields.groove_inf.value ||
              (this.barrel.fields.groove.value === "Yes" ? "Ja" : null),
          },
          { label: "Övrig info", value: values.bar_info },
        ],
      };
    },
  },
  created() {
    // Load barrel data and photo records.
    this.load();

    // Find audio.
    this.loadAudio();
  },
  methods: {
    async load() {
      const [allBarrels, photoRes] = await Promise.all([
        getBarrels(),
        search("photo", `equals|barrel_nr|${this.id}`),
      ]);

      this.barrel = allBarrels.find((barrel) => barrel.id === this.id);
      this.automBarrels = allBarrels.filter(
        (barrel) => barrel.i_nr === this.barrel.i_nr
      );
      this.composerBarrels = allBarrels.filter(
        (barrel) => this.composerName(barrel) === this.composerName(this.barrel)
      );

      this.photos = {};
      photoRes.features.forEach((photo) => {
        const type = photo["tag.type"];
        this.photos[type] = {
          imageUrl: imageUrlLarge(photo.filename),
          linkRoute: {
            name: "ImagePage",
            params: {
              // automId gets properly set when the barrel record has been loaded.
              automId: this.barrel.fields.i_nr.value,
              category: "barrel",
              imageId: photo.id,
            },
          },
        };
      });
    },
    async loadAudio() {
      const audioRes = await search("audio", `equals|barrel|${this.id}`);
      this.audioFiles = audioRes.features.map((audio) => ({
        type: audio.type,
        url: `https://data.dh.gu.se/flojtur/${audio.filename}`,
      }));
    },
    composerName(barrel) {
      return [barrel["comp.first_name"], barrel["comp.fam_name"]]
        .filter(Boolean)
        .join(" ");
    },
  },
};
</script>

<style lang="scss" scoped>
#Valstriptyk {
  width: 100%;
  margin-bottom: 40px;
}

.valsbild {
  float: left;
  height: 50vh;
  width: 33.33%;
  cursor: pointer;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  // Place side view in the middle.
  &.side {
    float: none;
    margin-left: 33.33%;
    margin-bottom: -50vh;
  }
  &.back {
    float: right;
  }

  @media screen and (max-width: 600px) {
    // On mobile, the side photo occupies full top.
    &.side {
      margin: 0;
      width: 100%;
      height: 30vh;
      background-size: 120%;
    }
    &.title,
    &.back {
      background-position: 50% 65%;
      background-size: 300%;
      width: 50%;
      height: 50vw;
    }
  }

  @media screen and (min-width: 1000px) {
    &.title,
    &.back {
      background-position: 50% 65%;
      background-size: 300%;
    }
  }
}
.buttons {
  display: flex;
}
.metadata {
  font-size: 24px;
}

#metaFileEnclosure {
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.2),
    0 6px 40px 0 rgba(0, 0, 0, 0.19);
  padding: 30px;
  border-radius: 20px;
  color: white;
  background-color: RGBA(50, 50, 50, 1);
}
</style>   
