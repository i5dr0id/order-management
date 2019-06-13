<template>
  <b-container fluid class="h-100 px-0 bg-primary">
    <b-row class="h-100 mx-0 d-flex flex-row justify-content-center align-items-center">
      <b-col lg="3" md="6" sm="6">
 <b-card>
   <h4 class="text-center">
     <strong>Admin Login</strong>
     </h4>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="text"
              v-model="adminLoginForm.email"
              class="form-control"
              id="email"
              placeholder="email"
            >
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              v-model="adminLoginForm.password"
              class="form-control"
              id="password"
              placeholder="password"
            >
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </div>
        </form>
 </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      adminLoginForm: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions('admin', ['ASYNC_LOGIN_ADMIN_ACCOUNT']),
    handleSubmit() {
      this.ASYNC_LOGIN_ADMIN_ACCOUNT(this.adminLoginForm)
        .then((res) => {
          if (res) {
            this.$router.push('/dashboard');
                 this.$bvToast.toast('Admin login successfully', {
        title: 'Admin Login',
        variant: 'success',
      });
          }
          console.log({ res });
        })
        .catch((err) => {
          console.log({ err });
        });
    },
  },
};
</script>

<style scoped>
</style>
