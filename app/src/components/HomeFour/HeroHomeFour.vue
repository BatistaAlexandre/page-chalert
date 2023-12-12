<template>
  <div>
      <div v-if="showVideo">
            <div class="mfp-bg mfp-ready" @click.prevent="openVideo"></div>
            <div class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabindex="-1" style="overflow: hidden auto;">
                <div class="mfp-container mfp-s-ready mfp-iframe-holder">
                    <div class="mfp-content">
                        <div class="mfp-iframe-scaler">
                            <button title="Close (Esc)" type="button" class="mfp-close" @click.prevent="openVideo">×</button>
                            <iframe class="mfp-iframe" src="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1" frameborder="0" allowfullscreen=""></iframe>
                            </div>
                        </div>
                    <div class="mfp-preloader">Loading...</div>
                </div>
            </div>
        </div>
          <!--====== APPIE HERO PART START ======-->
    
    <section class="appie-hero-area appie-hero-5-area appie-hero-3-area">
        <div class="container">
            <div class="row  justify-content-center">
                <div class="col-lg-10">
                    <div class="appie-hero-content text-center">
                        <h1 class="appie-title">Mobile Interaction Designs of January 2022 </h1>
                        <p>Jolly good excuse my french boot super my good sir cup of <br> char richard about chinwag.</p>
                        <div class="hero-btns">
                            <a class="main-btn" href="#">Get a Quote</a>
                            <a class="appie-video-popup" style="cursor: pointer" @click.prevent="openVideo"><i class="fas fa-play"></i> Watch the trailer</a>
                        </div>
                        <div class="thumb mt-80 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="400ms">
                            <img src="@/assets/images/hero-thumb-6.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!--====== APPIE HERO PART ENDS ======-->
  </div>
</template>

<script>
export default {
    data() {
        return{
            showVideo:false,
        }
    },
    methods: {
        openVideo(){
            this.showVideo = !this.showVideo
        },
    }


}
</script>

<style>

</style>