<template>
    <NavBar></NavBar>
    <AppDiscs></AppDiscs>
    <AppFooter></AppFooter>
</template>

<script>
    import NavBar from '../components/NavBar.vue';
    import AppDiscs from '../components/AppDiscs.vue';
    import AppFooter from '../components/AppFooter.vue';


    export default {
  
        name: 'ProductsDiscs',
        components: {
            NavBar,
            AppDiscs,
            AppFooter,   
        },
    }
</script>

<style scoped>
</style>