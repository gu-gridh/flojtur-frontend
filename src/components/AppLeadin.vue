<template>
  <section class="app-leadin">
    <div id="ItemLeft">
      <div class="articleIngress">
        Pehr Strand (c. 1758–1826) var orgel- och flöjtursbyggare i Stockholm
        kring sekelskiftet 1800. Denna webbportal är en redovisning av ett
        forskningsprojekt och samtidigt en källa till information om Pehr Strand
        och i synnerhet hans flöjtur.
      </div>
    </div>
    <div id="ItemRight">
      <div class="articleIngress">
        Flöjtur är en klocka med ett mekaniskt spelverk som kan spela
        musikstycken programmerade på en stiftvals. Termen flöjtur anger också
        att tonen alstras med hjälp av pipor på samma sätt som i traditionella
        piporglar. I Sverige byggdes denna typ av flöjtur främst under andra
        hälften av 1700-talet och en bit in på 1800-talet, där Pehr Strand var
        en av de mest framgångsrika byggarna.
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-leadin {
  width: 80%;
  height: auto;
  margin: 50px auto 0px;
  overflow: hidden;
}

#ItemLeft {
  width: 47.5%;
  height: auto;
  padding: 0px 30px 0px 0px;
  float: left;
  border-style: solid;
  border-width: 0px 0.5px 0px 0px;
}
#ItemRight {
  width: 45.5%;
  height: auto;
  margin-top: 10px;
  margin-left: 30px;
  float: left;
}

.articleIngress {
  columns: 1;
  line-height: 1.2;

  #ItemLeft & {
    font-size: 30px;
    text-align: right;
  }

  #ItemRight & {
    text-align: left;
    font-size: 22px;
  }
}
</style>
