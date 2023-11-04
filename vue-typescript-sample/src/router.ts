import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import HomeView from './HomeView.vue';
const routes = [
  { path: '/', name: 'HomeView', component: HomeView },
  { path: '/hello', name: 'HelloWorld', component: HelloWorld },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
