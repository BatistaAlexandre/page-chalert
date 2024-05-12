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
                                    <div class="price-range"><sup>CHF</sup> <span>0.0</span><p>/day</p></div>
                                    <p>Join the CHalert Community for free and be part of a network that keeps you informed and connected.</p>
                                </div>
                                <div class="divider"></div>
                                <div class="pricig-body">
                                    <ul>
                                        <li><h4>Key Features:</h4></li>
                                        <li><i class="fal fa-check"></i><span>Free Security Consultation</span></li>
                                        <li><i class="fal fa-check"></i><span>Timely Updates via Email</span></li>
                                    </ul>
                                    <div class="pricing-btn mt-35">
                                        <a class="main-btn" href="#Plans" @click="showModal('Free Plan')">Request Details</a>
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
                                     
                                    <p>Join our Gold program to receive advanced services designed for holistic chalet protection.</p>
                                </div>
                                <div class="divider"></div>
                                <div class="pricig-body">
                                    <ul>
                                        <li><h4>Key Features:</h4></li>
                                        <li><i class="fal fa-check"></i><span>Free Security Consultation</span></li>
                                        <li><i class="fal fa-check"></i><span>Timely Updates</span></li>
                                        <li><i class="fal fa-check"></i><span>Multiple Vehicle Patrol</span></li>
                                        <li><i class="fal fa-check"></i><span>Rapid Intervention</span></li>
                                        <li><i class="fal fa-check"></i><span>CHalert Watch Stickers</span></li>
                                    </ul>
                                    <div class="pricing-btn mt-35">
                                        <a class="main-btn" href="#Plans" @click="showModal('Gold Plan')">Request Details</a>
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
                                        <li><i class="fal fa-check"></i><span>Multiple Vehicle Patrol</span></li>
                                        <li><i class="fal fa-check"></i><span>Rapid Intervention</span></li>
                                        <li><i class="fal fa-check"></i><span>CHalert Watch Stickers</span></li>
                                        <li><i class="fal fa-check"></i><span>One Daily Foot Patrol</span></li>
                                        <li><i class="fal fa-check"></i><span>Security Point of Contact</span></li>
                                    </ul>
                                    <div class="pricing-btn mt-35">
                                        <a class="main-btn" href="#Plans" @click="showModal('Platinum Plan')">Request Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             
            </div>
        </div>

        <!-- Modal -->
        <b-modal ref="myModalRef" hide-footer hide-header centered>
            <form @submit.prevent="submitForm" class="form-body">
            <h6 class="mt-10"> I am interested in <span>{{ selectedPlan }}</span></h6>
            <div class="form-group mt-2 pl-10 pr-10">
                <input type="text" class="form-control" id="name" v-model="form.name" required placeholder="Name">
            </div>
            <div class="form-group mt-2 pl-10 pr-10">
                <input type="text" class="form-control" id="surname" v-model="form.surname" required placeholder="Surname">
            </div>
            <div class="form-group mt-2 pl-10 pr-10">
                <input type="tel" class="form-control" id="phone" v-model="form.phone" required placeholder="Phone">
            </div>
            <div class="form-group mt-2 pl-10 pr-10">
                <input type="email" class="form-control" id="email" v-model="form.email" required placeholder="Email">
            </div>
            <div class="checkbox-terms mt-2">
                <input type="checkbox" name="terms" v-model="acceptTerms">
                <label>I read and accept <a href="">terms & conditions</a></label>
            </div>
            <div class="button-area">
            <button type="submit" class="btn btn-primary mt-20" style="background-color: #ed1f27; border-color: #ed1f27; width: 100px;">Send</button>
            </div>
            </form>
        </b-modal>
    </section>
    

    
 
</template>


