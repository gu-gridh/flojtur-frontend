<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
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
  line-height: 1.2;
  columns: 1;
  orphans: 2;
  margin-top: 50px;
}
.articletext {
  margin-top: 30px;
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  text-align: justify;
  line-height: 1.2;
  column-gap: 40px;
  columns: 2;
  orphans: 2;
}
.articletext p {
  margin: 0;
}
.articletext p:not(:first-of-type) {
  text-indent: 1em;
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

.outset-small {
  margin-left: -6px;
  margin-right: -6px;
}

.outset-large {
  margin-left: -12px;
  margin-right: -12px;
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
</style>
