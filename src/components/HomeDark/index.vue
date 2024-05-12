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
      first_button_content="SECURITY SIGN PLACEMENT"
    />
    <!-- second_button_content="BT 2Lorem ipsum dolor sit" -->

    <!-- first_button_icon="fab fa-apple" -->
    <!-- second_button_icon="fab fa-google-play" -->
  
    <traffic-home-one
    id="How It Works"
      :class="[dark ? 'appie-traffic-area-dark' : '']"
      style="padding-top: 110px;"
      small_title=""
      big_title="Why join?"
      description="Join us in fostering community safety through collective action. Here are four compelling reasons to choose CHalert:" 
      :features="features"
    />
  

 
    <priceing-home-one
    id="Plans"
    style="padding-top: 110px;"
    :class="[dark ? 'appie-pricing-area-dark' : '']"
    title="Choose your Plan"
    description="By joining the CHalert family, you can receive a tailored security program that meets your individual needs. We have a range of memberships available. Explore your options below."
    />
   
    <map-section />
  
    <features-home-one 
    id="Our Values"
    style="padding-top: 110px;"
    :class="[ 'appie-features-area-dark' ]" />
   
    <services-home-one
    id="Services"
    style="padding-top: 130px;"
      :class="[dark ? 'appie-service-area-dark' : '']"
      :grid_items="itemsGrid"
      section_heading="Our Services & Trainings"
      more_heading=""
      description="Ensuring total protection: advanced security services and trainings for all your needs"
    />
  
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
   <blog-home-one
    id="Tips" 
    style="padding-top: 120px;"
      :class="[dark ? 'appie-blog-area-dark' : '']"
      title="Crime Prevention"
      description="Safeguarding tomorrow: proactive crime prevention strategies"
      :blogs="blogs"
    />
    
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
import blogOne from "@/assets/images/blog-1.png";
import blogTwo from "@/assets/images/blog-2.png";
import blogThree from "@/assets/images/blog-3.png";
import memberOne from "@/assets/images/team1.png";
import memberTwo from "@/assets/images/team2.png";
import memberThree from "@/assets/images/team3.png";
import memberFour from "@/assets/images/team4.png";
import memberFive from "@/assets/images/team5.png";
import memberSix from "@/assets/images/team6.png";
import memberSeven from "@/assets/images/team7.png";
import memberEight from "@/assets/images/team8.png";
import memberNine from "@/assets/images/team9.png";
import memberTen from "@/assets/images/team10.png";
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
import BlogHomeOne from "../HomeOne/BlogHomeOne.vue";
import ProjectHomeOne from "../HomeOne/ProjectHomeOne.vue";
import FooterHomeOne from "../HomeOne/FooterHomeOne.vue";
import CommunityImpactSection from "../CommunityImpact/CommunityImpactSection.vue";
import MapSection from "../MapSection.vue";
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
    BlogHomeOne,
    ProjectHomeOne,
    FooterHomeOne,
    CommunityImpactSection,
    MapSection
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
          name: "Our Goal",
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
          path: "#Tips",
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
          description: "Our close protection services extend far beyond mere physical security. The concept of close protection goes beyond mere bodyguard services. It involves a holistic approach to ensuring the safety of high-profile individuals, be it celebrities, corporate leaders, or political figures. Our agents uphold stringent standards globally, ensuring consistent quality of service. Moreover, they offer comprehensive support, including logistics and medical assistance. Specialized in ski resort security, these agents provide expert protection for VIPs and their families, combining their security skills with proficient skiing abilities in the alpine terrains."
        },
        {
          icon: "fa-car",
          title: "Security Driver",
          content: "Safe transport with trained protection specialists",
          customClass: "item-2",
          subtitle:"Security Driver: Beyond Just Transportation",
          description: "The role of a security driver is pivotal in the close protection domain. These aren't your average chauffeurs; they are protection specialists trained in evasive and defensive driving techniques, capable of identifying threats and taking swift action to ensure the safety of the passengers. The selection process for security drivers is stringent, focusing not only on their driving skills but also on their ability to remain calm under pressure and make quick decisions"
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
          icon: "fa-cogs",
          title: "Technical Systems",
          content: "Custom security integration for chalet safety",
          customClass: "item-4",
          subtitle:"Retail Security: Protecting Assets, Ensuring Peace",
          description: "Excel Security Solutions offers a comprehensive approach to your chalet security, ensuring that all technical systems are seamlessly integrated into the design of your space. Our services include collaboration with your design team or architect  to implement security measures that are both effective and aesthetically pleasing. The focus is on user-friendly operation without sacrificing safety, covering essential components like access control, surveillance, and intrusion detection, as well as secure storage solutions. This holistic strategy aims to protect both the property and the well-being of its occupants."
        },
        {
          icon: "fa-shopping-bag",
          title: "Retail Security",
          content: "Reliable protection for stores and merchandise",
          customClass: "item-4",
          subtitle:"",
          description: "Shops in the region are continually grappling with the threat of theft and vandalism. Our security services focus on creating a safe and secure shopping environment for customers while protecting the store's assets. This involves not just surveillance and patrolling but also training the retail staff to be vigilant and respond appropriately to any security threats."
        },
        {
          icon: "fa-user-secret",
          title: "Background Check",
          content: "Thorough background checks for informed employment decisions",
          customClass: "item-3",
          subtitle:"",
          description: "Pre-employment background checks are a crucial step in the hiring process, offering a layer of protection and insight into an applicant's history. These checks can include verifying personal information, criminal records, education, and past employment history. They help employers make informed decisions and ensure the safety and integrity of their workplace. It's important to conduct these checks in compliance with legal standards to respect the privacy and rights of the candidate."
        },
        {
          icon: "fa-suitcase-rolling",
          title: "Travel Security",
          content: "Tailored travel security for global client reassurance",
          customClass: "item-4",
          subtitle:"",
          description: "With numerous years of experience in working with an international, sophisticated clientele, Excel Security Solutions has the connections and knowledge of assisting you with travel logistics, security any where in the world,  such as property rental, hotel and restaurant booking, private yachting, private aviation, vehicle rental, sports activity coordination, etc. Our travel logistics coordinators are responsible for the day-to-day management of the client’s activities while travelling; focusing on the comfort of the client and your loved ones."
        },
        {
          icon: "fa-first-aid",
          title: "First Aid & AED Training",
          content: "Specialized emergency training",
          customClass: "item-4",
          subtitle:"",
          description: "Ensuring your chalet staff or hotel staff are trained in First Aid and Basic Life Support is crucial for handling medical emergencies effectively. Tailored training programs that incorporate specific needs into standard courses can significantly enhance the preparedness of individuals to face such situations. We analyse your individual  training needs and add specific requirements into the standard courses; which we then run with our partners. We can organise training courses for your family and your employees at your chalet, your business location or our training  facilities. As licensed resellers of Automated External Defibrillators, providing access to essential life-saving equipment complements the training, making a comprehensive approach to emergency preparedness."
        },
      ],
      features: [
        {
          title: "More Awareness",
          bg: "", // create class for style
          description: "By increasing awareness of criminal behaviour, it encourages people to be more vigilant of their surrounding.",
        },
        {
          title: "Accurate and Timely Information",
          bg: "item-2", // create class for style
          description: "Get timely and accurate information of criminal activities in the region.",
        },
        {
          title: "Local Expertise",
          bg: "item-3", // create class for style
          description: "Our Security agents are all residents of Saanenland. Their understanding of the area ensures your safety.",
        },
        {
          title: "Community Connection",
          bg: "item-4", // create class for style
          description: "Create a sense of unity among chalet owners for a strength in community. We intend to create a sense of security for the residents and businesses in the region.",
        },
      ],
      sliderContents: [
        {
          title: "Benjamin",
          date: "December 14, 2023",
          description:
            "CHalert has revolutionized how we approach safety in our neighborhood. Their proactive alerts have provided invaluable peace of mind, allowing us to stay informed and prepared. With CHalert, we feel more connected and secure than ever before.",
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
            "CHalert's commitment to community safety is unmatched. Their proactive approach to identifying and addressing potential threats has been invaluable. Thanks to Chalert, my family can rest easier knowing that our neighborhood is actively protected.",
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
          bio: "With 27 years of experience in private security, James has honed his skills across continents, serving private families and gaining specialized experience as the personal bodyguard to the Swiss ambassador to Somalia and Kenya. His dedication to education and empowerment underscores his passion for the field.",
          
        },
        {
          name: "Kathrin",
          position: "Director",
          img: memberTwo,
          bio: "Kathrin's diverse background in hospitality makes her invaluable in administrative management. Her experience with private families and multilingual abilities ensures personalized and comprehensive service, positioning her as a dynamic leader in her field.",
          
        },
        {
          name: "Cuneyt",
          position: "Security Agent",
          img: memberThree,
          bio: "Cüneyt's journey from Turkey to founding Gstaad Kickboxing demonstrates his dedication to martial arts. His background in security and training in conflict management contribute to his success in creating a space for learning and growth.",
          
        },
        {
          name: "Alex",
          position: "Security Agent",
          img: memberFour,
          bio: "Alex's background combines humanitarian work with security expertise, making him a valuable team member. His experience with UNHCR and IOM in crisis management and diplomacy informs his role in security, ensuring safety and satisfaction.",
          
        },
        {
          name: "Mario",
          position: "Security Agent",
          img: memberFive,
          bio: "Mario's experience in the Portuguese Army and deployments to Afghanistan make him well-suited for high-pressure security roles. His commitment to teamwork, adeptness in diverse situations, and proactive problem-solving ensure safety and order in every assignment.",
          
        },
        {
          name: "Miguel",
          position: "Security Agent",
          img: memberSix,
          bio: "Miguel's extensive Special Forces background and tenure with Excel Security Solutions highlight his expertise in close protection and security. His skills in counter-surveillance, investigation, and security driving, combined with legal credentials, make him an asset.",
          
        },
        {
          name: "Moussa",
          position: "Security Agent",
          img: memberSeven,
          bio: "With 15 years of experience, Moussa specializes in close protection services tailored for individuals and families. His proficiency as a professional driver and certifications in First Aid ensure comprehensive safety for his clientele.",
          
        },
        {
          name: "Michael",
          position: "Security Agent",
          img: memberEight,
          bio: "Mike’s diverse background and dedication to excellence make him an asset. His transition from physical education to private security demonstrates adaptability and a keen understanding of safety principles, enhancing overall security and efficiency.",
          
        },
        {
          name: "Lahlal",
          position: "Security Agent",
          img: memberTen,
          bio: "Lahlal's career transition showcases adaptability and a detail-oriented approach. His expertise in finance and health care, combined with a commitment to security, offers comprehensive services to private families, reflecting the evolving landscape of career paths, where cross-disciplinary skills and continuous learning are highly valued.",
        },
        {
          name: "Christopher",
          position: "Security Agent",
          img: memberNine,
           bio: "Christopher's journey from Switzerland to joining the company reflects his dedicated progression in the security field. His proactive approach to enhancing security knowledge, coupled with personal interests in fitness and outdoor activities, makes him a well-rounded individual who values personal growth and client satisfaction.",
         // socials: [
         //   {
         //     name: "pinterest",
         //     url: "https://www.linkedin.com/",
         //     icon: "fab fa-linkedin", //user font awesome class
         //   },
         // ],
        },
      ],
      blogOne: blogOne,
      blogTwo: blogTwo,
      blogThree: blogThree,
      blogs: [
        {
           img: blogTwo,
           date: "March 22, 2024",
           category: "Security",
           title: "What to Look for in a Home Security System",
           url:"/crime-prevention"
         },
         {
           img: blogOne,
           date: "March 10, 2024",
           category: "Prevention",
           title: "7 Effective Ways to Protect Your Chalet",
           url:""
         },
         {
           img: blogThree,
           date: "February 10, 2024",
           category: "Prevention",
           title: "Your Family Diserves the Best Protection",
           url: ""
         },
       ],
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