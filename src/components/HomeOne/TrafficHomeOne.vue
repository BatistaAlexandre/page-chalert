<template>
  <!--====== APPIE TRAFFIC PART START ======-->
    
    <section class="appie-traffic-area pt-100 pb-10">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 appie-section-title">
                    <div class="appie-traffic-title">
                        <span>{{small_title}}</span>
                        <h3 class="title">{{big_title}}</h3>
                        <p>{{description}}</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6" v-for="(feature,index) in features" :key="index">
                            <div class="appie-traffic-service mb-30" :class="[feature.bg && feature.bg !== '' ? feature.bg :'']">
                                <div class="icon">
                                    <i class="fal fa-check"></i>
                                </div>
                                <h5 class="title">{{feature.title}}</h5>
                                <p>{{feature.description}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="traffic-thumb">
            <img src="@/assets/images/traffic-thumb.png" alt="" />
        </div>
    </section>
    
    <!--====== APPIE TRAFFIC PART ENDS ======-->
</template>

<script>
export default {
    props:{
        traffic_thumbnail:{
            type:String,
        },
        small_title:{
            type:String,
        },
        big_title:{
            type:String
        },
        description:{
            type:String,
        },
        features:{
            type:Array,
            default:() => {
                return []
            }
        }
    }

}
</script>

<style>

</style>