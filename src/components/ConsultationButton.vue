<template>
    <div class="consultation-button">
      <a class="main-btn ml-0" @click.prevent="toggleModal">BOOK FREE CONSULTATION</a>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      toggleModal() {
        // Emit an event to the parent component when the button is clicked
        this.$emit('toggleModal');
      },
    },
  };
  </script>
  
  <style scoped>
  .consultation-button .main-btn {
    font-weight: bold;
    padding: 0px 20px; 
    text-align: center;
    cursor: pointer;
    /* Add more styles as needed */
  }
  </style>
  