<template>
  <section class="appie-service-area pt-90 pb-100" id="service">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="appie-section-title text-center">
            <h3 class="appie-title">{{ section_heading }}<br>{{ more_heading }}</h3>
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6" v-for="(item, index) in grid_items" :key="index">
          <div class="appie-single-service text-center mt-30" @click.prevent="showMultiple(index)">
            <div class="icon">
              <i :class="`fas ${item.icon}`"></i>
            </div>
            <h4 class="appie-title">{{ item.title }}</h4>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center highlighted">
        Each member of the CHalert program is entitled to a 10% discount on Excel Security Solutions services and trainings
      </div>
    </div>

       <!-- Modal Component -->
       <b-modal v-model="modalVisible" hide-header hide-footer centered>
      <template #default="{ hide }">
        <div class="modal-body-content text-center">
          <div class="icon-modal">
            <i :class="`fas ${selectedService.icon}`"></i>
          </div>
          <h4>{{ selectedService.title }}</h4>
          <p v-if="!showForm">{{ selectedService.description }}</p>
          <form v-else @submit.prevent="submitForm" class="form-body">
           <div>
            <div class="form-group mt-2 pl-10 pr-10">
            <input class="form-control" type="text" v-model="form.name" placeholder="Name" required>
            </div>
            <div class="form-group mt-2 pl-10 pr-10">
            <input class="form-control" type="text" v-model="form.surname" placeholder="Surname" required>
            </div>
            <div class="form-group mt-2 pl-10 pr-10">
              <input class="form-control" type="email" v-model="form.email" placeholder="Email" required>
            </div>
            <div class="form-group mt-2 pl-10 pr-10">
              <input class="form-control" type="phone" v-model="form.phone" placeholder="Phone" required>
            </div>
            <div class="form-group mt-2 pl-10 pr-10">
              <textarea class="form-control" v-model="form.message" placeholder="Message"></textarea>
            </div>
            <div class="checkbox-terms mt-2">
                <input type="checkbox" name="terms" v-model="acceptTerms">
                <label>I read and accept <a href="">terms & conditions</a></label>
            </div>
           </div>
            <b-button variant="primary" class="main-btn mb-2" type="submit">Send</b-button>
          </form>
          <b-button :variant="showForm ? 'secondary' : 'primary'" class="main-btn" @click="toggleForm">{{ showForm ? 'Cancel' : 'Contact us' }}</b-button>
        </div>
      </template>
    </b-modal>
  </section>
</template>


<script>
import { BModal } from 'bootstrap-vue'
import emailjs from 'emailjs-com'
export default {
    components: { BModal },
    props:{
        section_heading: String,
        more_heading: String,
        description: String,
        grid_items: Array,
    },
    data() {
        return {
            modalVisible: false, 
            selectedService: {}, 
            showForm: false,
            acceptTerms: false,
            form:{
                name: '',
                surname: '',
                phone: '',
                email: '',
                message: '',
            },
            service: []
        }
    },
    methods: {
    showMultiple(index) {
      this.selectedService = this.grid_items[index]; 
      this.modalVisible = true; 
      this.showForm = false;
      this.service = this.selectedService.title
    },

    toggleForm() {
      this.showForm = !this.showForm;
    },

    resetForm() {
        this.form = {
          name: '',
          surname: '',
          phone: '',
          email: '',
          message: '',
        };
        this.service = '';
        this.acceptTerms = false; 
        setTimeout(() => {
         this.submissionMessage = ''; // Clear submission message
         }, 3000); // Adjust the delay as needed
    },

    submitForm() {
            const SERVICE_ID = 'service_zg2bepp';
            const TEMPLATE_ID = 'template_g2a1yaq';
            const PUBLIC_KEY = 'MVekMSZT8jTmKVA4n';
      if (!this.acceptTerms) {
                alert("Please accept the terms and conditions.");
                return;
            }
            emailjs.init(PUBLIC_KEY);
            const emailParams = {
                from_name: `${this.form.name} ${this.form.surname}`,
                from_email: this.form.email,
                phone: this.form.phone,
                message: this.form.message,
                services: this.service
            };
            this.isSubmitting = true;
            emailjs.send(SERVICE_ID, TEMPLATE_ID, emailParams, PUBLIC_KEY)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text, 'Form Data:', emailParams);
                    this.submissionMessage = "Form submitted successfully.";
                    this.isSubmitting = false;
                    this.resetForm();
                    this.modalVisible = false;
                }, (err) => {
                    console.error('FAILED...', err);
                    this.submissionMessage = "Failed to submit the form. Please try again.";
                    this.isSubmitting = false;
                });

            this.toggleForm(); 
        },
      
    },
  }
</script>

<style scoped>

.appie-single-service {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
}

.appie-single-service:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.icon {
    font-size: 30px; 
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon i {
    color: #fff
}

.icon-modal i {
    color: #ed1f27;
    font-size: 25px;
}

.appie-title {
  font-size: 18px; /* Smaller title */
  margin-bottom: 10px;
}

.appie-single-service p {
  font-size: 14px; /* Smaller paragraph */
}

.highlighted {
  font-size: 18px;
  color: #333;
  font-weight: bold;
  padding: 20px 20px;
  text-align: center;
}

.modal-body-content {
  text-align: center; /* Center align the modal content */
  padding: 20px
}

.modal-body-content p {
  margin-bottom: 30px;
  padding: 10px /* Add some space between the elements */
}
.modal-body-content h4 {
  margin-bottom: 10px;
  padding: 10px /* Add some space between the elements */
}

.checkbox-terms {
  display: flex; 
  align-items: center;
  justify-content: center;
  margin: 10px 15px;
}

.checkbox-terms input[type="checkbox"] {
  margin-right: 15px; 
}

.checkbox-terms a {
 color: #ed1f27;
 font-weight: bold;
}

.btn-secondary {
  background-color: #6c757d; 
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #fff; 
  border-color: #545b62;
  color:#6c757d;
}
</style>