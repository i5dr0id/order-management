<template>
  <div>
    <NavBar/>
    <b-container>

      <b-row class="mt-4" v-if="products.length !== 0">
        
        <b-col v-for="product in products" :key="product.id" lg="3" md="6" sm="6" class="my-3">
          <ProductCard v-bind="product"/>
        </b-col>
      </b-row>
         <b-row class="mt-4" v-else>
        <b-col class="text-center">
          <h1>No product available </h1>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import NavBar from "@/components/NavBar.vue";
import ProductCard from "@/components/ProductCard";
export default {
  name: "products",
  data() {
    return {
      products: []
    };
  },
  components: {
    NavBar,
    ProductCard
  },
  methods: {
    ...mapActions("products", ["ASYNC_GET_ALL_PRODUCTS"])
  },
  mounted() {
    this.ASYNC_GET_ALL_PRODUCTS()
      .then(res => {
        this.products = res;

      })
      .catch(error => {
        console.log({
          error
        });
      });
  }
};
</script>
<style scoped>

</style>
