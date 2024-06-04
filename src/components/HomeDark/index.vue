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
      section_heading="Our Services & Training"
      more_heading=""
      description="Ensuring total protection: advanced security services and training for all your needs"
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
      title="Secure your safety"
      description="Experience peace of mind with our professional protection services and book your free consultation with us today, delivered in partnership with AXA Insurance.
                  We aim to respond to you in less than 24 hours."
    />
    <!--====== APPIE PROJECT PART ENDS ======-->

    <!--====== APPIE FOOTER PART START ======-->
    <footer-home-one 
    style="padding-top: 110px;"
    id="Contact"
    :class="[dark ? 'appie-footer-area-dark' : '']" />
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
          icon: "fa-shield-alt",
          title: "Close Protection",
          content: "Personalized security for high-profile individuals",
          customClass: "",
          subtitle:"Close Protection: Tailored Security for the Elite",
          description: "The concept of close protection goes beyond mere bodyguard services. It involves a holistic approach to ensuring the safety of high-profile individuals, be it celebrities, corporate leaders, or political figures. Our agents uphold stringent standards globally, ensuring consistent quality of service. Moreover, they offer comprehensive support, including logistics and medical assistance. Specialized in ski resort security, these agents provide expert protection for VIPs and their families, combining their security skills with proficient skiing abilities in the alpine terrains."
        },
        {
          icon: "fa-car",
          title: "Security Driver",
          content: "Safe transport with trained protection specialists",
          customClass: "item-2",
          subtitle:"Security Driver: Beyond Just Transportation",
          description: "The role of a security driver is pivotal in the close protection domain. Trained in security awareness and tactical driving techniques, capable of identifying threats and taking swift action to ensure the safety and comfort of their passengers."
        },
        {
          icon: "fa-users",
          title: "Event Security",
          content: "Vigilant safeguarding for gatherings and venues",
          customClass: "item-3",
          subtitle:"Event Security: Keeping Public Gatherings Safe",
          description: "Security for your special day such as a private wedding, a chalet party, or corporate events, pose unique challenges. Our security teams work tirelessly behind the scenes, ensuring that the event goes smoothly without any security breaches, providing peace of mind to both the organizers and the attendees."
        },
        {
          icon: "fa-cogs",
          title: "Technical Systems",
          content: "Custom security integration for chalet safety",
          customClass: "item-4",
          subtitle:"Retail Security: Protecting Assets, Ensuring Peace",
          description: "Design your chalet. We work with you, your architect and your interior designer to integrate systems that are both effective and aesthetically pleasing. The focus is on user-friendly operation without sacrificing safety, covering essential components such as alarm systems, Access control, CCTV cameras and safes."
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
          description: "Pre-employment background checks are a crucial step in the hiring process, offering a layer of protection and insight into an applicant's history. These checks can include verifying personal information, criminal records, education, and past employment history. They help employers make informed decisions and ensure the safety and integrity of their workplace."
        },
        {
          icon: "fa-suitcase-rolling",
          title: "Travel Security",
          content: "Tailored travel security for global client reassurance",
          customClass: "item-4",
          subtitle:"",
          description: "With numerous years of experience in working with an international, sophisticated clientele, we assist you with travel logistics, security any where in the world. Our travel logistics coordinators are responsible for the day-to-day management of the client’s activities while travelling; focusing on security and comfort of the client and your loved ones."
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
          title: "Anonymous Resident of Gstaad",
          date: "April 4, 2023",
          description:
            "We turned to Excel Security Solutions for our event security needs, and they exceeded our expectations. Their team not only provided a strong presence but also handled every situation with professionalism and expertise. We couldn't have asked for better security partners.",
          ratings: 5,
          avatar: testmonialAvater1,
        },
        {
          title: "Anonymous Resident of Gstaad",
          date: "February 21, 2024",
          description:
            "I Engaged Excel Security solutions for a relative one who was in poor health and required security. Due to the dedication and professionalism showed to my father, we are forever grateful",
          ratings: 5,
          avatar: testmonialAvater1,
        },
        {
          title: "Anonymous Resident of Gstaad.",
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
           img: blogOne,
           date: "March 22, 2024",
           category: "Security",
           title: "What to Look for in a Home Security System",
           excerpt:"If you're looking for a new home security system or want to switch your current one, these steps can help you find the best.",
           url:"/crime-prevention",
           subtitle:"Choosing the Best Home Security System for Your Chalet",
           header:"If you're looking for a new home security system or want to switch your current one, these steps can help you find the best. To help you find the best home security system for your chalet, we have prepared this guide that covers the main features and factors that you should consider. We will also walk you through the steps to choose the most suitable system for your needs and preferences. A home security system is more than just a set of cameras and alarms.",
           section: "It is a comprehensive solution that provides you with peace of mind and confidence. Here are some of the key features and factors that you should look for in a home security system.",
           content: `
                      <h4>Seven steps to consider:</h4></br>
                      <ul class="check-list">
                        <li>Assess your security needs.</li>
                        <p>Identify the weak points of your home and the types of sensors and detectors you may need to protect them.</p>
                        <li>Consider your budget.</li>
                        <p>Find out how much each system costs upfront and monthly, and choose one that fits your budget.</p>
                        <li>Look for additional features.</li>
                        <p>Decide which features are important to you, such as video monitoring, smart home integration, and mobile app control, and look for systems that offer them.</p>
                        <li>Check for compatibility.</li>
                        <p>If you have existing smart home devices, make sure they can work with the security system you choose.</p>
                        <li>Choose a reputable provider.</li>
                        <p>Look for a provider that has a good reputation, a long history, and positive customer feedback.</p>
                        <li>Install and test the system.</li>
                        <p>Follow the installation instructions and test the system to make sure it's functioning properly. Set up notifications and alerts to keep you updated on any security issues.</p>
                        <li>Research available options.</li>
                        <p>Compare different types of home security systems or speak to Excel Security Solutions for a free no obligation consultation.</p>
                      </ul>
                    `
         },
         {
           img: blogTwo,
           date: "April 22, 2024",
           category: "Awareness",
           excerpt:"Your staff play a crucial role in ensuring a seamless, secure, and enjoyable experience for guests. However, the significance of conducting thorough background checks on all staff cannot be overstated.",
           title: "The Inside Threat",
           subtitle:"The Importance of Running Background Checks on your Staff",
           url:"",
           header:"Your staff play a crucial role in ensuring a seamless, secure, and enjoyable experience for guests. However, the significance of conducting thorough background checks on all staff cannot be overstated. This practice is not just a procedural formality but a fundamental aspect of maintaining safety, security, and the reputation of your chalet/hospitality staff.",
           section: "",
           content:`<div class="check-list">
                      <h5>Security and Safety</h5>
                      <p class="pt-2">
                        One of the primary reasons for conducting background checks is to ensure the safety and security of guests and property. Chalets often house valuable items and personal belongings. Staff members have access to these valuables, and without proper vetting, there is a potential risk of theft or damage. Background checks help identify any history of criminal activity, theft, or dishonesty, thus mitigating the risk of hiring individuals with a propensity for such behaviours.
                      </p>
                      <h5 class="pt-2">Reputation Management</h5>
                      <p class="pt-2">
                        The reputation of a hotel venue is built on trust and the promise of a secure environment. Any incident involving theft, misconduct, or breach of confidentiality can severely damage this reputation. News of such incidents can spread rapidly, especially in today’s digital age where online reviews and social media can amplify negative experiences. A tarnished reputation not only results in loss of business but also takes considerable time and effort to rebuild. By conducting background checks, hotel owners can ensure they are hiring trustworthy individuals, thus protecting their establishment’s reputation.
                      </p>
                      <h5 class="pt-2">Protection of Confidential Information</h5>
                      <p class="pt-2">
                        In a luxury chalet, staff may have access to sensitive and confidential information about you and your guests. This could include personal preferences, schedules, and even financial details. Any misuse or leakage of this information can have serious repercussions, including legal consequences. Background checks help in verifying the trustworthiness of staff, ensuring they are less likely to misuse confidential information.
                      </p>
                      <h5 class="pt-2">Working with Children</h5>
                      <p class="pt-2">
                        Another critical aspect is the presence of children. It is imperative to ensure that your nannies/child minders are suitable to be around children. This includes checking for any history of inappropriate behaviour or criminal activity related to minors. Background checks help in ensuring that the environment remains safe and secure for children, providing peace of mind to parents.
                      </p>
                      <h5 class="pt-2">Conclusion</h5>
                      <p class="pt-2">
                        In conclusion, the importance of running comprehensive background checks on chalet/hospitality staff cannot be emphasized enough. It is a crucial step in safeguarding your security, your family or guests, protecting your reputation or the reputation of the establishment, and ensuring the confidentiality of sensitive information. Furthermore, it is essential when the staff will be interacting with children to ensure their safety and well-being.
                      </p>
                      <p class="pt-2">
                        At Excel Security Solutions, we understand the unique needs of chalet owners and the critical importance of employing trustworthy staff. Our comprehensive background check services are designed to provide peace of mind, ensuring that only the most reliable and qualified individuals are hired. Contact Excel Security Solutions for all your background check concerns and let us help you maintain the highest standards of safety and integrity in your chalet.
                      </p>
                      </div>
           `
         },
         {
           img: blogThree,
           date: "May 22, 2024",
           category: "Awareness",
           excerpt:'In today’s uncertain world, the role of a security driver goes beyond that of a classic chauffeur.',
           title: "The Future of VIP Transportation: The Security Driver Advantage",
           url: "",
           subtitle:"In today’s uncertain world, the role of a security driver goes beyond that of a classic chauffeur. While both professions revolve around transporting clients safely and comfortably, a security driver brings an added layer of expertise, vigilance, and preparedness that a traditional chauffeur does not typically offer. As risks and threats evolve, so too must the means by which we protect those under our care. Here’s a closer look at the fundamental differences and advantages of engaging a security driver.",
           content:`
            <div class="check-list">
              <h5 class="pt-4">Understanding the Roles: Security Driver vs. Classic Chauffeur</h5>
              <p class="pt-3">
                  A classic chauffeur focuses primarily on providing a smooth and luxurious driving experience. Their responsibilities include maintaining the vehicle, ensuring punctuality, and delivering a high standard of customer service. While their training covers the essentials of driving and etiquette, it generally lacks the specialized training necessary for risk situations.
              </p>
              <p>
                  On the other hand, a security driver is trained in advanced defensive driving techniques, threat assessment, and emergency response. They possess skills in evasive driving, route planning to avoid potential hazards, and crisis management. Their primary goal is not just to transport but to protect the client, anticipating and mitigating any security risks that may arise. The security driver can replace the role of a close protection agent, which adds another level of creating a low profit for our client.
              </p>
          </div>
              <h5 class="pt-4">Advantages of a Security Driver</h5>
              <ul class="check-list pt-3">
                  <li>Enhanced Safety:</li>
                  <p>Security drivers are equipped to handle high-risk related scenarios from potential attacks to accidents. Their training ensures they can make split-second decisions to safeguard their passengers.</p>
                  
                  <li>Threat Assessment:</li>
                  <p>With a keen eye for detail and extensive knowledge of security protocols, security drivers can identify and respond to threats before they escalate.</p>
                  
                  <li>Peace of Mind:</li>
                  <p>Engaging a security driver provides an unparalleled level of assurance. Clients can focus on their tasks knowing they are in safe hands.</p>
                  
                  <li>Customized Protection:</li>
                  <p>Security drivers tailor their approach based on the specific needs and risk profile of each client, including looking after the younger members of your family, ensuring personalized protection.</p>
              </ul>

              <h5 class="pt-4">Excel Security Solutions AG Gstaad: Leading the Way in VIP Security Transportation</h5>
              <div class="check-list">
              <p class="pt-3">
                  We understand the importance of combining luxury with security. We offer a premium service that provides highly trained security drivers who are adept at both defensive driving, customer service, and looking after your collection of vehicles. Our embedded driver program allows clients to choose their preferred vehicle, ensuring comfort and familiarity while our drivers maintain the highest standards of security.
              </p>
              <p>
                  Whether you require transport for a high-profile event, business trip, or daily commute, our security drivers are prepared to offer a seamless blend of safety and luxury. In an era where security concerns are paramount, opting for a security driver is not just a precaution but a necessity.
              </p>
              <p>
                  Invest in peace of mind with Excel Security Solutions, where your safety is our top priority.
              </p>
              </div>
           `
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