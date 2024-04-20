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

   
    <header-home-one @toggleSidebar="toggleSidebar" :menuItems="navs" />
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
    <h3 class="title">The importance of security sign placement</h3>
    <p>
    Security signs are an effective way to enhance your security system. They can alert potential intruders that you are part
    of the CHalert system, which can deter them from targeting your chalet.
    You should place <b>security signs around your chalet</b> that maybe easy to access, as these are the most vulnerable points. 
    You should also <b>use alarm stickers</b> on your windows and doors, as they can warn intruders. 
    This can scare them away and prevent a break-in.
    </p>
    <br>
    <h4>Please indicate which type and size of signs you require:</h4>
    <StickerTable/>
    <h6 style="padding-top: 40px;">Contact us to request security signs for your chalet</h6>
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
import HeaderHomeOne from "../HomeOne/HeaderHomeOne.vue";
import HeaderNews from "../News/HeaderNews.vue";
import BannerServiceDetails from "./BannerServiceDetails.vue";
import BodyNavSidebar from "./BodyNavSidebar.vue";
import StickerTable from "../StickerTable.vue";
export default {
  components: {
    SidebarHomeOne,
    HeaderNews,
    BannerServiceDetails,
    BodyNavSidebar,
    ProjectHomeOne,
    FooterHomeOne,
    HeaderHomeOne,
    StickerTable
    // FaqService,  
  },
  data() {
    return {
      sidebar: false,
      showloading: true,
      navs: [
        {
          name: "Home",
          path: "/#",
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
          name: "Team",
          path: "/#Team",
        },
       {
          name: "Partners",
          path: "/#Partners",
        },
        {
          name: "FAQ",
          path: "/#FAQ",
        },
        {
          name: "Crime Prevention",
          path: "/crime-prevention",
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