<script>
import { BModal } from 'bootstrap-vue';
import emailjs from 'emailjs-com'
export default {
    components: {
        BModal
    },
    props:{
        title:{
            type: String,
        },
        description:{
            type: String,
        },
        selectedPlan: {
            type: String
        }
    },
    data(){
        return{
            switchPlan:true,
            isSubmitting: false,
            acceptTerms: false,
            form:{
                name: '',
                surname: '',
                phone: '',
                email: '',
            },
            selectedPlan:[]
            
        }
    },
    methods:{
         change_plan(){
            this.switchPlan = !this.switchPlan
        },

        showModal(planName) {
            this.selectedPlan = planName;
            this.$refs.myModalRef.show();
        },

        resetForm() {
        this.form = {
        selectedPlan: [],
          name: '',
          surname: '',
          phone: '',
          email: '',
        };
        this.acceptTerms = false; 
        setTimeout(() => {
         this.submissionMessage = ''; // Clear submission message
         }, 3000); // Adjust the delay as needed
    },

        submitForm() {
            console.log('Form submitted!');
            console.log('Name:', this.form.name);
            console.log('Surname:', this.form.surname);
            console.log('Phone:', this.form.phone);
            console.log('Email:', this.form.email);
            console.log('Plan:', this.selectedPlan);
            const SERVICE_ID = 'service_zg2bepp';
            const TEMPLATE_ID = 'template_g2a1yaq';
            const PUBLIC_KEY = 'MVekMSZT8jTmKVA4n';
            const emailParams = {
                from_name: `${this.form.name} ${this.form.surname}`,
                from_email: this.form.email,
                phone: this.form.phone,
                services: this.selectedPlan,
            };


        if (!this.acceptTerms) {
            alert("Please accept the terms and conditions.");
            return;
        }

        // Initialize EmailJS with your user ID (this step can be done in your main app file if preferred)
        emailjs.init(PUBLIC_KEY);

        this.isSubmitting = true

  
      // Send the email using EmailJS
        emailjs
        .send(SERVICE_ID, TEMPLATE_ID, emailParams, PUBLIC_KEY)
            .then((response) => {
            console.log('SUCCESS!', response.status, response.text, 'Form Data:', emailParams);
            this.submissionMessage = "Form submitted successfully.";
            this.isSubmitting = false; 
            this.resetForm();
            }, (err) => {
            console.error('FAILED...', err);
            this.submissionMessage = "Failed to submit the form. Please try again.";
            this.isSubmitting = false;
            });

                this.$refs.myModalRef.hide();
            }

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
  align-items: center; 
}

.pricig-body li i {
  margin-right: 10px; 
}

.pricig-body li span {
  max-width: 90%; 
}

.pricig-heading {
  height: 311px; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.pricig-heading h6 {
  margin-bottom: 15px; 
}

.price-range {
  margin-bottom: 15px; 
}

.divider {
    border-bottom: 1px solid #ed1f27;
}

/* modal style */


.b-modal-header-close {
  color: #ed1f27;
  font-size: 24px;
}

.modal-content {
  border-radius: 10px;
}

.modal-dialog {
  margin-top: 50px; /* Adjust the distance from the top */
}

.modal-body {
  padding-bottom: 30px; /* Add space at the bottom */
}

.form-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.form-body h6 {
    text-align: center;
}

.form-body h6 span {
    color:#ed1f27
}

.button-area {
    display: flex;
    justify-content: center;
}
.checkbox-terms {
  display: flex; 
  align-items: center;
  margin: 10px 15px;
}

.checkbox-terms input[type="checkbox"] {
  margin-right: 15px; 
}

.checkbox-terms a {
 color: #ed1f27;
 font-weight: bold;
}


@media (min-width: 991px) and (max-width: 1200px) {
    .pricing-one__single {
        padding: 20px; 
    }

    .pricig-heading h6 {
        font-size: 1.2rem; 
    }

    .price-range span {
        font-size: 2rem; 
    }

    .pricig-body li span {
        font-size: 0.95rem; 
    }

    .pricing-btn a {
        padding: 5px 20px; 
        font-size: 1.1rem; 
    }
}



</style>

