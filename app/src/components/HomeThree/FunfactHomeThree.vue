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
    <!--====== APPIE FUN FACT PART START ======-->
    
    <section class="appie-fun-fact-area" id="mycounter">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-fun-fact-box wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="400ms">
                        <div class="row r">
                            <div class="col-lg-6">
                                <div class="appie-fun-fact-content">
                                    <h3 class="title">Get started with Appie Template.</h3>
                                    <p>The app provides design and digital marketing, applied arts can include industrial design</p>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="appie-fun-fact-item">
                                                
                                                <h4 class="title">
                                                    <coun-down-com v-if="showCounters" class="title" :endVal="700" />
                                                    <span v-else class="title">0</span>
                                                    k
                                                </h4>
                                                <span>App Downloads</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="appie-fun-fact-item">
                                                <h4 class="title"> <coun-down-com v-if="showCounters" class="title" :endVal="390" />
                                                    <span v-else class="title">0</span>+</h4>
                                                <span>Average Review</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="appie-fun-fact-item">
                                                <h4 class="title"> <coun-down-com v-if="showCounters" class="title" :endVal="30" />
                                                    <span v-else class="title">0</span>M</h4>
                                                <span>Active Users</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="appie-fun-fact-play">
                                    <a class="appie-video-popup" @click.prevent="openVideo" style="cursor: pointer" ><i class="fas fa-play"></i></a>
                                    <img src="@/assets/images/fun-fact-thumb.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!--====== APPIE FUN FACT PART ENDS ======-->
  </div>
</template>

<script>
import CounDownCom from '../Helper/CounDownCom.vue'
export default {
	components: { CounDownCom },
    data() {
        return{
            showVideo:false,
             counterPositions:null,
             showCounters: false
             
        }
    },
     mounted() {
        var rec = document.getElementById('mycounter')
        var currentPosition = rec.offsetTop - document.body.scrollTop;
        this.counterPositions=currentPosition
        window.addEventListener('scroll',()=>{
            var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            if(this.counterPositions !== null){
                if(currentScrollPosition + 500>this.counterPositions){
                    this.examplem()  
                }
            }
            
        })
    },
    methods: {
    examplem(){
        this.showCounters = true;
        this.counterPositions=null
      },
        openVideo(){
            this.showVideo = !this.showVideo
        },
    }

}
</script>

<style>

</style>