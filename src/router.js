import { createRouter, createWebHistory } from "vue-router";
import Demo from "./views/Demo.vue";

const routes = [{ path: "/demo", component: Demo }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
