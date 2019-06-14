<template>
  <b-form @submit.stop.prevent="onSubmit">
    <b-form-group id="example-input-group-email" label="Email" label-for="example-input-email">
      <b-form-input
        id="email"
        name="email"
        v-model="$v.adminLoginForm.email.$model"
        :state="$v.adminLoginForm.email.$dirty ? !$v.adminLoginForm.email.$error : null"
        aria-describedby="input-email-live-feedback"
      ></b-form-input>

      <b-form-invalid-feedback id="input-email-live-feedback">Email field is required.</b-form-invalid-feedback>
    </b-form-group>

    <b-form-group
      id="example-input-group-password"
      label="Password"
      label-for="example-input-password"
    >
      <b-form-input
        type="password"
        id="password"
        name="password"
        v-model="$v.adminLoginForm.password.$model"
        :state="$v.adminLoginForm.password.$dirty ? !$v.adminLoginForm.password.$error : null"
        aria-describedby="input-password-live-feedback"
      ></b-form-input>

      <b-form-invalid-feedback
        id="input-password-live-feedback"
      >Password field is required and must be at least 5 characters.</b-form-invalid-feedback>
    </b-form-group>

    <b-button
      type="submit"
      variant="primary"
      class="w-100"
      :disabled="$v.adminLoginForm.$invalid"
    >Login</b-button>
  </b-form>
</template>

<script>
import { mapActions } from "vuex";

import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      adminLoginForm: {
        email: null,
        password: null
      }
    };
  },
  validations: {
    adminLoginForm: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(5)
      }
    }
  },
  methods: {
    ...mapActions("user", ["ASYNC_LOGIN_CUSTOMER_ACCOUNT"]),
    onSubmit() {
      this.$v.adminLoginForm.$touch();
      if (this.$v.adminLoginForm.$anyError) {
        return;
      }
      this.ASYNC_LOGIN_CUSTOMER_ACCOUNT(this.adminLoginForm)
        .then(res => {
          if (res === 200) {
            this.$router.push("/products");
          }
        })
        .catch(err => {
          if (err) {
            this.$bvToast.toast("Username or password incorrect", {
              title: "Failed Login",
              variant: "danger"
            });
          }
        });
    }
  }
};
</script>

<style scoped>
</style>

