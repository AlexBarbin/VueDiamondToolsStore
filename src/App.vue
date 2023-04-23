<template>
  <div class="container">
    <NavBar></NavBar>
    <AppBanner></AppBanner>
    <ReviewsView></ReviewsView>
    <AboutView></AboutView>
    <RouterView/>
    <AppFooter></AppFooter>
    <ProductItem></ProductItem>
    <ContactsView></ContactsView>
    
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import AppBanner from './components/AppBanner.vue';
import AppFooter from './components/AppFooter.vue';
import ReviewsView from './views/ReviewsView.vue';
import AboutView from './views/AboutView.vue';
import ProductItem from './components/ProductItem.vue';
import ContactsView from './views/ContactsView.vue';

export default {
  name: "App",
  components: {
    RouterView,
    NavBar,
    AppFooter,
    AppBanner,
    ReviewsView,
    AboutView,
    ProductItem,
    ContactsView,
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
