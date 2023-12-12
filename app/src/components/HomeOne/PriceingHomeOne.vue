<template>
  <!--====== APPIE PRICING PART START ======-->
    
    <section class="appie-pricing-area pt-90 pb-90">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-section-title text-center">
                        <h3 class="appie-title">{{title}}</h3>
                        <p>{{description}}</p>
                    </div>
                    <ul class="list-inline text-center switch-toggler-list" role="tablist" id="switch-toggle-tab">
                        <li class="month" :class="[switchPlan?'active':'']"><a href="#">Monthly</a></li>
                        <li>
                            <!-- Rounded switch -->
                            <label class="switch" :class="[switchPlan?'on':'off']"  @click.prevent="change_plan">
                                <span class="slider round"></span>
                            </label>
                        </li>
                        <li class="year" :class="[switchPlan === false?'active':'']"><a href="#">Annualy</a></li>
                    </ul><!-- /.list-inline -->                    
                </div>
            </div>
            <div class="tabed-content">
                <div id="month" :style="[switchPlan?{'display':'block'}:{'display':'none'}]">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 wow animated fadeInLeft">
                            <div class="pricing-one__single">
                                <div class="pricig-heading">
                                    <h6>Gold</h6>
                                    <div class="price-range"><sup>CHF</sup> <span>550</span><p>/month</p></div>
                                    <p>Get your 14 day free trial</p>
                                </div>
                                <div class="pricig-body">
                                    <ul>
                                        <li><i class="fal fa-check"></i> 60-day chat history</li>
                                        <li><i class="fal fa-check"></i> 15 GB cloud storage</li>
                                    </ul>
                                    <div class="pricing-btn mt-35">
                                        <a class="main-btn" href="#">Choose plan</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow animated fadeInUp">
                            <div class="pricing-one__single center">
                                <div class="pricig-heading">
                                    <h6>Platinum</h6>
                                    <div class="price-range"><sup>CHF</sup> <span>650 </span><p>/month</p></div>
                                    <p>Billed $276 per website annually.</p>
                                </div>
                                <div class="pricig-body">
                                    <ul>
                                        <li><i class="fal fa-check"></i> 60-day chat history</li>
                                        <li><i class="fal fa-check"></i> 50 GB cloud storage</li>
                                        <li><i class="fal fa-check"></i> 24/7 Support</li>
                                    </ul>
                                    <div class="pricing-btn mt-35">
                                        <a class="main-btn" href="#">Choose plan</a>
                                    </div>
                                </div>
                                <div class="pricing-rebon">
                                    <span>Most Popular</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow animated fadeInRight">
                            <div class="pricing-one__single">
                                <div class="pricig-heading">
                                    <h6>Business</h6>
                                    <div class="price-range"><sup>CHF</sup> <span>800</span><p>/month</p></div>
                                    <p>Billed $276 per website annually.</p>
                                </div>
                                <div class="pricig-body">
                                    <ul>
                                        <li><i class="fal fa-check"></i> 60-day chat history</li>
                                        <li><i class="fal fa-check"></i> Data security</li>
                                        <li><i class="fal fa-check"></i> 100 GB cloud storage</li>
                                        <li><i class="fal fa-check"></i> 24/7 Support</li>
                                    </ul>
                                    <div class="pricing-btn mt-35">
                                        <a class="main-btn" href="#">Choose plan</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- /#month -->
                <div id="year" :style="[switchPlan=== false?{'display':'block'}:{'display':'none'}]">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 wow animated fadeInLeft">
                            <div class="pricing-one__single">
                                <div class="pricig-heading">
                                    <h6>Gold</h6>
                                    <div class="price-range"><sup>CHF</sup> <span>XXX</span><p>/Yearly</p></div>
                                    <p>Get your 14 day free trial</p>
                                </div>
                                <div class="pricig-body">
                                    <ul>
                                        <li><i class="fal fa-check"></i> 60-day chat history</li>
                                        <li><i class="fal fa-check"></i> 15 GB cloud storage</li>
                                    </ul>
                                    <div class="pricing-btn mt-35">
                                        <a class="main-btn" href="#">Choose plan</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow animated fadeInUp">
                            <div class="pricing-one__single center">
                                <div class="pricig-heading">
                                    <h6>Platinum</h6>
                                    <div class="price-range"><sup>CHF</sup> <span>XXX</span><p>/Yearly</p></div>
                                    <p>Billed $276 per website annually.</p>
                                </div>
                                <div class="pricig-body">
                                    <ul>
                                        <li><i class="fal fa-check"></i> 60-day chat history</li>
                                        <li><i class="fal fa-check"></i> 50 GB cloud storage</li>
                                        <li><i class="fal fa-check"></i> 24/7 Support</li>
                                    </ul>
                                    <div class="pricing-btn mt-35">
                                        <a class="main-btn" href="#">Choose plan</a>
                                    </div>
                                </div>
                                <div class="pricing-rebon">
                                    <span>Most Popular</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow animated fadeInRight">
                            <div class="pricing-one__single">
                                <div class="pricig-heading">
                                    <h6>Business</h6>
                                    <div class="price-range"><sup>CHF</sup> <span>XXX</span><p>/Yearly</p></div>
                                    <p>Billed $276 per website annually.</p>
                                </div>
                                <div class="pricig-body">
                                    <ul>
                                        <li><i class="fal fa-check"></i> 60-day chat history</li>
                                        <li><i class="fal fa-check"></i> Data security</li>
                                        <li><i class="fal fa-check"></i> 100 GB cloud storage</li>
                                        <li><i class="fal fa-check"></i> 24/7 Support</li>
                                    </ul>
                                    <div class="pricing-btn mt-35">
                                        <a class="main-btn" href="#">Choose plan</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!--====== APPIE PRICING PART ENDS ======-->
</template>

<script>
export default {
    props:{
        title:{
            type: String,
        },
        description:{
            type: String,
        }
    },
    data(){
        return{
            switchPlan:true
        }
    },
    methods:{
         change_plan(){
            this.switchPlan = !this.switchPlan
        },
    }

}
</script>

<style>

</style>