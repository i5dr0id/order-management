<template>
  <b-form @submit.stop.prevent="onSubmit">
    <b-form-group id="input-group-fullname" label="Fullname" label-for="input-fullname">
      <b-form-input
        id="fullname"
        name="fullname"
        v-model="$v.customerRegisterForm.fullname.$model"
        :state="$v.customerRegisterForm.fullname.$dirty ? !$v.customerRegisterForm.fullname.$error : null"
        aria-describedby="input-fullname-live-feedback"
        placeholder="Lastname Firstname"
      ></b-form-input>

      <b-form-invalid-feedback id="input-phone-live-feedback">Fullname field is required.</b-form-invalid-feedback>
    </b-form-group>
    <b-form-group id="input-group-phone" label="Phone" label-for="input-phone">
      <b-form-input
        id="phone"
        name="phone"
        v-model="$v.customerRegisterForm.phone.$model"
        :state="$v.customerRegisterForm.phone.$dirty ? !$v.customerRegisterForm.phone.$error : null"
        aria-describedby="input-phone-live-feedback"
        placeholder="Phone number"
      ></b-form-input>

      <b-form-invalid-feedback id="input-phone-live-feedback">Phone number field is required.</b-form-invalid-feedback>
    </b-form-group>
    <b-form-group id="input-group-email" label="Email" label-for="input-email">
      <b-form-input
        id="email"
        name="email"
        v-model="$v.customerRegisterForm.email.$model"
        :state="$v.customerRegisterForm.email.$dirty ? !$v.customerRegisterForm.email.$error : null"
        aria-describedby="input-email-live-feedback"
        placeholder="Email"
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
        v-model="$v.customerRegisterForm.password.$model"
        :state="$v.customerRegisterForm.password.$dirty ? !$v.customerRegisterForm.password.$error : null"
        aria-describedby="input-password-live-feedback"
        placeholder="Password "
      ></b-form-input>

      <b-form-invalid-feedback
        id="input-password-live-feedback"
      >Password field is required and must be at least 5 characters.</b-form-invalid-feedback>
    </b-form-group>

    <b-button
      type="submit"
      variant="primary"
      class="w-100"
      :disabled="$v.customerRegisterForm.$invalid"
    >Register</b-button>
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
      customerRegisterForm: {
        fullname: null,
        phone: null,
        email: null,
        password: null
      }
    };
  },
  validations: {
    customerRegisterForm: {
      fullname: {
        required
      },
      phone: {
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
    ...mapActions("user", ["ASYNC_CREATE_CUSTOMER_ACCOUNT"]),
    onSubmit() {
      this.$v.customerRegisterForm.$touch();
      if (this.$v.customerRegisterForm.$anyError) {
        return;
      }
      this.ASYNC_CREATE_CUSTOMER_ACCOUNT(this.customerRegisterForm)
        .then(res => {
          if (res === 200) {
            this.$router.push("/products");
          }
        })
        .catch(err => {
          console.log({err})
          if (err) {
            this.$bvToast.toast("Error creating account", {
              title: "Registration Error",
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

