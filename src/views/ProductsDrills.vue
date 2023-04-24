<template>
  <NavBar></NavBar>
  <AppDrills></AppDrills>
  <AppFooter></AppFooter>

</template>

<script>
import NavBar from '../components/NavBar.vue';
import AppDrills from '../components/AppDrills.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
    name: 'ProductsDrills',
    components: {
        NavBar,
        AppDrills,
        AppFooter,
    },
}
</script>

<style scoped>

</style>