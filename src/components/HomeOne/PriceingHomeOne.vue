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
                    <!-- <ul class="list-inline text-center switch-toggler-list" role="tablist" id="switch-toggle-tab">
                        <li class="month" :class="[switchPlan?'active':'']"><a href="#">Monthly</a></li>
                        <li>
                            <label class="switch" :class="[switchPlan?'on':'off']"  @click.prevent="change_plan">
                                <span class="slider round"></span>
                            </label>
                        </li>
                        <li class="year" :class="[switchPlan === false?'active':'']"><a href="#">Annualy</a></li>
                    </ul>                   -->
                </div>
            </div>
            <div class="tabed-content">
                <div id="month" :style="[switchPlan?{'display':'block'}:{'display':'none'}]">
                    <div class="row justify-content-center">
                        <div class="col-lg-3 col-md-6 wow animated fadeInLeft">
                            <div class="pricing-one__single">
                                <div class="pricig-heading">
                                    <h6>Free Membership</h6>
                                    <div class="price-range"><sup></sup> <span>FREE</span><p></p></div>
                                    <p>Join the Chalert Community for free and be part of a network that keeps you informed and connected.</p>
                                </div>
                                <div class="pricig-body">
                                    <ul>
                                        <li><h4>Key Features:</h4></li>
                                        <li><i class="fal fa-check"></i>&nbsp;&nbsp;Free Security Consultation</li>
                                        <li><i class="fal fa-check"></i>&nbsp;&nbsp;Timely Updates via Email</li>
                                    </ul>
                                    <div class="pricing-btn mt-35">
                                        <a class="main-btn" href="#Contact">Request Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow animated fadeInUp">
                            <div class="pricing-one__single">
                                <div class="pricig-heading">
                                    <h6>Silver</h6>
                                    <div class="price-range"><sup>CHF</sup> <span>19</span><p>/month</p></div>
                                    <p>Upgrade to our Silver Program for top-notch chalet security at a budget-friendly rate, ensuring peace of mind for you.</p>
                                </div>
                                <div class="pricig-body">
                                    <ul>
                                        <li><h4>Key Features:</h4></li>
                                        <li><i class="fal fa-check"></i>&nbsp;&nbsp;Free Security Consultation</li>
                                        <li><i class="fal fa-check"></i> &nbsp;&nbsp;Timely Updates</li>
                                        <li><i class="fal fa-check"></i> &nbsp;&nbsp;ProtectMe Mobile App</li>
                                    </ul>
                                    <div class="pricing-btn mt-35">
                                        <a class="main-btn" href="#Contact">Request Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!--</div>
                    <div class="row justify-content-center" style="margin-top: 1%;"> -->
                        <div class="col-lg-3 col-md-6 wow animated fadeInRight">
                            <div class="pricing-one__single center">
                                <div class="pricig-heading">
                                    <h6>Gold</h6>
                                    <div class="price-range"><sup>CHF</sup> <span>290</span><p>/month</p></div>
                                        <div class="daily"><p>only 9.50 CHF/day</p></div>
                                    <p>Elevate your security with the Gold Program, providing advanced features for complete chalet protection.</p>
                                </div>
                                <div class="pricig-body">
                                    <ul>
                                        <li><h4>Key Features:</h4></li>
                                        <li><i class="fal fa-check"></i>&nbsp;&nbsp;Free Security Consultation</li>
                                        <li><i class="fal fa-check"></i> &nbsp;&nbsp;Timely Updates</li>
                                        <li><i class="fal fa-check"></i> &nbsp;&nbsp;ProtectMe Mobile App</li>
                                        <li><i class="fal fa-check"></i> &nbsp;&nbsp;Emergency SOS Button</li>
                                        <li><i class="fal fa-check"></i> &nbsp;&nbsp;One Daily Vehicule Patrol</li>
                                        <li><i class="fal fa-check"></i> &nbsp;&nbsp;Rapid Intervention</li>
                                        <li><i class="fal fa-check"></i> &nbsp;&nbsp;CHalert Watch Stickers</li>
                                    </ul>
                                    <div class="pricing-btn mt-35">
                                        <a class="main-btn" href="#Contact">Request Details</a>
                                    </div>
                                </div>
                                <div class="pricing-rebon">
                                    <span>Most Popular</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow animated fadeInRight">
                            <div class="pricing-one__single">
                                <div class="pricig-heading">
                                    <h6>Platinum</h6>
                                    <div class="price-range"><sup>CHF</sup> <span>555</span><p>/month</p></div>
                                    <div class="daily"><p>only 19.50 CHF/day</p></div>
                                    <p>Experience the pinnacle of chalet security with our Platinum Program, offering the highest level of protection.</p>
                                </div>
                                <div class="pricig-body">
                                    <ul>
                                        <li><h4>Key Features:</h4></li>
                                        <li><i class="fal fa-check"></i>&nbsp;&nbsp;Free Security Consultation</li>
                                        <li><i class="fal fa-check"></i> &nbsp;&nbsp;Timely Updates</li>
                                        <li><i class="fal fa-check"></i> &nbsp;&nbsp;ProtectMe Mobile App</li>
                                        <li><i class="fal fa-check"></i> &nbsp;&nbsp;Emergency SOS Button</li>
                                        <li><i class="fal fa-check"></i> &nbsp;&nbsp;Multiple Daily Vehicule Patrol</li>
                                        <li><i class="fal fa-check"></i> &nbsp;&nbsp;Rapid Intervention</li>
                                        <li><i class="fal fa-check"></i> &nbsp;&nbsp;CHalert Watch Stickers</li>
                                        <li><i class="fal fa-check"></i> &nbsp;&nbsp;One Daily Foot Patrol</li>
                                        <li><i class="fal fa-check"></i> &nbsp;&nbsp;Security Point of Contact</li>
                                    </ul>
                                    <div class="pricing-btn mt-35">
                                        <a class="main-btn" href="#Contact">Request Details</a>
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
                                    <!-- <div class="pricing-btn mt-35">
                                        <a class="main-btn" href="#">Learn More</a>
                                    </div> -->
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
                                    <!-- <div class="pricing-btn mt-35">
                                        <a class="main-btn" href="#">Learn More</a>
                                    </div> -->
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
                                    <!-- <div class="pricing-btn mt-35">
                                        <a class="main-btn" href="#">Learn More</a>
                                    </div> -->
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