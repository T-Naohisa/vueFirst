import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import HomeView from './HomeView.vue';
import Edit from './components/EditView.vue';
const routes = [
  { path: '/', name: 'HomeView', component: HomeView },
  { path: '/hello', name: 'HelloWorld', component: HelloWorld },
  { path: '/edit', name: 'Edit', component: Edit },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
