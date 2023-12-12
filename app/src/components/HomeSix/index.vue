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

    <header-home-six @toggleSidebar="toggleSidebar" :menuItems="navs" />

    <!--====== PART ENDS ======-->

    <!--====== APPIE HERO PART START ======-->

    <hero-home-six />

    <!--====== APPIE HERO PART ENDS ======-->

    <!--====== APPIE SERRVICE 2 PART START ======-->

    <services-home-two
      class="pt-90 pb-100"
      title="How does it work"
      description="The full monty spiffing good time no biggie cack grub fantastic."
    />

    <!--====== APPIE SERRVICE 2 PART ENDS ======-->

    <!--====== APPIE FEATURES PART START ======-->

    <features-home-one class="pb-80 appie-features-6-area" />

    <!--====== APPIE FEATURES PART ENDS ======-->

    <!--====== APPIE COUNTER PART START ======-->

    <counter-home-two
      title="How does it work"
      description="The full monty spiffing good time no biggie cack grub fantastic."
    />

    <!--====== APPIE COUNTER PART ENDS ======-->

    <!--====== APPIE VIDEO PLAYER PART START ======-->

    <video-play-home-two
      title="Watch the two-minute video to learn how."
      description="The wireless cheesed on your bike mate zonked a load of old tosh hunky dory it's all gone to pot haggle william car boot pear shaped geeza."
      videoUrl="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1"
      :thumbnail="video_bg_thumb"
    />

    <!--====== APPIE VIDEO PLAYER PART ENDS ======-->

    <!--====== APPIE DOWNLOAD 3 PART START ======-->

    <download-home-three class="pb-100 pt-0" />

    <!--====== APPIE DOWNLOAD 3 PART ENDS ======-->

    <!--====== APPIE PRICING PART START ======-->

    <priceing-home-one />

    <!--====== APPIE PRICING PART ENDS ======-->

    <!--====== APPIE BLOG 3 PART START ======-->

    <blog-home-three :blogs="blogs" />

    <!--====== APPIE BLOG 3 PART ENDS ======-->

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
import blogImgFour from "@/assets/images/blog-4.jpg";
import blogImgFive from "@/assets/images/blog-5.jpg";
import blogImgSix from "@/assets/images/blog-6.jpg";
import blogImgSeven from "@/assets/images/blog-7.jpg";
import video_bg_thumb from "@/assets/images/video-thumb-1.jpg";
import FeaturesHomeOne from "../HomeOne/FeaturesHomeOne.vue";
import FooterHomeOne from "../HomeOne/FooterHomeOne.vue";
import PriceingHomeOne from "../HomeOne/PriceingHomeOne.vue";
import SidebarHomeOne from "../HomeOne/SidebarHomeOne.vue";
import BlogHomeThree from "../HomeThree/BlogHomeThree.vue";
import DownloadHomeThree from "../HomeThree/DownloadHomeThree.vue";
import CounterHomeTwo from "../HomeTwo/CounterHomeTwo.vue";
import ServicesHomeTwo from "../HomeTwo/ServicesHomeTwo.vue";
import VideoPlayHomeTwo from "../HomeTwo/VideoPlayHomeTwo.vue";
import HeaderHomeSix from "./HeaderHomeSix.vue";
import HeroHomeSix from "./HeroHomeSix.vue";
export default {
  components: {
    SidebarHomeOne,
    HeaderHomeSix,
    HeroHomeSix,
    ServicesHomeTwo,
    FeaturesHomeOne,
    CounterHomeTwo,
    VideoPlayHomeTwo,
    DownloadHomeThree,
    PriceingHomeOne,
    BlogHomeThree,
    FooterHomeOne,
  },
  data() {
    return {
      sidebar: false,
      video_bg_thumb: video_bg_thumb,
      blogs: [
        {
          img: blogImgFour,
          title: "How to Improve Your App Store Position",
          date: "July 14, 2022",
          comment_date: "July 14, 2022",
        },
        {
          img: blogImgFive,
          title: "Introducing New App Design for our iOS App",
          date: "July 14, 2022",
          comment_date: "July 14, 2022",
        },
        {
          img: blogImgSix,
          title: "Engineering job is Becoming More interesting.",
          date: "July 14, 2022",
          comment_date: "July 14, 2022",
        },
        {
          img: blogImgSeven,
          title: "20 Myths About Mobile Applications",
          date: "July 14, 2022",
          comment_date: "July 14, 2022",
        },
      ],
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