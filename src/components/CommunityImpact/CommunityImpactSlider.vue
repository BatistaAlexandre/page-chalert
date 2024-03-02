
<template>
  <div class="section">
    <vue-slick-carousel class="card-slider" v-bind="settings" ref="carousel">
      <div v-for="(item, index) in items" :key="index" class="card">
        <div class="photo">
          <img :src="item.photo.url" alt="Photo" class="card-image">
        </div>
        <div class="shape">
          <p class="project">{{item.project}}</p>
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
        { photo: { url: require('@/assets/images/impact-1.jpg') }, description: 'Gstaad Kickboxing was founded in 2021 by Cüneyt Günes in collaboration and the support of Excel Security Solutions. Cüneyt, a six-time winner of the Istanbul championship and Turkish championship in various kickboxing championships', project:'Kick Boxing Academy Gstaad' },
        { photo: { url: require('@/assets/images/impact-1.jpg') }, description: 'Gstaad Kickboxing was founded in 2021 by Cüneyt Günes in collaboration and the support of Excel Security Solutions. Cüneyt, a six-time winner of the Istanbul championship and Turkish championship in various kickboxing championships', project:'Kick Boxing Academy Gstaad' },
        { photo: { url: require('@/assets/images/impact-1.jpg') }, description: 'Gstaad Kickboxing was founded in 2021 by Cüneyt Günes in collaboration and the support of Excel Security Solutions. Cüneyt, a six-time winner of the Istanbul championship and Turkish championship in various kickboxing championships', project:'Kick Boxing Academy Gstaad' },
        { photo: { url: require('@/assets/images/impact-1.jpg') }, description: 'Gstaad Kickboxing was founded in 2021 by Cüneyt Günes in collaboration and the support of Excel Security Solutions. Cüneyt, a six-time winner of the Istanbul championship and Turkish championship in various kickboxing championships', project:'Kick Boxing Academy Gstaad' },
        { photo: { url: require('@/assets/images/impact-1.jpg') }, description: 'Gstaad Kickboxing was founded in 2021 by Cüneyt Günes in collaboration and the support of Excel Security Solutions. Cüneyt, a six-time winner of the Istanbul championship and Turkish championship in various kickboxing championships', project:'Kick Boxing Academy Gstaad' },
        { photo: { url: require('@/assets/images/impact-1.jpg') }, description: 'Gstaad Kickboxing was founded in 2021 by Cüneyt Günes in collaboration and the support of Excel Security Solutions. Cüneyt, a six-time winner of the Istanbul championship and Turkish championship in various kickboxing championships', project:'Kick Boxing Academy Gstaad' },
       
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
      breakpoint: 1024, // For tablets and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768, // For smaller tablets and large phones
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 480, // For smaller phones
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false // Consider hiding arrows on very small screens for more space
      }
    }
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
  max-width:480px;
  background: #fff; /* Card background */
  border-radius: 8px; /* Card corner rounding */
  border:1px solid #ed1f27;
  box-shadow: 0 5px 5px 2px rgba(0, 0, 0, 0.1); /* Card shadow */
  margin:15px;
  padding: 15px; /* Add padding around each card for spacing */
  box-sizing: border-box; /* Include padding in the element's total width and height */
}

.photo {
  position: relative; /* Ensure the photo container can hold the shape */
  /* height: 250px;  Fixed height for the photo */
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
  border-bottom-left-radius: 8px; /* Rounded corner on the top right */
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

@media (max-width: 768px) {
  .card-slider {
    width: 100%; /* Use more of the screen width on smaller devices */
  }

  .card {
    max-width: 100%; /* Allow cards to take full width on smaller screens */
    margin: 10px 0; /* Adjust margin for vertical spacing on smaller screens */
  }

  .shape {
    width: 100%; /* Optionally, make the shape span the full width on smaller screens */
    border-top-right-radius: 0px; /* Rounded corner on the top right */
  }

  .divider {
  margin-top: 20px;
}
}

@media (max-width: 480px) {
  .description {
    padding: 15px; /* Reduce padding on very small screens to save space */
  }

  .project {
    font-size: 12px; /* Adjust font size for project text on very small screens */
  }

  .divider {
  margin-top: 10px;
}

  /* Add more responsive adjustments as needed */
}
</style>


