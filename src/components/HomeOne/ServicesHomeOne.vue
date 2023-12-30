<template>
  <!--====== APPIE SERVICES PART START ======-->
    
    <section class="appie-service-area pt-90 pb-100" id="service">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="appie-section-title text-center">
                        <h3 class="appie-title">{{section_heading}}<br> {{more_heading}}</h3>
                        <p>{{description}} </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6" v-for="(item,index) in grid_items" :key="index">
                    <div :class="[item.customClass && item.customClass !== ''?item.customClass:'']" class="appie-single-service text-center mt-30 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
                        <div class="icon">
                            <img :src="item.icon" alt="">
                            <span>{{item.count}}</span>
                        </div>
                        <h4 class="appie-title">{{item.title}}</h4>
                        <p>{{item.content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!--====== APPIE SERVICES PART ENDS ======-->
</template>

<script>

export default {
    props:{
        section_heading:{
            type: String,
        },
        more_heading:{
            type:String
        },
        description:{
            type:String
        },
        grid_items:{
            type:Array,
        }
    },

}
</script>

<style>

</style>