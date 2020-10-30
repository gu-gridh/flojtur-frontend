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
</style>
