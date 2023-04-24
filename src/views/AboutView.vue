<template>
  <NavBar></NavBar>
  <AppAbout></AppAbout>
  <AppFooter></AppFooter>
</template> 
  
  
<script>
import NavBar from '../components/NavBar.vue';
import AppAbout from '../components/AppAbout.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
  name: 'AboutView',
  components: {
    NavBar,
    AppAbout,
    AppFooter,
    },
}
</script>
  
  
<style scoped>
</style>