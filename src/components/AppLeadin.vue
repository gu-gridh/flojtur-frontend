<template>
  <section class="app-leadin container">
    <div class="first">
      <p>
        Pehr Strand (c. 1758–1826) var orgel- och flöjtursbyggare i Stockholm
        kring sekelskiftet 1800. Strand fick privilegium att bygga spelur 1791,
        och lämnade 1824 över sin verkstad till sonen Pehr Zacharias Strand
        (1797–1844). Denna webbpublikation är en källa till information om Pehr
        Strand och hans flöjtur, och samtidigt en redovisning av ett
        forskningsprojekt.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-leadin {
  height: auto;
  margin: 50px auto 30px;
  line-height: 1.2;
  text-align: justify;
  font-weight: 300;
}

.first {
  font-size: 26px;
}

.second {
  font-size: 22px;
}

@media screen and (min-width: 800px) {
  .app-leadin {
    display: flex;
    align-items: center;
  }

  .first {
    flex: 1;
    padding-right: 30px;
    //border-right: 0.5px solid;
    //text-align: right;
    text-align: center;
    font-weight: 100;
    font-size: 30px;
  }

  .second {
    flex: 1;
    margin-left: 30px;
    text-align: left;
  }

  .first,
  .second {
    & > :first-child {
      margin-top: 0;
    }
    & > :last-child {
      margin-bottom: 0;
    }
  }
}
</style>
