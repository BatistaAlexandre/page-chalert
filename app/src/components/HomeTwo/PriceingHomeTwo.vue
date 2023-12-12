<template>
      <!--====== APPIE PRICING 2 PART START ======-->
    
    <section class="appie-pricing-2-area pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-section-title text-center">
                        <h3 class="appie-title">{{title}}</h3>
                        <p>{{description}}</p>
                        <div class="appie-pricing-tab-btn">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation"  @click.prevent="change_plan">
                                    <a class="nav-link" :class="[switchPlan?'active':'']" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Monthly</a>
                                </li>
                                <li class="nav-item" role="presentation" :class="[switchPlan?'on':'off']"  @click.prevent="change_plan">
                                    <a class="nav-link" :class="[switchPlan === false?'active':'']" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Yearly</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade" :class="[switchPlan?'active show':'']" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div class="row justify-content-center">
                                <div class="col-lg-4 col-md-6">
                                    <div class="pricing-one__single pricing-one__single_2 wow animated fadeInLeft">
                                        <div class="pricig-heading">
                                            <h6>Fresh</h6>
                                            <div class="price-range"><sup>$</sup> <span>04</span><p>/month</p></div>
                                            <p>Get your 14 day free trial</p>
                                        </div>
                                        <div class="pricig-body">
                                            <ul>
                                                <li><i class="fal fa-check"></i> 60-day chat history</li>
                                                <li><i class="fal fa-check"></i> 15 GB cloud storage</li>
                                                <li><i class="fal fa-check"></i> 24/7 Support</li>
                                            </ul>
                                            <div class="pricing-btn mt-35">
                                                <a class="main-btn" href="#">Choose plan</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="pricing-one__single pricing-one__single_2 active wow animated fadeInUp">
                                        <div class="pricig-heading">
                                            <h6>Sweet</h6>
                                            <div class="price-range"><sup>$</sup> <span>16</span><p>/month</p></div>
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
                                            <div class="pricing-rebon">
                                                <span>Most Popular</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="pricing-one__single pricing-one__single_2 item-2 wow animated fadeInRight">
                                        <div class="pricig-heading">
                                            <h6>Juicy</h6>
                                            <div class="price-range"><sup>$</sup> <span>27</span><p>/month</p></div>
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
                        <div class="tab-pane fade" :class="[switchPlan=== false?'active show':'']"  id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="row justify-content-center">
                                <div class="col-lg-4 col-md-6">
                                    <div class="pricing-one__single pricing-one__single_2 animated fadeInLeft">
                                        <div class="pricig-heading">
                                            <h6>Fresh</h6>
                                            <div class="price-range"><sup>$</sup> <span>32</span><p>/Yearly</p></div>
                                            <p>Get your 14 day free trial</p>
                                        </div>
                                        <div class="pricig-body">
                                            <ul>
                                                <li><i class="fal fa-check"></i> 60-day chat history</li>
                                                <li><i class="fal fa-check"></i> 15 GB cloud storage</li>
                                                <li><i class="fal fa-check"></i> 24/7 Support</li>
                                            </ul>
                                            <div class="pricing-btn mt-35">
                                                <a class="main-btn" href="#">Choose plan</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="pricing-one__single pricing-one__single_2 active animated fadeInUp">
                                        <div class="pricig-heading">
                                            <h6>Sweet</h6>
                                            <div class="price-range"><sup>$</sup> <span>116</span><p>/Yearly</p></div>
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
                                            <div class="pricing-rebon">
                                                <span>Most Popular</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="pricing-one__single pricing-one__single_2 item-2 animated fadeInRight">
                                        <div class="pricig-heading">
                                            <h6>Juicy</h6>
                                            <div class="price-range"><sup>$</sup> <span>227</span><p>/Yearly</p></div>
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
            </div>
        </div>
    </section>
    
    <!--====== APPIE PRICING 2 PART ENDS ======-->
</template>

<script>
export default {
    props:{
        title: {
            type: String,
        },
        description: {
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