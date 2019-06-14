<template>
  <b-form @submit.stop.prevent="onSubmit">
    <b-form-group
      id="example-input-group-fullname"
      label="Fullname"
      label-for="example-input-fullname"
    >
      <b-form-input
        id="fullname"
        name="fullname"
        v-model="$v.adminRegistrationForm.name.$model"
        :state="$v.adminRegistrationForm.name.$dirty ? !$v.adminRegistrationForm.name.$error : null"
        aria-describedby="input-email-live-feedback"
      ></b-form-input>

      <b-form-invalid-feedback id="input-fullname-live-feedback">name field is required.</b-form-invalid-feedback>
    </b-form-group>

    <b-form-group id="example-input-group-email" label="Email" label-for="example-input-email">
      <b-form-input
        id="email"
        name="email"
        v-model="$v.adminRegistrationForm.email.$model"
        :state="$v.adminRegistrationForm.email.$dirty ? !$v.adminRegistrationForm.email.$error : null"
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
        v-model="$v.adminRegistrationForm.password.$model"
        :state="$v.adminRegistrationForm.password.$dirty ? !$v.adminRegistrationForm.password.$error : null"
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
      :disabled="$v.adminRegistrationForm.$invalid"
    >Create Admin</b-button>
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
      adminRegistrationForm: {
        name: null,
        email: null,
        password: null
      }
    };
  },
  validations: {
    adminRegistrationForm: {
      name: {
        required
      },
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
    ...mapActions("admin", ["ASYNC_CREATE_ADMIN_ACCOUNT"]),
    onSubmit() {
      this.$v.adminRegistrationForm.$touch();
      if (this.$v.adminRegistrationForm.$anyError) {
        return;
      }
      this.ASYNC_CREATE_ADMIN_ACCOUNT(this.adminRegistrationForm)
        .then(res => {
          if (res === 200) {
            this.$router.push("/dashboard");
            this.$bvToast.toast("Admin login successfully", {
              title: "Admin Login",
              variant: "success"
            });
          } else {
            this.$bvToast.toast("Username or password incorrect", {
              title: "Failed Login",
              variant: "danger"
            });
          }
        })
        .catch(err => {
          this.$bvToast.toast("Username or password incorrect", {
            title: "Failed Login",
            variant: "danger"
          });
        });
    }
  }
};
</script>

<style scoped>
</style>

