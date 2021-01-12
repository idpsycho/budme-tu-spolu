import { createRouter, createWebHistory } from '@ionic/vue-router';
import Landing from '../views/Landing.vue';
import Categories from '../views/Categories.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
