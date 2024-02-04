<template>
  <div>
    <div v-if="showloading">
      <loader-appie />
    </div>
    <div v-else>
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

      <header-home-one @toggleSidebar="toggleSidebar" :menuItems="navs" />

      <!--====== PART ENDS ======-->

      <!--====== APPIE HERO PART START ======-->

      <hero-home-one
        welcome_message="Welcome To Appie"
        slogan="Manage it all, in this all new system."
        description="Hanky panky lavatory up the duff jolly good cack brolly is chinwag zonked happy days sloshed."
        first_button_content="Download for iOS"
        first_button_icon="fab fa-apple"
      />
      <!-- second_button_content="Download for Android"
        second_button_icon="fab fa-google-play" -->

      <!--====== APPIE HERO PART ENDS ======-->

      <!--====== APPIE SERVICES PART START ======-->
      <services-home-one
        :grid_items="itemsGrid"
        section_heading="Designed with"
        more_heading="The applicant in mind."
        description="The full monty spiffing good time no biggie cack grub fantastic."
      />
      <!--====== APPIE SERVICES PART ENDS ======-->

      <!--====== APPIE FEATURES PART START ======-->
      <features-home-one />

      <!--====== APPIE FEATURES PART ENDS ======-->

      <!--====== APPIE TRAFFIC PART START ======-->

      <traffic-home-one
        :traffic_thumbnail="traffic_thumb"
        small_title="Traffic"
        big_title="Stage reporting with  50k queries."
        description="He nicked it tickety boo harry the cras bargy chap mush spiffing spend a penny the full monty burke butty."
        :features="features"
      />

      <!--====== APPIE TRAFFIC PART ENDS ======-->

      <!--====== APPIE TESTIMONIAL PART START ======-->

      <testimonial-home-one :sliderContents="sliderContents" />

      <!--====== APPIE TESTIMONIAL PART ENDS ======-->

      <!--====== APPIE TEAM PART START ======-->

      <team-home-one
        title="Meet our Team Members"
        description=""
        :members="members"
      />

      <!--====== APPIE TEAM PART ENDS ======-->

      <!--====== APPIE PRICING PART START ======-->

      <priceing-home-one
        title="Choose your plan"
        description="Choose the program that suits your security needs and become part of the Excel Security Solutions family. Elevate your chalet protection and contribute to a safer community today."
      />

      <!--====== APPIE PRICING PART ENDS ======-->

      <!--====== APPIE FAQ PART START ======-->
      <faq-home-one
        title="Frequently asked questions"
        description=""
      />
      <!--====== APPIE FAQ PART ENDS ======-->

      <!--====== APPIE BLOG PART START ======-->
      <!-- <blog-home-one
        title="Latest blog posts"
        description="Different layouts and styles for team sections."
        :blogs="blogs"
      /> -->
      <!--====== APPIE BLOG PART ENDS ======-->

      <!--====== APPIE PROJECT PART START ======-->

      <project-home-one
        title="Secure your safety"
        description="Book a visit now and experience our unparalleled protection services firsthand. We will contact you in less than 24 hours."
      />

      <show-case-home-three 
      title="Secure your safety"
        description="Book a visit now and experience our unparalleled protection services firsthand. We will contact you in less than 24 hours."
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
  </div>
