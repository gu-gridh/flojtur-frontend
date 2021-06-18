import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import AdvancedSearch from "@/views/AdvancedSearch.vue";
import Gallery from "@/components/Gallery.vue";

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
        path: "karta",
        name: "Map",
        component: () =>
          import(/* webpackChunkName: "map" */ "../views/OverviewMap.vue")
      },
      {
        path: "valsar",
        name: "BarrelOverview",
        component: () =>
          import(
            /* webpackChunkName: "barrels" */ "../views/BarrelsOverview.vue"
          )
      },
      {
        path: "data",
        name: "Search",
        component: AdvancedSearch
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
    path: "/pehr-strand",
    name: "Builder",
    component: () =>
      import(/* webpackChunkName: "builder" */ "../views/Builder.vue")
  },
  {
    path: encodeURI("/flöjtur"),
    name: "InstrumentAbout",
    component: () =>
      import(
        /* webpackChunkName: "instrument-about" */ "../views/InstrumentAbout.vue"
      )
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
    path: "/valsar/:id",
    name: "BarrelPage",
    component: () =>
      import(/* webpackChunkName: "barrel" */ "../views/BarrelPage.vue"),
    props: true
  },
  {
    path: "/spelur/:automId/bild/:category/:imageId",
    name: "ImagePage",
    component: () =>
      import(/* webpackChunkName: "image" */ "../views/ImagePage.vue"),
    props: true
  }
];

/** Identify frontpage routes. */
export const isHomeRoute = (route) =>
  route.matched.some((route) => route.path === "");

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Do not scroll if going from one frontpage route to another.
    const stayHome = isHomeRoute(from) && isHomeRoute(to);
    return stayHome ? null : savedPosition || { x: 0, y: 0 };
  }
});

export default router;
