<template>
  <!--====== APPIE FEATURES PART START ======-->
    <section class="appie-features-area pt-100" id="features">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-3">
                    <div class="appie-features-tabs-btn">
                        <div class="nav flex-column nav-pills"  role="tablist" aria-orientation="vertical">
                            <a @click.prevent="selectFeature('setting')" class="nav-link" :class="[selectedTab==='setting'?'active':'']" data-toggle="pill"  role="tab" aria-controls="v-pills-home" aria-selected="true"><i class="fas fa-users"></i> Community Commitment</a>
                            <a @click.prevent="selectFeature('report')" class="nav-link" :class="[selectedTab==='report'?'active':'']"  data-toggle="pill" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class="fas fa-shield-alt"></i> Proactive Crime Prevention</a>
                            <a @click.prevent="selectFeature('notice')" class="nav-link" :class="[selectedTab==='notice'?'active':'']"  data-toggle="pill"  role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-book"></i>Education & Empowerment</a>
                            <a @click.prevent="selectFeature('lock')" class="nav-link" :class="[selectedTab==='lock'?'active':'']" data-toggle="pill"  role="tab" aria-controls="v-pills-settings" aria-selected="false"><i class="fas fa-cogs"></i>Innovation & Adaptability</a>
                        </div>
                    </div>  
                </div>
                <div class="col-lg-9">
                    <div class="tab-content" >
                            <div :class="[selectedTab==='setting'?'active show':'']"  class="tab-pane fade "  role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <div class="appie-features-thumb text-center wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
                                            <img src="@/assets/images/features-thumb-c.png" alt=""/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="appie-features-content wow animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="600ms">
                                            <!-- <span>Features Section 2</span> -->
                                            <h3 class="title">Community-Centric Commitment<br/>   </h3>
                                            <p>We prioritize the safety and well-being of the entire community, fostering a collective spirit that goes beyond individual interests.</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div :class="[selectedTab==='report'?'active show':'']"  class="tab-pane fade"  role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <div class="appie-features-thumb text-center animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
                                            <img src="@/assets/images/features-thumb-a.png" alt=""/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="appie-features-content animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="600ms">
                                            <!-- <span>Custom Reacyions</span> -->
                                            <h3 class="title">Proactive Crime Prevention</h3>
                                            <p>We believe in a proactive approach to crime prevention, emphasizing collective action by residents and utilizing innovative strategies to safeguard neighborhoods.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div :class="[selectedTab==='notice'?'active show':'']"  class="tab-pane fade"  role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <div class="appie-features-thumb text-center animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
                                            <img src="@/assets/images/features-thumb-e.png" alt=""/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="appie-features-content animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="600ms">
                                            <!-- <span>Custom Reacyions</span> -->
                                            <h3 class="title">Education and Empowerment</h3>
                                            <p>We empower citizens through education, encouraging them to actively participate in creating safer neighborhoods and enhancing their overall quality of life.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div :class="[selectedTab==='lock'?'active show':'']" class="tab-pane fade"  role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <div class="appie-features-thumb text-center animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
                                            <img src="@/assets/images/features-thumb-b.png" alt=""/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="appie-features-content animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="600ms">
                                            <!-- <span>Custom Reacyions</span> -->
                                            <h3 class="title">Innovation and Adaptability</h3>
                                            <p>Excel Security Solutions embraces innovation and adapts to evolving security needs, constantly seeking new ways to enhance the effectiveness of the Chalert Neighbourhood Watch program.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="features-shape-1">
            <img src="@/assets/images/shape/shape-2.png" alt="">
        </div>
        <div class="features-shape-2">
            <img src="@/assets/images/shape/shape-15.png" alt="">
        </div>
        <div class="features-shape-3">
            <img src="@/assets/images/shape/shape-8.png" alt="">
        </div>
        <div class="features-shape-4">
            <img src="@/assets/images/shape/shape-8.png" alt="">
        </div>
        <div class="features-shape-5">
            <img src="@/assets/images/shape/shape-8.png" alt="">
        </div> -->
        
    </section>
    
    <!--====== APPIE FEATURES PART ENDS ======-->
</template>

<script>
export default {
    data(){
        return{
            selectedTab:'setting',
            switchPlan:true,
        }
    },
    methods:{
         selectFeature(name){
            this.selectedTab=name
        },
    }
}
</script>

<style>


</style>