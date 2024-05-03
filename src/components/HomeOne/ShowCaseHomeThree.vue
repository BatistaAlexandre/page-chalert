<template>
    <!--====== APPIE SHOWCASE PART START ======-->
    
    <section class="appie-showcase-area ">
        <div class="container">
            <div class="row">
                <!-- <button @click="toggler = !toggler">
            Toggle Lightbox
            </button> -->
                <!-- <FsLightbox
                    :toggler="toggler"
                    :sources="images"
                /> -->
                 <!-- all props & events -->
                <vue-easy-lightbox
                scrollDisabled
                escDisabled
                moveDisabled
                :visible="visible"
                :imgs="imgs"
                :index="index"
                @hide="handleHide"
                ></vue-easy-lightbox>
                <div class="col-lg-12">
                    <div class="appie-section-title text-center">
                        <h3 class="appie-title">Business Partnership</h3>
                        <p>Meet our business partners actively shaping the security landscape in collaboration with the Chalert program. <br/>CHalert connects hospitality outlets, local companies, and the local authorities in the region. Our goal is to create a safe environment by detecting, deterring, and delaying criminal acts. We work together to prevent and discourage crime through effective communication and collaboration. Find out more how you can become a business partner.</p>
                    </div>
                </div>
            </div>
            <div class="row appie-showcase-slider">
                <VueSlickCarousel v-bind="settings" ref="carousel">
                    <template v-for="(image,index) in images">
                        <div :key="index" class="col-lg-3">
                        <div class="appie-showcase-item mt-30">
                            <a class="appie-image-popup"  @click.prevent="showMultiple(index)" >
                                <img class="logo-img" :src="image.image" alt="">
                            </a>
                        </div>
                    </div>
                    </template>
                </VueSlickCarousel>
            </div>
            <div class="container">
        <b-row class="justify-content-center mt-30">
            <b-col cols="12" class="text-center">
                <a class="main-btn" href="#Contact" @click.prevent="openPartnerModal">BECOME OUR PARTNER</a>
                <p>Click to become an alliance or business partner</p>
            </b-col>
        </b-row>
    </div>
        </div>

         <!-- Description Modal -->
         <b-modal
            v-model="descriptionVisible"
            id="description-modal"
            content-class="custom-modal-content"
            centered
            hide-footer
            hide-header
            @shown="addBodyClass"
            @hidden="removeBodyClass"
        >
        <div class="modal-body">
             <div class="logo-container">
                <div class="pt-10"></div>
                <img :src="selectedLogoImage" alt="Logo" class="logo-img-modal">
            </div>
            <div class="description-container">
                <p>{{ selectedDescription }}</p>
                <p class="bold pt-3">{{ additionalDescription }}</p>
                    <div class="contact-data">
                        <p class="pt-4">{{ contact }}</p>
                        <p class="pt-2">{{ address }}</p>
                        <p class="pt-2">{{ address2 }}</p>
                        <p class="pt-3">Phone: <span class="bold">{{ phone }}</span></p>
                        <p class="pt-2">Email: <span class="bold">{{ email }}</span></p>
                    </div>    
            </div>
         </div>
            
        </b-modal>


         <!-- Partner Modal-->
        
         <b-modal
    v-model="partnerModalVisible"
    id="partner-modal"
    content-class="custom-modal-content"
    centered
    hide-footer
    hide-header
    @shown="addBodyClass"
    @hidden="removeBodyClass"
>
    <div class="modal-header">
        <h4>Become Chalert's Partner</h4>
        <p>I am interested in becoming a CHalert Partner</p>
    </div>
    <form @submit.prevent="submitForm" id="partner-form">
        <div class="checkbox-group mt-30">
            <span v-if="submissionMessage" class="submission-message">{{ submissionMessage }}</span>
            <div class="checkbox-item mt-2">
                <label v-for="(option, index) in options" :key="index">
            <input type="checkbox" v-model="form.role" :name="`role_${index}`" :value="option" class="checkbox-box"/>
            {{ option }}
          </label>
            </div>
