<template>
  <div class="section">
    <vue-slick-carousel class="photo-slider"  v-bind="settings" ref="carousel">
      <div v-for="(photo, index) in photos" :key="index">
        <img :src="photo.url" alt="Photo" class="slider-image">
      </div>
    </vue-slick-carousel>
    
    <vue-slick-carousel class="description-slider"
        :autoplay="true"
        :autoplaySpeed="5000"
        :dots="true"
        :arrows="false"
    >
      <div  v-for="(description, index) in descriptions" :key="index" class="description">
        <div  class="description-content">
          <p>{{ description }}</p>
        </div>
      </div>
    </vue-slick-carousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      photos: [
        { url: require('@/assets/images/impact-1.jpg') },
        { url: require('@/assets/images/impact-2.jpg') },
        { url: require('@/assets/images/impact-3.jpg') },
        { url: require('@/assets/images/impact-4.jpg') },
        { url: require('@/assets/images/impact-5.jpg') },
        // Add more photos as needed
      ],
      descriptions: [
        'Gstaad Kickboxing was founded in 2021 by Cüneyt Günes in collaboration and the support of Excel Security Solutions. Cüneyt, a six-time winner of the Istanbul championship and Turkish championship in various kickboxing championships', 
        'Kickboxing provides both group and private lessons. Join to change your life for the better and learn a valuable life skill. ',
        'Cüneyt is a firm believer in giving back to the community he now calls home. Gstaad Kickboxing provides free kickboxing lessons to children aged 6 yrs. to 13 yrs. from all backgrounds in the community of Saanenland.',
        // Add more descriptions as needed
      ],

      settings: 
      {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
      
    };
  }
}
</script>

<style>
/* You can style your section here */
.section {
  display: flex;
  flex-direction: column;
}

.photo-slider, 
.description-slider {
  width: 80%; /* Adjust width as needed */
  padding: 20px 0px;
  margin: 0 auto; /* This will center the images horizontally */
}


.description-slider {
  width: 50%; /* Adjust width as needed */
}

.description-content p{
  color: #eef1f6;
}

.photo-slider img {
  display: block;
  margin: 0 auto; /* This will center the images horizontally */
}

.slider-image {
  display: block;
  margin: 0 auto; /* This will center the images horizontally */
  height: 250px; /* Set a fixed height for the images */
  width: auto; /* Maintain aspect ratio */
}
</style>
