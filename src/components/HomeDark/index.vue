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
    id="header"
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
      welcome_message="BE PART OF THE SOLUTION"
      slogan="Stay connected, stay safe."
      description="We are a pioneering security service at the heart of the Saanenland region, placing clients and their community at the heart of everything we do. 

We work in collaboration with local businesses, police and security networks to ensure that neighbourhoods are safe and residents are empowered with peace of mind.

Join us in creating a safer, stronger community together.We are a pioneering security service at the heart of the Saanenland region, placing clients and their community at the heart of everything we do. 

We work in collaboration with local businesses, police and security networks to ensure that neighbourhoods are safe and residents are empowered with peace of mind.

Join us in creating a safer, stronger community together." 
      first_button_content="The Importance of Security Sign Placement"
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
    description="By joining the CHALERT family, you can receive a tailed security program that meets your individual needs. We have a range of memberships available. Explore your options below."
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
    style="padding-top: 130px;"
      :class="[dark ? 'appie-service-area-dark' : '']"
      :grid_items="itemsGrid"
      section_heading="Our Services & Trainings"
      more_heading=""
      description="Ensuring Total Protection: Advanced Security Services and Trainings for All Your Needs"
    />
    <!--====== APPIE SERVICES PART ENDS ======-->

    <!--======  Why TEAM PART  START ======-->
   <team-home-one
    id="Team"
    style="padding-top: 110px;"

      :class="[dark ? 'appie-team-area-dark' : '']"
      title="Meet the CHalert Team"
      description="Local experts with international experience."
      :members="members"
    />
    <!--====== APPIE TEAM PART ENDS ======-->
