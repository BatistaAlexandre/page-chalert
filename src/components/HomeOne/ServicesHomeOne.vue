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
          <p>{{ selectedService.description }}</p>
          <b-button variant="primary" class="main-btn" @click="redirectToUrl">CONTACT US</b-button>
        </div>
      </template>
    </b-modal>
  </section>
</template>


<script>
import { BModal } from 'bootstrap-vue'
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
            modalVisible: false, // Controls the visibility of the modal
            selectedService: {}, // Stores the details of the selected service
            redirectUrl: 'https://excelsecuritysolutions.ch', // The URL to redirect to
        }
    },
    methods: {
    showMultiple(index) {
      this.selectedService = this.grid_items[index]; // Set the selected service based on the clicked box
      this.modalVisible = true; // Show the modal
    },
    redirectToUrl() {
      window.location.href = this.redirectUrl; // Redirects the user to the specified URL
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

</style>