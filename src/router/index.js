import { createRouter, createWebHistory } from '@ionic/vue-router';
import Landing from '../views/Landing.vue';
import Categories from '../views/Categories.vue';
import Cards from '../views/Cards.vue';
import Tutorial from '../views/Tutorial.vue';
//import Storybehind from '../views/StoryBehind.vue';
import Test from '../views/Test.vue';

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
    path: '/categories/tutorial',
    name: 'Tutorial',
    component: Tutorial
  },
  
    // path: '/categories/:categoryId/cards/storybehind',
    // name: 'Storybehind',
    // component: Storybehind
  {
    path: '/test',
    name: 'test',
    component: Test
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
