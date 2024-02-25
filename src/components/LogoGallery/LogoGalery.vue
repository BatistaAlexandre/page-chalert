<template>
  <!--====== APPIE SHOWCASE PART START ======-->
  
  <section class="allies">
      <div class="container">
          <div class="row">
              <!-- Modal -->
              <div class="modal" :class="{ 'is-active': showModal }">
                  <div class="modal-background" @click="closeModal"></div>
                  <div class="modal-content">
                      <div class="box">
                          <p>{{ selectedImageDescription }}</p>
                      </div>
                  </div>
                  <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
              </div>
  
              <div class="col-lg-12">
                  <div class="appie-section-title text-center">
                      <h3 class="appie-title">Strategic Allies</h3>
                      <p>Strengthening community safety through collaborative partnerships.</p>
                  </div>
              </div>
          </div>
          <div class="row appie-showcase-slider">
              <VueSlickCarousel v-bind="settings" ref="carousel">
                  <template v-for="(image, index) in images">
                      <div :key="index" class="col-lg-3">
                          <div class="appie-showcase-item mt-30">
                              <a class="appie-image-popup" @click.prevent="showModalWithText(index)">
                                  <img class="logo-img" :src="image" alt="">
                              </a>
                          </div>
                      </div>
                  </template>
              </VueSlickCarousel>
          </div>
      </div>
  </section>
  
  <!--====== APPIE SHOWCASE PART ENDS ======-->
</template>

<script>  
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      showModal: false,
      selectedImageDescription: '',
      images: [
        { src: require('@/assets/images/allies-1.png'), description: 'Description for Allies 1' },
        { src: require('@/assets/images/allies-2.png'), description: 'Description for Allies 2' },
        { src: require('@/assets/images/allies-3.png'), description: 'Description for Allies 3' },
        { src: require('@/assets/images/allies-4.png'), description: 'Description for Allies 4' },
        { src: require('@/assets/images/allies-5.png'), description: 'Description for Allies 5' }
      ],
      settings: {
        autoplay: false,
        arrows: false,
        dots: false,
        slidesToShow: 7,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
            }
          }
        ]
      },
    }
  },
  methods: {
    showModalWithText(index) {
      this.selectedImageDescription = this.images[index].description;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
}
</script>

<style scoped>
/* Add your custom styles for the logo gallery here */
.appie-showcase-item {
  text-align: center;
}

.logo-img {
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.1);
}

/* Modal styles */
.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
}

.modal.is-active {
  display: block;
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.modal-close {
  position: absolute;
  right: 20px;
  top: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