<div id="Partners" class="stars-container">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
</div>
  <strategic-allies 
  
  />



   
    <!--====== Show Case START ======-->
   <show-case-home-three
      :class="[dark ? 'appie-blog-area-dark' : '']"
      title=""
      description="Different layouts and styles for team sections."
      :blogs="blogs"
      style="padding-top: 80px;"
   
    />
    <!--====== Show case ENDS ======-->

       <!--======== COMMUNITY SOCIAL IMPACT ========-->
   <community-impact-section/>

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
      description="Experience peace of mind with our professional protection services and book your free consultation with us today, delivered in partnership with AXA Insurance.
                  We aim to respond to you in less than 24 hours."
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
import StrategicAllies from "../HomeOne/StrategicAllies.vue";
// import blogOne from "@/assets/images/blog-1.jpg";
// import blogTwo from "@/assets/images/blog-2.jpg";
// import blogThree from "@/assets/images/blog-3.jpg";
import memberOne from "@/assets/images/team1.png";
import memberTwo from "@/assets/images/team2.png";
import memberThree from "@/assets/images/team3.png";
import memberFour from "@/assets/images/team4.png";
import memberFive from "@/assets/images/team5.png";
import memberSix from "@/assets/images/team6.png";
import memberSeven from "@/assets/images/team7.png";
import memberEight from "@/assets/images/team8.png";
import testmonialAvater from "@/assets/images/testimonial-user.png";
import testmonialAvater1 from "@/assets/images/testimonial-user-1.png";
import testmonialAvater2 from "@/assets/images/testimonial-user-2.png";
import testmonialAvater3 from "@/assets/images/testimonial-user-3.png";
import traffic_thumb from "@/assets/images/traffic-thumb.png";
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
import CommunityImpactSection from "../CommunityImpact/CommunityImpactSection.vue";
export default {
  components: {
    ShowCaseHomeThree,
    StrategicAllies,
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
    CommunityImpactSection,
  },
  data() {
    return {
      dark: false,
      traffic_thumb: traffic_thumb,
      testmonialAvater: testmonialAvater,
      sidebar: false,
      showloading: true,
      navs: [
        //{
          //name: "Home",
          //path: "#",
        //},
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
          name: "Partners",
          path: "#Partners",
        },
        {
          name: "FAQ",
          path: "#FAQ",
        },
        {
          name: "Crime Prevention",
          path: "/crime-prevention",
        },


        //{
          //name: "Contact",
          //path: "#Contact",
        //},
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
          icon: "fa-shield-alt",
          title: "Close Protection",
          content: "Personalized security for high-profile individuals",
          customClass: "",
          subtitle:"Close Protection: Tailored Security for the Elite",
          description: "The concept of close protection goes beyond mere bodyguard services. It involves a holistic approach to ensuring the safety of high-profile individuals, be it celebrities, corporate leaders, or political figures. Close protection officers (CPOs) are not just brawny figures; they are skilled professionals equipped with the ability to assess threats, plan safe routes, and, if necessary, engage in defensive tactics to protect their clients. The rigorous training CPOs undergo ensures they are prepared for any situation, blending seamlessly into their surroundings while maintaining a vigilant eye."
        },
        {
          icon: "fa-car",
          title: "Security Driver",
          content: "Safe transport with trained protection specialists",
          customClass: "item-2",
          subtitle:"Security Driver: Beyond Just Transportation",
          description: "The role of a security driver is pivotal in the close protection domain. These aren't your average chauffeurs; they are protection specialists trained in evasive and defensive driving techniques, capable of identifying threats and taking swift action to ensure the safety of the passengers. The selection process for security drivers is stringent, focusing not only on their driving skills but also on their ability to remain calm under pressure and make quick decisions."
        },
        {
          icon: "fa-users",
          title: "Event Security",
          content: "Vigilant safeguarding for gatherings and venues",
          customClass: "item-3",
          subtitle:"Event Security: Keeping Public Gatherings Safe",
          description: "Public gatherings, be it corporate events, concerts, or sports events, pose unique security challenges. The key to effective event security lies in meticulous planning, coordination, and the ability to respond swiftly to any emergencies. Event security teams work tirelessly behind the scenes, ensuring that the event goes smoothly without any security breaches, providing peace of mind to both the organizers and the attendees."
        },
        {
          icon: "fa-shopping-bag",
          title: "Retail Security",
          content: "Reliable protection for stores and merchandise",
          customClass: "item-4",
          subtitle:"Retail Security: Protecting Assets, Ensuring Peace",
          description: "The retail sector is continually grappling with the threat of theft and vandalism. Retail security services focus on creating a safe and secure shopping environment for customers while protecting the store's assets. This involves not just surveillance and patrolling but also training the retail staff to be vigilant and respond appropriately to any security threats."
        },
        {
          icon: icon_four,
          title: "Retail Security",
          content: "Reliable protection for stores and merchandise",
          customClass: "item-4",
          subtitle:"",
          description: "Lorem ipsum dolor sin amet Lorem ipsum dolor sin amet Lorem ipsum dolor sin amet Lorem ipsum dolor sin amet"
        },
        {
          icon: icon_three,
          title: "Event Security",
          content: "Vigilant safeguarding for gatherings and venues",
          customClass: "item-3",
          subtitle:"",
          description: "Lorem ipsum dolor sin amet Lorem ipsum dolor sin amet Lorem ipsum dolor sin amet Lorem ipsum dolor sin amet"
        },
        {
          icon: icon_four,
          title: "Retail Security",
          content: "Reliable protection for stores and merchandise",
          customClass: "item-4",
          subtitle:"",
          description: "Lorem ipsum dolor sin amet Lorem ipsum dolor sin amet Lorem ipsum dolor sin amet Lorem ipsum dolor sin amet"
        },
        {
          icon: icon_four,
          title: "Retail Security",
          content: "Reliable protection for stores and merchandise",
          customClass: "item-4",
          subtitle:"",
          description: "Lorem ipsum dolor sin amet Lorem ipsum dolor sin amet Lorem ipsum dolor sin amet Lorem ipsum dolor sin amet"
        },
      ],
      features: [
        {
          title: "Global Experience",
          bg: "", // create class for style
          description: "Our security agents have extensive experience in delivering security services across the globe.",
        },
        {
          title: "Exclusive Information Access",
          bg: "item-2", // create class for style
          description: "Gain timely updates and valuable insights for informed decision-making.",
        },
        {
          title: "Local Expertise",
          bg: "item-3", // create class for style
          description: "All of our security personnel are Saanenland natives: their understanding of the area ensures your safety. ",
        },
        {
          title: "Community Connection",
          bg: "item-4", // create class for style
          description: "Connect with like-minded chalet owners for a strengthened community and secure living environment.",
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
      memberFive: memberFive,
      members: [
        {
          name: "James",
          position: "Director",
          img: memberOne,
          text: 'Something very positive about this person',
          socials: [
            /*{
              name: "facebok",
              url: "https://www.facebook.com",
              icon: "fab fa-facebook-f", //user font awesome class
            },
            {
              name: "twitter",
              url: "https://www.instagram.com",
              icon: "fab fa-instagram", //user font awesome class
            },*/
            {
              name: "pinterest",
              url: "https://www.linkedin.com/",
              icon: "fab fa-linkedin", //user font awesome class
            },
          ],
        },
        {
          name: "Kathrin",
          position: "Director",
          img: memberTwo,
          text: 'Something very positive about this person',
          socials: [
            /*{
              name: "facebok",
              url: "https://www.facebook.com",
              icon: "fab fa-facebook-f", //user font awesome class
            },
            {
              name: "twitter",
              url: "https://www.instagram.com",
              icon: "fab fa-instagram", //user font awesome class
            },*/
            {
              name: "pinterest",
              url: "https://www.linkedin.com/",
              icon: "fab fa-linkedin", //user font awesome class
            },
          ],
        },
        {
          name: "Cuneyt",
          position: "Security Agent",
          img: memberThree,
          text: "Dedicated to ensuring a safe environment, our agent excels in risk assessment and conflict resolution, embodying vigilance and reliability.",
          socials: [
            /*{
              name: "facebok",
              url: "https://www.facebook.com",
              icon: "fab fa-facebook-f", //user font awesome class
            },
            {
              name: "twitter",
              url: "https://www.instagram.com",
              icon: "fab fa-instagram", //user font awesome class
            },*/
            {
              name: "pinterest",
              url: "https://www.linkedin.com/",
              icon: "fab fa-linkedin", //user font awesome class
            },
          ],
        },
        {
          name: "Alex",
          position: "Security Agent",
          img: memberFour,
          text: "With expertise in surveillance and emergency protocols, this security professional maintains peace and safety with unwavering dedication.",
          socials: [
            /*{
              name: "facebok",
              url: "https://www.facebook.com",
              icon: "fab fa-facebook-f", //user font awesome class
            },
            {
              name: "twitter",
              url: "https://www.instagram.com",
              icon: "fab fa-instagram", //user font awesome class
            },*/
            {
              name: "pinterest",
              url: "https://www.linkedin.com/",
              icon: "fab fa-linkedin", //user font awesome class
            },
          ],
        },
        {
          name: "Mario",
          position: "Security Agent",
          img: memberFive,
          text: "Specializing in crowd control, our agent ensures every event unfolds smoothly, guaranteeing safety with proactive measures and strategic planning.",
          socials: [
            /*{
              name: "facebok",
              url: "https://www.facebook.com",
              icon: "fab fa-facebook-f", //user font awesome class
            },
            {
              name: "twitter",
              url: "https://www.instagram.com",
              icon: "fab fa-instagram", //user font awesome class
            },*/
            {
              name: "pinterest",
              url: "https://www.linkedin.com/",
              icon: "fab fa-linkedin", //user font awesome class
            },
          ],
        },
        {
          name: "Miguel",
          position: "Security Agent",
          img: memberSix,
          text: 'Something very positive about this person',
          socials: [
            /*{
              name: "facebok",
              url: "https://www.facebook.com",
              icon: "fab fa-facebook-f", //user font awesome class
            },
            {
              name: "twitter",
              url: "https://www.instagram.com",
              icon: "fab fa-instagram", //user font awesome class
            },*/
            {
              name: "pinterest",
              url: "https://www.linkedin.com/",
              icon: "fab fa-linkedin", //user font awesome class
            },
          ],
        },
        {
          name: "Moussa",
          position: "Security Agent",
          img: memberSeven,
          text: 'Something very positive about this person',
          socials: [
            /*{
              name: "facebok",
              url: "https://www.facebook.com",
              icon: "fab fa-facebook-f", //user font awesome class
            },
            {
              name: "twitter",
              url: "https://www.instagram.com",
              icon: "fab fa-instagram", //user font awesome class
            },*/
            {
              name: "pinterest",
              url: "https://www.linkedin.com/",
              icon: "fab fa-linkedin", //user font awesome class
            },
          ],
        },
        {
          name: "Michael",
          position: "Security Agent",
          img: memberEight,
          text: 'Something very positive about this person',
          socials: [
            /*{
              name: "facebok",
              url: "https://www.facebook.com",
              icon: "fab fa-facebook-f", //user font awesome class
            },
            {
              name: "twitter",
              url: "https://www.instagram.com",
              icon: "fab fa-instagram", //user font awesome class
            },*/
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

.stars-container {
    display: flex;
    justify-content: center;
    padding: 20px 0; /* Adjust padding as needed */
    
}

/* Style for the star icons */
.stars-container .fa-star{
    margin: 0 5px; /* Adjust spacing between stars */
    color: #ed1f27; /* Optional: change color of stars */
    font-size: 24px; /* Adjust size of stars */
}

</style>