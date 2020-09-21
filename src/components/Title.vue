<template>
  <div>
    <div class="cardMiniImage"></div>

    <div class="title">FLÖJTUR</div>
    <div class="subtitle">1763-1810</div>

    <div class="articleContainer">
      <!-- <div style="margin-top:50px;"> -->
      <div class="articleIngress">
        Termen
        <i>flöjtur</i> brukar på svenska användas för de mekaniska spelverk som byggts in i större golvur och där tonen alstras med hjälp av pipor liknande dem man finner i traditionella piporglar. I Sverige byggdes denna typ av spelverk under andra hälften av 1700-talet och en bit in på; 1800-talet. Flöjturet hör till en grupp instrument som brukar benämnas
        <i>självspelande instrument</i> eller
        <i>spelautomater</i>.
      </div>
      <div class="articletext">
        Termen
        <i>flöjtur</i> brukar på; svenska användas för de mekaniska spelverk som byggts in i större golvur och där tonen alstras med hjälp av pipor liknande dem man finner i traditionella piporglar.
        I Sverige byggdes denna typ av spelverk under andra hälften av 1700-talet och en bit in på; 1800-talet. Flöjturet hör till en grupp instrument som brukar benämnas självspelande instrument eller spelautomater.
        Termen
        <i>flöjtur</i>
        brukar på; svenska användas för de mekaniska spelverk som byggts in i större golvur och där tonen alstras med hjälp av pipor liknande dem man finner i traditionella piporglar.
        I Sverige byggdes denna typ av spelverk under andra hälften av 1700-talet och en bit in på; 1800-talet. Flöjturet hör till en grupp instrument som brukar benämnas självspelande instrument eller spelautomater.
      </div>
    </div>

    <div class="IntroItem" @click="scrollToFilter()">Utforska arkivet</div>

    <div class="IntroMenuContainer">
      <div class="MenuItem">
        <a href="http://">Introduktion till arkivet</a>
      </div>
      <div class="MenuItem">|</div>
      <div class="MenuItem">
        <a href>Om forskningsprojektet</a>
      </div>
    </div>

    <!-- <div class="scroll bounce" style="cursor:pointer; display:none;" @click="scrollToFilter"></div> -->
  </div>
</template>

<script>
export default {
  name: "Title",
  methods: {
    scrollToFilter() {
      console.log("scroll to filter");
    },
  },
};
</script>

<style scoped>
.title {
  font-weight: 600;
  width: 100%;
  float: left;
  text-align: center;
  font-size: 120px;
  margin-bottom: 10px;
  margin-top: 20px;
}
.subtitle {
  font-weight: 600;
  width: 500px;
  line-height: 0.5;
  text-align: center;
  font-size: 30px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
.articleContainer {
  width: 72%;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}
.articleIngress {
  width: 100%;
  font-size: 24px;
  text-align: left;
  columns: 1;
  orphans: 2;
  margin-top: 50px;
}
.articletext {
  margin-top: 30px;
  width: 100%;
  font-size: 18px;
  text-align: justify;
  column-gap: 40px;
  column-rule-style: solid;
  column-rule-width: 1px;
  column-rule-color: grey;
  columns: 2;
  orphans: 2;
}
.articletext a:link {
  text-decoration: none;
  color: black;
}
@media screen and (max-width: 1200px) {
  .articletext {
      columns: 2;  
      orphans: 2;
  }
}

@media screen and (max-width: 800px) {
  .articletext {
      columns: 1;
  }
}


.IntroItem {
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  width: 190px;
  height: auto;
  text-align: left;
  font-weight: 100;
  font-style: normal;
  font-size: 35px;
  line-height: 0.8;
  cursor: pointer;
}
.cardMiniImage {
  width: 200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  border-radius: 50%;
  background-image: url(../assets/7.jpg);
  background-size: cover;
}

.IntroMenuContainer {
  margin-left: auto;
  margin-right: auto;
  width: 380px;
  height: 50px;
  margin-top: 20px;
  text-align: center;
}
.MenuItem {
  width: auto;
  height: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 20px;
  line-height: 1.8;
  float: left;
  margin-left: 20px;
}
</style>
