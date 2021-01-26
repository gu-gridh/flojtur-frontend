import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../components/Gallery";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    // Child routes will appear in the <router-view> under the Home component.
    children: [
      {
        path: "",
        name: "Home",
        component: Gallery
      },
      {
        path: "map",
        name: "Map",
        component: () =>
          import(/* webpackChunkName: "map" */ "../components/Map.vue")
      },
      {
        path: "barrels",
        name: "BarrelOverview",
        component: () =>
          import(
            /* webpackChunkName: "barrels" */ "../views/BarrelsOverview.vue"
          )
      }
    ]
  },
  {
    path: "/om",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/introduktion",
    name: "Help",
    component: () => import(/* webpackChunkName: "help" */ "../views/Help.vue")
  },
  {
    path: "/spelur/:id",
    name: "InstrumentPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "instrument" */ "../views/InstrumentPage.vue"
      ),
    props: true
  },
  {
    path: "/spelur/:automId/image/:category/:imageId",
    name: "ImagePage",
    component: () =>
      import(/* webpackChunkName: "image" */ "../views/ImagePage.vue"),
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
