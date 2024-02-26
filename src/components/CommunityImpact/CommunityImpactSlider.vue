<template>
  <div class="section">
    <vue-slick-carousel class="photo-slider"  v-bind="settings" ref="carousel">
      <div v-for="(photo, index) in photos" :key="index">
        <img :src="photo.url" alt="Photo">
      </div>
    </vue-slick-carousel>
    
    <vue-slick-carousel class="description-slider"
        :autoplay="true"
        :autoplaySpeed="3000"
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
        { url: require('@/assets/images/impact-1.jpg') },
        { url: require('@/assets/images/impact-2.jpg') },
        { url: require('@/assets/images/impact-3.jpg') },
        // Add more photos as needed
      ],
      descriptions: [
        'Gstaad Kickboxing was founded in the year 2021 by Cüneyt Günes. It is located in Saanen in a Dojo in the Allmistrasse 1. He created this Dojo with all of his heart and put lots of effort in it to create the perfect space to train martial arts.', 
        'Cüneyt Günes gives private and group classes in boxing, kickboxing, Muay Thai, functional training and fitness boxing.',
        'There are two different group classes, one for teenagers and adults and one for children between the age of 6 and 13. Cüneyt Günes offers the children kickboxing class for free for all the children from and around Saanen with working parents.',
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
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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

.photo-slider {
  width: 80%; /* Adjust width as needed */
  padding: 20px 0px;
  margin: 0 auto; /* This will center the images horizontally */
}

.description-slider {
  width: 40%; /* Adjust width as needed */
  padding: 20px 0px;
  margin: 0 auto; /* This will center the images horizontally */
}

.description-content p{
  color: #eef1f6;
}


.photo-slider img {
  display: block;
  margin: 0 auto; /* This will center the images horizontally */
}
</style>
