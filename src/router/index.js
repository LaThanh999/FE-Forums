import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: () => import("../views/layouts/Main.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("../views/Home"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/thread",
        name: "Thread",
        component: () => import("../views/Thread"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/detail-thread",
        name: "Detail-Thread",
        component: () => import("../views/DetailThread"),
        meta: {
          requireAuth: true,
        },
      },
    ],
  },
  {
    path: "*",
    name: "Not Found",
    component: () => import("../views/Error"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
