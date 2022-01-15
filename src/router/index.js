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
        path: "/rooms",
        name: "Rooms",
        component: () => import("../views/rooms/Rooms"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/roomsType",
        name: "RoomsType",
        component: () => import("../views/roomsType/roomTypes"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/users",
        name: "Users",
        component: () => import("../views/users/users"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/customers",
        name: "Customer",
        component: () => import("../views/customers/Customers"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/book-room",
        name: "Book Room",
        component: () => import("../views/bookRoom/BookRoom"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/payment",
        name: "Payment",
        component: () => import("../views/payment/payment"),
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
