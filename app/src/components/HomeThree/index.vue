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

    <header-home-three @toggleSidebar="toggleSidebar" :menuItems="navs" />

    <!--====== PART ENDS ======-->

    <!--====== APPIE HERO PART START ======-->

    <hero-home-three
      title="Creative way to Showcase your app"
      description="Jolly good excuse my french boot super my good sir cup of"
      more_description="char richard about chinwag."
      videoUrl="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1"
    />

    <!--====== APPIE HERO PART ENDS ======-->

    <!--====== APPIE SERVICES PART START ======-->

    <services-home-three />

    <!--====== APPIE SERVICES PART ENDS ======-->

    <!--====== APPIE FUN FACT PART START ======-->

    <funfact-home-three />

    <!--====== APPIE FUN FACT PART ENDS ======-->

    <!--====== APPIE ABOUT 3 PART START ======-->

    <about-home-three />

    <!--====== APPIE ABOUT 3 PART ENDS ======-->

    <!--====== APPIE SHOWCASE PART START ======-->

    <show-case-home-three />

    <!--====== APPIE SHOWCASE PART ENDS ======-->

    <!--====== APPIE DOWNLOAD 3 PART START ======-->

    <download-home-three />

    <!--====== APPIE DOWNLOAD 3 PART ENDS ======-->

    <!--====== APPIE BLOG 3 PART START ======-->

    <blog-home-three :blogs="blogs" />

    <!--====== APPIE BLOG 3 PART ENDS ======-->

    <!--====== APPIE PROJECT 3 PART START ======-->

    <project-home-three />

    <!--====== APPIE PROJECT 3 PART ENDS ======-->

    <!--====== APPIE FOOTER PART START ======-->

    <footer-home-three />

    <!--====== APPIE FOOTER PART ENDS ======-->

    <!--====== APPIE BACK TO TOP PART ENDS ======-->
    <div class="back-to-top back-to-top-3">
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
import SidebarHomeOne from "../HomeOne/SidebarHomeOne.vue";
import AboutHomeThree from "./AboutHomeThree.vue";
import BlogHomeThree from "./BlogHomeThree.vue";
import DownloadHomeThree from "./DownloadHomeThree.vue";
import FooterHomeThree from "./FooterHomeThree.vue";
import FunfactHomeThree from "./FunfactHomeThree.vue";
import HeaderHomeThree from "./HeaderHomeThree.vue";
import HeroHomeThree from "./HeroHomeThree.vue";
import ProjectHomeThree from "./ProjectHomeThree.vue";
import ServicesHomeThree from "./ServicesHomeThree.vue";
import ShowCaseHomeThree from "./ShowCaseHomeThree.vue";
export default {
  components: {
    HeaderHomeThree,
    HeroHomeThree,
    ServicesHomeThree,
    FunfactHomeThree,
    AboutHomeThree,
    ShowCaseHomeThree,
    DownloadHomeThree,
    BlogHomeThree,
    ProjectHomeThree,
    FooterHomeThree,
    SidebarHomeOne,
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
      blogImgFour: blogImgFour,
      blogImgFive: blogImgFive,
      blogImgSix: blogImgSix,
      blogImgSeven: blogImgSeven,
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