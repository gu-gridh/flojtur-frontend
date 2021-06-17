<template>
  <footer id="footer">
    <div class="container">
      <div>Pehr Strands flöjtur</div>
    </div>

    <div class="container">
      <div>Citera:</div>
      <div>
        Norrback, J. (2021). <em>Pehr Strands spelur</em>. Centrum för digital
        humaniora, Göteborgs universitet. https://strand.dh.gu.se/
      </div>
    </div>

    <div class="container logos">
      <a href="https://dh.gu.se/">
        <img src="@/assets/cdh-white.png" alt="Centre for Digital Humanities" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: #222;
  color: white;
  padding-top: 2.5rem;
}
.container {
  padding-bottom: 2.5rem;
}
.logos {
  display: flex;
  align-content: center;
  justify-content: space-between;

  > * {
    display: block;
    max-height: 8rem;
    max-width: 12rem;
  }
}
</style>
