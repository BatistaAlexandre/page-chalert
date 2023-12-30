<template>
  <!--====== APPIE SHOWCASE PART START ======-->

  <section class="appie-showcase-area">
    <div class="container">
      <div class="row">
        <!-- <button @click="toggler = !toggler">
              Toggle Lightbox
              </button> -->
        <!-- <FsLightbox
                      :toggler="toggler"
                      :sources="images"
                  /> -->
        <!-- all props & events -->
        <vue-easy-lightbox
          scroll-disabled
          esc-disabled
          :visible="visible"
          :imgs="imgs"
          :index="index"
          @hide="handleHide"
        ></vue-easy-lightbox>
        <div class="col-lg-12">
          <div class="appie-section-title text-center">
            <h3 class="appie-title">Companies that already count on us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
        </div>
      </div>
      <div class="row appie-showcase-slider">
        <VueSlickCarousel v-bind="settings" ref="carousel" :draggable="false">
          <div v-for="(image, index) in images">
            <div :key="index" class="col-lg-3">
              <div class="appie-showcase-item mt-30">
                <a
                  class="appie-image-popup"
                  @click.prevent="showMultiple(index)"
                >
                  <img :src="image" alt="" style="pointer-events: none" />
                </a>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>

  <!--====== APPIE SHOWCASE PART ENDS ======-->
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel, VueEasyLightbox },
  data() {
    return {
      imgs: "",
      visible: false,
      index: 0,
      images: [
        require("@/assets/images/hero-mans.png"),
        require("@/assets/images/hero-mans.png"),
        require("@/assets/images/hero-mans.png"),
        require("@/assets/images/hero-mans.png"),
        require("@/assets/images/hero-mans.png"),
        require("@/assets/images/hero-mans.png"),
        require("@/assets/images/hero-mans.png"),
        require("@/assets/images/hero-mans.png"),
        require("@/assets/images/hero-mans.png"),
        require("@/assets/images/hero-mans.png"),
      ],
      settings: {
        autoplay: true,
        arrows: false,
        dots: true,
        slidesToShow: 6,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    activeImage(index) {
      console.log(index);
      [this.images[0], this.images[index]] = [
        this.images[index],
        this.images[0],
      ];
      this.toggler = !this.toggler;
    },
    showMultiple(i) {
      this.imgs = this.images;
      this.index = i; // index of imgList
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>

<style>
.slick-slide {
  padding: 0 16px;
}
/* ... (seu código existente) ... */
</style>
