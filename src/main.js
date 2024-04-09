import Vue from "vue";
import { VueMasonryPlugin } from "vue-masonry";
import VueScrollTo from "vue-scrollto";
import App from "./App.vue";
import router from "./router";
import matomo from 'vue-matomo';

Vue.config.productionTip = false;

Vue.use(VueMasonryPlugin);
Vue.use(VueScrollTo);

if (process.env.VUE_APP_MATOMO_URL && process.env.VUE_APP_MATOMO_SITE_ID) {
  Vue.use(matomo, {
    host: process.env.VUE_APP_MATOMO_URL,
    siteId: process.env.VUE_APP_MATOMO_SITE_ID,
    router: router,
    enableLinkTracking: true,
    trackInitialView: true,
    debug: false
  });
}

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
