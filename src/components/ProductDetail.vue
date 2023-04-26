<template>
<section class="py-5">
  <div class="container">
    <div class="row gx-5">
      <aside class="col-lg-6">
        <div class="border rounded-4 mb-3 d-flex justify-content-center">
            <img style="max-width: 100%; max-height: 100vh; margin: auto;" class="rounded-4 fit" :src="imgUrl"/>
        </div>
      </aside>
      <main class="col-lg-6">
        <div class="ps-lg-3">
          <h4 class="title text-dark">
            {{ name }}
          </h4>

          <hr />

          <div class="mb-3">
            <span class="h1">${{ price }}</span>
          </div>

          <p>
            {{ instructions }}
          </p>

          <div class="row">
            <dt class="col-4">SKU:</dt>
            <dd class="col-8">{{ id }}</dd>

            <dt class="col-4">Brand</dt>
            <dd class="col-8">{{ brand }}</dd>

            <dt class="col-4">Type of product</dt>
            <dd class="col-8">{{ typeOfProduct }}</dd>

            <dt class="col-4">Type of tool</dt>
            <dd class="col-8">{{ typeOfTool }}</dd>

            <dt class="col-4">External diameter</dt>
            <dd class="col-8">{{ externalDiameter }}</dd>

            <dt class="col-4">Inner diameter</dt>
            <dd class="col-8">{{ innerDiameter }}</dd>

            <dt class="col-4">Materials</dt>
            <dd class="col-8">{{ material }}</dd>
          </div>

          <hr />

          <div class="row mb-4">
            
            <div class="col-md-4 col-6 mb-3">
              <div class="input-group mb-3" style="width: 170px;">
                
              </div>
            </div>
          </div>
          <a href="#" class="btn btn-success shadow-0"> Buy now </a>
          <a href="#" class="btn btn-primary shadow-0"> <i class="me-1 fa fa-shopping-basket"></i> Add to cart </a>
        </div>
      </main>
    </div>
  </div>
</section>

</template>
    
<script>
export default {
  name: "ProductDetail",
  props:{
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    group: {
      type: String,
      required: true,
    },
    typeOfProduct: {
      type: String,
      required: true,
    },
    typeOfTool: {
      type: String,
      required: true,
    },
    externalDiameter: {
      type: String,
      required: true,
    },
    innerDiameter: {
      type: String,
      required: true,
    },
    material: {
      type: Array,
      required: true,
    },
    instructions: {
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