<template>
  <div class="cart">
    <div v-if="cartCount === 0">Cart is empty</div>
    <div v-else>
      <b-col md="12">
        <b-row v-for="(item, index) in cartProducts" :key="item.id" class="my-4">
          <b-col md="3" sm="3">
            <b-img :src="`${item.imageurl}`" fluid-grow alt="product-image"/>
          </b-col>

          <b-col align="center" md="6" sm="12">
            <h5>{{ item.name }}</h5>
            <p>{{ item.category }}</p>

            <div>
              <b-button
                size="sm"
                variant="outline-secondary"
                :disabled="item.quantity <= 1"
                @click="decreaseQty(item)"
              >-</b-button>
              {{ item.quantity }}
              <b-button size="sm" variant="outline-secondary" @click="increaseQty(item)">+</b-button>
            </div>
            <div>&#8358; {{ item.price * item.quantity | format_currency }}</div>

            <div class="product-controls">
              <span @click="removeItem({index,item})">Remove</span>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="8">
            <strong>Total</strong>
          </b-col>
          <b-col cols="4">
            <strong>
            &#8358;{{ totalPrice | format_currency }}
            </strong>
            </b-col>
        </b-row>
      </b-col>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("cart", {
      cartCount: "numberOfQuantity",
      cartProducts: "productsInCart",
      totalPrice: "cartTotalPrice"
    })
  },
  methods: {
        ...mapActions('cart', [
      'asyncIncreaseQty', 'asyncDecreaseQty',
      'asyncRemoveItem'
    ]),

        increaseQty (item) {
      this.asyncIncreaseQty(item)
    },

    decreaseQty (item) {
      this.asyncDecreaseQty(item)
    },

    removeItem (item) {
      this.asyncRemoveItem(item)
    },

  }
};
</script>

<style scoped>
</style>

