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
      slogan="Stay connected, stay safe."
      description="CHalert is a powerful community-driven initiative aimed at fostering collaboration and safety within Saanenland region.
      By uniting residents, businesses, and local authorities, CHalert empowers residents to actively contribute to the security of our neighborhoods.
      Join us in building a safer and stronger community together." 
      first_button_content="ProtectMe App is on the horizon, stay tuned"
    />
    <!-- second_button_content="BT 2Lorem ipsum dolor sit" -->

    <!-- first_button_icon="fab fa-apple" -->
    <!-- second_button_icon="fab fa-google-play" -->
    <!--====== APPIE HERO PART ENDS ======-->

    <!--======  Why choose us  START ======-->
    <traffic-home-one
    id="How It Works"
      :class="[dark ? 'appie-traffic-area-dark' : '']"
      style="padding-top: 110px;"
      small_title="How it works"
      big_title="Why choose us"
      description="Join us in fostering community safety through collective action. Here are four compelling reasons to choose Chalert:" 
      :features="features"
    />
    <!--======  Why choose us  ENDs ======-->

     <!--====== APPIE PRICING PART START ======-->
    <priceing-home-one
    id="Plans"
    style="padding-top: 110px;"
    :class="[dark ? 'appie-pricing-area-dark' : '']"
    title="Choose your Plan"
    description="Select the program that aligns with your security requirements and join the CHalert family. Exclusively tailored for residents and chalet owners in Saanenland, CHalert encourages collaborative efforts towards ensuring the safety of our entire region."
    />
    <!--====== APPIE PRICING PART ENDS ======-->

    <!--====== VALUES PART ENDS ======-->
    <features-home-one 
    id="Our Values"
    style="padding-top: 110px;"
    :class="[ 'appie-features-area-dark' ]" />
    <!--====== VALUES PART ENDS ======-->


    <!--====== APPIE SERVICES PART START ======-->
    <services-home-one
    id="Services"
    style="padding-top: 110px;"
      :class="[dark ? 'appie-service-area-dark' : '']"
      :grid_items="itemsGrid"
      section_heading="Our Services"
      more_heading=""
      description="Safeguarding Your Every Need"
    />
    <!--====== APPIE SERVICES PART ENDS ======-->

    <!--======  Why TEAM PART  START ======-->
    <team-home-one
    id="Team"
    style="padding-top: 110px;"

      :class="[dark ? 'appie-team-area-dark' : '']"
      title="CHalert's Team"
      description="Unveiling the Faces Behind CHalert's Vigilance"
      :members="members"
    />
    <!--====== APPIE TEAM PART ENDS ======-->



    <!--====== Show Case START ======-->
    <show-case-home-three
    id="Team" 
    style="padding-top: 110px;"
    :class="[dark ? 'appie-blog-area-dark' : '']"
      title=""
      description="Different layouts and styles for team sections."
      :blogs="blogs"
   
    />
    <!--====== Show case ENDS ======-->

    <!--====== APPIE TESTIMONIAL PART START ======-->
    <testimonial-home-one :sliderContents="sliderContents" />
    <!--====== APPIE TESTIMONIAL PART ENDS ======-->

    <!--====== APPIE FAQ PART START ======-->
    <faq-home-one
    id="FAQ"
    style="padding-top: 110px;"
      :class="[dark ? 'appie-faq-area-dark' : '']"
      title="Frequently Asked Questions (FAQ)" 
      description=""
    />
    <!--====== APPIE FAQ PART ENDS ======-->

    <!--====== APPIE BLOG PART START ======-->
   <!-- <blog-home-one
    id="Tips" 
      :class="[dark ? 'appie-blog-area-dark' : '']"
      title="Latest blog posts"
      description="Different layouts and styles for team sections."
      :blogs="blogs"
    /> -->
    <!--====== APPIE BLOG PART ENDS ======-->

    <!--====== APPIE PROJECT PART START ======-->
    <project-home-one
    style="padding-top: 110px;"
    id="Contact"
      title="Secure your safety"
      description="Book a visit now and experience our unparalleled protection services firsthand. We will contact you in less than 24 hours."
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
import testmonialAvater1 from "@/assets/images/testimonial-user-1.png";
import testmonialAvater2 from "@/assets/images/testimonial-user-2.png";
import testmonialAvater3 from "@/assets/images/testimonial-user-3.png";
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
//import BlogHomeOne from "../HomeOne/BlogHomeOne.vue";
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
      dark: false,
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
          name: "How it works",
          path: "#How It Works",
        },
        {
          name: "Plans",
          path: "#Plans",
        },
        {
          name: "Values",
          path: "#Our Values",
        },
        {
          name: "Services",
          path: "#Services",
        },
        {
          name: "Team",
          path: "#Team",
        },
        {
          name: "FAQ",
          path: "#FAQ",
        },
        {
          name: "Crime Prevention",
          path: "#Tips",
        },
        {
          name: "Contact",
          path: "#Contact",
        },
        // {
        //   name: "News",
        //   path: "/news",
        // },
        // {
        //   name: "Single news",
        //   path: "/single-news",
        // },


        // {
        //   name: "service",
        //   path: "/service-details",
        // },

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
        
        // Area para mais botoes no menu superior

        
        // {
        //   name: "news",
        //   childrens: [
        //     {
        //       name: "News",
        //       path: "/news",
        //     },
        //     {
        //       name: "Single news",
        //       path: "/single-news",
        //     },
        //   ],
        // },


    
        // {
        //   name: "contact",
        //   path: "/contact",
        // },
      ],
      itemsGrid: [
        {
          count: 1,
          icon: icon_one,
          title: "Close protection",
          content: "Personalized security for high-profile individuals",
          customClass: "",
        },
        {
          count: 2,
          icon: icon_two,
          title: "Security driver",
          content: "Safe transport with trained protection specialists",
          customClass: "item-2",
        },
        {
          count: 3,
          icon: icon_three,
          title: "Event Security",
          content: "Vigilant safeguarding for gatherings and venues",
          customClass: "item-3",
        },
        {
          count: 4,
          icon: icon_four,
          title: "Retail Security",
          content: "Reliable protection for stores and merchandise",
          customClass: "item-4",
        },
      ],
      features: [
        {
          title: "Unified Safety Effort:",
          bg: "", // create class for style
          description: "Strengthen community safety by joining forces with fellow chalet owners.",
        },
        {
          title: "Exclusive Information Access:",
          bg: "item-2", // create class for style
          description: "Gain timely updates and valuable insights for informed decision-making.",
        },
        {
          title: "Proactive Involvement:",
          bg: "item-3", // create class for style
          description: "Actively contribute to neighborhood safety with impactful measures.",
        },
        {
          title: "Community Connection:",
          bg: "item-4", // create class for style
          description: "Connect with like-minded chalet owners for a secure living environment.",
        },
      ],
      sliderContents: [
        {
          title: "Benjamin",
          date: "December 14, 2023",
          description:
            "Chalert has revolutionized how we approach safety in our neighborhood. Their proactive alerts have provided invaluable peace of mind, allowing us to stay informed and prepared. With Chalert, we feel more connected and secure than ever before.",
          ratings: 5,
          avatar: testmonialAvater,
        },
        {
          title: "Lukas",
          date: "April 4, 2023",
          description:
            "We turned to Excel Security Solutions for our event security needs, and they exceeded our expectations. Their team not only provided a strong presence but also handled every situation with professionalism and expertise. We couldn't have asked for better security partners.",
          ratings: 5,
          avatar: testmonialAvater1,
        },
        {
          title: "Eva",
          date: "June 21, 2023",
          description:
            "Chalert's commitment to community safety is unmatched. Their proactive approach to identifying and addressing potential threats has been invaluable. Thanks to Chalert, my family can rest easier knowing that our neighborhood is actively protected.",
          ratings: 4,
          avatar: testmonialAvater2,
        },
        {
          title: "Tobias and Anna",
          date: "January 6, 2024",
          description:
            "Excel Security Solutions has been our trusted partner for years, and they consistently deliver exceptional service. Their team's professionalism and attention to detail ensure that our property remains secure at all times. We're grateful for their dedication to keeping us safe.",
          ratings: 5,
          avatar: testmonialAvater3,
        },
      ],
      memberOne: memberOne,
      memberTwo: memberTwo,
      memberThree: memberThree,
      memberFour: memberFour,
      members: [
        {
          name: "James",
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
              url: "https://www.instagram.com",
              icon: "fab fa-instagram", //user font awesome class
            },
            {
              name: "pinterest",
              url: "https://www.linkedin.com/",
              icon: "fab fa-linkedin", //user font awesome class
            },
          ],
        },
        {
          name: "Alexandre",
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
              url: "https://www.instagram.com",
              icon: "fab fa-instagram", //user font awesome class
            },
            {
              name: "pinterest",
              url: "https://www.linkedin.com/",
              icon: "fab fa-linkedin", //user font awesome class
            },
          ],
        },
        {
          name: "Thomas",
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
              url: "https://www.instagram.com",
              icon: "fab fa-instagram", //user font awesome class
            },
            {
              name: "pinterest",
              url: "https://www.linkedin.com/",
              icon: "fab fa-linkedin", //user font awesome class
            },
          ],
        },
        {
          name: "David",
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
              url: "https://www.instagram.com",
              icon: "fab fa-instagram", //user font awesome class
            },
            {
              name: "pinterest",
              url: "https://www.linkedin.com/",
              icon: "fab fa-linkedin", //user font awesome class
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