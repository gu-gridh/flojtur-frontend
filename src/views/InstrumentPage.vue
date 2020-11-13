<template>
  <div>
    <div id="Hero"></div>

    <div id="galleries">
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

      <div class="BonusButtonPosition">
        <div
          v-show="!articleExpanded"
          class="ActivateBonusMaterialText"
          id="collapsibleArticle"
          style="margin-left: -10px"
          @click="toggleArticle"
        >
          Läs mer...
        </div>
      </div>

      <div
        v-show="articleExpanded"
        id="LongArticle"
        style="display: none; width: 100%"
      >
        <div id="articleEnclosure" style="">
          <div
            class="deactivateBonusMaterial"
            id="CloseLongArticle"
            style="margin-left: -77px; margin-top: 30px"
            @click="toggleArticle"
          ></div>

          <div class="MetaArticleLong" style="margin-top: 30px">
            The winter station on Snow Hill Island, inscribed as HSM38, was
            built in Februari 1902 on the East shore of the island about 150
            meters from the sea. Erected on top of a small hill with a salient
            curved contour, the station functioned as a base for the research
            field work and in the nearby surroundings several small field
            stations were set up. The one-storied building plan is about
            6.30x4.10 meters and with a small vestibule located by the entrance
            in the East. Both the roof and the outer walls are covered with
            tarred wallpaper. Two diagonal plank struts are supporting the
            northern facade and recently also steel wires are mounted in each
            corner of the building and fixed to the ground to sustain the harsh
            southern storms. The building contains a kitchen, three small
            dormitories with a bunkbed and a desk, and a centre room with a
            stove and a dining table. The panorama was produced from laser scan
            002 of the same date.
          </div>
        </div>
      </div>

      <div class="MetaContainerShort">
        Tillverkare: <span>{{ builder }}</span> <br />
        Byggår: <span>{{ buildYear }}</span> <br />
        Plats: <span>Vinterstationen museum </span> <br />
        Antal stämmor: <span>{{ stopCount }}</span> <br />
        Snygghet: <span>Fenomenalt stiligt! </span> <br />
        Dimensioner (cm): <span>200 x 60 x 60 </span> <br />
      </div>
      <div class="BonusButtonPosition">
        <div
          v-if="!metadataExpanded"
          class="ActivateBonusMaterialText"
          id="collapsibleMeta"
          style="margin-left: -10px"
          @click="toggleMetadata"
        >
          Visa all metadata...
        </div>
      </div>
      <div v-show="metadataExpanded" id="LongMeta" style="width: 100%">
        <div id="metaFileEnclosure" style="">
          <div
            class="deactivateBonusMaterial"
            id="CloseLongMeta"
            style="margin-left: -60px; margin-top: 0px"
            @click="toggleMetadata"
          ></div>
          <div
            class="SectionTitles"
            style="margin-top: 30px; margin-left: 30px"
          >
            Metadata
          </div>

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

          <div
            class="SectionTitles"
            style="margin-top: 40px; margin-left: 30px"
          >
            Filer
          </div>

          <div
            id="filer"
            style="
              color: white;
              margin-left: 30px;
              margin-top: 20px;
              margin-bottom: 40px;
              float: left;
            "
          >
            <div style="margin-left: -30px; color: white">
              <a href="">
                <div class="grid-item-fil">
                  <div
                    class="FilImage"
                    style="
                      background: url(/graphics/thumbnails/fileInvert.png);
                      background-size: cover;
                    "
                  ></div>
                  <div class="FilInfoContainer">
                    <div class="FilTitle">Typ av information</div>

                    <div class="FilMetaContainer">
                      <div class="PubBigMeta">Filtyp</div>
                      <div class="PubBigMeta">Storlek</div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="">
                <div class="grid-item-fil">
                  <div
                    class="FilImage"
                    style="
                      background: url(/graphics/thumbnails/fileInvert.png);
                      background-size: cover;
                    "
                  ></div>
                  <div class="FilInfoContainer">
                    <div class="FilTitle">Typ av information</div>

                    <div class="FilMetaContainer">
                      <div class="PubBigMeta">Filtyp</div>
                      <div class="PubBigMeta">Storlek</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <!-- <script>
            $("#filer").load("modules/filer.html");
          </script> -->
        </div>
      </div>

      <div class="SectionTitles" style="margin-top: 40px">Valsar</div>

      <div
        id="valsar"
        style="margin-top: 20px; float: left; margin-left: 9.5%; width: 81%"
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

      <div class="SectionTitles" style="margin-top: 30px">Speluret</div>

      <div style="margin-top: 20px; float: left; margin-left: 10%; width: 80%">
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
        />
      </div>

      <div class="BonusButtonPosition">
        <div
          class="ActivateBonusMaterialText"
          id="ExpandSpeluret"
          style="margin-top: 10px; margin-left: -10px"
        >
          Visa alla bilder...
        </div>
      </div>

      <div
        id="location"
        style="
          margin-top: 20px;
          margin-bottom: 40px;
          float: left;
          margin-left: 9%;
          width: 82%;
        "
      >
        <title>Location</title>

        <div id="MapInterface" style=""></div>
      </div>

      <div class="SectionTitle" style="margin-top: 40px">Liknande</div>

      <div
        id="gallery"
        style="
          margin-top: 20px;
          margin-bottom: 40px;
          float: left;
          margin-left: 10%;
          width: 80%;
        "
      ></div>
    </div>

    <div id="foot" style="float: left; width: 100%"></div>
  </div>
