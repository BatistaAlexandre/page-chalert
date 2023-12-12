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

    <!--====== APPIE HEADER PART START ======-->

    <header-home-one @toggleSidebar="toggleSidebar" :menuItems="navs" />

    <!--====== APPIE HEADER PART ENDS ======-->

    <!--====== APPIE HEADER PART ENDS ======-->

    <div class="appie-about-top-title-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="appie-about-top-title">
              <h2 class="title">The leading people Management platform</h2>
              <p>We offer you a panoply of cutting-edge options.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--====== APPIE HEADER PART ENDS ======-->

    <!--====== APPIE HEADER PART ENDS ======-->

    <section class="appie-about-page-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="appie-about-page-content">
              <h3 class="title">
                Join our team to create the best digital solutions.
              </h3>
              <p>
                He nicked it up the duff a load of old tosh bleeder butty bugger
                all mate cheeky bugger bodge tickety boo, mush well Richard
                geeza buggered haggle david you mug I, such a fibber my good sir
                knackered down the pub baking cakes chancer golly gosh. Car boot
                give us a bell bits and hanky panky me old mucker fantastic in
                my flat so I said nice one he lost his bottle.
              </p>
              <a href="#">
                View all Members <i class="fal fa-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====== APPIE HEADER PART ENDS ======-->

    <!--====== APPIE SERRVICE 2 PART START ======-->

    <service-aboutus />

    <!--====== APPIE SERRVICE 2 PART ENDS ======-->

    <!--====== APPIE TEAM PART START ======-->

    <team-aboutus />

    <!--====== APPIE TEAM PART ENDS ======-->

    <!--====== APPIE SPONSER PART START ======-->

    <sponser-home-two
      title="Appie works best with"
      more_title="your favorite platforms"
      description="Join over 40,000 businesses worldwide."
    />

    <!--====== APPIE SPONSER PART ENDS ======-->

    <!--====== APPIE SPONSER PART ENDS ======-->
    <get-started />

    <!--====== APPIE SPONSER PART ENDS ======-->

    <!--====== APPIE FOOTER PART START ======-->

    <footer-home-one class="appie-footer-area appie-footer-about-area" />

    <!--====== APPIE FOOTER PART ENDS ======-->

    <!--====== APPIE BACK TO TOP PART ENDS ======-->
    <div class="back-to-top">
      <a href="#"><i class="fal fa-arrow-up"></i></a>
    </div>
    <!--====== APPIE BACK TO TOP PART ENDS ======-->
  </div>
</template>

<script>
import FooterHomeOne from "../HomeOne/FooterHomeOne.vue";
import HeaderHomeOne from "../HomeOne/HeaderHomeOne.vue";
import SidebarHomeOne from "../HomeOne/SidebarHomeOne.vue";
import SponserHomeTwo from "../HomeTwo/SponserHomeTwo.vue";
import GetStarted from "./GetStarted.vue";
import ServiceAboutus from "./ServiceAboutus.vue";
import TeamAboutus from "./TeamAboutus.vue";
export default {
  components: {
    SidebarHomeOne,
    HeaderHomeOne,
    ServiceAboutus,
    TeamAboutus,
    SponserHomeTwo,
    GetStarted,
    FooterHomeOne,
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