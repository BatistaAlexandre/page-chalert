<template>
  <header class="appie-header-area appie-sticky">
    <div class="container">
      <div class="header-nav-box">
        <div class="row align-items-center">
          <div class="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
            <div class="appie-logo-box">
              <a href="#">
                <img v-if="dark" src="@/assets/images/logo-7.png" alt="appie" />
                <img v-else src="@/assets/images/logo-7.png" alt="appie" />
              </a>
            </div>
          </div>
          <div class="col-lg-8 col-md-1 col-sm-1 order-3 order-sm-2">
            <div class="appie-header-main-menu">
              <nav-items :menuItems="menuItems" :nasted="nasted" />
            </div>
          </div>
          <div class="col-lg-2 col-md-7 col-sm-6 col-6 order-2 order-sm-3">
            <div class="appie-btn-box" style="text-align: right">
              <div class="small">
                <a class="main-btn ml-0" @click.prevent="toggleModal">BOOK FREE CONSULTATION</a>
                <p class="d-flex flex-nowrap align-items-center">Sponsored by <img src="@/assets/images/allies-3.png" alt="AXA" class="logo1 mr-2"> <span class="mr-2">&</span>
                  <img src="@/assets/images/excel-logo.png" alt="Excel Security Solutions" class="logo2"> 
                </p>
              </div>
            <div class="toggle-btn ml-30 canvas_open d-lg-none d-block">
              <i class="fa fa-bars" @click="showSidebar"></i>
            </div>


 <!-- Visit Modal-->
 <b-modal
            v-model="visitModalVisible"
            id="partner-modal"
            content-class="custom-modal-content"
            centered
            hide-footer
            hide-header
            @shown="addBodyClass"
            @hidden="removeBodyClass"
        >

        <div class="modal-header">
          <h4>BOOK FREE CONSULTATION</h4>
          <p>I would like to take advantage of the free non obligation offer for a security consultant to visit my chalet/apartment.</p>
          <span>Service sponsored by AXA and Excel Security Solutions</span>
          <span>We will contact you within 24 hours</span>
        </div>
    <form ref="form" @submit.prevent="submitForm">
        <div class="checkbox-group">
          <span v-if="submissionMessage" class="submission-message">{{ submissionMessage }}</span>
          <p>I am interested in: </p>
          <label v-for="(option, index) in options" :key="index">
            <input type="checkbox" v-model="form.services" :name="`service_${index}`" :value="option" class="checkbox-box"/>
            {{ option }}
          </label>
        </div>
  
        <div class="input-box">
          <input type="text" v-model="form.title" placeholder="Title" class="form-control mt-2"/>
          <input type="text" v-model="form.name" placeholder="Name" class="form-control mt-2"/>
          <input type="text" v-model="form.surname" placeholder="Surname" class="form-control mt-2"/>
          <input type="tel" v-model="form.phone" placeholder="Phone" class="form-control mt-2"/>
          <input type="email" v-model="form.email" placeholder="Email" class="form-control mt-2"/>
          <input type="text" v-model="form.address" placeholder="Chalet Address" class="form-control mt-2"/>
          <textarea v-model="form.message" placeholder="Message" class="form-control mt-2"></textarea>
        </div>

        <div class="checkbox-terms">
          <input type="checkbox" name="terms" v-model="acceptTerms">
          <label>I read and accept <a href="">terms & conditions</a></label>
        </div>
        <div class="button-container">
          <button type="submit" class="main-btn modal-btn"> {{ isSubmitting ? 'Sending...' : 'BOOK NOW' }}</button>
        </div>
          </form>
        </b-modal>

            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavItems from "../NavItems.vue";
