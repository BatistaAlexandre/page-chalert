<template>
    
    <section class="appie-pricing-area pt-90 pb-90">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-section-title text-center">
                        <h3 class="appie-title">{{title}}</h3>
                        <p>{{description}}</p>
                    </div>
                </div>
            </div>
            <div class="tabed-content">
                <div id="month" :style="[switchPlan?{'display':'block'}:{'display':'none'}]">
                    <div class="row justify-content-center">
                        <div class="col-lg-3 col-md-6 wow animated fadeInLeft">
                            <div class="pricing-one__single">
                                <div class="pricig-heading">
                                    <h6>Free</h6>
                                    <div class="price-range"><sup></sup> <span>FREE</span><p></p></div>
                                    <p>Join the Chalert Community for free and be part of a network that keeps you informed and connected.</p>
                                </div>
                                <div class="divider"></div>
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
                        <!--
                        <div class="col-lg-3 col-md-6 wow animated fadeInUp">
                            <div class="pricing-one__single">
                                <div class="pricig-heading">
                                    <h6>Silver</h6>
                                    <div class="price-range"><sup>CHF</sup> <span>19</span><p>/month</p></div>
                                    <p>Upgrade to our Silver Program for top-notch chalet security at a budget-friendly rate, ensuring peace of mind for you.</p>
                                </div>
                                <div class="divider"></div>
                                <div class="pricig-body">
                                    <ul>
                                        <li><h4>Key Features:</h4></li>
                                        <li><i class="fal fa-check"></i><span>Free Security Consultation</span></li>
                                        <li><i class="fal fa-check"></i><span>Timely Updates</span></li>
                                    </ul>
                                    <div class="pricing-btn mt-35">
                                        <a class="main-btn" href="#Contact">Request Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                   -->
                        <div class="col-lg-3 col-md-6 wow animated fadeInRight">
                            <div class="pricing-one__single center">
                                <div class="pricig-heading">
                                    <h6>Gold</h6>
                                    <div class="price-range"><sup>CHF</sup> <span>9.5</span><p>/day</p></div>
                                     
                                    <p>Join our Gold program to receive advanced services designed for holstic chalet protection.</p>
                                </div>
                                <div class="divider"></div>
                                <div class="pricig-body">
                                    <ul>
                                        <li><h4>Key Features:</h4></li>
                                        <li><i class="fal fa-check"></i><span>Free Security Consultation</span></li>
                                        <li><i class="fal fa-check"></i><span>Timely Updates</span></li>
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
                                    <div class="price-range"><sup>CHF</sup><span>19.5</span><p>/day</p></div>
                                
                                    <p>Join our Platinum program and receive a comprehensive security package offering the highest level of protection for you and your loved ones.</p>
                                </div>
                                <div class="divider"></div>
                                <div class="pricig-body">
                                    <ul>
                                        <li><h4>Key Features:</h4></li>
                                        <li><i class="fal fa-check"></i><span>Free Security Consultation</span></li>
                                        <li><i class="fal fa-check"></i><span>Timely Updates</span></li>
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
                </div>
             
            </div>
        </div>
    </section>
    
 
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
}

.pricig-body li i {
  margin-right: 10px; /* Add some space between the icon and the text */
}

.pricig-body li span {
  max-width: 90%; /* Prevent the text from extending too far */
}

.pricig-heading {
  height: 311px; /* Adjust the height as needed */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.pricig-heading h6 {
  margin-bottom: 15px; /* Add some space below the title */
}

.price-range {
  margin-bottom: 15px; /* Add some space below the price */
}

.divider {
    border-bottom: 1px solid #ed1f27;
}

/* Responsive styles for screens between 991px and 1200px */
@media (min-width: 991px) and (max-width: 1200px) {
    .pricing-one__single {
        padding: 20px; /* Increase padding for better spacing */
    }

    .pricig-heading h6 {
        font-size: 1.2rem; /* Increase the font size for the title */
    }

    .price-range span {
        font-size: 2rem; /* Larger font size for price */
    }

    .pricig-body li span {
        font-size: 0.95rem; /* Adjust the font size for the list */
    }

    .pricing-btn a {
        padding: 5px 20px; /* Increase button padding for better touch targets */
        font-size: 1.1rem; /* Larger font size for the button text */
    }
}
</style>

