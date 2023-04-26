<template>
    
    <div class="row mt-5">
        <div class="col-md-6 pt-5">
            <h2 style="font-size: 40px; font-weight: 900">Diamond Discs</h2>
        </div>
        <div class="col-md-6">
            <img class="img-fluid" src="../../public/img/Group/group-discs-small.jpg" alt="">
        </div>
    </div>
    
    
    <div class="row mt-5">
    <ProductItem v-for="p in products" :key="p.id"
    :id="p.id"
    :name="p.name"
    :brand="p.brand"
    :group="p.group"
    :typeOfProduct="p.typeOfProduct"
    :typeOfTool="p.typeOfTool"
    :externalDiameter="p.externalDiameter"
    :innerDiameter="p.innerDiameter"
    :material="p.material"
    :instructions="p.instructions"
    :imgUrl="p.imgUrl"
    :price="p.price"
    ></ProductItem>
  </div>

</template>

<script>
    import ProductItem from '../components/ProductItem.vue';
    import tools from "../data/products.json";

    export default {
        name: 'ProductsDiscsView',  
        components: {
          ProductItem,
        },
        data() {
          return {
            products:[],
          }
        },
        mounted () {
          this.products = tools.discs;
          console.log(tools.discs);
        } 
    }
</script>

<style scoped>
</style>