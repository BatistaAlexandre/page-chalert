<template>
      <!--====== APPIE VIDEO PLAYER PART START ======-->
   <div>
    <div v-if="showVideo">
        <div class="mfp-bg mfp-ready" @click.prevent="openVideo"></div>
        <div class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabindex="-1" style="overflow: hidden auto;">
            <div class="mfp-container mfp-s-ready mfp-iframe-holder">
                <div class="mfp-content">
                    <div class="mfp-iframe-scaler">
                        <button title="Close (Esc)" type="button" class="mfp-close" @click.prevent="openVideo">×</button>
                        <iframe class="mfp-iframe" :src="videoUrl" frameborder="0" allowfullscreen=""></iframe>
                        </div>
                    </div>
                <div class="mfp-preloader">Loading...</div>
            </div>
        </div>
    </div>
    <section class="appie-video-player-area pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="appie-video-player-item">
                        <div class="thumb">
                            <img :src="thumbnail" alt="">
                            <div class="video-popup" @click.prevent="openVideo">
                                <a class="appie-video-popup" style="cursor: pointer;"><i class="fas fa-play"></i></a>
                            </div>
                        </div>
                        <div class="content">
                            <h3 class="title">{{ title}}</h3>
                            <p>{{description}}</p>
                            <a class="main-btn" href="#">Get Started</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="appie-video-player-slider" style="position:relative">
                        <span @click.prevent="showPrev" class="prev slick-arrow" style="display: block;"><i class="fal fa-arrow-left"></i></span>
                         <VueSlickCarousel v-bind="settings" ref="carousel">
                                <div class="item">
                                    <img src="@/assets/images/video-slide-1.jpg" alt="">
                                </div>
                                <div class="item">
                                    <img src="@/assets/images/video-slide-2.jpg" alt="">
                                </div>
                         </VueSlickCarousel>
                         <span @click.prevent="showNext" class="next slick-arrow" style="display: block;"><i class="fal fa-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </div>
    
    <!--====== APPIE VIDEO PLAYER PART ENDS ======-->
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components:{ VueSlickCarousel},
    props:{ 
        title:{
            type:String,
        },
        description:{
            type:String,
        },
        videoUrl:{
            type:String,
        },
        thumbnail:{
            type:String,
        }
    },
    data() {
        return{
            showVideo:false,
            settings: {
                autoplay: true,
                arrows:false,
                dots:false
            },
        }
    },
    methods: {
        openVideo(){
            this.showVideo = !this.showVideo
        },
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