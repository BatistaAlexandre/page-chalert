<template>
  <div class="appie-dark-mode">
    <sidebar-home-one
      :sidebar="sidebar"
      @toggleSidebar="toggleSidebar"
      :menuItems="navs"
    />

    <!--====== OFFCANVAS MENU PART ENDS ======-->

    <!--====== PART START ======-->

    <header-home-one
      @toggleSidebar="toggleSidebar"
      :menuItems="navs"
      :class="[dark ? 'appie-header-area-dark' : '']"
      :dark="dark"
      :enableDark="true"
      @changMode="handlerDarkMode"
    />

    <!--====== PART ENDS ======-->

    <!--====== APPIE HERO PART START ======-->

    <hero-home-one
      :class="[dark ? 'appie-hero-area-dark' : '']"
      welcome_message="Welcome To CHalert"
      slogan="Lorem ipsum dolor sit amet, consectetur"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu mauris eu purus hendrerit congue."
      first_button_content="Download for iOS"
      first_button_icon="fab fa-apple"
      second_button_content="Download for Android"
      second_button_icon="fab fa-google-play"
    />

    <!--====== APPIE HERO PART ENDS ======-->

    <!--====== APPIE SERVICES PART START ======-->
    <services-home-one
      :class="[dark ? 'appie-service-area-dark' : '']"
      :grid_items="itemsGrid"
      section_heading="Services Section1"
      more_heading="Lorem ipsum dolor"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu mauris"
    />
    <!--====== APPIE SERVICES PART ENDS ======-->

    <!--====== APPIE FEATURES PART START ======-->
    

    <!--====== APPIE FEATURES PART ENDS ======-->

    <!--====== APPIE TRAFFIC PART START ======-->

    <traffic-home-one
      :class="[dark ? 'appie-traffic-area-dark' : '']"
      :traffic_thumbnail="traffic_thumb"
      small_title="Why choose us"
      big_title="Why choose us"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu mauris Lorem ipsum dolor sit amet, "
      :features="features"
    />

    <!--====== APPIE TRAFFIC PART ENDS ======-->

    <features-home-one :class="[dark ? 'appie-features-area-dark' : '']" />

    <!--====== APPIE TEAM PART START ======-->

    <team-home-one
      :class="[dark ? 'appie-team-area-dark' : '']"
      title="Meet our Team"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing"
      :members="members"
    />

    <!--====== APPIE TEAM PART ENDS ======-->


    <!--====== APPIE PRICING PART START ======-->

    <priceing-home-one
      :class="[dark ? 'appie-pricing-area-dark' : '']"
      title="Choose your plan"
      description="Different layouts and styles for team sections."
    />

    <!--====== APPIE PRICING PART ENDS ======-->

    
        <!--====== APPIE TESTIMONIAL PART START ======-->

        <testimonial-home-one :sliderContents="sliderContents" />

<!--====== APPIE TESTIMONIAL PART ENDS ======-->

<!--====== Show Case START ======-->
    <show-case-home-three 
    :class="[dark ? 'appie-blog-area-dark' : '']"
      title=""
      description="Different layouts and styles for team sections."
      :blogs="blogs"
   
    />
<!--====== Show case ENDS ======-->

    <!--====== APPIE FAQ PART START ======-->

    <faq-home-one
      :class="[dark ? 'appie-faq-area-dark' : '']"
      title="Frequently asked questions"
      description="Different layouts and styles for team sections."
    />

    <!--====== APPIE FAQ PART ENDS ======-->

    <!--====== APPIE BLOG PART START ======-->

    <!-- <blog-home-one
      :class="[dark ? 'appie-blog-area-dark' : '']"
      title="Latest blog posts"
      description="Different layouts and styles for team sections."
      :blogs="blogs"
    /> -->

  

    <!--====== APPIE BLOG PART ENDS ======-->

    <!--====== APPIE PROJECT PART START ======-->

    <project-home-one
      title="Start your project with CHAlert."
      description="We will email you only about this product."
    />

    <!--====== APPIE PROJECT PART ENDS ======-->

    <!--====== APPIE FOOTER PART START ======-->

    <footer-home-one :class="[dark ? 'appie-footer-area-dark' : '']" />

    <!--====== APPIE FOOTER PART ENDS ======-->

    <!--====== APPIE BACK TO TOP PART ENDS ======-->
    <div class="back-to-top">
      <a href="#"><i class="fal fa-arrow-up"></i></a>
    </div>
    <!--====== APPIE BACK TO TOP PART ENDS ======-->
  </div>
