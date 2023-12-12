<template>
      <!--====== APPIE TESTIMONIAL 2 PART START ======-->
    
    <section class="appie-testimonial-2-area mb-90" id="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-testimonial-2-box">
                        <div class="appie-testimonial-slider-2" style="position :relative">
                            <span @click.prevent="showPrev" class="prev slick-arrow" style="display: block;"><i class="fal fa-arrow-left"></i></span>
                                <VueSlickCarousel v-bind="settings" ref="carousel">
                                    <div class="appie-testimonial-slider-2-item">
                                        <div class="item">
                                            <div class="thumb">
                                                <img src="@/assets/images/testimonial-user-1.png" alt="">
                                                <ul>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                </ul>
                                                <span>(4.7) review</span>
                                            </div>
                                            <div class="content">
                                                <p>Why I say old chap that is spiffing chip shop such a fibber the bee's knees, the wireless Richard fantastic do one cracking goal pukka baking cakes starkers mush don't get shirty with me argy bargy, I naff chimney pot blimey he lost his bottle cup.</p>
                                                <div class="author-info">
                                                    <h5 class="title">Hanson Deck</h5>
                                                    <span>Web developer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="appie-testimonial-slider-2-item">
                                        <div class="item">
                                            <div class="thumb">
                                                <img src="@/assets/images/testimonial-user-1.png" alt="">
                                                <ul>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                </ul>
                                                <span>(4.7) review</span>
                                            </div>
                                            <div class="content">
                                                <p>Why I say old chap that is spiffing chip shop such a fibber the bee's knees, the wireless Richard fantastic do one cracking goal pukka baking cakes starkers mush don't get shirty with me argy bargy, I naff chimney pot blimey he lost his bottle cup.</p>
                                                <div class="author-info">
                                                    <h5 class="title">Hanson Deck</h5>
                                                    <span>Web developer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </VueSlickCarousel>
                             <span @click.prevent="showNext" class="next slick-arrow" style="display: block;"><i class="fal fa-arrow-right"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!--====== APPIE TESTIMONIAL 2 PART ENDS ======-->
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
     components:{ VueSlickCarousel},
    data() {
        return{
            settings: {
                autoplay: true,
                arrows:false,
                dots:false
            },
        }
    },
    methods: {
         showNext() {
            this.$refs.carousel.next()
        },
        showPrev(){
            this.$refs.carousel.prev()
        },
    }
    

}
</script>

<style>

</style>