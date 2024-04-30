<template>
  <div>
    <!--====== PRELOADER PART START ======-->

    <!-- <div class="loader-wrap">
        <div class="preloader"><div class="preloader-close">Preloader Close</div></div>
        <div class="layer layer-one"><span class="overlay"></span></div>
        <div class="layer layer-two"><span class="overlay"></span></div>        
        <div class="layer layer-three"><span class="overlay"></span></div>        
    </div> -->

    <!--====== PRELOADER PART ENDS ======-->

    <!--====== OFFCANVAS MENU PART START ======-->

   <sidebar-home-one :sidebar="sidebar" @toggleSidebar="toggleSidebar" :menuItems="navs" />

    <!--====== OFFCANVAS MENU PART ENDS ======-->

    <!--====== PART START ======-->
    <header-home-one @toggleSidebar="toggleSidebar" :menuItems="navs"/>
  
    <!--====== PART ENDS ======-->

    <!--====== APPIE PAGE TITLE PART START ======-->

    <banner-service-details />

    <!--====== APPIE PAGE TITLE PART ENDS ======-->

    <!--====== APPIE SERVICE DETAILS PART ENDS ======-->

    <section class="appie-service-details-area pt-25 pb-70">
      <div class="container">
        <div class="row">
          <!-- <div class="col-lg-4">
            <body-nav-sidebar />
          </div> -->

          <FaqService :class="[dark ? 'appie-faq-area-dark' : '']" title="Excel Security Solutions Code of Conduct"
            description="Excel Security Solutions is committed to upholding the highest standards of integrity, professionalism,
                  and community engagement. Our Code of Conduct outlines the values and principles that guide our actions
                  and interactions within the Chalert Neighbourhood Watch program." />
          <div class="col-lg-12">
            <div class="service-details-content">
              <div class="thumb">
                <img src="assets/images/service-details-thumb.jpg" alt="" />
              </div>
              <div class="content">
                <h3 class="title">Choosing the Best Home Security System for Your Chalet</h3>
                <div>
                  <p>
                    <span class="normal-text">If you're looking for a new home security system or want to switch your current one, these steps can help you find the best.
                      To help you find the best home security system for your chalet, we have prepared this guide that covers the main features and factors that you should consider.
                      We will also walk you through the steps to choose the most suitable system for your needs and preferences. A home security system is more than just a set of cameras and alarms.
                    </span>
                  It is a comprehensive solution that provides you with peace of mind and confidence. Here are some of the key features and factors that you should look for in a home security system.
                  </p>
                </div>
                
                <h4>Seven steps to consider:</h4></br>
                <ul class="check-list">
                  <li>Assess your security needs.</li>
                  <p>Identify the weak points of your home and the types of sensors and detectors you may need to protect them.</p>
                  <li>Consider your budget.</li>
                   <p>Find out how much each system costs upfront and monthly, and choose one that fits your budget.</p>
                  <li>Look for additional features.</li>
                   <p>Decide which features are important to you, such as video monitoring, smart home integration, and mobile app control, and look for systems that offer them.</p>
                  <li>Check for compatibility.</li>
                   <p>If you have existing smart home devices, make sure they can work with the security system you choose.</p>
                  <li>Choose a reputable provider.</li>
                   <p>Look for a provider that has a good reputation, a long history, and positive customer feedback.</p>
                  <li>Install and test the system.</li>
                   <p>Follow the installation instructions and test the system to make sure it's functioning properly. Set up notifications and alerts to keep you updated on any security issues.</p>
                  <li>Research available options.</li>
                  <p>Compare different types of home security systems or speak to Excel Security Solutions for a free no obligation consultation.</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <footer-home-one />

    <!--====== APPIE FOOTER PART ENDS ======-->

    <!--====== APPIE BACK TO TOP PART ENDS ======-->
    <div class="back-to-top">
      <a href="#"><i class="fal fa-arrow-up"></i></a>
    </div>
    <!--====== APPIE BACK TO TOP PART ENDS ======-->
  </div>
</template>

<script>
import FaqService from "../HomeOne/FaqService.vue";

import FooterHomeOne from "../HomeOne/FooterHomeOne.vue";
import ProjectHomeOne from "../HomeOne/ProjectHomeOne.vue";
import SidebarHomeOne from "../HomeOne/SidebarHomeOne.vue";
import HeaderHomeOne from "../HomeOne/HeaderHomeOne.vue";
import HeaderNews from "../News/HeaderNews.vue";
import BannerServiceDetails from "./BannerServiceDetails.vue";
import BodyNavSidebar from "./BodyNavSidebar.vue";
export default {
  components: {
    SidebarHomeOne,
    HeaderNews,
    HeaderHomeOne,
    BannerServiceDetails,
    BodyNavSidebar,
    ProjectHomeOne,
    FooterHomeOne,
    // FaqService,  
  },
  data() {
    return {
      sidebar: false,
      showloading: true,
      navs: [
      {
          name: "Home",
          path: "/#header",
        },
        {
          name: "Our Goal",
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
        // {
        //   name: "Contact",
        //   path: "#contact",
        // },
      ],
    };
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

</style>