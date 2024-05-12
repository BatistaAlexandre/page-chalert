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

    <sidebar-home-one :sidebar="sidebar" @toggleSidebar="toggleSidebar" :menuItems="navs" />

    <!--====== OFFCANVAS MENU PART ENDS ======-->

    <!--====== PART START ======-->

    <header-news @toggleSidebar="toggleSidebar" :menuItems="navs" />
    <!--====== PART ENDS ======-->

    <!--====== APPIE PAGE TITLE PART START ======-->

    <banner-service-details />

    <!--====== APPIE PAGE TITLE PART ENDS ======-->

    <!--====== APPIE SERVICE DETAILS PART ENDS ======-->

    <section class="appie-service-details-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <!-- <div class="col-lg-4">
            <body-nav-sidebar />
          </div> -->

          <FaqService :class="[dark ? 'appie-faq-area-dark' : '']" title="Excel Security Solutions Code of Conduct"
            description="Excel Security Solutions is committed to upholding the highest standards of integrity, professionalism,
                  and community engagement. Our Code of Conduct outlines the values and principles that guide our actions
                  and interactions within the CHalert Neighbourhood Watch program." />
          <div class="col-lg-12">
            <div class="service-details-content">
              <div class="thumb">
                <img src="assets/images/service-details-thumb.jpg" alt="" />
              </div>
              <div class="content">
                <h3 class="title">Excel Security Solutions Code of Conduct</h3>
                <p>
                  Excel Security Solutions is committed to upholding the highest standards of integrity, professionalism,
                  and community engagement. Our Code of Conduct outlines the values and principles that guide our actions
                  and interactions within the CHalert Neighbourhood Watch program.

                </p>
                <span>1. Community-Centric Commitment:</span>
                <p>
                  We prioritize the safety and well-being of the entire community, fostering a collective
                  spirit that goes beyond individual interests.<br>
                  <br>Guiding Principles:<br>
                  - Place the safety and welfare of the community above all individual concerns.<br>
                  - Actively contribute to building a strong and connected community through collaboration.<br>
                  - Demonstrate empathy and understanding towards the diverse needs of community members.<br>

                </p>

                <span>2. Proactive Crime Prevention:</span>
                <p>
                  We believe in a proactive approach to crime prevention, emphasizing collective action by
                  residents and utilizing innovative strategies to safeguard neighborhoods.<br>

                  <br>Guiding Principles:<br>
                  - Stay vigilant and proactive in identifying and addressing potential security threats.<br>
                  - Collaborate with residents, businesses, and authorities to develop innovative crime prevention
                  measures.<br>
                  - Continuously assess and update security strategies to stay ahead of evolving threats.<br>
                </p>

                <span>3. Education and Empowerment:</span>
                <p>
                  We empower citizens through education, encouraging them to actively participate in creating safer
                  neighborhoods and enhancing their overall quality of life.<br>

                  <br>Guiding Principles:<br>
                  - Promote educational initiatives that empower community members with security knowledge.<br>
                  - Encourage active participation of individuals in contributing to the safety of their
                  neighborhoods.<br>
                  - Foster an environment where continuous learning and sharing of security insights are valued.<br>

                </p>

                <span>4. Innovation and Adaptability:</span>
                <p>
                  Excel Security Solutions embraces innovation and adapts to evolving security needs, constantly seeking
                  new ways to enhance the effectiveness of the CHalert Neighbourhood Watch program.<br>

                  <br>Guiding Principles:<br>
                  - Embrace technological advancements and innovative solutions for crime prevention.<br>
                  - Foster a culture of adaptability to respond effectively to emerging security challenges.<br>
                  - Encourage a proactive approach to incorporating new strategies and technologies.<br>
                </p>

                <span>Enforcement and Accountability:</span>
                <p>
                  Excel Security Solutions is committed to enforcing and upholding this Code of Conduct. Violations may
                  result in corrective actions, including but not limited to education, warnings, suspension, or
                  termination from the CHalert Neighbourhood Watch program.
                  <br>
                </p>

                <span>Review and Updates:</span>
                <p>
                  This Code of Conduct is subject to periodic review to ensure its relevance and effectiveness. Updates
                  may be made to reflect changes in the security landscape or the needs of the community.
                  <br>
                </p>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====== APPIE SERVICE DETAILS PART ENDS ======-->

    <!--====== APPIE PROJECT PART START ======-->

    <project-home-one 
    id="contact"
    style="padding-top: 110px;"
    title="Secure your safety" description="Book your visit now and experience our unparalleled protection services firsthand. We will contact you in less than 24 hours." />

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
import FaqService from "../HomeOne/FaqService.vue";

import FooterHomeOne from "../HomeOne/FooterHomeOne.vue";
import ProjectHomeOne from "../HomeOne/ProjectHomeOne.vue";
import SidebarHomeOne from "../HomeOne/SidebarHomeOne.vue";
import HeaderNews from "../News/HeaderNews.vue";
import BannerServiceDetails from "./BannerServiceDetails.vue";
import BodyNavSidebar from "./BodyNavSidebar.vue";
export default {
  components: {
    SidebarHomeOne,
    HeaderNews,
    BannerServiceDetails,
    BodyNavSidebar,
    ProjectHomeOne,
    FooterHomeOne,
    // FaqService,  
  },
  data() {
    return {
      sidebar: false,
      showloading: true,
      navs: [
        {
          name: "Home",
          path: "#",
        },
        {
          name: "Our Values",
          path: "/#Our Values",
        },
        {
          name: "Plans",
          path: "/#Plans",
        },
        {
          name: "Our Goal",
          path: "/#How it works",
        },
        {
          name: "Services",
          path: "/#Services",
        },
        {
          name: "Team",
          path: "/#Team",
        },
        {
          name: "FAQ",
          path: "/#FAQ",
        },
        {
          name: "Tips",
          path: "/#Tips",
        },
        {
          name: "Contact",
          path: "#contact",
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

<style></style>