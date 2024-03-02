<template>
    <div class="section-container">
      <!-- Slider on the left -->
      <div class="slider-container">
        <carousel-3d :controls-visible="true" :clickable="true">
          <slide v-for="(slide, index) in slides" :key="index" :index="index">
            <img :src="slide.image" :alt="`Slide ${index + 1}`" />
          </slide>
        </carousel-3d>
      </div>
  
      <!-- Title and description on the right -->
      <div class="content-container">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  // Import Carousel and Slide components
  import { Carousel3d, Slide } from 'vue-carousel-3d';
  
  export default {
    components: {
      Carousel3d,
      Slide,
    },
    data() {
      return {
        title: 'Your Title Here',
        description: 'Your description text goes here. You can elaborate on the title or provide additional information related to the images shown in the carousel.',
        slides: [
          { image: require('@/assets/images/partner-1.png') },
          { image: require('@/assets/images/partner-1.png') },
          { image: require('@/assets/images/partner-1.png') },
          { image: require('@/assets/images/partner-1.png') },
          { image: require('@/assets/images/partner-1.png') },
          // Add more slide images as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .section-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .slider-container {
    flex: 1;
    margin-right: 20px; /* Adjust spacing between slider and content as needed */
  }
  
  .content-container {
    flex: 1;
  }
  
  /* Additional styling for the carousel, title, and description as needed */
  </style>
  