<!--
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
-->

<!--???????????????????????????????????????????????????????????????????????-->


<template>
  <div class="section">
    <vue-slick-carousel class="card-slider" v-bind="settings" ref="carousel">
      <div v-for="(item, index) in items" :key="index" class="card">
        <div class="photo">
          <img :src="item.photo.url" alt="Photo" class="card-image">
        </div>
        <div class="shape">
          <p class="project">Kick Boxing Academy Gstaad</p>
        </div>
        <div class="divider"></div>
        <div class="description">
          <p>{{ item.description }}</p>
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
      items: [
        { photo: { url: require('@/assets/images/impact-1.jpg') }, description: 'Gstaad Kickboxing was founded in 2021 by Cüneyt Günes in collaboration and the support of Excel Security Solutions. Cüneyt, a six-time winner of the Istanbul championship and Turkish championship in various kickboxing championships' },
        { photo: { url: require('@/assets/images/impact-1.jpg') }, description: 'Gstaad Kickboxing was founded in 2021 by Cüneyt Günes in collaboration and the support of Excel Security Solutions. Cüneyt, a six-time winner of the Istanbul championship and Turkish championship in various kickboxing championships' },
        { photo: { url: require('@/assets/images/impact-1.jpg') }, description: 'Gstaad Kickboxing was founded in 2021 by Cüneyt Günes in collaboration and the support of Excel Security Solutions. Cüneyt, a six-time winner of the Istanbul championship and Turkish championship in various kickboxing championships' },
        { photo: { url: require('@/assets/images/impact-1.jpg') }, description: 'Gstaad Kickboxing was founded in 2021 by Cüneyt Günes in collaboration and the support of Excel Security Solutions. Cüneyt, a six-time winner of the Istanbul championship and Turkish championship in various kickboxing championships' },
        { photo: { url: require('@/assets/images/impact-1.jpg') }, description: 'Gstaad Kickboxing was founded in 2021 by Cüneyt Günes in collaboration and the support of Excel Security Solutions. Cüneyt, a six-time winner of the Istanbul championship and Turkish championship in various kickboxing championships' },
        { photo: { url: require('@/assets/images/impact-1.jpg') }, description: 'Gstaad Kickboxing was founded in 2021 by Cüneyt Günes in collaboration and the support of Excel Security Solutions. Cüneyt, a six-time winner of the Istanbul championship and Turkish championship in various kickboxing championships' },
       
        // Add more items as needed
      ],

      settings: {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 3,
        slidesToScroll: 1,
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
          // Other breakpoints...
        ]
      }
    };
  }
}
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

.card-slider {
  width: 90%; /* Adjust width as needed */
  margin: 0 auto; /* Center the slider */
}

.card {
  max-width:500px;
  background: #fff; /* Card background */
  border-radius: 8px; /* Card corner rounding */
  border:1px solid #ed1f27;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Card shadow */
  margin:10px;
  padding: 15px; /* Add padding around each card for spacing */
  box-sizing: border-box; /* Include padding in the element's total width and height */
}

.photo {
  position: relative; /* Ensure the photo container can hold the shape */
  height: 250px; /* Fixed height for the photo */
  overflow: hidden; /* Ensure the photo is contained within the bounds */
}

.shape {
  position: absolute; /* Position the shape in relation to its parent .photo */
  bottom: 0; /* Align the shape to the bottom of the photo */
  left: 0; /* Align the shape to the left side of the card */
  height: 30px; /* Height of the shape */
  width: 60%; /* Width of the shape as a percentage of the card's width */
  background-color: #ed1f27; /* Shape color, adjust as needed */
  border-top-right-radius: 30px; /* Rounded corner on the top right */
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image {
  width: 100%; /* Make the image cover the card width */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Remove any inline spacing */
}

.description {
  padding: 30px; /* Padding around the description text */
  text-align: center; /* Center-align the text */
}

.project {
  color:#fff;
  font-style: italic;
  font-size: 14px;;
}


.divider {
  height: 1px; /* Height of the line */
  background-color: #ed1f27; /* Line color */
  width: 40%; /* Line width as a percentage of the card's width */
  margin: 0 auto; /* Center the line horizontally within the card */
  margin-top: 30px;
}
</style>









<!--???????????????????????????????????????????????????????????????????????-->

<!--
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

-->