</template>

<script>
import ShowCaseHomeThree from "../HomeOne/ShowCaseHomeThree.vue";
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
import HeaderHomeOne from "../HomeOne/HeaderHomeOne.vue";
import SidebarHomeOne from "../HomeOne/SidebarHomeOne.vue";
import HeroHomeOne from "../HomeOne/HeroHomeOne.vue";
import ServicesHomeOne from "../HomeOne/ServicesHomeOne.vue";
import FeaturesHomeOne from "../HomeOne/FeaturesHomeOne.vue";
import TrafficHomeOne from "../HomeOne/TrafficHomeOne.vue";
import TestimonialHomeOne from "../HomeOne/TestimonialHomeOne.vue";
import TeamHomeOne from "../HomeOne/TeamHomeOne.vue";
import PriceingHomeOne from "../HomeOne/PriceingHomeOne.vue";
import FaqHomeOne from "../HomeOne/FaqHomeOne.vue";
// import BlogHomeOne from "../HomeOne/BlogHomeOne.vue";
import ProjectHomeOne from "../HomeOne/ProjectHomeOne.vue";
import FooterHomeOne from "../HomeOne/FooterHomeOne.vue";
export default {
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
  },
  data() {
    return {
      dark: true,
      traffic_thumb: traffic_thumb,
      testmonialAvater: testmonialAvater,
      sidebar: false,
      showloading: true,
      navs: [
        {
          name: "Home",
          path: "/home-dark",
        },
        {
          name: "service",
          path: "/home-dark",
        },
        // {
        //   name: "pages",
        //   childrens: [
        //     {
        //       name: "About us",
        //       path: "/about-us",
        //     },
        //     {
        //       name: "About us 2",
        //       path: "/about-two",
        //     },
        //     {
        //       name: "Shops",
        //       path: "/shops",
        //     },
        //     {
        //       name: "Shop Details",
        //       path: "/shop-details",
        //     },
        //     {
        //       name: "Error",
        //       path: "/error",
        //     },
        //   ],
        // },
        {
          name: "news",
          path: "/home-dark",
        },
        {
          name: "contact",
          path: "/home-dark",
        },
      ],
      itemsGrid: [
        {
          count: 1,
          icon: icon_one,
          title: "Lorem ipsum",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          customClass: "",
        },
        {
          count: 2,
          icon: icon_two,
          title: "Lorem ipsum",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          customClass: "item-2",
        },
        {
          count: 3,
          icon: icon_three,
          title: "Lorem ipsum",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          customClass: "item-3",
        },
        {
          count: 4,
          icon: icon_four,
          title: "Lorem ipsum",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          customClass: "item-4",
        },
      ],
      features: [
        {
          title: "Lorem ipsum",
          bg: "", // create class for style
          description: "Lorem ipsum dolor sit amet, consectetur",
        },
        {
          title: "Lorem ipsum",
          bg: "item-2", // create class for style
          description: "Lorem ipsum dolor sit amet, consectetur",
        },
        {
          title: "Lorem ipsum",
          bg: "item-3", // create class for style
          description: "Lorem ipsum dolor sit amet, consectetur",
        },
        {
          title: "Lorem ipsum",
          bg: "item-4", // create class for style
          description: "Lorem ipsum dolor sit amet, consectetur",
        },
      ],
      sliderContents: [
        {
          title: "Jason Response",
          date: "April 14, 2022",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu mauris eu purus hendrerit congue.",
          ratings: 5,
          avatar: testmonialAvater,
        },
        {
          title: "Jason Response",
          date: "April 14, 2022",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu mauris eu purus hendrerit congue.",
          ratings: 5,
          avatar: testmonialAvater,
        },
        {
          title: "Jason Response",
          date: "April 14, 2022",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu mauris eu purus hendrerit congue.",
          ratings: 2,
          avatar: testmonialAvater,
        },
        {
          title: "Jason Response",
          date: "April 14, 2022",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu mauris eu purus hendrerit congue.",
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
    this.preLoading();
    document.addEventListener("scroll", this.topToBottom);
  },
  mounted() {
    if (this.dark) {
      document.body.classList.add("appie-dark");
    } else {
      document.body.classList.remove("appie-dark");
    }
  },
  beforeDestroy() {
    document.body.classList.remove("appie-dark");
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
    handlerDarkMode() {
      this.dark = !this.dark;
      if (this.dark) {
        document.body.classList.add("appie-dark");
      } else {
        document.body.classList.remove("appie-dark");
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