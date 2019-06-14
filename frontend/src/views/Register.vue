<template>
  <div fluid class="auth h-100">
    <h3 class="text-center">REGISTER</h3>
    <CustomerRegistrationForm/>

    <p class="text-center">
      <router-link to="/">Already have an account? Login</router-link>
    </p>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import CustomerRegistrationForm from "@/components/CustomerRegistrationForm";

export default {
  components: {
    CustomerRegistrationForm
  },
  data() {
    return {
      customerRegisterForm: {
        fullname: "",
        email: "",
        password: "",
        phone: ""
      }
    };
  },
  methods: {
    ...mapActions("user", ["ASYNC_CREATE_CUSTOMER_ACCOUNT"]),
    handleSubmit() {
      this.ASYNC_CREATE_CUSTOMER_ACCOUNT(this.customerRegisterForm)
        .then(res => {
          this.$router.push("/products");
        })
        .catch(err => {
          console.log({ err });
        });
    }
  }
};
</script>
<style scoped>
</style>
