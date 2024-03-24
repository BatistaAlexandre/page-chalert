<template>
  <!--====== APPIE FEATURES PART START ======-->
    <section class="appie-features-area pt-100" id="features">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-3">
                    <div class="appie-features-tabs-btn">
                        <div class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                            <a @click.prevent="selectFeature('setting')" class="nav-link" :class="[selectedTab==='setting'?'active':'']" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="true"><i class="fas fa-users"></i> <span class="nav-link-text">Community Commitment</span></a>
                            <a @click.prevent="selectFeature('report')" class="nav-link" :class="[selectedTab==='report'?'active':'']" data-toggle="pill" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class="fas fa-shield-alt"></i> <span class="nav-link-text">Proactive Crime Prevention</span></a>
                            <a @click.prevent="selectFeature('notice')" class="nav-link" :class="[selectedTab==='notice'?'active':'']" data-toggle="pill" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-book"></i> <span class="nav-link-text">Education & Empowerment</span></a>
                            <a @click.prevent="selectFeature('lock')" class="nav-link" :class="[selectedTab==='lock'?'active':'']" data-toggle="pill" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i class="fas fa-cogs"></i> <span class="nav-link-text">Innovation & Adaptability</span></a>
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
                                            <h3 class="title">Community Commitment<br/>   </h3>
                                            <p>We prioritise the safety and well-being of the entire community in addition to individual properties, fostering a spirit of togetherness and deterring criminal activities.</p> 
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
                                            <p>We practice a proactive approach to crime prevention. Our localised, professional service means swift solutions to any of your security needs.</p>
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
                                            <p>We empower our clients with education. Our security personnel have unrivalled local and operational knowledge to meet your needs.</p>
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
                                            <p>At CHALERT, we embrace innovation throughout our operations, from using the latest technologies in surveillance, to offering round-the-clock care via the ProtectMe mobile app.</p>
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

    .nav-link {
        display: flex; /* Make the link use flexbox layout */
        align-items: center; /* Align items vertically in the center */
    }

    .nav-link i {
        margin-right: 8px; /* Add some space between the icon and the text */
        flex-shrink: 0;
    }

    .nav-link-text {
        font-size: 14px;
        flex: 1; /* Allow the text to expand and fill the available space */
        text-align: left; /* Align text to the left */
    }

</style>