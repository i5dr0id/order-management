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

        <b-nav-item-dropdown right>
          <template slot="button-content"><em>{{getUserDetail.fullname}}</em></template>
          <!-- <b-dropdown-item href="#">Profile</b-dropdown-item> -->
          <b-dropdown-item @click="btnLogout" href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'navbar',
  computed: {
    ...mapGetters('user', ['getUserDetail']),
  },
  methods: {
    ...mapActions('user', ['ASYNC_LOGOUT_CUSTOMER_ACCOUNT']),

    btnLogout() {
      this.ASYNC_LOGOUT_CUSTOMER_ACCOUNT();
      this.$router.push('/');
    },
  },
};
</script>


<style scoped>

</style>
