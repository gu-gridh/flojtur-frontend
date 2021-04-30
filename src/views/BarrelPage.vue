<template>
  <div v-if="barrel">
    <div id="Valstriptyk">
      <router-link
        v-if="photos.title"
        tag="div"
        :to="photos.title.linkRoute"
        class="valsbild title"
        :style="{ backgroundImage: `url(${photos.title.imageUrl})` }"
      ></router-link>
      <router-link
        v-if="photos.side"
        tag="div"
        :to="photos.side.linkRoute"
        class="valsbild side"
        :style="{ backgroundImage: `url(${photos.side.imageUrl})` }"
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
      <div class="buttons">
        <PlayButton />
      </div>
      <MetadataLarge :items="metadata.primary" class="metadata" />
    </div>

    <ShowMore label="Visa all metadata..." :contain="true">
      <div id="metaFileEnclosure" class="outset-large">
        <h2 style="margin-top: 0">Metadata</h2>
        <MetadataSmall :items="metadata.secondary" />
      </div>
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
import { getBarrels, search, formatValues } from "@/assets/db";
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
    };
  },
  computed: {
    metadata() {
      const values = formatValues(this.barrel.fields);
      const mm = (v) => v && `${v} mm`;
      return {
        primary: [
          { label: "Vals nr", value: this.id },
          {
            label: "Instrument",
            value: values.i_nr,
            href: `/spelur/${this.barrel.fields.i_nr.value}`,
          },
          { label: "Inventeringsid", value: values.li_nr },
          { label: "Konstruktionstyp", value: values.const },
          {
            label: "Träelement",
            value: values.piece_info,
          },
          { label: "Antal träelement", value: values.no_piece },
          { label: "Originaltitel", value: values.bar_title },
        ],
        secondary: [
          {
            label: "Övrigt på ovansidan",
            value: values.lab_note,
          },
          {
            label: "Anteckningar motsatt sida",
            value: values.sec_note,
          },
          {
            label: "Valsdiameter",
            value: mm(values.diam),
          },
          {
            label: "Valslängd",
            value: mm(values.length),
          },
          {
            label: "Längd tonstift",
            value: mm(values.mpin_h),
          },
          {
            label: "Längd registreringsstift",
            value: mm(values.rpin_h),
          },
          {
            label: "Position registreringsstift",
            value: this.barrel.fields.rpin_pos.extra,
          },
          {
            label: "Håldimension framsidan",
            value: mm(values.dim_uhole),
          },
          {
            label: "Håldimension baksidan",
            value: mm(values.dim_dhole),
          },
          {
            label: "Monteringsmarkering",
            value: values.mount_mark,
          },
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
          {
            label: "Övrig info",
            value: values.bar_info,
          },
        ],
      };
    },
  },
  async created() {
    await Promise.all([this.loadData(), this.loadPhotos()]);
    Object.keys(this.photos).forEach(
      (type) =>
        (this.photos[
          type
        ].linkRoute.params.automId = this.barrel.fields.i_nr.value)
    );
  },
  methods: {
    async loadData() {
      const allBarrels = await getBarrels();
      this.barrel = allBarrels.find((barrel) => barrel.id === this.id);
      this.automBarrels = allBarrels.filter(
        (barrel) => barrel.fields.i_nr.value === this.barrel.fields.i_nr.value
      );
      this.composerBarrels = allBarrels.filter(
        (barrel) => this.composerName(barrel) === this.composerName(this.barrel)
      );
    },
    async loadPhotos() {
      const result = await search("photo", `equals|barrel_nr|${this.id}`);
      this.photos = {};
      result.features.forEach((photo) => {
        const type = photo["tag.type"];
        this.photos[type] = {
          imageUrl: `https://data.dh.gu.se/flojtur/1000x/${photo.filename}`,
          linkRoute: {
            name: "ImagePage",
            params: {
              // automId gets properly set when the barrel record has been loaded.
              automId: 0,
              category: "barrel",
              imageId: photo.id,
            },
          },
        };
      });
    },
    composerName(barrel) {
      return (
        barrel.music &&
        [barrel.music["comp.first_name"], barrel.music["comp.fam_name"]]
          .filter(Boolean)
          .join(" ")
      );
    },
  },
};
</script>

<style lang="scss" scoped>
#Valstriptyk {
  width: 100%;
  height: 50vh;
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
