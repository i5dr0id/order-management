<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="bg-primary" variant="primary">
      <b-navbar-brand href="#">Order Management</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
      </b-navbar-nav> -->
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <button v-b-modal.modal-1 type="button" class="btn btn-default text-white" aria-label="Left Align">
            {{cartCount}} <span class="fa fa-shopping-cart fa-lg" aria-hidden="true"></span>
          </button>
          <b-nav-item-dropdown right>
            <template slot="button-content">
              <em>{{getUserDetail.fullname}}</em>
            </template>
            <!-- <b-dropdown-item href="#">Profile</b-dropdown-item> -->
            <b-dropdown-item @click="btnLogout" href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-modal id="modal-1" title="Cart" hide-footer>
<Cart />
<b-button v-if="cartCount !== 0" class="mt-3" variant="outline-danger" block>Create Order</b-button>
  </b-modal>
  </div>
</template>
<script>

import Cart from '@/components/Cart.vue'

import {
    mapGetters,
    mapActions
  } from 'vuex';


  export default {
    name: 'navbar',
    components: {
Cart
    },
    computed: {
      ...mapGetters('user', ['getUserDetail']),
      ...mapGetters('cart', {
        cartCount: 'numberOfQuantity'
      })
    },
    methods: {
      ...mapActions('user', ['ASYNC_LOGOUT_CUSTOMER_ACCOUNT']),
      btnLogout() {
        this.ASYNC_LOGOUT_CUSTOMER_ACCOUNT();
        this.$router.push('/');
      }
    }
  };

</script>
<style scoped></style>
