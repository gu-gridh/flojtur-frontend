<template>
  <footer id="footer">
    <div id="SuperContainer">
      <div class="container" style="width: 250px; height: 100%">
        <router-link to="/" tag="div" class="IntroInfoContainer">
          <div id="IntroInfoButton"></div>
          <div id="IntroInfoLabel">Startsidan</div>
        </router-link>
        <router-link to="/om" tag="div" class="IntroInfoContainer">
          <div id="IntroInfoButton"></div>
          <div id="IntroInfoLabel">Om forskningsprojektet</div>
        </router-link>
      </div>

      <div class="CitateContainer">
        <div>
          Norrback, J. (2021). <em>Pehr Strands flöjtur</em>. Centrum för digital
          humaniora, Göteborgs universitet. https://strand.dh.gu.se/ (version
          1).
        </div>

        <div style="padding-top: 0.8rem">
          <div></div>
          <div>
            Licens:
            <a href="https://creativecommons.org/licenses/by-nc/4.0/"
              >CC BY-NC 4.0</a
            >, om inget annat anges.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer {
  float: left;
  background-color: #222;
  color: white;
  line-height: 1.3;
  height: auto;
  width: 100%;
  font-size: 18px;
}
#SuperContainer {
  float: left;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.container {
  float: left;
  margin-left: 50px;
}

.CitateContainer {
  float: left;
  max-width: 400px;
  margin-left: 50px;
  border-style: solid;
  border-width: 0 0px 0 0.5px;
  border-color: white;
  padding: 0.3rem 0px 0px 50px;
}

@media screen and (max-width: 800px) {
  .CitateContainer {
    margin-top: 20px;
    border-style: solid;
    border-width: 0 0px 0 0;
    border-color: white;
    padding: 0px 0px 0px 0px;
  }
}

.IntroInfoContainer {
  height: 30px;
  width: 260px;
  border-radius: 15px;
  padding: 10px;
  margin-top: 5px;
  margin-left: -10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.IntroInfoContainer:hover {
  background-color: rgb(95, 95, 95);
}

.IntroItem {
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 35px;
  line-height: 1.8;
}

#IntroInfoLabel {
  float: left;
  font-size: 25px;
  margin-top: 0px;
  margin-left: 20px;
  font-weight: 100;
}

#IntroInfoButton {
  float: left;
  margin-top: 0px;
  height: 30px;
  width: 30px;
  background-image: url(../assets/linkbutton_white.png);
  background-size: 30px 30px;
}
</style>
