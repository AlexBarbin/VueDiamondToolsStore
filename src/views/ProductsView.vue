<template>
  <NavBar></NavBar>
  <AppDiscs></AppDiscs>
  <AppCups></AppCups>
  <AppDrills></AppDrills>
  <AppAccessories></AppAccessories>
  <AppFooter></AppFooter>
</template>


<script> 
  import NavBar from '../components/NavBar.vue';
  import AppDiscs from '../components/AppDiscs.vue';
  import AppCups from '../components/AppCups.vue';
  import AppDrills from '../components/AppDrills.vue';
  import AppAccessories from '../components/AppAccessories.vue';
  import AppFooter from '../components/AppFooter.vue';  

  export default {
    name: "ProductsView",
    components: {
      NavBar,
      AppDiscs,
      AppCups,
      AppDrills,
      AppAccessories,
      AppFooter,      
},
}
</script>


<style scoped>
</style>
