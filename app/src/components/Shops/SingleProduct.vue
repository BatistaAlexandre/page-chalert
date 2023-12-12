<template>
  <section class="shop-details-area pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="shop-details-thumb">
            <div class="shop-details-thumb-slider-active">
              <VueSlickCarousel ref="carousel" autoplay>
                <div class="item">
                  <img src="@/assets/images/shop-details-thumb-1.jpg" alt="" />
                </div>
                <div class="item">
                  <img src="@/assets/images/shop-details-thumb-1.jpg" alt="" />
                </div>
                <div class="item">
                  <img src="@/assets/images/shop-details-thumb-1.jpg" alt="" />
                </div>
                <div class="item">
                  <img src="@/assets/images/shop-details-thumb-1.jpg" alt="" />
                </div>
                <div class="item">
                  <img src="@/assets/images/shop-details-thumb-1.jpg" alt="" />
                </div>
              </VueSlickCarousel>
            </div>
          </div>
          <div class="shop-small-slider-active mt-10">
            <VueSlickCarousel v-bind="settings" ref="carousel">
              <div class="item">
                <img src="@/assets/images/shop-details-small-1.jpg" alt="" />
              </div>
              <div class="item">
                <img src="@/assets/images/shop-details-small-2.jpg" alt="" />
              </div>
              <div class="item">
                <img src="@/assets/images/shop-details-small-3.jpg" alt="" />
              </div>
              <div class="item">
                <img src="@/assets/images/shop-details-small-4.jpg" alt="" />
              </div>
              <div class="item">
                <img src="@/assets/images/shop-details-small-2.jpg" alt="" />
              </div>
            </VueSlickCarousel>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="shop-product-details-content pl-70 mt-35">
            <span>In stock</span>
            <h2 class="title">Smartwatch with Music</h2>
            <div class="pricing">
              <div class="discount-price mr-15">$114.00</div>
              <div class="regular-price">$172.00</div>
            </div>
            <div class="review">
              <ul>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star-half-alt"></i></li>
              </ul>
              <span>(4 reviews)</span>
            </div>
            <p>
              So I said nancy boy he lost his bottle smashing mush brolly
              victoria sponge loo, bobby say Charles gutted mate bugger fanny
              around, lurgy grub some dodgy chav blatant blag me old mucker.
            </p>
            <div class="shop-buttons d-block d-sm-flex align-items-center">
              <div class="product-quantity" id="quantity">
                <button
                  @click.prevent="DeCrement"
                  type="button"
                  id="sub"
                  class="sub"
                >
                  -
                </button>
                <input v-model="quantity" type="text" />
                <button
                  @click.prevent="inCrement"
                  type="button"
                  id="add"
                  class="add"
                >
                  +
                </button>
              </div>
              <a class="main-btn ml-10" href="#">Add To Cart</a>
            </div>
            <div class="details-info">
              <ul>
                <li><span>SKU:</span> 42725-AB-6</li>
                <li><span>Categories: </span> Watch, Appie, UX</li>
                <li><span>Tags:</span> Creative, Shop, WordPress</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  props: {
    sliderContents: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      quantity: 1,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
      },
    };
  },
  methods: {
    DeCrement() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    inCrement() {
      this.quantity++;
    },
  },
};
</script>

<style>
</style>