<template>
  <div fluid class="auth h-100">
    <h3 class="text-center"> LOGIN </h3>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email"> Email: </label>
        <input type="text" v-model="customerLoginForm.email" class="form-control" id="email"
          placeholder="email">
      </div>
      <div class="form-group">
        <label for="password"> Password: </label>
        <input type="password" v-model="customerLoginForm.password" class="form-control"
          id="password" placeholder="password">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary w-100">Login</button>
      </div>
    </form>
    <p class="text-center">
      <router-link to="/register"> Create new account </router-link>
    </p>
  </div>
</template>
<script>
import {
  mapActions,
} from 'vuex';

export default {
  data() {
    return {
      customerLoginForm: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions('user', ['ASYNC_LOGIN_CUSTOMER_ACCOUNT']),
    handleSubmit() {
      this.ASYNC_LOGIN_CUSTOMER_ACCOUNT(this.customerLoginForm)
      .then((res) => {
        this.$router.push('/products');
      })
      .catch((err) => {
        console.log({
          err,
        });
      });
    },
  },
};

</script>
<style scoped>
</style>
