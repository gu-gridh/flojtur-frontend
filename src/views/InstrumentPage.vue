<template>
  <div>
    <div id="Hero"></div>

    <main id="main">
      <router-link to="/">
        <div id="ItemBack"></div>
      </router-link>
      <div class="MainTitles" style="margin-top: 60px">{{ title }}</div>

      <div class="MetaArticleShort" style="margin-top: 20px">
        The winter station on Snow Hill Island, inscribed as HSM38, was built in
        Februari 1902 on the East shore of the island about 150 meters from the
        sea. Erected on top of a small hill with a salient curved contour, the
        station functioned as a base for the research field work and in the
        nearby surroundings several small field stations were set up. The
        one-storied building plan is about 6.30x4.10 meters and with a small
        vestibule located by the entrance in the East. Both the roof and the
        outer walls are covered with tarred wallpaper. Two diagonal plank struts
        are supporting the northern facade and recently also steel wires are
        mounted in each corner of the building and fixed to the ground to
        sustain the harsh southern storms. The building contains a kitchen,
        three small dormitories with a bunkbed and a desk, and a centre room
        with a stove and a dining table. The panorama was produced from laser
        scan 002 of the same date.
      </div>

      <ShowMore label="Läs mer..." style="padding-top: 30px">
        <div class="MetaArticleLong">
          The winter station on Snow Hill Island, inscribed as HSM38, was built
          in Februari 1902 on the East shore of the island about 150 meters from
          the sea. Erected on top of a small hill with a salient curved contour,
          the station functioned as a base for the research field work and in
          the nearby surroundings several small field stations were set up. The
          one-storied building plan is about 6.30x4.10 meters and with a small
          vestibule located by the entrance in the East. Both the roof and the
          outer walls are covered with tarred wallpaper. Two diagonal plank
          struts are supporting the northern facade and recently also steel
          wires are mounted in each corner of the building and fixed to the
          ground to sustain the harsh southern storms. The building contains a
          kitchen, three small dormitories with a bunkbed and a desk, and a
          centre room with a stove and a dining table. The panorama was produced
          from laser scan 002 of the same date.
        </div>
      </ShowMore>

      <div class="MetaContainerShort">
        Tillverkare: <span>{{ builder }}</span> <br />
        Byggår: <span>{{ buildYear }}</span> <br />
        Plats: <span>Vinterstationen museum </span> <br />
        Antal stämmor: <span>{{ stopCount }}</span> <br />
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

      <div class="BonusButtonPosition">
        <div
          class="ActivateBonusMaterialText"
          style="margin-top: 10px; margin-left: -10px"
          @click="toggleInstrumentGrid"
        >
          {{
            instrumentGridExpanded
              ? "Visa färre bilder..."
              : "Visa alla bilder..."
          }}
        </div>
      </div>

      <div
        id="location"
        style="margin-top: 50px; margin-bottom: 40px"
        class="outset-large"
      >
        <title>Location</title>

        <div id="MapInterface" style=""></div>
      </div>
    </main>

    <div id="foot" style="width: 100%"></div>
  </div>
</template>

<script>
import { getInstrument } from "@/assets/db";
import ShowMore from "@/components/ShowMore";
import FileGrid from "@/components/FileGrid";
import CardGrid from "@/components/CardGrid";
import MiniGallery from "@/components/MiniGallery";

export default {
  name: "InstrumentPage",
  props: ["id"],
  components: {
    ShowMore,
    FileGrid,
    CardGrid,
    MiniGallery,
  },
  data: function () {
    return {
      // TODO remove temporary fallback values when all data is available in database
      title: "Flöjturet i Vinterstationen",
      builder: "Per Strand",
      buildYear: "1815",
      divisionCount: "1",
      stopCount: "2",
      articleExpanded: false,
      metadataExpanded: false,
      instrumentGridExpanded: false,
    };
  },
  created() {
    getInstrument(this.id).then(({ fields }) => {
      this.title = fields.title.value;
      document.title = this.title;
      const [surname, firstName] = fields.build1.extra.split(",");
      this.builder = firstName + " " + surname;
      if (fields.date1.value.length > 0) {
        this.buildYear = fields.date1.value.slice(0, 4);
      } else if (fields.date2.value.length > 0) {
        this.buildYear = fields.date2.value.slice(0, 4);
      } else {
        this.buildYear = "Unknown";
      }

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
};
</script>

<style>
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

.MetaArticleShort {
  font-size: 24px;
  text-align: left;

  margin-right: auto;
  column-count: 2;
  column-gap: 40px;
  line-height: 1.3;
  font-weight: 100;
}

@media screen and (max-width: 1100px) {
  .MetaArticleShort {
    column-count: 1;
    font-size: 24px;
  }
}

.MetaArticleLong {
  width: 100%;

  font-size: 20px;
  text-align: justify;

  margin-right: auto;
  column-count: 3;
  column-gap: 40px;
  line-height: 1.3;
  font-weight: 300;
}

@media screen and (max-width: 1100px) {
  .MetaArticleLong {
    column-count: 2;
  }
}

@media screen and (max-width: 800px) {
  .MetaArticleLong {
    column-count: 1;
    font-size: 22px;
  }
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

.ActivateBonusMaterialText {
  position: relative;
  font-size: 22px;
  line-height: 0.7;
  color: gray;
  margin-right: auto;
  height: auto;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
}

.ActivateBonusMaterialText:hover {
  background-color: rgb(245, 245, 245);
  color: black;
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

.grid-item {
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  margin-bottom: 15px;
}

.grid-item img {
  display: block;
  width: 100%;
  object-fit: cover;
  transition: all 0.2s ease-in-out;
}

.grid-item:hover {
  display: block;
  transform: scale(1.01);
  filter: brightness(120%);
}

/* MAp */

#MapInterface {
  border-radius: 20px;
  width: 100%;
  height: 500px;
  background: url(/interface/map.jpg);

  background-size: cover;
  )transition: all 0.2s ease-in-out;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.2),
    0 6px 40px 0 rgba(0, 0, 0, 0.19);
}

#MapInterface:hover {
  transition: all 0.2s ease-in-out;
  filter: brightness(110%);
  transform: scale(1.02);
}
</style>
