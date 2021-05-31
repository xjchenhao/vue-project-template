import { createRouter, createWebHistory } from 'vue-router';
import Demo from './views/Demo.vue';
import Home from './views/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/demo', component: Demo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
