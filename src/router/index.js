import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/people",
    },
    {
      path: "/charts",
      name: "charts",
      component: () => import("@/views/charts/PeopleCharts.vue"),
    },
    {
      path: "/map",
      name: "map",
      component: () => import("@/views/map/PeopleMap.vue"),
    },
    {
      path: "/people",
      name: "people",
      component: () => import("@/views/table/PeopleTable.vue"),
    },

    {
      path: "/error-404",
      name: "error-404",
      component: () => import("@/views/error/Error404.vue"),
    },
    {
      path: "*",
      redirect: "error-404",
    },
  ],
});

export default router;
