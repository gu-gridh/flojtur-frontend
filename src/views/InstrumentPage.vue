<template>
  <div id="app">
    <div id="ItemTopPano">
      <div id="panorama"></div>
    </div>

    <div id="galleries">
      <router-link to="/">
        <div id="ItemBack"></div>
      </router-link>

      <div class="SectionTitle">{{title}}</div>

      <div class="MetaArticle" style="margin-top:20px;">
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

      <div class="SectionTitle">Specifikationer</div>

      <div class="MetaContainer">
        Tillverkare:
        <span>{{builder}}</span>
        <br />Byggår:
        <span>{{buildYear}}</span>
        <br />Antal verk:
        <span>{{divisionCount}}</span>
        <br />Antal stämmor:
        <span>{{stopCount}}</span>
        <br />
      </div>

      <div class="SectionTitle" style="margin-top:40px;">Liknande</div>

      <div
        id="gallery"
        style="margin-top:20px; margin-bottom:40px; float:left; margin-left:10%;  width:80%;"
      ></div>
    </div>

    <div id="foot" style="float:left; width:100%;"></div>
  </div>
</template>

<script>
import "pannellum";
import "pannellum/build/pannellum.css";
import { getInstrument } from "@/assets/db";

export default {
  name: "InstrumentPage",
  data: function () {
    return {
      // TODO remove tmp fallback values
      title: "Flöjturet i Vinterstationen",
      builder: "Per Strand",
      buildYear: "1815",
      divisionCount: "1",
      stopCount: "2",
    };
  },
  mounted() {
    pannellum.viewer("panorama", {
      type: "equirectangular",
      autoLoad: true,
      autoRotate: -2,
      yaw: -60,
      compass: true,
      northOffset: 320.0,
      showZoomCtrl: false,
      panorama: "panoramas/Panorama002.jpg",
    });
  },
  created() {
    this.id = 1;
    getInstrument(this.id).then(({ data }) => {
      const fields = data.fields;
      this.title = fields.title.value;
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
};
</script>

<style>
#ItemBack {
  cursor: pointer;
  position: absolute;
  margin-top: 50px;
  margin-left: 30px;
  height: 50px;
  width: 50px;
  background: url(../assets/back-black.png);
  background-size: 35px 35px;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2000;
}
#ItemTopPano {
  padding: 0px 0px 0px 0px;
  overflow: hidden;
  width: 100%;
  height: 60vh;
  background-color: #333333;
}
#galleries {
  color: black;
  float: left;
  width: 100%;
  padding: 0px 0 0px 0;
  background: rgba(234, 234, 231, 1);
}
.SectionTitle {
  width: 80%;
  height: auto;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  font-weight: 100;
  font-style: normal;
  font-size: 30px;
  line-height: 1;
}

@media screen and (max-width: 610px) {
  .SectionTitle {
    font-size: 38px;
    margin-bottom: 10px;
  }
}

.MetaArticle {
  width: 80%;
  font-size: 18px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  column-count: 3;
  column-gap: 40px;
  column-rule-style: solid;
  column-rule-width: 1px;
  column-rule-color: grey;
}

@media screen and (max-width: 1200px) {
  .MetaArticle {
    column-count: 2;
  }
}

@media screen and (max-width: 610px) {
  .MetaArticle {
    column-count: 1;
    font-size: 22px;
  }
}

.MetaContainer {
  width: 550px;
  margin-top: 20px;
  margin-left: 10%;
  column-count: 2;
  column-gap: 40px;
  column-rule-style: solid;
  column-rule-width: 1px;
  column-rule-color: grey;
  font-size: 18px;
  line-height: 2;
}

.MetaContainer span {
  color: blue;
}

@media screen and (max-width: 610px) {
  .MetaContainer {
    column-count: 1;
    font-size: 22px;
  }
}
</style>
