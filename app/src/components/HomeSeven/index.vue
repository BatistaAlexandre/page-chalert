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

    <header-home-seven @toggleSidebar="toggleSidebar" :menuItems="navs" />

    <!--====== PART ENDS ======-->

    <!--====== APPIE HERO PART START ======-->

    <hero-home-seven />

    <!--====== APPIE HERO PART ENDS ======-->

    <!--====== APPIE FEATURES PART START ======-->

    <features-home-one />

    <!--====== APPIE FEATURES PART ENDS ======-->

    <!--====== APPIE COUNTER PART START ======-->

    <counter-home-two
      title="How does it work"
      description="The full monty spiffing good time no biggie cack grub fantastic."
    />

    <!--====== APPIE COUNTER PART ENDS ======-->

    <!--====== APPIE DOWNLOAD PART START ======-->

    <download-home-two
      title="App is available"
      more_title="for free on app store"
      description="Jolly good quaint james bond victoria sponge happy days cras arse over blatant."
    />

    <!--====== APPIE DOWNLOAD PART ENDS ======-->

    <!--====== APPIE TEAM PART START ======-->

    <team-home-one
      title="Meet our Team Members"
      description="Different layouts and styles for team sections."
      :members="members"
    />

    <!--====== APPIE TEAM PART ENDS ======-->

    <!--====== APPIE PRICING 2 PART START ======-->

    <priceing-home-two
      title="Simple pricing for Everyone"
      description="The full monty spiffing good time no biggie cack grub fantastic."
    />

    <!--====== APPIE PRICING 2 PART ENDS ======-->

    <!--====== APPIE FAQ PART START ======-->

    <faq-home-one
      class="pb-95 pt-90"
      title="Frequently asked questions"
      description="Different layouts and styles for team sections."
    />

    <!--====== APPIE FAQ PART ENDS ======-->

    <!--====== APPIE BLOG PART START ======-->

    <blog-home-one
      title="Latest blog posts"
      description="Different layouts and styles for team sections."
      :blogs="blogs"
    />

    <!--====== APPIE BLOG PART ENDS ======-->

    <!--====== APPIE PROJECT PART START ======-->

    <project-home-one
      title="Start your project with appie."
      description="We will email you only about this product."
    />

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
import blogOne from "@/assets/images/blog-1.jpg";
import blogTwo from "@/assets/images/blog-2.jpg";
import blogThree from "@/assets/images/blog-3.jpg";
import memberOne from "@/assets/images/team-1.jpg";
import memberTwo from "@/assets/images/team-2.jpg";
import memberThree from "@/assets/images/team-3.jpg";
import memberFour from "@/assets/images/team-4.jpg";
import BlogHomeOne from "../HomeOne/BlogHomeOne.vue";
import FaqHomeOne from "../HomeOne/FaqHomeOne.vue";
import FeaturesHomeOne from "../HomeOne/FeaturesHomeOne.vue";
import FooterHomeOne from "../HomeOne/FooterHomeOne.vue";
import ProjectHomeOne from "../HomeOne/ProjectHomeOne.vue";
import SidebarHomeOne from "../HomeOne/SidebarHomeOne.vue";
import TeamHomeOne from "../HomeOne/TeamHomeOne.vue";
import CounterHomeTwo from "../HomeTwo/CounterHomeTwo.vue";
import DownloadHomeTwo from "../HomeTwo/DownloadHomeTwo.vue";
import PriceingHomeTwo from "../HomeTwo/PriceingHomeTwo.vue";
import HeaderHomeSeven from "./HeaderHomeSeven.vue";
import HeroHomeSeven from "./HeroHomeSeven.vue";
export default {
  components: {
    SidebarHomeOne,
    HeaderHomeSeven,
    HeroHomeSeven,
    FeaturesHomeOne,
    CounterHomeTwo,
    DownloadHomeTwo,
    TeamHomeOne,
    PriceingHomeTwo,
    FaqHomeOne,
    BlogHomeOne,
    ProjectHomeOne,
    FooterHomeOne,
  },
  data() {
    return {
      sidebar: false,
      blogs: [
        {
          img: blogOne,
          date: "March 10, 2022",
          category: "Saas & App",
          title: "Introducing New Apps Design for our iOS App",
        },
        {
          img: blogTwo,
          date: "March 10, 2022",
          category: "Saas & App",
          title: "How to bring Dolce to your company",
        },
        {
          img: blogThree,
          date: "March 10, 2022",
          category: "Saas & App",
          title: "17 Effective Ways to Monetize Mobile Apps",
        },
      ],
      members: [
        {
          name: "Benjamin Evalent",
          position: "CEO-Founder",
          img: memberTwo,
          socials: [
            {
              name: "facebok",
              url: "https://www.facebook.com",
              icon: "fab fa-facebook-f", //user font awesome class
            },
            {
              name: "twitter",
              url: "https://www.twitter.com",
              icon: "fab fa-twitter", //user font awesome class
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.com/",
              icon: "fab fa-pinterest-p", //user font awesome class
            },
          ],
        },
        {
          name: "Benjamin Evalent",
          position: "CEO-Founder",
          img: memberOne,
          socials: [
            {
              name: "facebok",
              url: "https://www.facebook.com",
              icon: "fab fa-facebook-f", //user font awesome class
            },
            {
              name: "twitter",
              url: "https://www.twitter.com",
              icon: "fab fa-twitter", //user font awesome class
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.com/",
              icon: "fab fa-pinterest-p", //user font awesome class
            },
          ],
        },
        {
          name: "Benjamin Evalent",
          position: "CEO-Founder",
          img: memberThree,
          socials: [
            {
              name: "facebok",
              url: "https://www.facebook.com",
              icon: "fab fa-facebook-f", //user font awesome class
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.com/",
              icon: "fab fa-pinterest-p", //user font awesome class
            },
          ],
        },
        {
          name: "Benjamin Evalent",
          position: "CEO-Founder",
          img: memberFour,
          socials: [
            {
              name: "facebok",
              url: "https://www.facebook.com",
              icon: "fab fa-facebook-f", //user font awesome class
            },
            {
              name: "twitter",
              url: "https://www.twitter.com",
              icon: "fab fa-twitter", //user font awesome class
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.com/",
              icon: "fab fa-pinterest-p", //user font awesome class
            },
          ],
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