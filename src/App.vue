<template>
  <div class="container">
    <NavBar></NavBar>
    <RouterView/>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';
import AppFooter from './components/AppFooter.vue';


export default {
  name: "App",
  components: {
    NavBar,
    RouterView,
    AppFooter,
    
  }
}
</script>

<style scoped>

</style>
