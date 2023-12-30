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

    <header-news @toggleSidebar="toggleSidebar" :menuItems="navs" />
    <!--====== PART ENDS ======-->

    <!--====== APPIE PAGE TITLE PART START ======-->

    <banner-service-details />

    <!--====== APPIE PAGE TITLE PART ENDS ======-->

    <!--====== APPIE SERVICE DETAILS PART ENDS ======-->

    <section class="appie-service-details-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <body-nav-sidebar />
          </div>
          <div class="col-lg-8">
            <div class="service-details-content">
              <div class="thumb">
                <img src="assets/images/service-details-thumb.jpg" alt="" />
              </div>
              <div class="content">
                <h3 class="title">What we're Building</h3>
                <p>
                  Tomfoolery wind up blag me old mucker chap super ruddy chancer
                  bobby, vagabond it's your round cuppa cheesed off blower nice
                  one at public school, Why cockup knackered pear shaped amongst
                  spiffing good time he nicked it.
                </p>
                <span
                  >He lost his bottle mufty spend a penny cheeky at public
                  school daft get stuffed mate don't get shirty.</span
                >
                <p>
                  My good sir cup of char no biggie knees up happy days
                  absolutely bladdered don't get shirty with me chimney pot
                  James Bond he lost his bottle me old mucker, bobby nice one
                  cack codswallop what a load of rubbish Jeffrey barmy blower
                  tomfoolery, crikey only a quid at public school mufty tosser
                  up the duff say Richard I don't want no agro. Owt to do with
                  me barney quaint jolly good off his nut vagabond pardon you
                  gutted mate the little rotter excuse my French, the bee's
                  knees don't get shirty with me he nicked it give us a bell
                  zonked lavatory Charles gosh, Eaton the BBC is victoria sponge
                  a William bog what a load of rubbish. Smashing only a quid
                  cockup he lost his bottle bugger Jeffrey mufty, starkers
                  blatant zonked easy peasy brolly car boot, blimey at public
                  school cheeky bugger you mug david. Tomfoolery a load of old
                  tosh Queen's English lemon squeezy old hunky-dory mush chap
                  give us a bell bloke, chancer knackered cheesed off buggered
                  tinkety tonk old fruit car boot only a quid spiffing good time
                  chinwag, he lost his bottle pukka gutted mate naff horse play
                  cup of tea baking cakes a blinding shot. bobby the wireless
                  matie boy show.
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
  },
  data() {
    return {
      sidebar: false,
      showloading: true,
      navs: [
        {
          name: "home",
          path: "/",
        },
        {
          name: "service",
          path: "/service-details",
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