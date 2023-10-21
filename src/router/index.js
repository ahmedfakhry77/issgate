import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomePage.vue";
import BrandsPage from '@/views/BrandsPage'
import DefaultLayout from "@/layouts/DefaultLayout";

import store from "../store";
const routes = [
  {
    path: "/",
    name: "Defualt",
    component: DefaultLayout,
    redirect: "/",
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/brands",
        name: "Brands",
        component: BrandsPage,
      },
    ],
  },

  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/LoginPage.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path != "/login") {
    if (store.getters.isAuthenticated) {
      next(true);
    } else {
      next({
        path: "/login",
      });
    }
  } else {
    if (store.getters.isAuthenticated) {
      next({
        path: "/",
      });
    } else {
      next();
    }
  }
});

export default router;
