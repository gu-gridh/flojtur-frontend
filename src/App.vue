<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
a:link {
  text-decoration: none;
  color: #3fa4bd;
}

a:visited {
  text-decoration: underline;
  color: #3fa4bd;
  text-decoration-style: wavy;
  text-decoration-color: #3fa4bd;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
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
  text-align: left;
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
  font-size: 20px;
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
</style>
