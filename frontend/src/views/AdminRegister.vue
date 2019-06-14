<template>
  <b-card>
    <h4 class="text-center">
      <strong>Admin Register</strong>
    </h4>
    <AdminRegistrationForm/>
    <p class="text-center">
      <router-link to="/admin">Login as Admin</router-link>
    </p>
    <p class="text-center">
      <router-link to="/">Login as User</router-link>
    </p>
  </b-card>
</template>

<script>
import { mapActions } from "vuex";
import AdminRegistrationForm from "@/components/AdminRegistrationForm";

export default {
  components: {
    AdminRegistrationForm
  },
};
</script>

<style scoped>
</style>
