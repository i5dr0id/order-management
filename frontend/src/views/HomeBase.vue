<template>
<b-container fluid class="auth h-100">
  <b-row class="h-100 flex-row-reverse flex-md-row">
    <b-col class="bg-primary " lg="8" md="12" sm="12">TITEL</b-col>
    <b-col class="" lg="4" md="12" sm="12">
  <b-container class="h-100">
  <b-row class="h-100 justify-content-center align-items-center">
    <b-col class="col-lg-8 col-md-6 col-sm-12">
    <router-view/>
    </b-col>
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
