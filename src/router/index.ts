import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // document.getElementById("app")?.scrollIntoView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