</template>

<script>
import { getInstrument } from "@/assets/db";
import CardGrid from "@/components/CardGrid";
import MiniGallery from "@/components/MiniGallery";

export default {
  name: "InstrumentPage",
  props: ["id"],
  components: {
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
#ItemBack {
  cursor: pointer;
  position: absolute;
  margin-top: 60px;
  margin-left: 30px;
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
  width: 80%;
  margin-left: 10%;
  float: left;
  text-align: left;
  font-weight: 100;
  font-style: normal;
  font-size: 60px;
  line-height: 1;
}

#galleries {
  color: black;
  float: left;
  width: 100%;
  padding: 0px 0 0px 0;
  background: rgba(234, 234, 231, 1);
}

.BonusButtonPosition {
  width: 80%;
  float: left;
  margin-left: 10%;
}

.SectionTitles {
  width: 80%;
  margin-left: 10%;
  float: left;

  text-align: left;

  font-weight: 100;
  font-style: normal;
  font-size: 35px;
  line-height: 1;
}

.MetaArticleShort {
  width: 80%;
  float: left;
  font-size: 24px;
  text-align: left;
  margin-left: 10%;
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
  margin-left: 10%;
  column-count: 2;
  column-gap: 40px;
  float: left;
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
  float: left;
  font-size: 18px;
  line-height: 2;
  padding: 10px 30px 10px 30px;
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
  margin-top: 20px;
  float: left;
  width: 82%;
  margin-left: 9%;
  border-radius: 20px;
  color: white;
  background-color: RGBA(50, 50, 50, 1);
}

#articleEnclosure {
  margin-top: 10px;
  float: left;
  width: 80%;
  margin-left: 10%;
}

.ActivateBonusMaterial {
  position: relative;

  font-size: 47px;
  line-height: 0.7;

  width: 40px;
  height: 40px;

  vertical-align: 90%;
  text-align: center;

  float: left;
  border-radius: 10px;

  margin-top: 20px;

  cursor: pointer;
}

.deactivateBonusMaterial {
  position: relative;

  font-size: 47px;
  line-height: 0.7;

  background: url(/interface/close.png);

  background-size: cover;

  width: 40px;
  height: 40px;

  float: left;
  border-radius: 10px;

  cursor: pointer;
}

.ActivateBonusMaterial:hover {
  background-color: rgb(245, 245, 245);
}

.ActivateBonusMaterialText {
  position: relative;

  font-size: 22px;
  line-height: 0.7;
  color: gray;

  margin-left: auto;
  margin-right: auto;
  height: auto;

  float: left;

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
  float: left;
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
  float: left;
}

.DownloadLabel {
  margin-top: 5px;
  cursor: pointer;
  color: black;
  font-weight: 300;
  font-size: 25px;
  position: relative;
  float: left;
}

@media screen and (max-width: 800px) {
  .DownloadLabel {
    margin-top: -4px;
    font-size: 32px;
  }
}

#foot {
  width: 80%;
  margin-left: 10%;
  color: black;
  font-weight: 300;
}

/** Expanded metadata, move to other component? */
.grid-item-fil {
  float: left;
  color: white;
  height: 100px;
  margin-left: 30px;
  border-radius: 10px;
  border-style: dotted;
  border-width: 0.5px;
  border-color: white;
  padding: 10px 20px 10px 20px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}

.grid-item-fil:hover {
  display: block;
  filter: brightness(120%);
  transform: scale(1.04);
  background-color: RGBA(50, 50, 50, 1);
}

.FilInfoContainer {
  width: 160px;
  float: left;
  margin-top: 10px;
}

.FilTitle {
  float: left;
  height: 30px;
  font-weight: 200;
  font-style: normal;
  font-size: 20px;
  width: 90%;
  overflow: hidden;
}

.FilMetaContainer {
  cursor: pointer;
  width: 100%;
  margin-left: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  float: left;
  font-weight: 200;
  font-style: normal;
  font-size: 18px;
}

#filer .PubBigMeta {
  width: 90%;
  margin-left: 0px;
  margin-bottom: 4px;
  float: left;
  font-weight: 200;
  font-style: normal;
  font-size: 16px;
}

.FilImage {
  background-repeat: no-repeat;
  background-position: center;

  height: 95px;
  width: 95px;
  background-position: 100px;
  margin-top: 5px;
  float: left;
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
  float: left;
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
