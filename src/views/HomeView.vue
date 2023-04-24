<template>
  <div>
    <NavBar></NavBar>
    <AppBanner></AppBanner>
    <ProductsGroups></ProductsGroups>
    <AppReviews></AppReviews>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
  import NavBar from '../components/NavBar.vue';
  import AppBanner from '../components/AppBanner.vue';
  import ProductsGroups from '../components/ProductsGroups.vue';
  import AppReviews from '../components/AppReviews.vue';
  import AppFooter from '../components/AppFooter.vue';

  
  export default {
    name: 'HomeView',
    components: {
      NavBar,
      AppBanner,
      ProductsGroups,
      AppReviews,
      AppFooter,
    },
  }
</script>

<style scoped>
</style>
