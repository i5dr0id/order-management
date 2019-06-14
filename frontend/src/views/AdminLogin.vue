<template>
  <b-card>
    <h4 class="text-center">
      <strong>Admin Login</strong>
    </h4>
    <AdminLoginForm/>
        <p class="text-center">
      <router-link to="/admin/register">Create new admin account</router-link>
    </p>
    <p class="text-center">
      <router-link to="/">Login as User</router-link>
    </p>
  </b-card>
</template>

<script>
import { mapActions } from "vuex";
import AdminLoginForm from "@/components/AdminLoginForm";

export default {
  components: {
    AdminLoginForm
  },
  data() {
    return {
      adminLoginForm: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions("admin", ["ASYNC_LOGIN_ADMIN_ACCOUNT"]),
    handleSubmit() {
      this.ASYNC_LOGIN_ADMIN_ACCOUNT(this.adminLoginForm)
        .then(res => {
          if (res) {
            this.$router.push("/dashboard");
            this.$bvToast.toast("Admin login successfully", {
              title: "Admin Login",
              variant: "success"
            });
          }
        })
        .catch(err => {
          this.$bvToast.toast("Username or password incorrect", {
            title: "Failed Login",
            variant: "danger"
          });
          console.log({ err });
        });
    }
  }
};
</script>

<style scoped>
</style>
