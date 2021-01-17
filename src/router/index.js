import { createRouter, createWebHistory } from '@ionic/vue-router';
import Landing from '../views/Landing.vue';
import Categories from '../views/Categories.vue';
import Cards from '../views/Cards.vue';
import Storybehind from '../views/StoryBehind.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
  },
  {
    path: '/categories/:categoryId/cards',
    name: 'Cards',
    component: Cards
  },
  {
    path: '/storybehind',
    name: 'Storybehind',
    component: Storybehind
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
