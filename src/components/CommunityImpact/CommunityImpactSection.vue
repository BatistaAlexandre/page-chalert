<template>
    <section class="community">
            <h2>Our Impact On Community</h2>
        <div class="slider-wrapper">
            <community-impact-slider/>
        </div>
        <div class="claim">
            <h2>CHALERT’S IMPACT EXTENDS BEYOND 
              <span class="highlight">CRIME PREVENTION</span> 
              TO ENHANCE THE OVERALL <span class="highlight">WELL-BEING</span> AND QUALITY OF LIFE FOR RESIDENTS, CREATING A MORE 
              VIBRANT AND <span class="highlight">THRIVING COMMUNITY</span>
            </h2>
        </div>
    </section>
</template>



<!--
<template>
    <div class="section-container">

      <div class="slider-container">
        <carousel-3d :controls-visible="true" :clickable="true">
          <slide v-for="(slide, index) in slides" :key="index" :index="index">
            <img :src="slide.image" :alt="`Slide ${index + 1}`" />
          </slide>
        </carousel-3d>
      </div>
  

      <div class="content-container">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
    </div>
  </template>

-->

<script>
import CommunityImpactSlider from "../CommunityImpact/CommunityImpactSlider.vue";


export default {
    components:{
        CommunityImpactSlider
    }
}
</script>

<style>
.community {
    text-align: center;
    padding: 50px 20px;
    background-color: #fff;
    
}



.slider-wrapper {
    padding:30px
}

.claim{
  width: 70%;
 margin: 0 auto;
}

claim h2 {
  width: 60%;
}



.highlight {
  color: #ed1f27;
}

</style>


<!--
<script>

  import { Carousel3d, Slide } from 'vue-carousel-3d';
  
  export default {
    components: {
      Carousel3d,
      Slide,
    },
    data() {
      return {
        title: 'Our Impact on Community',
        description: 'Your description text goes here. You can elaborate on the title or provide additional information related to the images shown in the carousel.',
        slides: [
          { image: require('@/assets/images/impact-1.jpg') },
          { image: require('@/assets/images/impact-2.jpg') },
          { image: require('@/assets/images/impact-1.jpg') },
          { image: require('@/assets/images/impact-2.jpg') },
          { image: require('@/assets/images/impact-1.jpg') },
          { image: require('@/assets/images/impact-2.jpg') },
          // Add more slide images as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
.section-container {
  display: flex;
  flex-wrap: wrap; /* Allows items to wrap as needed */
  align-items: center;
  justify-content: space-between;
}

.slider-container {
  flex: 1 0 50%; /* Flex grow, flex shrink, flex basis */
  margin-right: 40px; /* Adjust spacing between slider and content as needed */
}

.content-container {
  flex: 1 0 50%; /* Flex grow, flex shrink, flex basis */
}

/* Responsive styling */
@media (max-width: 768px) {
  .section-container {
    flex-direction: column; /* Stack items vertically on smaller screens */
  }

  .slider-container,
  .content-container {
    flex: 1 0 100%; /* Take full width on smaller screens */
    margin-right: 0; /* Remove margin between items on smaller screens */
  }
}

/* Additional responsive adjustments as needed */
</style>

-->