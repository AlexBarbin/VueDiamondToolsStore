<template>
    <NavBar></NavBar>
    <AppAccessories></AppAccessories>
    <AppFooter></AppFooter>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import AppAccessories from '../components/AppAccessories.vue';
import AppFooter from '../components/AppFooter.vue';


    export default {
        name: 'ProductsAccessories',
        components: {
             NavBar,
             AppAccessories,
             AppFooter 
        },
    }
</script>

<style scoped>
</style>