</div>

        <div class="input-box mt-10">
            <input type="text" v-model="form.company" name="company" placeholder="Company Name" class="form-control mt-2">
            <input type="text" v-model="form.name" name="name" placeholder="Contact Name" class="form-control mt-2">
            <input type="text" v-model="form.phone" name="phone" placeholder="Business Number" class="form-control mt-2">
            <input type="text" v-model="form.mobile" name="mobile" placeholder="Mobile Number" class="form-control mt-2">
            <input type="email" v-model="form.email" name="email" placeholder="Company Email" class="form-control mt-2">
            <input type="email" v-model="form.email2" name="email2" placeholder="Second Email" class="form-control mt-2">
            <input type="text" v-model="form.address" name="address" placeholder="Company Address" class="form-control mt-2"> 
            <textarea v-model="form.message" name="message" placeholder="Your Message" class="form-control mt-2" rows="4"></textarea>
            <div class="checkbox-group checkbox-item">
                <input type="checkbox" v-model="acceptTerms" name="terms">
                <label for="terms">I accept terms & conditions</label>
            </div>
        </div>
        <div class="button-container">
            <button type="submit" class="main-btn"> {{ isSubmitting ? 'Sending...' : 'SEND' }}</button>
        </div>
    </form>
</b-modal>
    


    </section>
    
    <!--====== APPIE SHOWCASE PART ENDS ======-->
</template>

<script>  
import VueEasyLightbox from 'vue-easy-lightbox'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { BModal } from 'bootstrap-vue'
import emailjs from 'emailjs-com'
export default {
    components:{ VueSlickCarousel,VueEasyLightbox, BModal},
    data(){
        return {
            imgs: '', 
            visible: false,
            index: 0 ,
            descriptionVisible: false, // For description modal
            selectedDescription: '', // Selected logo description
            additionalDescription: '',
            contact: '',
            address: '',
            address2: '',
            phone: '',
            email: '',
            selectedLogoImage: '',
            partnerModalVisible: false,//For partner modal
            isSubmitting: false,
            submissionMessage: '',
            form: {
                role: [],
                company: '',
                name: '',
                mobile: '',
                phone: '',
                email: '',
                email2: '',
                address: '',
                message: ''
                },
            acceptTerms: false,
            options: [
                "Business Partner",
                "Alliance Partner"
            ],
            images: [
                {image: require('@/assets/images/partner-3.png'), 
                    description: "The Hotel Olden Gstaad is a historic and iconic landmark on the promenade, where you can enjoy a cozy and elegant stay. The hotel is committed to preserving the charm security and privacy of the region, And is the first hotel to join the CHalert Neighbourhood Watch, a network of local businesses and chalet residents who look out for each other.",
                    additional: "Where the world dines",
                    contact: "Hotel Olden",
                    address: "Promenade",
                    address2: "3780 Gstaad",
                    phone: "+41337484950",
                    email: "info@hotelolden.com"
                
                },
                {image: require('@/assets/images/partner-1.png'), description: " "},
                {image: require('@/assets/images/partner-2.png'), description: " "},
            ],
            settings: {
                autoplay: true,
                arrows:true,
                dots:true,
                centerMode: true, 
                slidesToShow:5,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            centerMode: false, 
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            centerMode: false, 
                        }
                    }
                ]
            },
        }
    },
    methods: {

        showMultiple(i) {
            
            this.selectedDescription = this.images[i].description; 
            this.selectedLogoImage = this.images[i].image; // Set the selected logo description
            this.descriptionVisible = true; // Show the description modal
            this.contact = this.images[i].contact;
            this.address = this.images[i].address;
            this.address2 = this.images[i].address2;
            this.phone = this.images[i].phone;
            this.email = this.images[i].email;
            this.selectedLogoImage = this.images[i].image; // Set the selected logo description
            this.descriptionVisible = true; // Show the description modal
        },
        show() {
            this.visible = true
        },
        handleHide() {
            this.visible = false
        },
        addBodyClass() {
        document.body.classList.add('modal-open-dark');
         },
         removeBodyClass() {
            document.body.classList.remove('modal-open-dark');
         },
         openPartnerModal() {
             this.partnerModalVisible = true; // This will open the modal
         },

         resetForm() {
            this.form = {
                role: [],
                company: '',
                name: '',
                mobile: '',
                phone: '',
                email: '',
                email2: '',
                address: '',
                message: ''
            },
        this.acceptTerms = false; // Reset acceptTerms
        setTimeout(() => {
         this.submissionMessage = ''; // Clear submission message
         }, 3000); // Adjust the delay as needed
    },


         submitForm() {
            const SERVICE_ID = 'service_2y3rs3r';
            const TEMPLATE_ID = 'template_8ccsdol';
            const PUBLIC_KEY = 'MVekMSZT8jTmKVA4n';
            const emailParams = {
            from_name: this.form.company,
            from_email: this.form.email,
            message: this.form.message,
            contact: this.form.name,
            email: this.form.email,
            email2: this.form.email2,
            company: this.form.company,
            phone: this.form.phone,
            mobile: this.form.mobile,
            address: this.form.address,
            role: this.form.role.join(', '),
      };
      console.log("Params:", emailParams)


      if (!this.acceptTerms) {
        alert("Please accept the terms and conditions.");
        return;
      }

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

    },

    
    }

}
</script>

