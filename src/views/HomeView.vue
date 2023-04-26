<template>
  <div>
    <AppBanner></AppBanner>
    <ProductsGroups></ProductsGroups>
    <AppReviews></AppReviews>
  </div>
</template>

<script>
  import AppBanner from '../components/AppBanner.vue';
  import ProductsGroups from '../components/ProductsGroups.vue';
  import AppReviews from '../components/AppReviews.vue';

  
  export default {
    name: 'HomeView',
    components: {
      AppBanner,
      ProductsGroups,
      AppReviews,
    },
  }
</script>

<style scoped>
</style>
