import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductsDiscsView from '../views/ProductsDiscsView.vue';
import ProductsCupsView from '../views/ProductsCupsView.vue';
import ProductsDrillsView from '../views/ProductsDrillsView.vue';
import ProductsAccessoriesView from '../views/ProductsAccessoriesView.vue';
import ProductsView from '../views/ProductsView.vue';
import ReviewsView from '../views/ReviewsView.vue';
import AboutView from '../views/AboutView.vue';
import ContactsView from '../views/ContactsView.vue';
import ProductDetailsView from '../views/ProductDetailView.vue';



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
      component: ProductsDiscsView
    },
    {
      path: '/cups',
      name: 'cups',
      component: ProductsCupsView
    },
    {
      path: '/drills',
      name: 'drills',
      component: ProductsDrillsView
    },
    {
      path: '/accessories',
      name: 'accessories',
      component: ProductsAccessoriesView
    },
    {
      path: '/productdetails',
      name: 'productdetails',
      component: ProductDetailsView
    },
  ]
})

export default router;
