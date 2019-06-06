<template>
  <div class="container">
    <b-card :title="`${name}`" class="text-center" :img-src="`${imageurl}`" over-lay img-top>
      <b-card-text>
        <span class="dark-grey-text trim-text trim-text-2" style>{{description}}</span>
        <h4 class="font-weight-bold blue-text">
          <strong>&#8358;{{Number(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}</strong>
        </h4>
      </b-card-text>
    </b-card>
    <div class="product-item-overlay">
      <div class="text"><strong> {{name}}</strong> </div>
      <div class="text"> {{description}} </div>
      <div class="text">
          <strong>&#8358;{{Number(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}</strong>
         </div>
<div>
  <span>QTY</span>
 <b-form-input
          v-model="quantity"
          type="number"
          min="1"
          max="10"
        ></b-form-input>
</div>
      <div class="mt-2">
        <b-button>Add to Cart</b-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'productCard',
    props: {
      id: String,
      name: String,
      price: String,
      imageurl: String,
      description: String
    },
    data() {
      return {
        selected: null,
        quantity: 0
      };
    },
    methods: {}
  };

</script>
<style scoped>
  .card {
    border: none !important;
    box-shadow: none;
  }

  .trim-text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

 .trim-text-2 {
    -webkit-line-clamp: 1;
  }
  .trim-text-2 {
    -webkit-line-clamp: 2;
  }
  .card-title {
        overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .container {
    position: relative;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    transition: all 0.25s ease-in-out;
  }

  /* .card:hover {
    transition: all 0.25s ease-in-out;
    opacity: 0.3;
} */
  .product-item-overlay {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .container:hover>.card {
    transition: all 0.25s ease-in-out;
    opacity: 0.3;
  }

  .container:hover>.product-item-overlay {
    opacity: 1;
  }

  /* .container:hover .hehe:hover {
    box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.15);
    transition: all 0.25s ease-in-out;
    opacity: 0.3;
}
 */

</style>
