import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import ('@/plugins/app/_views/landing/Landing.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import ('@/plugins/app/_views/categories/Categories.vue')
  },
  {
    path: '/categories/cards',
    name: 'Cards',
    component: () => import ('@/plugins/app/_views/cards/Cards.vue')
  },
  {
    path: '/categories/:categoryId/cards-ui',
    name: 'Cards-ui',
    component: () => import ('@/plugins/app/_views/cards/Cards-ui.vue')
  },
  {
    path: '/categories/how-to-play',
    name: 'How-to-play',
    component: () => import ('./plugins/app/_views/tutorial/How-to-play.vue')
  },
  {
    path: '/nextdeck',
    name: 'Nextdeck',
    component: () => import ('@/plugins/app/_views/nextdeck/Nextdeck.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
