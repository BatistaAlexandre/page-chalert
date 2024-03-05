<template>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name">
        </div>
  
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input type="tel" id="phone" v-model="form.phone">
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email">
        </div>
  
        <div class="form-group">
          <label for="street">Street:</label>
          <input type="text" id="street" v-model="form.address.street">
        </div>
  
        <div class="form-group">
          <label for="houseNumber">House Number:</label>
          <input type="text" id="houseNumber" v-model="form.address.houseNumber">
        </div>
  
        <div class="form-group">
          <label for="zip">Zip Code:</label>
          <input type="text" id="zip" v-model="form.address.zip">
        </div>
  
        <div class="form-group">
          <label for="city">City:</label>
          <input type="text" id="city" v-model="form.address.city">
        </div>

        <div class="form-group">
          <label for="message">Message:</label>
          <input type="text" id="message" v-model="form.message">
        </div>

        <div class="checkbox-group">
          <label>Terms and Conditions</label>
          <div class="checkbox">
            <input type="checkbox" id="terms" v-model="form.acceptTerms">
            <label>I accept terms & conditions</label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>


<script>
export default {
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        acceptTerms: false, // For the terms and conditions checkbox
        message: '',
        address: {
          street: '',
          houseNumber: '',
          zip: '',
          city: ''
        },
        
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.form); // Handle form submission, e.g., send data to an API
    }
  }
}
</script>


<style scoped>
.form-container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  background-color: #f5f5f5; /* Light grey background */
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="tel"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc; /* Grey border */
  border-radius: 4px;
}

.checkbox-group {
  margin-bottom: 15px;
}

.checkbox {
  margin-bottom: 5px;
}

.checkbox input[type="checkbox"] {
  margin-right: 5px;
}

button {
  background-color: #ed1f27; /* Red background */
  color: #fff; /* White text */
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #d11a21; /* Darker red on hover */
}
</style>
