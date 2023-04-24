<template>
  <NavBar></NavBar>
  <AppCups></AppCups>
  <AppFooter></AppFooter>
</template>

<script>
    import NavBar from '../components/NavBar.vue';
    import AppCups from '../components/AppCups.vue';
    import AppFooter from '../components/AppFooter.vue';

    export default {
        name: 'ProductsCups',
        components: {
            NavBar,
            AppCups,
            AppFooter,
        },
}
</script>

<style scoped>
</style>