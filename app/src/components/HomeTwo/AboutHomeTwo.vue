<template>
      <!--====== APPIE ABOUT PART START ======-->
    
    <section class="appie-about-area mb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-about-box wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="about-thumb">
                                    <img src="@/assets/images/about-thumb.png" alt="">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="appie-about-content">
                                    <span>Marketing</span>
                                    <h3 class="title">{{title}}</h3>
                                    <p>{{description}}</p>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="appie-about-service mt-30">
                                            <div class="icon">
                                                <i class="fal fa-check"></i>
                                            </div>
                                            <h4 class="title">Carefully designed</h4>
                                            <p>Mucker plastered bugger all mate morish are.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="appie-about-service mt-30">
                                            <div class="icon">
                                                <i class="fal fa-check"></i>
                                            </div>
                                            <h4 class="title">Choose a App</h4>
                                            <p>Mucker plastered bugger all mate morish are.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!--====== APPIE ABOUT PART ENDS ======-->
</template>

<script>
export default {
    props:{
        title:{
            type:String,
        },
        description:{
            type:String,
        },
    }

}
</script>

<style>

</style>