<template>
      <!--====== APPIE COUNTER PART START ======-->
    
    <section class="appie-counter-area pt-90 pb-190" id="mycounter">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-section-title">
                        <h3 class="appie-title">{{title}}</h3>
                        <p>{{description}}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="appie-single-counter mt-30 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
                        <div class="counter-content">
                            <div class="icon">
                                <img src="@/assets/images/icon/counter-icon-1.svg" alt="">
                            </div>
                            <h3 class="title">
                                <span class="counter-item">
                                    <span v-if="showCounters">
                                        <coun-down-com :endVal="100" />
                                    </span>
                                    
                                        <!-- <template v-else>0</template> -->
                                </span>k+</h3>
                            <p>Active Installation</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="appie-single-counter mt-30 item-2 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="400ms">
                        <div class="counter-content">
                            <div class="icon">
                                <img src="@/assets/images/icon/counter-icon-2.svg" alt="">
                            </div>
                            <h3 class="title">
                                <span class="counter-item">
                                    <span v-if="showCounters">
                                        <coun-down-com :endVal="376" />
                                    </span>
                                
                                </span>+</h3>
                            <p>Active Installation</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="appie-single-counter mt-30 item-3 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="600ms">
                        <div class="counter-content">
                            <div class="icon">
                                <img src="@/assets/images/icon/counter-icon-3.svg" alt="">
                            </div>
                            <h3 class="title">
                                <span class="counter-item">
                                     <span v-if="showCounters">
                                        <coun-down-com :endVal="253" />
                                    </span>
                                </span>+</h3>
                            <p>Active Installation</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="appie-single-counter mt-30 item-4 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="800ms">
                        <div class="counter-content">
                            <div class="icon">
                                <img src="@/assets/images/icon/counter-icon-4.svg" alt="">
                            </div>
                            <h3 class="title">
                                <span class="counter-item">
                                     <span v-if="showCounters">
                                        <coun-down-com :endVal="865" />
                                    </span>
                                </span>k+</h3>
                            <p>Active Installation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!--====== APPIE COUNTER PART ENDS ======-->
</template>

<script>

import CounDownCom from '../Helper/CounDownCom.vue';
export default {
     components: {
          CounDownCom
    },
    props:{
        title:{
            type:String,
        },
        description:{
            type:String,
        },
    },
    data() {
      return {
        showCounters: false,
        counterPositions:null,
      };
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
      }
    }

}
</script>

<style>

</style>