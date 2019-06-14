<template>
  <div fluid class="auth h-100">
    <h3 class="text-center">
      <strong>User Login</strong>
    </h3>
    <CustomerLoginForm/>
    <p class="text-center">
      <router-link to="/register">Create new account</router-link>
    </p>
    <p class="text-center">
      <router-link to="/admin">Login to Admin</router-link>
    </p>
  </div>
</template>
<script>
import CustomerLoginForm from "@/components/CustomerLoginForm";
export default {
  components: {
    CustomerLoginForm
  }
};
</script>
