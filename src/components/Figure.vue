<template>
  <figure>
    <slot />
  </figure>
</template>

<style scoped>
figure {
  background-color: #ffffff40;
  border-radius: 0.75rem;
  margin: 1rem 0;
  padding: 1.5rem;
}
figcaption {
  font-size: smaller;
  text-align: left;
  margin-top: 0.75em;
}
</style>
