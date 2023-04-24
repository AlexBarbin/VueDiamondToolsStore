import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductsDiscs from '../views/ProductsDiscs.vue';
import ProductsCups from '../views/ProductsCups.vue';
import ProductsDrills from '../views/ProductsDrills.vue';
import ProductsAccessories from '../views/ProductsAccessories.vue';
import ProductsView from '../views/ProductsView.vue';
import ReviewsView from '../views/ReviewsView.vue';
import AboutView from '../views/AboutView.vue';
import ContactsView from '../views/ContactsView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: ReviewsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView
    },
    {
      path: '/discs',
      name: 'discs',
      component: ProductsDiscs
    },
    {
      path: '/cups',
      name: 'cups',
      component: ProductsCups
    },
    {
      path: '/drills',
      name: 'drills',
      component: ProductsDrills
    },
    {
      path: '/accessories',
      name: 'accessories',
      component: ProductsAccessories
    },
  ]
})

export default router;
