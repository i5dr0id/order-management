<template>
  <div class="container">
    <b-card :title="`${name}`" class="text-center" :img-src="`${imageurl}`" over-lay img-top>
      <b-card-text>
        <span class="dark-grey-text trim-text trim-text-2" style>{{description}}</span>
        <h4 class="font-weight-bold blue-text">
          <strong>&#8358;{{price | format_currency}}</strong>
        </h4>
      </b-card-text>
    </b-card>
    <div class="product-item-overlay">
      <div class="text text-white"><strong> {{name}}</strong> </div>
      <div class="text text-white"> {{description}} </div>
      <div class="text text-white">
        <strong>&#8358;{{price | format_currency}}</strong>
      </div>
      <div class="align-self-center">
        <b-button size="sm" variant="outline-secondary text-white" :disabled="quantity <= 1"
          @click="quantity--"> - </b-button>
        <span class="text-white px-1"> {{ quantity }}</span>
        <b-button size="sm" variant="outline-secondary text-white" @click="quantity++"> +
        </b-button>
      </div>
      <div class="mt-2">
        <b-button @click="addToCart">Add to Cart</b-button>
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
    description: String,
  },
  data() {
    return {
      selected: null,
      quantity: 1,
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch('cart/asyncPushToCart', {
        id: this.id,
        name: this.name,
        price: this.price,
        imageurl: this.imageurl,
        description: this.description,
        quantity: parseInt(this.quantity),
      });
      this.makeToast(this.name);
    },
    makeToast(product) {
      this.$bvToast.toast(`${product} added to cart`, {
        title: 'Product Added',
        variant: 'info',
        // solid: true
      });
    },
  },
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
    /* opacity:0.5; */
  }

  .container:hover {
    background: black
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
