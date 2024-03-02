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
                                        <li><i class="fal fa-check"></i><span>Free Security Consultation</span></li>
                                        <li><i class="fal fa-check"></i><span>Timely Updates via Email</span></li>
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
                                        <li><i class="fal fa-check"></i><span>Free Security Consultation</span></li>
                                        <li><i class="fal fa-check"></i><span>Timely Updates</span></li>
                                        <li><i class="fal fa-check"></i><span>ProtectMe Mobile App</span></li>
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
                                    <div class="price-range"><sup>CHF</sup> <span>9.50</span><p>/day</p></div>
                                        <div class="daily"><p>290 CHF/month</p></div>
                                    <p>Elevate your security with the Gold Program, providing advanced features for complete chalet protection.</p>
                                </div>
                                <div class="pricig-body">
                                    <ul>
                                        <li><h4>Key Features:</h4></li>
                                        <li><i class="fal fa-check"></i><span>Free Security Consultation</span></li>
                                        <li><i class="fal fa-check"></i><span>Timely Updates</span></li>
                                        <li><i class="fal fa-check"></i><span>ProtectMe Mobile App</span></li>
                                        <li><i class="fal fa-check"></i><span>Emergency SOS Button</span></li>
                                        <li><i class="fal fa-check"></i><span>Multiple Daily Vehicule Patrol</span></li>
                                        <li><i class="fal fa-check"></i><span>Rapid Intervention</span></li>
                                        <li><i class="fal fa-check"></i><span>CHalert Watch Stickers</span></li>
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
                                    <div class="price-range"><sup>CHF</sup> <span>19.50</span><p>/day</p></div>
                                    <div class="daily"><p>555 CHF/month</p></div>
                                    <p>Experience the pinnacle of chalet security with our Platinum Program, offering the highest level of protection.</p>
                                </div>
                                <div class="pricig-body">
                                    <ul>
                                        <li><h4>Key Features:</h4></li>
                                        <li><i class="fal fa-check"></i><span>Free Security Consultation</span></li>
                                        <li><i class="fal fa-check"></i><span>Timely Updates</span></li>
                                        <li><i class="fal fa-check"></i><span>ProtectMe Mobile App</span></li>
                                        <li><i class="fal fa-check"></i><span>Emergency SOS Button</span></li>
                                        <li><i class="fal fa-check"></i><span>Multiple Daily Vehicule Patrol</span></li>
                                        <li><i class="fal fa-check"></i><span>Rapid Intervention</span></li>
                                        <li><i class="fal fa-check"></i><span>CHalert Watch Stickers</span></li>
                                        <li><i class="fal fa-check"></i><span>One Daily Foot Patrol</span></li>
                                        <li><i class="fal fa-check"></i><span>Security Point of Contact</span></li>
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

<style scoped>

.pricig-body ul {
  padding: 0;
  list-style: none;
}

.pricig-body li {
  display: flex;
  align-items: center; /* Vertically center the items */
 /* justify-content: center; /* Horizontally center the items */
 /* flex-wrap: wrap; /* Allow items to wrap as needed */
}

.pricig-body li i {
  margin-right: 10px; /* Add some space between the icon and the text */
}

.pricig-body li span {
  max-width: 90%; /* Prevent the text from extending too far */
}

</style>