<template>
  <div class="container">
    <RouterView/>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  name: "App",
  components: {
    RouterView,
  }
}
</script>

<style scoped>

</style>
