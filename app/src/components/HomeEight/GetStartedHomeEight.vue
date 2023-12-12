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
    <div class="appie-faq-8-area pt-100 pb-100" id="mycounter">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="appie-section-title">
                        <h3 class="appie-title">Get started with Appie Template.</h3>
                        <p>He nicked it tickety boo harry the cras bargy chap mush spiffing spend a penny the full monty burke butty.</p>
                    </div>
                    <div class="faq-accordion wow fadeInRight mt-30" data-wow-duration="1500ms">
                        <div class="accrodion-grp wow fadeIn faq-accrodion" data-wow-duration="1500ms" data-grp-name="faq-accrodion">
                            
                            <div class="accrodion" @click.prevent="OpenQuestion(1)" :class="[showQuestion === 1?'active':'']">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>Does Appie have dynamic content?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 1?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery that I bits and bobs up the cras boot.</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion" @click.prevent="OpenQuestion(2)" :class="[showQuestion === 2?'active':'']">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>Where do I usually find FAQs in a page?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 2?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery that I bits and bobs up the cras boot.</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion" @click.prevent="OpenQuestion(3)" :class="[showQuestion === 3?'active':'']">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>Website & Mobile App Design</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 3?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery that I bits and bobs up the cras boot.</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="faq-play-box">
            <div class="play-btn">
                <a @click.prevent="openVideo" class="appie-video-popup"><i class="fas fa-play"></i></a>
            </div>
            <div class="faq-play-counter">
                <div class="box-1">
                    
                    <h4 class="title"><coun-down-com v-if="showCounters" class="title" :endVal="700"/> <span v-else class="title">0</span> k</h4>
                    <span>App Downloads</span>
                </div>
                <div class="box-1 box-2">
                    <h4 class="title"><coun-down-com v-if="showCounters" class="title"  :endVal="865"/><span v-else class="title">0</span> k</h4>
                    <span>App Downloads</span>
                </div>
            </div>
        </div>
    </div>
   </div>

</template>

<script>
import CounDownCom from '../Helper/CounDownCom.vue'
export default {
	components: { CounDownCom },
    data(){
        return{
            showQuestion:1,
            showVideo:false,
            showCounters: false,
            counterPositions:null,
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
        OpenQuestion(value){
            this.showQuestion = value
        },
        openVideo(){
            this.showVideo = !this.showVideo
        },
    }   

}
</script>

<style>

</style>