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

    <title-area />

    <!--====== APPIE PAGE TITLE PART ENDS ======-->

    <!-- Blog Start -->
    <section class="blogpage-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-7">
            <all-blogs />
          </div>
          <div class="col-lg-4 col-md-5">
            <blog-sidebar />
          </div>
        </div>
      </div>
    </section>
    <!-- Blog End -->

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
import SidebarHomeOne from "../HomeOne/SidebarHomeOne.vue";
import HeaderNews from "../News/HeaderNews.vue";
import TitleArea from "../News/TitleArea.vue";
import FooterHomeOne from "../HomeOne/FooterHomeOne.vue";
import AllBlogs from "../Blogs/AllBlogs.vue";
import BlogSidebar from "../BlogSidebar.vue";
export default {
  components: {
    SidebarHomeOne,
    HeaderNews,
    TitleArea,
    FooterHomeOne,
    AllBlogs,
    BlogSidebar,
  },
  data() {
    return {
      sidebar: false,
      navs: [
        {
          name: "Home",
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