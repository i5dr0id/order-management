<template>
  <div>
<NavBar />
    <b-container>
<b-row class="mt-4">
<b-col v-for="(x,index) in 20" lg="3" md="6" sm="6" class="my-3">
  <!-- product {{x}} -->
            <b-card title="Shirt" class="text-center" img-src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" over-lay img-top>
<b-card-text>
      <strong>
                    <span class="dark-grey-text">
                      Denim shirt
                    </span>
                  </strong>
                        <h4 class="font-weight-bold blue-text">
                  <strong>&#8358;120{{x}}</strong>
                </h4>
      </b-card-text>

            </b-card>

</b-col>
</b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'products',
  components: {
    NavBar,

  },
};
</script>

<style scoped>
.card {
      box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
    border: 0;
    font-weight: 400;
}
</style>
