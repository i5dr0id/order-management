<template>
  <div fluid class="auth h-100">
    <h3 class="text-center"> REGISTER </h3>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="fullname"> Full name: </label>
        <input type="text" v-model="customerRegisterForm.fullname" class="form-control" id="fullname" placeholder="full name">
      </div>
      <div class="form-group">
        <label for="phone"> Phone: </label>
        <input type="text" v-model="customerRegisterForm.phone" class="form-control" id="phone" placeholder="phone">
      </div>
      <div class="form-group">
        <label for="email"> Email: </label>
        <input type="email" v-model="customerRegisterForm.email" class="form-control" id="email" placeholder="email">
      </div>
      <div class="form-group">
        <label for="password"> Password: </label>
        <input type="password" v-model="customerRegisterForm.password" class="form-control" id="password" placeholder="password">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary w-100">Register</button>
      </div>
    </form>
    <p class="text-center">
      <router-link to="/"> Already have an account? Login </router-link>
    </p>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      customerRegisterForm: {
        fullname: '',
        email: '',
        password: '',
        phone: '',

      },
    };
  },
  methods: {
    ...mapActions('user', ['ASYNC_CREATE_CUSTOMER_ACCOUNT']),
    handleSubmit() {
      this.ASYNC_CREATE_CUSTOMER_ACCOUNT(this.customerRegisterForm)
        .then((res) => {
          this.$router.push('/products');
        }).catch((err) => {
          console.log({ err });
        });
    },
  },

};

</script>
<style scoped>
</style>
