<template>
  <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card my-2 shadow-0">
          <a href="/productdetails">
            <img
              :src="imgUrl"
              class="card-img-top rounded-2"
            />
          </a>
          <div class="card-body p-1 pt-3">
            <h3 class="card-title">${{ price }}</h3>
            <p class="card-text mb-0">{{ name }}</p>
            <p class="text-muted pt-3">SKU-{{ id }}</p>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props:{
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>
</style>