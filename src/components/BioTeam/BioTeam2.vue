<template>
    <div>
  
    <sidebar-home-one :sidebar="sidebar" @toggleSidebar="toggleSidebar" :menuItems="navs" />
    <header-home-one @toggleSidebar="toggleSidebar" :menuItems="navs"/>

  
      <section class="appie-service-details-area pt-25 pb-70">
        <div class="container">
          <div class="row">
            <div class="bio-list-container">
        <bio-card 
            v-for="person in members"
            :key="person.id"
            :name="person.name"
            :position="person.position"
            :bio="person.bio"
            :image="person.img"
            :socials="person.socials"
        />
    </div>
            
          </div>
        </div>
      </section>
  
  
  
      <footer-home-one />

      <div class="back-to-top">
        <a href="#"><i class="fal fa-arrow-up"></i></a>
      </div>
      <!--====== APPIE BACK TO TOP PART ENDS ======-->
    </div>
  </template>
  
  <script>
  import FooterHomeOne from "../HomeOne/FooterHomeOne.vue";
  import ProjectHomeOne from "../HomeOne/ProjectHomeOne.vue";
  import SidebarHomeOne from "../HomeOne/SidebarHomeOne.vue";
  import HeaderHomeOne from "../HomeOne/HeaderHomeOne.vue";
  //import HeaderNews from "../News/HeaderNews.vue";
 // import BannerServiceDetails from "./BannerServiceDetails.vue";
 // import BodyNavSidebar from "./BodyNavSidebar.vue";
 import BioCard from './BioCard.vue';
import { members } from './members'; 
  export default {
    components: {
      SidebarHomeOne,
      BioCard,
      //HeaderNews,
      HeaderHomeOne,
    //  BannerServiceDetails,
      //BodyNavSidebar,
      ProjectHomeOne,
      FooterHomeOne,
      // FaqService,  
    },
    data() {
      return {
        sidebar: false,
        showloading: true,
        members,
        navs: [
        {
            name: "Home",
            path: "/#header",
          },
          {
            name: "How it works",
            path: "/#How It Works",
          },
          {
            name: "Plans",
            path: "/#Plans",
          },
          {
            name: "Values",
            path: "/#Our Values",
          },
          {
            name: "Services",
            path: "/#Services",
          },
          {
            name: "Partners",
            path: "/#Team",
          },
          {
            name: "FAQ",
            path: "/#FAQ",
          },
          {
            name: "Crime Prevention",
            path: "#",
          },
        ],     
        
    }
    },
    mounted() {
      document.addEventListener("scroll", this.topToBottom);
    },
    methods: {
      topToBottom() {
        const result = document.querySelector(".back-to-top");
        if (
          document.body.scrollTop > window.innerHeight ||
          document.documentElement.scrollTop > window.innerHeight
        ) {
          result.style.display = "block";
        } else {
          result.style.display = "none";
        }
      },
      toggleSidebar() {
        this.sidebar = !this.sidebar;
      },
    },
  };
  </script>
  
  <style>
  .content {
    padding: 0px 30px;
    font-size: large;
    line-height: 1.8;
  }
  
  
    .content div > p {
      margin-top: 20px;
      margin-bottom: 20px; 
      font-size: large;
      line-height: 1.8;
  }
  
  .normal-text {
    font-weight: 600;
  }
  
  .check-list li::before {
    content: '\2713'; 
    color: #ed1f27; 
    margin-right: 8px;
  }
  
  .check-list li,
  .check-list p {
    padding-bottom: 10px;
    font-size: large;
  }
  
  .check-list li {
    font-weight: bold;
  }

  .bio-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* This will handle spacing between cards */
    max-width: 65%;
    margin: auto;
    padding: 120px 20px; 
}

@media (max-width: 992px) {
    .bio-list-container {
        flex-direction: column;
        align-items: center; /* This centers the cards on small screens */
        max-width: 90%;
    }
}
@media (min-width: 993px) and (max-width: 1200px) {
    .bio-list-container {
        flex-direction: column;
        align-items: center; /* Centers the cards on medium screens */
        max-width: 95%; /* Specific width adjustment for medium screens */
    }
}
  
  </style>