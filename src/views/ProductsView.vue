<template>
  <ProductsDiscsView></ProductsDiscsView>
  <ProductsCupsView></ProductsCupsView>
  <ProductsDrillsView></ProductsDrillsView>
  <ProductsAccessoriesView></ProductsAccessoriesView>
</template>


<script>
  import ProductsDiscsView from '../views/ProductsDiscsView.vue';
  import ProductsCupsView from '../views/ProductsCupsView.vue';
  import ProductsDrillsView from '../views/ProductsDrillsView.vue';
  import ProductsAccessoriesView from '../views/ProductsAccessoriesView.vue';

  export default {
    name: "ProductsView",
    components: {
      ProductsDiscsView,
      ProductsCupsView,
      ProductsDrillsView,
      ProductsAccessoriesView,      
},
}
</script>


<style scoped>
</style>
