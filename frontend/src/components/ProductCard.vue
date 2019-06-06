<template>
<div class="container">
    <b-card
    :title="`${name}`"
    class="text-center"
    :img-src="`${imageurl}`"
    over-lay
    img-top
  >
    <b-card-text>
      <!-- <strong> -->
      <span class="dark-grey-text trim-text" style>{{description}}</span>
      <!-- </strong> -->
      <h4 class="font-weight-bold blue-text">
        <strong>&#8358;{{Number(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}</strong>
      </h4>
    </b-card-text>
  </b-card>
  <div class="product-item-overlay">
    <div class="text">John Doe</div>
  </div>
</div >
</template>

<script>
export default {
  name:'productCard',
  props: {
    id: String,
    name: String,
    price: String,
    imageurl: String,
    description: String
  },
  data() {
    return {
      selected: null
    };
  },
  methods: {}
};
</script>

<style scoped>
.card {
  /* box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border: 0;
  font-weight: 400; */
  border: none !important;
   box-shadow: none;
}

.trim-text {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.container {
  position: relative;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease-in-out;
}

.container:hover {
    box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.15);
    transition: all 0.25s ease-in-out;
}


.container:hover .card {
  /* opacity: 0.3; */
}
/* .container:hover .middle { */
  /* opacity: 1; */
/* } */


.product-item-overlay {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.product-item-overlay {
  width: 100%;
  height: 100%;
}
/* .product-card:hover .contents {
  opacity: 0.3;
}

.product-card:hover .image {
  opacity: 0.3;
}

.product-card:hover .product-item-overlay {
  opacity: 1;
} */
</style>

