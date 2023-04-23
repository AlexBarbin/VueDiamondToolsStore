<template>
  <div class="row g-0">
    <div class="col-md-6">
      <div class="card card-span"> <img class="img-fluid" src="public\img\Group\group-discs.jpg" alt="...">
        <div class="card-img-overlay flex-center"><a class="btn btn-success" href="#!">Discs</a></div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card card-span"> <img class="img-fluid" src="public\img\Group\group-grinding.jpg" alt="...">
        <div class="card-img-overlay flex-center"> <a class="btn btn-success" href="#!">Cups</a></div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card card-span"> <img class="img-fluid" src="public\img\Group\group-drills.jpg" alt="...">
        <div class="card-img-overlay flex-center"><a class="btn btn-success" href="#!">Drills</a></div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card card-span"> <img class="img-fluid" src="public\img\Group\group-accessories.jpg" alt="...">
        <a class="btn btn-success" href="#!">Accessories</a>
      </div>
    </div>
  </div>
</template>


<script>
  import ProductItem from '../components/ProductItem.vue';
  import products from '../data/products.json';

  export default {
  name: "ProductView",
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    console.log(products);
  }
}
</script>


<style scoped>
</style>