</template>
<script>
import ShowCaseHomeThree from "./ShowCaseHomeThree.vue";
// import blogOne from "@/assets/images/blog-1.jpg";
// import blogTwo from "@/assets/images/blog-2.jpg";
// import blogThree from "@/assets/images/blog-3.jpg";
import memberOne from "@/assets/images/team-1.jpg";
import memberTwo from "@/assets/images/team-2.jpg";
import memberThree from "@/assets/images/team-3.jpg";
import memberFour from "@/assets/images/team-4.jpg";
import testmonialAvater from "@/assets/images/testimonial-user.png";
import traffic_thumb from "@/assets/images/traffic-thumb.png";
import icon_one from "@/assets/images/icon/1.png";
import icon_two from "@/assets/images/icon/2.png";
import icon_three from "@/assets/images/icon/3.png";
import icon_four from "@/assets/images/icon/4.png";
import HeaderHomeOne from "./HeaderHomeOne.vue";
import SidebarHomeOne from "./SidebarHomeOne.vue";
import HeroHomeOne from "./HeroHomeOne.vue";
import ServicesHomeOne from "./ServicesHomeOne.vue";
import FeaturesHomeOne from "./FeaturesHomeOne.vue";
import TrafficHomeOne from "./TrafficHomeOne.vue";
import TestimonialHomeOne from "./TestimonialHomeOne.vue";
import TeamHomeOne from "./TeamHomeOne.vue";
import PriceingHomeOne from "./PriceingHomeOne.vue";
import FaqHomeOne from "./FaqHomeOne.vue";
// import BlogHomeOne from "./BlogHomeOne.vue";
import ProjectHomeOne from "./ProjectHomeOne.vue";
import FooterHomeOne from "./FooterHomeOne.vue";
import LoaderAppie from "../LoaderAppie.vue";
export default {
  name: "HomeOne",
  props: {
    rtl: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ShowCaseHomeThree,
    HeaderHomeOne,
    SidebarHomeOne,
    HeroHomeOne,
    ServicesHomeOne,
    FeaturesHomeOne,
    TrafficHomeOne,
    TestimonialHomeOne,
    TeamHomeOne,
    PriceingHomeOne,
    FaqHomeOne,
    // BlogHomeOne,
    ProjectHomeOne,
    FooterHomeOne,
    LoaderAppie,
  },
  data() {
    return {
      traffic_thumb: traffic_thumb,
      testmonialAvater: testmonialAvater,
      sidebar: false,
      showloading: true,
      navs: [
        {
          name: "Home",
          path: "#",
        },
        {
          name: "Our Values",
          path: "#test",
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
          name: "Crime Prevention",
          path: "#",
        },
        {
          name: "Contact",
          path: "#",
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
      features: [
        {
          title: "Carefully designed",
          bg: "", // create class for style
          description: "Mucker plastered bugger all mate morish are.",
        },
        {
          title: "Choose a App",
          bg: "item-2", // create class for style
          description: "Mucker plastered bugger all mate morish are.",
        },
        {
          title: "Seamless Sync",
          bg: "item-3", // create class for style
          description: "Mucker plastered bugger all mate morish are.",
        },
        {
          title: "User Interactive",
          bg: "item-4", // create class for style
          description: "Mucker plastered bugger all mate morish are.",
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
      memberOne: memberOne,
      memberTwo: memberTwo,
      memberThree: memberThree,
      memberFour: memberFour,
      members: [
        {
          name: "Alexandre Batista",
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
          name: "Alexandre Batista",
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
          name: "Alexandre Batista",
          position: "CEO-Founder",
          img: memberThree,
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
          name: "Alexandre Batista",
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
      // blogOne: blogOne,
      // blogTwo: blogTwo,
      // blogThree: blogThree,
      // blogs: [
      //   {
      //     img: blogOne,
      //     date: "March 10, 2022",
      //     category: "Saas & App",
      //     title: "Introducing New Apps Design for our iOS App",
      //   },
      //   {
      //     img: blogTwo,
      //     date: "March 10, 2022",
      //     category: "Saas & App",
      //     title: "How to bring Dolce to your company",
      //   },
      //   {
      //     img: blogThree,
      //     date: "March 10, 2022",
      //     category: "Saas & App",
      //     title: "17 Effective Ways to Monetize Mobile Apps",
      //   },
      // ],
    };
  },
  created() {
    if (!this.rtl) {
      this.preLoading();
    } else {
      this.showloading = false;
    }
    document.addEventListener("scroll", this.topToBottom);
  },

  methods: {
    preLoading() {
      setTimeout(() => {
        this.showloading = false;
      }, 2000);
    },
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