import { BModal } from 'bootstrap-vue';
import emailjs from 'emailjs-com'
export default {
  data() {
    return {
      isModalVisible: false,
      visitModalVisible: false,
      isSubmitting: false,
      submissionMessage: '',
      form: {
          services: [],
          title: '',
          name: '',
          surname: '',
          phone: '',
          email: '',
          address: '',
          message: ''
        },
        acceptTerms: false,
        options: [
          "Advice how to make myself, my family & my chalet safer",
          "Security alarm system",
          "Fire prevention alarm system",
          "Access control",
          "Panic Alarm",
          "Fire extinguishers",
          "Security lightening",
          "Safe or vault for my Chalet",
          "Other service"
        ],
    };
  },
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
    nasted: {
      type: Boolean,
      default: true,
    },
    dark: {
      type: Boolean,
    },
    enableDark: {
      type: Boolean,
    },
  },
  components: { NavItems, BModal },
  mounted() {
    document.addEventListener("scroll", this.stickMenu);
  },


  methods: {
    changeLang() {
      this.$store.dispatch("rtlHandler");
    },
    toggoleMode(e) {
      this.$emit("changMode", e);
    },
    showSidebar(e) {
      this.$emit("toggleSidebar", e);
    },
    stickMenu() {
      const result = document.querySelector(".appie-sticky");
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        result.classList.add("sticky");
      } else {
        result.classList.remove("sticky");
      }
    },
    toggleModal() {
      this.visitModalVisible = !this.visitModalVisible;
    },

    resetForm() {
        this.form = {
          services: [],
          title: '',
          name: '',
          surname: '',
          phone: '',
          email: '',
          address: '',
          message: ''
        };
        this.acceptTerms = false; // Reset acceptTerms
        setTimeout(() => {
         this.submissionMessage = ''; // Clear submission message
         }, 3000); // Adjust the delay as needed
    },

    submitForm() {
      const SERVICE_ID = 'service_zg2bepp';
      const TEMPLATE_ID = 'template_g2a1yaq';
      const PUBLIC_KEY = 'MVekMSZT8jTmKVA4n';
      const emailParams = {
        from_name: `${this.form.name} ${this.form.surname}`,
        from_email: this.form.email,
        message: this.form.message,
        title: this.form.title,
        phone: this.form.phone,
        address: this.form.address,
        services: this.form.services.join(', '),
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
    }
  },

  
};
</script>

<style scoped>
.small {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.small p{
  font-size: 11px; 
}

.small a {
  padding: 0px 20px;
}

.small p {
  display: flex;
  align-items: center; /* Vertically aligns the content within the paragraph */
  flex-wrap: nowrap; /* Prevents the content from wrapping */
  white-space: nowrap; /* Ensures text does not wrap */
  overflow: hidden; /* Prevents overflow of content */
}

.small img {
  max-width: 100%; /* Ensures images do not exceed their container */
  height: auto; /* Maintains aspect ratio */
  margin-right: 8px; /* Space between logos and other elements */
}


.main-btn {
  font-weight: bold;
  padding: 10px 0;
}

.modal-btn {
  padding: 0px 10px;
}

.checkbox-group {
  display: flex;
  justify-content: center; 
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
}

.checkbox-group label {
    font-size: 14px;
    margin-left: 30px;
}

.checkbox-group p {
  margin-bottom: 15px;
}

.checkbox-group span {
  text-align: center;
  color: #ed1f27;
  font-size: 14px;
}

.checkbox-box {
  margin-right: 10px;
}

.checkbox-terms {
  display: flex; 
  align-items: center;
  margin-bottom: 15px;
}

.checkbox-terms input[type="checkbox"] {
  margin-right: 15px; 
}

.checkbox-terms a {
 color: #ed1f27;
 font-weight: bold;
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
 font-size: 14px;
}

.modal-header span {
  font-size: 12px;
  color: #ed1f27;
  font-weight: 800;
}

.input-box {
    padding: 10px 30px;
}

.button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.submission-message {
  margin-top: 15px;
  text-align: center;
  color: #ed1f27;
  font-size: 15px;
  font-weight: bold;
  margin:0 auto;
  padding: 20px 40px;
  border: 1px solid #ed1f27;
  border-radius: 10px;
  animation: slideInFromTop 0.5s ease-out forwards;
}

.logo1 {
  height: 30px;
  width: 30px;
}

.logo2 {
  height: 40px;
  width: 40px;
}



@keyframes slideInFromTop {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (min-width: 992px) and (max-width: 1251px) {
  .header-nav-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  .appie-logo-box {
    flex: 1;
  }

  .appie-header-main-menu {
    display: block; 
  }

  .appie-btn-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    flex: 2;
  }

  .main-btn {
    font-size: 14px; 
  }

  .toggle-btn {
    display: none; /* Hide elements with class `small` and `toggle-btn` */
  }

  .main-btn,
.appie-logo-box img {
  transform: scale(0.8); /* Reduce size to 80% */
}

.appie-logo-box img {
  display: block;
  max-width: 70%; /* Smaller logo */
}

.small a {
  padding: 0px 20px;
}
}

@media (max-width: 768px) {
  .small {
    display: none
  }

}

</style>