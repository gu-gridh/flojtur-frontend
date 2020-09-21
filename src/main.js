import Vue from 'vue'
import {VueMasonryPlugin} from 'vue-masonry';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueMasonryPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
