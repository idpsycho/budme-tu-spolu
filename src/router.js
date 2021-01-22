import { createRouter, createWebHistory } from '@ionic/vue-router';
import Landing from '@/plugins/app/landing/Landing.vue'
import Categories from './views/Categories.vue';
import Cards from './views/Cards.vue';
import Tutorial from './views/Tutorial.vue';
import Nextdeck from './views/Nextdeck.vue'; 


//Zmenit zapis na vid. categories, pouzit router layout
const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/categories',
    name: 'Categories',
    //component: () => import ('../views/Categories.vue'),
    component: Categories
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
  {
    path: '/nextdeck', //neviem aky nazov dat tomuto screenu (Je to screen 5. Deck moznost)
    name: 'Nextdeck',
    component: Nextdeck
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
