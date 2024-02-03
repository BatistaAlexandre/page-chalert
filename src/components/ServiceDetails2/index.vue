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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====== APPIE SERVICE DETAILS PART ENDS ======-->

    <!--====== APPIE PROJECT PART START ======-->

    <project-home-one title="Secure your safety" description="Book your visit now and experience our unparalleled protection services firsthand. We will contact you in less than 24 hours." />

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
          path: "#",
        },
        {
          name: "Our Values",
          path: "#",
        },
        {
          name: "Plans",
          path: "#",
        },
        {
          name: "How it works",
          path: "#",
        },
        {
          name: "Services",
          path: "#",
        },
        {
          name: "Team",
          path: "#",
        },
        {
          name: "FAQ",
          path: "#",
        },
        {
          name: "Tips",
          path: "#",
        },
        {
          name: "Contact",
          path: "#",
        },
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