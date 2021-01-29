<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  font-family: "Yanone Kaffeesatz", "PT Sans Narrow", "Arial Narrow", sans-serif;
  font-weight: 100;
  color: black;
  margin: 0;
  padding: 0;
  font-size: 20px;
  -webkit-text-size-adjust: 100%;
  background: linear-gradient(
    to bottom,
    rgb(215, 215, 210) 0%,
    rgb(230, 230, 230) 100%
  );
}

a:link,
a:hover,
a:active {
  text-decoration: none;
  color: inherit;
}

a:visited {
  text-decoration: underline;
  color: inherit;
  text-decoration-style: wavy;
}

.container {
  width: 80%;
  margin: auto;
}

.container-padded {
  padding: 0 10%;
}

h1 {
  font-weight: 100;
  font-style: normal;
  font-size: 60px;
  line-height: 1;
  margin: 60px 0 20px;
}

h1#site-title {
  text-align: center;
  font-size: 120px;
  margin: 20px 0 10px;
}

h2 {
  font-weight: 100;
  font-size: 35px;
  line-height: 1;
  margin: 40px 0 0;
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

@media screen and (max-width: 950px) {
  #ItemBack {
    left: 20px;
    height: 40px;
    width: 40px;
    background-size: 30px 30px;
  }
}

@media screen and (max-width: 800px) {
  #ItemBack {
    left: 15px;
    height: 35px;
    width: 35px;
    background-size: 25px 25px;
  }
}

.articleContainer {
  width: 72%;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}
.articleIngress {
  font-size: 24px;
  /* text-align: left; */
  margin-right: auto;
  column-count: 2;
  column-gap: 40px;
  line-height: 1.3;
  font-weight: 100;
}
@media screen and (max-width: 1100px) {
  .articleIngress {
    column-count: 1;
    font-size: 24px;
  }
}

.articletext {
  text-align: justify;
  column-count: 3;
  column-gap: 40px;
  line-height: 1.3;
  font-weight: 300;
}
@media screen and (max-width: 1100px) {
  .articletext {
    column-count: 2;
    orphans: 2;
  }
}
@media screen and (max-width: 800px) {
  .articletext {
    column-count: 1;
    font-size: 22px;
  }
}

.articletext p,
.articleIngress p {
  margin: 0;
}
.articletext p:not(:first-of-type),
.articleIngress p:not(:first-of-type) {
  text-indent: 1em;
}
.articletext a:link {
  text-decoration: none;
  color: black;
}

.outset-small {
  margin-left: -6px;
  margin-right: -6px;
}

.outset-large {
  margin-left: -12px;
  margin-right: -12px;
}

.ActivateBonusMaterialText {
  display: inline-block;
  margin-left: -10px;
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

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
</style>
