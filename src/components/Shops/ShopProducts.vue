<template>
  <div>
    <div
      class="shop-grid-topbar d-flex justify-content-between align-items-center"
    >
      <span>Showing all <span>12</span> results</span>
      <select id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="vw">VW</option>
        <option value="audi" selected>Audi</option>
      </select>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-4 col-md-6">
        <product />
      </div>
      <div class="col-lg-12">
        <div class="bisylms-pagination">
          <span class="current">1</span>
          <a href="#">2</a>
          <a href="#">3</a>
          <a class="next" href="#">next<i class="fal fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";
export default {
  components: { Product },
};
</script>

<style>
</style>