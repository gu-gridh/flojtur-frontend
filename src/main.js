import Vue from "vue";
import { VueMasonryPlugin } from "vue-masonry";
import VueScrollTo from "vue-scrollto";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(VueMasonryPlugin);
Vue.use(VueScrollTo);

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
