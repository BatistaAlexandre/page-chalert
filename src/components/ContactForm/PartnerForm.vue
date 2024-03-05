<template>
    <div class="registration-form-container">
      <form @submit.prevent="sendEmail">
        <div class="input-box mt-30">
          <input type="text" v-model="formData.contactName" name="contactName" placeholder="Name of the contact person" class="form-control m-2">
          <input type="email" v-model="formData.email" name="email" placeholder="Email" class="form-control m-2">
          <input type="text" v-model="formData.phone" name="phone" placeholder="Phone" class="form-control m-2">
          <input type="text" v-model="formData.companyName" name="companyName" placeholder="Name of the company" class="form-control m-2">
          <input type="text" v-model="formData.companyAddress" name="companyAddress" placeholder="Address of the company" class="form-control m-2">
          <textarea v-model="formData.message" name="message" placeholder="Message" class="form-control m-2"></textarea>
          <div class="checkbox mt-3">
            <input type="checkbox" id="terms" v-model="formData.acceptTerms">
            <label for="terms">I accept the terms and conditions</label>
          </div>
        </div>
        <button type="submit" class="main-btn">Submit</button>
      </form>
    </div>
  </template>


<script>
export default {
  data() {
    return {
      formData: {
        contactName: '',
        email: '',
        phone: '',
        companyName: '',
        companyAddress: '',
        message: '', // Added for message input
        acceptTerms: false, // For the terms and conditions checkbox
      }
    };
  },
  methods: {
    sendEmail() {
      // Implement form submission logic here
      console.log(this.formData); // For demonstration, logging the form data to the console
    }
  }
}
</script>

<style scoped>
.form-control {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px; /* Space between inputs */
  border: 1px solid #ccc;
  border-radius: 4px;
}

.main-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.main-btn:hover {
  background-color: #0056b3;
}

.checkbox input {
  margin-right: 5px;
}
</style>
