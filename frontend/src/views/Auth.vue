<template>
<div fluid class="auth h-100">
      <h3 class="text-center"> LOGIN </h3>
  <form >
  <div class="form-group">
  <label for="email"> Email: </label>
  <input type="text" class="form-control" id="email" placeholder="email"> </input>
  </div>
   <div class="form-group">
  <label for="password"> Password: </label>
  <input type="password" class="form-control" id="password" placeholder="password"> </input>
  </div>
   <div class="form-group">
   <button type="submit" class="btn btn-primary w-100">Login</button>
  </div>
  </form>
      <p class="text-center">
        <router-link to="/register">
          Create new account
        </router-link>
         </p>
</div>
</template>

<script>
export default {

};
</script>

<style scoped>

</style>
