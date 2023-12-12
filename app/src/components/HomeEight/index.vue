<template>
  <div>
    <!--====== PRELOADER PART START ======-->
    <!-- 
    <div class="loader-wrap">
        <div class="preloader"><div class="preloader-close">Preloader Close</div></div>
        <div class="layer layer-one"><span class="overlay"></span></div>
        <div class="layer layer-two"><span class="overlay"></span></div>        
        <div class="layer layer-three"><span class="overlay"></span></div>        
    </div> -->

    <!--====== PRELOADER PART ENDS ======-->

    <!--====== OFFCANVAS MENU PART START ======-->
    <sidebar-home-one
      :sidebar="sidebar"
      @toggleSidebar="toggleSidebar"
      :menuItems="navs"
    />

    <!--====== OFFCANVAS MENU PART ENDS ======-->

    <!--====== PART START ======-->

    <header-home-eight @toggleSidebar="toggleSidebar" :menuItems="navs" />

    <!--====== PART ENDS ======-->

    <!--====== APPIE HERO PART START ======-->

    <hero-home-eight />

    <!--====== APPIE HERO PART ENDS ======-->

    <!--====== APPIE ABOUT 8 PART ENDS ======-->

    <about-home-eight />

    <!--====== APPIE ABOUT 8 PART ENDS ======-->

    <!--====== APPIE SERRVICE 2 PART START ======-->

    <services-home-eight />

    <!--====== APPIE SERRVICE 2 PART ENDS ======-->

    <!--====== APPIE HOW IT WORK PART ENDS ======-->
    <work-home-eight />

    <!--====== APPIE HOW IT WORK PART ENDS ======-->

    <!--====== APPIE get started PART ENDS ======-->

    <get-started-home-eight />
    <!--====== APPIE get started PART ENDS ======-->

    <!--====== APPIE TEAM PART START ======-->

    <team-home-eight />

    <!--====== APPIE TEAM PART ENDS ======-->

    <!--====== APPIE TESTIMONIAL PART ENDS ======-->
    <testimonial-home-eight />
    <!--====== APPIE TESTIMONIAL PART ENDS ======-->

    <!--====== APPIE BLOG 3 PART START ======-->

    <blog-home-eight />

    <!--====== APPIE BLOG 3 PART ENDS ======-->

    <!--====== APPIE SPONSER PART ENDS ======-->

    <sponser-home-eight class="appie-signup-8-area" />

    <!--====== APPIE SPONSER PART ENDS ======-->

    <!--====== APPIE FOOTER PART START ======-->

    <footer-home-eight />

    <!--====== APPIE FOOTER PART ENDS ======-->

    <!--====== APPIE BACK TO TOP PART ENDS ======-->
    <div class="back-to-top back-to-top-8">
      <a href="#"><i class="fal fa-arrow-up"></i></a>
    </div>
    <!--====== APPIE BACK TO TOP PART ENDS ======-->
  </div>
</template>

<script>
import SidebarHomeOne from "../HomeOne/SidebarHomeOne.vue";
import AboutHomeEight from "./AboutHomeEight.vue";
import BlogHomeEight from "./BlogHomeEight.vue";
import FooterHomeEight from "./FooterHomeEight.vue";
import GetStartedHomeEight from "./GetStartedHomeEight.vue";
import HeaderHomeEight from "./HeaderHomeEight.vue";
import HeroHomeEight from "./HeroHomeEight.vue";
import ServicesHomeEight from "./ServicesHomeEight.vue";
import SponserHomeEight from "./SponserHomeEight.vue";
import TeamHomeEight from "./TeamHomeEight.vue";
import TestimonialHomeEight from "./TestimonialHomeEight.vue";
import WorkHomeEight from "./WorkHomeEight.vue";
export default {
  components: {
    SidebarHomeOne,
    HeaderHomeEight,
    HeroHomeEight,
    AboutHomeEight,
    ServicesHomeEight,
    WorkHomeEight,
    GetStartedHomeEight,
    TeamHomeEight,
    TestimonialHomeEight,
    BlogHomeEight,
    SponserHomeEight,
    FooterHomeEight,
  },
  data() {
    return {
      sidebar: false,
      navs: [
        {
          name: "home",
          childrens: [
            {
              name: "Home 1",
              path: "/",
            },
            {
              name: "Home 2",
              path: "/home-two",
            },
            {
              name: "Home 3",
              path: "/home-three",
            },
            {
              name: "Home 4",
              path: "/home-four",
            },
            {
              name: "Home 5",
              path: "/home-five",
            },
            {
              name: "Home 6",
              path: "/home-six",
            },
            {
              name: "Home 7",
              path: "/home-seven",
            },
            {
              name: "Home 8",
              path: "/home-eight",
            },
            {
              name: "Home Dark",
              path: "/home-dark",
            },
            {
              name: "Home Rtl",
              path: "/home-rtl",
            },
          ],
        },
        {
          name: "service",
          path: "/service-details",
        },
        {
          name: "pages",
          childrens: [
            {
              name: "About us",
              path: "/about-us",
            },
            {
              name: "About us 2",
              path: "/about-two",
            },
            {
              name: "Shops",
              path: "/shops",
            },
            {
              name: "Shop Details",
              path: "/shop-details",
            },
            {
              name: "Error",
              path: "/error",
            },
          ],
        },
        {
          name: "news",
          childrens: [
            {
              name: "News",
              path: "/news",
            },
            {
              name: "Single news",
              path: "/single-news",
            },
          ],
        },
        {
          name: "contact",
          path: "/contact",
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

<style>
</style>