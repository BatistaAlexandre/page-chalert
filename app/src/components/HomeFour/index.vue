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

    <header-home-four @toggleSidebar="toggleSidebar" :menuItems="navs" />

    <!--====== PART ENDS ======-->

    <!--====== APPIE HERO PART START ======-->

    <hero-home-four />

    <!--====== APPIE HERO PART ENDS ======-->

    <!--====== APPIE SERVICES PART START ======-->
    <!-- reference home one -->
    <services-home-one
      :grid_items="itemsGrid"
      section_heading="Designed with"
      more_heading="The applicant in mind."
      description="The full monty spiffing good time no biggie cack grub fantastic."
      class="pt-190 pb-100"
    />

    <!--====== APPIE SERVICES PART ENDS ======-->

    <!--====== APPIE FEATURES 2 PART START ======-->

    <feature-home-four />

    <!--====== APPIE FEATURES 2 PART ENDS ======-->

    <!--====== APPIE COUNTER PART START ======-->
    <!-- reference home two -->
    <counter-home-two
      title="How does it work"
      description="The full monty spiffing good time no biggie cack grub fantastic."
      class="home-four-counter"
    />

    <!--====== APPIE COUNTER PART ENDS ======-->

    <!--====== APPIE TESTIMONIAL PART START ======-->
    <!-- reference home one -->
    <testimonial-home-one :sliderContents="sliderContents" />

    <!--====== APPIE TESTIMONIAL PART ENDS ======-->

    <!--====== APPIE VIDEO PLAYER PART START ======-->
    <!-- reference home two -->
    <video-play-home-two
      class="pb-100 pt-100"
      title="Watch the two-minute video to learn how."
      description="The wireless cheesed on your bike mate zonked a load of old tosh hunky dory it's all gone to pot haggle william car boot pear shaped geeza."
      videoUrl="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1"
      :thumbnail="video_bg_thumb"
    />

    <!--====== APPIE VIDEO PLAYER PART ENDS ======-->

    <!--====== APPIE PRICING PART START ======-->
    <!-- reference home one -->
    <priceing-home-one
      title="Simple pricing for Everyone"
      description="The full monty spiffing good time no biggie cack grub fantastic."
    />

    <!--====== APPIE PRICING PART ENDS ======-->

    <!--====== APPIE PROJECT 3 PART START ======-->
    <!-- reference home three -->
    <project-home-three class="home-four-project" />

    <!--====== APPIE PROJECT 3 PART ENDS ======-->

    <!--====== APPIE FOOTER PART START ======-->
    <!-- reference home three -->
    <footer-home-three class="home-four-footer" />

    <!--====== APPIE FOOTER PART ENDS ======-->

    <!--====== APPIE BACK TO TOP PART ENDS ======-->
    <div class="back-to-top back-to-top-3">
      <a href="#"><i class="fal fa-arrow-up"></i></a>
    </div>
    <!--====== APPIE BACK TO TOP PART ENDS ======-->
  </div>
</template>

<script>
import video_bg_thumb from "@/assets/images/video-thumb-1.jpg";
import testmonialAvater from "@/assets/images/testimonial-user.png";
import icon_one from "@/assets/images/icon/1.png";
import icon_two from "@/assets/images/icon/2.png";
import icon_three from "@/assets/images/icon/3.png";
import icon_four from "@/assets/images/icon/4.png";
import PriceingHomeOne from "../HomeOne/PriceingHomeOne.vue";
import ServicesHomeOne from "../HomeOne/ServicesHomeOne.vue";
import SidebarHomeOne from "../HomeOne/SidebarHomeOne.vue";
import TestimonialHomeOne from "../HomeOne/TestimonialHomeOne.vue";
import FooterHomeThree from "../HomeThree/FooterHomeThree.vue";
import ProjectHomeThree from "../HomeThree/ProjectHomeThree.vue";
import CounterHomeTwo from "../HomeTwo/CounterHomeTwo.vue";
import VideoPlayHomeTwo from "../HomeTwo/VideoPlayHomeTwo.vue";
import FeatureHomeFour from "./FeatureHomeFour.vue";
import HeaderHomeFour from "./HeaderHomeFour.vue";
import HeroHomeFour from "./HeroHomeFour.vue";
export default {
  components: {
    SidebarHomeOne,
    HeaderHomeFour,
    HeroHomeFour,
    ServicesHomeOne,
    FeatureHomeFour,
    CounterHomeTwo,
    TestimonialHomeOne,
    VideoPlayHomeTwo,
    PriceingHomeOne,
    ProjectHomeThree,
    FooterHomeThree,
  },
  data() {
    return {
      sidebar: false,
      video_bg_thumb: video_bg_thumb,
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
      itemsGrid: [
        {
          count: 1,
          icon: icon_one,
          title: "Searching",
          content: "Mucker plastered bugger all mate morish are.",
          customClass: "",
        },
        {
          count: 2,
          icon: icon_two,
          title: "Designing",
          content: "Mucker plastered bugger all mate morish are.",
          customClass: "item-2",
        },
        {
          count: 3,
          icon: icon_three,
          title: "Building",
          content: "Mucker plastered bugger all mate morish are.",
          customClass: "item-3",
        },
        {
          count: 4,
          icon: icon_four,
          title: "Suporting",
          content: "Mucker plastered bugger all mate morish are.",
          customClass: "item-4",
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
.home-four-counter {
  background: #eef1f6;
}
.home-four-project {
  background: #eef1f6;
}
.appie-footer-area.appie-footer-3-area.home-four-footer {
  background: #fff;
}
</style>