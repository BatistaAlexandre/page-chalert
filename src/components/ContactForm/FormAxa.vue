<template>
    <div id="app">
      <form @submit.prevent="submitForm" class="form-container">
        <h2>Security Inquiry Form</h2>
  
        <div class="checkbox-group">
          <label v-for="(option, index) in options" :key="index">
            <input type="checkbox" v-model="form.services" :value="option" />
            {{ option }}
          </label>
        </div>
  
        <div class="input-group">
          <input type="text" v-model="form.title" placeholder="Title" />
          <input type="text" v-model="form.name" placeholder="Name" />
          <input type="text" v-model="form.surname" placeholder="Surname" />
          <input type="tel" v-model="form.phone" placeholder="Phone" />
          <input type="email" v-model="form.email" placeholder="Email" />
          <input type="text" v-model="form.address" placeholder="Chalet Address" />
          <textarea v-model="form.message" placeholder="Message"></textarea>
        </div>
  
        <button type="submit" class="submit-button">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
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
        options: [
          "Advice how to make myself my loved ones and my chalet safer",
          "Security alarm system",
          "Fire prevention alarm system",
          "Access control",
          "Panic Alarm",
          "Fire extinguishers",
          "Security lightening",
          "Safe or vault for my Chalet",
          "Other service"
        ]
      };
    },
    methods: {
      submitForm() {
        // Implement submission logic here
        console.log("Form data:", this.form);
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    background-color: #e9e9eb;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    margin: auto;
  }
  
  .checkbox-group {
    margin-bottom: 20px;
  }
  
  .input-group {
    margin-bottom: 20px;
  }
  
  .input-group input,
  .input-group textarea {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .submit-button {
    background-color: #ed1f27;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #d11a21;
  }
  </style>
  