<style scoped>

.appie-showcase-item {
    text-align: center;
}allies

.logo-img {
    max-width: 100%;
    height: auto;
    transition: transform 0.3s ease;
    cursor: pointer;
}

.logo-img:hover {
    transform: scale(1.1);
}

/* Dark overlay when modal is open */
.modal-open-dark {
    position: relative;
    z-index: 1040; /* Ensure it's below the modal z-index */
}

.modal-open-dark::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
    z-index: -1;
}


/* Custom modal content styles */
.custom-modal-content {
    border-radius: 15px; /* Rounded corners */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Small shadow effect */
    padding: 2rem; /* Adequate padding */
    border: none;
    background-color: #fff
}

/* Hides the default close icon */
.custom-modal-content .modal-header .close {
    display: none;
}

/* Ensure the modal body (where your content is) is centered */
.custom-modal-content .modal-body {
    text-align: center; /* Center the text */
}



/* Style for the logo and description container */
.logo-container, .description-container {
    margin-bottom: 1rem; /* Spacing between logo and description */
}

/* Logo image styles */
.logo-container img {
    max-width: 100px; /* Adjust based on your logo size */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 1rem; /* Space between logo and text */
}

/* Description text styles */
.description-container {
    /* Additional styling for the description text if needed */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.logo-img-modal {
    max-width: 150px; /* Adjust based on your needs */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 1rem; /* Space between logo and text */
    display: block; /* Ensure it's a block element to center */
    margin-left: auto; /* Center the image */
    margin-right: auto;
}

.modal-backdrop.show {
    opacity: 0.85 !important; /* Make the body darker when modal is open */
}

.custom-modal-content, .modal-dialog {
    border: none !important; /* Remove border from the modal */
    background-color: transparent !important; /* Ensure no background color is causing a border-like effect */
}

.text-center > p {
    margin-top: 10px; 
}


.main-btn {
    font-weight: bold; 
    padding: 0px 30px;
}

.button-container {
  display: flex;
  justify-content: center; 
  margin-top: 20px; 
}

.checkbox-group {
    display: flex;
    justify-content: center; 
    margin-top: 20px;
    flex-wrap: wrap;
    flex-direction: row;
}

.checkbox-item {
    margin-right: 15px; 
}

.checkbox-group label {
    font-size: 12px;
    margin-left: 10px;
}

.modal-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.modal-header p{
 text-align: center;
 padding: 10px;

}

.input-box {
    padding: 10px 30px;
}


</style>