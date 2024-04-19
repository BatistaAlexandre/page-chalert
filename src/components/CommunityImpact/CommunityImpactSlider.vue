

































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
          <p>{{ item.bank }}</p>
          <p>{{ item.account }}</p>
          <p>{{ item.swift }}</p>
          <p>{{ item.beneficiary }}</p>
        </div>
      </div>
    </vue-slick-carousel>
  </div>
</template>








<!--
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
          <p>{{ item.bank }}</p>
          <p>{{ item.account }}</p>
          <p>{{ item.swift }}</p>
          <p>{{ item.beneficiary }}</p>
          
        </div>
      </div>
    </vue-slick-carousel>
  </div>
</template>

-->

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
        { photo: { url: require('@/assets/images/impact-5.jpg') }, description: 'Kickboxing provides both group and private lessons. Join to change your life for the better and learn a valuable life skill', project:'Kick Boxing Academy Gstaad' },
        { photo: { url: require('@/assets/images/impact-3.jpg') }, description: 'Cüneyt is a firm believer in giving back to the community he now calls home. Gstaad Kickboxing provides free kickboxing lessons to children aged 6 yrs. to 13 yrs. from all backgrounds in the community of Saanenland', project:'Kick Boxing Academy Gstaad' },
        { photo: { url: require('@/assets/images/impact-6.jpg') }, description: 'I Am My Bodyguard is a program that empowers children who have experienced sexual abuse or violence. It started as a workshop for children in collaboration with Innocence in Danger, an international non-profit organization in Gstaad.', project:'Global Impact: I am my Bodyguard' },
        { photo: { url: require('@/assets/images/impact-7.jpg') }, description: "With the success of the initial I Am My Bodyguard workshop for children. Excel Security Solutions decided to develop a course specifically for some of the victims’ mothers, who were too often also victims of abuse. This program was named Fight Like a Girl!", project:'Global Impact: Fight Like a Girl!' },
        { photo: { url: require('@/assets/images/impact-8.jpg') }, description: 'The program has a social mission: to provide free workshops to the most vulnerable women andchildren in developing countries, funded by donations and paid training for those who can afford it.', project: 'Global Impact: I am my Bodyguard' },
        { photo: { url: require('@/assets/images/impact-9.jpg') }, 
          description: 'You can join this mission and make a difference by supporting I Am My Bodyguard today.', 
          subdescription:'Bank details Switzerland',
          bank:'Bank: Raiffeisenbank Obersimmental-Saanenland',
          account: 'Account: CH 15 8080 8001 6533 9267 3',
          swift: 'SWIFT/BIC: RAIFCH22856',
          beneficiary: 'Beneficiary: I Am My Bodyguard Switzerland',
          project: 'Global Impact: I am my Bodyguard' },
       
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
          breakpoint: 1785,
          settings: { slidesToShow: 2, slidesToScroll: 1 }
        },{
          breakpoint: 1024,
          settings: { slidesToShow: 2, slidesToScroll: 1 }
        }, {
          breakpoint: 768,
          settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false }
        }]
      }
    };
  }
}
</script>


<!--
<style scoped>
.section {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

.card-slider {
  width: 90%;
  margin: 0 auto;
}

.card {
  max-width: 480px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #ed1f27;
  margin: 15px;
  padding: 15px;
  box-sizing: border-box;
  min-height: 580px;
}

.photo {
  position: relative;
  overflow: hidden;
}

.shape {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 30px;
  width: 60%;
  background-color: #ed1f27;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image {
  width: 100%;
  height: auto;
  display: block;
}

.description {
  padding: 30px;
  text-align: center;
}

.project {
  color: #fff;
  font-style: italic;
  font-size: 14px;
}

.divider {
  height: 1px;
  background-color: #ed1f27;
  width: 40%;
  margin: 0 auto;
  margin-top: 30px;
}

/* Adjustments for different screen sizes */
@media (max-width: 768px) {
  .card-slider {
    width: 90%;
  }

  .card {
    max-width: 100%;
    margin: 10px 0;
  }

  .shape {
    width: 100%;
    border-top-right-radius: 0;
  }
   
  .divider {
    margin-top: 20px;
  }

  .project {
    font-size: 12px;
  }
}

/* New media query for screens between 769px and 991px */
@media (min-width: 769px) and (max-width: 991px) {
  .card-slider {
    width: 95%; /* Slightly wider slider for better use of space */
  }

  .card {
    margin: 20px; /* Increased margin for better spacing */
  }

  .description {
    padding: 20px; /* Reduced padding for more text */
  }

  .project {
    font-size: 12px; /* Slightly larger font size for better readability */
  }
}

/* New media query for screens between 992px and 1200px */
@media (min-width: 992px) and (max-width: 1200px) {
  .card-slider {
    width: 100%; /* Use full width to display more content */
  }

  .card {
    margin: 25px 15px; /* Optimal spacing around cards */
  }

  .description {
    padding: 25px; /* Increased padding for aesthetic spacing */
  }

  .project {
    font-size: 13px; /* Ideal font size for medium screens */
  }

  .divider {
    width: 50%; /* Wider divider for better visual separation */
    margin-top: 25px; /* More space above the divider */
  }
}

@media (max-width: 480px) {
  .description {
    padding: 15px;
  }

  .project {
    font-size: 11px;
  }

  .divider {
    margin-top: 10px;
  }
}
</style>
-->


<style scoped>
.section {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

.card-slider {
  width: 90%; /* Adjust width as needed */
  margin: 0 auto; /* Center the slider */
  padding: 10px;
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
  min-height: 580px;
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

