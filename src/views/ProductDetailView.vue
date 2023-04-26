<template>
  <ProductDetail
  v-for ="p in product" :key="p.id"
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
    ></ProductDetail>
</template>

<script>
import ProductDetail from '../components/ProductDetail.vue';
import tool from "../data/products.json";

export default {
    name: 'ProductDetailView',
    components: {
      ProductDetail,
    },
        data() {
          return {
            product:[],
          }
        },
        mounted () {
          this.product = tool.discs;
          this.product = tool.cups;
          this.product = tool.drills;
          this.product = tool.accessories;
        }
}
</script>

<style scoped>
</style>