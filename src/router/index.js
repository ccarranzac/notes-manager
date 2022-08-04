import { createRouter, createWebHistory } from "vue-router";
import TheCalendar from "../views/TheCalendar.vue";
import TheList from "../views/TheList.vue";

const routes = [
  {
    path: "/",
    redirect: "/calendar",
  },
  {
    name: "calendar",
    path: "/calendar",
    component: TheCalendar,
  },
  {
    name: "list",
    path: "/list",
    component: TheList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
