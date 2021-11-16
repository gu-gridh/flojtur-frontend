<template>
  <iframe
    :src="
      `https://play.gu.se/embed/secure/iframe/entryId/${videoId}/uiConfId/23450401`
    "
    allowfullscreen
    webkitallowfullscreen
    mozAllowFullScreen
    allow="autoplay *; fullscreen *; encrypted-media *"
    sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
  />
</template>

<script>
export default {
  name: "Guplay",
  props: ["videoId"],
};
</script>

<style scoped>
iframe {
  border: 0;
  width: 100%;
  height: 100%;
}
</style>
