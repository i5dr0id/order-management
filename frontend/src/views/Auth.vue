<template>
<b-container fluid class="auth h-100">
  <b-row class="h-100 flex-row-reverse flex-md-row">
    <b-col class="bg-primary " lg="8" md="12" sm="12">TITEL</b-col>
    <b-col class="" lg="4" md="12" sm="12">
  <b-container class="h-100">
  <b-row class="h-100 justify-content-center align-items-center">
  <form class="col-lg-10 col-md-6 col-sm-12">
  <div class="form-group">
  <label for="email"> Email: </label>
  <input type="text" class="form-control" id="email" placeholder="email"> </input>
  </div>
   <div class="form-group">
  <label for="email"> Password: </label>
  <input type="password" class="form-control" id="email" placeholder="password"> </input>
  </div>
   <div class="form-group">
   <button type="submit" class="btn btn-primary w-100">Login</button>
  </div>
  </form>
  </b-row>
  </b-container>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
export default {

};
</script>

<style scoped>
.row {

}
</style>
