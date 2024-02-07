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

    <header-news @toggleSidebar="toggleSidebar" :menuItems="navs" />
    <!--====== PART ENDS ======-->

    <!--====== APPIE PAGE TITLE PART START ======-->

    <banner-service-details />

    <!--====== APPIE PAGE TITLE PART ENDS ======-->

    <!--====== APPIE SERVICE DETAILS PART ENDS ======-->

    <section class="appie-service-details-area pt-100 pb-100">
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
  <h3 class="title">Joining the Chalet Security Program</h3>
  <p>
    At Excel Security Solutions, we believe in the power of community and collective action to enhance the
    safety of your chalet. <br>Joining our Neighbourhood Watch program is simple, free, and comes with a
    myriad of benefits for both your property and the entire community.
  </p>
  <span>Step 1: Sign Up for Free</span>
  <p>
    If you own a chalet in our region, you're eligible to join the program for free. Signing up is
    easy—simply visit our website and fill out a straightforward online form. Provide some basic information
    about your chalet and your contact details, and you're on your way to becoming an integral part of our
    security network.
  </p>
  <span>Step 2: Confirmation Email</span>
  <p>
    Once you've submitted your information, you will receive a prompt confirmation email. This email will
    contain important details and a unique link to access our exclusive platform designed specifically for
    chalet owners like yourself.
  </p>
  <span>Step 3: Explore the Exclusive Platform</span>
  <p>
    Access the exclusive platform to discover more about how the program works and the various ways you can
    actively participate. Inside, you'll find comprehensive information on the program's features, the role
    Excel Security Solutions plays, and how you can contribute to making our community safer.
  </p>
  <span>Benefits of Joining:</span>
  <p>
    - Collective Approach:<br>
    By joining our program, you become a part of a collective effort to make the entire region safer for
    everyone.<br>
    <br>
    - Information Access: <br>
    Gain access to crucial information, updates, and insights related to the security of your chalet and the
    community.<br>
    <br>
    - Active Involvement:<br>
    Learn how you can actively contribute to the safety of your neighborhood through simple yet impactful
    measures.<br>
    <br>
    - Community Connection: <br>
    Connect with fellow chalet owners who share a common goal of creating a secure living environment.<br>
    Excel Security Solutions is dedicated to fostering a sense of security and community.<br>
    Join our program
    today, and together, let's build a safer haven for all chalet owners in the region. Your involvement
    makes a difference!<br>
  </p>
  <br>
  
  <h3 class="title">Choosing the Best Home Security System for Your Chalet</h3>
  <p>
    If you're looking for a new home security system or want to switch your current one, these steps can help you find the best. To help you find the best home security system for your chalet, we have prepared this guide that covers the main features and factors that you should consider. We will also walk you through the steps to choose the most suitable system for your needs and preferences.  A home security system is more than just a set of cameras and alarms. It is a comprehensive solution that provides you with peace of mind and confidence. Here are some of the key features and factors that you should look for in a home security system.
  </p>
  <br>
  <h4>Seven steps to consider:</h4>
  <ol>
    <li>Assess your security needs. Identify the weak points of your home and the types of sensors and detectors you may need to protect them.</li>
    <li>Consider your budget. Find out how much each system costs upfront and monthly and choose one that fits your budget.</li>
    <li>Look for additional features. Decide which features are important to you, such as video monitoring, smart home integration, and mobile app control, and look for systems that offer them.</li>
    <li>Check for compatibility. If you have existing smart home devices, make sure they can work with the security system you choose.</li>
    <li>Choose a reputable provider. Look for a provider that has a good reputation, a long history, and positive customer feedback.</li>
    <li>Install and test the system. Follow the installation instructions and test the system to make sure it's functioning properly. Set up notifications and alerts to keep you updated on any security issues.</li>
    <li>Research available options. Compare different types of home security systems or speak to Excel Security Solutions for a free no obligation consultation.</li>
  </ol>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====== APPIE SERVICE DETAILS PART ENDS ======-->

    <!--====== APPIE PROJECT PART START ======-->

    <project-home-one 
    id="contact"
    style="padding-top: 110px;"
    title="Secure your safety" description="Book your visit now and experience our unparalleled protection services firsthand. We will contact you in less than 24 hours." />

    <!--====== APPIE PROJECT PART ENDS ======-->

    <!--====== APPIE FOOTER PART START ======-->

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
import HeaderNews from "../News/HeaderNews.vue";
import BannerServiceDetails from "./BannerServiceDetails.vue";
import BodyNavSidebar from "./BodyNavSidebar.vue";
export default {
  components: {
    SidebarHomeOne,
    HeaderNews,
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

<style></style>