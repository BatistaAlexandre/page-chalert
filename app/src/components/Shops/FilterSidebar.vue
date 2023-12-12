<template>
  <div class="appie-shop-sidebar">
    <div class="shop-price-filter">
      <h4 class="title">Filter by Price</h4>
      <div class="price-range">
        <div class="box-1"></div>
        <div class="box-2"></div>
      </div>
      <div
        class="
          main-filter-price
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <span>Price: $130 - $340</span>
        <a href="#">Filter</a>
      </div>
    </div>
    <div class="shop-category-widget">
      <h4 class="title">Product Categories</h4>
      <ul>
        <li><a href="#">Classic</a></li>
        <li><a href="#">Gadgets</a></li>
        <li><a href="#">Chair & Tables</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Uncategorized</a></li>
        <li><a href="#">Modern</a></li>
      </ul>
    </div>
    <div class="shop-best-product-widget">
      <h4 class="title">Best Seller</h4>
      <div class="shop-product">
        <div class="thumb">
          <img src="@/assets/images/shop-1.jpg" alt="" />
        </div>
        <div class="content">
          <a href="#">Razer Kraken Tournament</a>
          <span>$44.00</span>
        </div>
      </div>
      <div class="shop-product">
        <div class="thumb">
          <img src="@/assets/images/shop-2.jpg" alt="" />
        </div>
        <div class="content">
          <a href="#">iPhone 8 Plus Case</a>
          <span>$44.00</span>
        </div>
      </div>
      <div class="shop-product">
        <div class="thumb">
          <img src="@/assets/images/shop-3.jpg" alt="" />
        </div>
        <div class="content">
          <a href="#">Mango Women’s Bag</a>
          <span>$44.00</span>
        </div>
      </div>
    </div>
    <div class="shop-tags-bar">
      <h4 class="title">Popular Tags</h4>
      <ul>
        <li><a href="#">Women</a></li>
        <li><a href="#">Modern</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Luxurious</a></li>
        <li><a href="#">Classic</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Fashion</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>