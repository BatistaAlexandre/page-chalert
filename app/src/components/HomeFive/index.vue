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

    <sidebar-home-one
      :sidebar="sidebar"
      @toggleSidebar="toggleSidebar"
      :menuItems="navs"
    />

    <!--====== OFFCANVAS MENU PART ENDS ======-->

    <!--====== PART START ======-->
    <header-home-five @toggleSidebar="toggleSidebar" :menuItems="navs" />
    <!--====== PART ENDS ======-->

    <!--====== APPIE HERO PART START ======-->

    <hero-home-five />

    <!--====== APPIE HERO PART ENDS ======-->

    <!--====== APPIE SERVICES PART START ======-->

    <services-home-three />

    <!--====== APPIE SERVICES PART ENDS ======-->

    <!--====== APPIE FEATURES 2 PART START ======-->
    <feature-home-two />
    <!--====== APPIE FEATURES 2 PART ENDS ======-->

    <!--====== APPIE DOWNLOAD 3 PART START ======-->

    <download-home-three class="pt-90 pb-90" />

    <!--====== APPIE DOWNLOAD 3 PART ENDS ======-->

    <!--====== APPIE SHOWCASE PART START ======-->

    <show-case-home-three />

    <!--====== APPIE SHOWCASE PART ENDS ======-->

    <!--====== APPIE TESTIMONIAL PART START ======-->

    <testimonial-home-one :sliderContents="sliderContents" />

    <!--====== APPIE TESTIMONIAL PART ENDS ======-->

    <!--====== APPIE SPONSER PART START ======-->

    <sponser-home-two
      class="pt-90 pb-100"
      title="Appie works best with"
      more_title="your favorite platforms"
      description="Join over 40,000 businesses worldwide."
    />

    <!--====== APPIE SPONSER PART ENDS ======-->

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
import testmonialAvater from "@/assets/images/testimonial-user.png";
import FooterHomeOne from "../HomeOne/FooterHomeOne.vue";
import SidebarHomeOne from "../HomeOne/SidebarHomeOne.vue";
import TestimonialHomeOne from "../HomeOne/TestimonialHomeOne.vue";
import DownloadHomeThree from "../HomeThree/DownloadHomeThree.vue";
import ServicesHomeThree from "../HomeThree/ServicesHomeThree.vue";
import ShowCaseHomeThree from "../HomeThree/ShowCaseHomeThree.vue";
import FeatureHomeTwo from "../HomeTwo/FeatureHomeTwo.vue";
import SponserHomeTwo from "../HomeTwo/SponserHomeTwo.vue";
import HeaderHomeFive from "./HeaderHomeFive.vue";
import HeroHomeFive from "./HeroHomeFive.vue";
export default {
  components: {
    HeaderHomeFive,
    SidebarHomeOne,
    HeroHomeFive,
    ServicesHomeThree,
    FeatureHomeTwo,
    DownloadHomeThree,
    ShowCaseHomeThree,
    TestimonialHomeOne,
    SponserHomeTwo,
    FooterHomeOne,
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
      sliderContents: [
        {
          title: "Jason Response",
          date: "April 14, 2022",
          description:
            "Why I say old chap that is spiffing lurgy Oxford cracking goal bleeder, bog-standard Harry brilliant mush a blinding shot starkers.",
          ratings: 5,
          avatar: testmonialAvater,
        },
        {
          title: "Jason Response",
          date: "April 14, 2022",
          description:
            "Why I say old chap that is spiffing lurgy Oxford cracking goal bleeder, bog-standard Harry brilliant mush a blinding shot starkers.",
          ratings: 5,
          avatar: testmonialAvater,
        },
        {
          title: "Jason Response",
          date: "April 14, 2022",
          description:
            "Why I say old chap that is spiffing lurgy Oxford cracking goal bleeder, bog-standard Harry brilliant mush a blinding shot starkers.",
          ratings: 2,
          avatar: testmonialAvater,
        },
        {
          title: "Jason Response",
          date: "April 14, 2022",
          description:
            "Why I say old chap that is spiffing lurgy Oxford cracking goal bleeder, bog-standard Harry brilliant mush a blinding shot starkers.",
          ratings: 3,
          avatar: testmonialAvater,
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