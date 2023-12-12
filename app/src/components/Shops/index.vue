<template>
  <div>
    <sidebar-home-one
      :sidebar="sidebar"
      @toggleSidebar="toggleSidebar"
      :menuItems="navs"
    />
    <header class="appie-header-area appie-header-page-area appie-sticky">
      <div class="container">
        <div class="header-nav-box header-nav-box-3 header-nav-box-inner-page">
          <div class="row align-items-center">
            <div class="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
              <div class="appie-logo-box">
                <a href="/">
                  <img src="@/assets/images/logo-7.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
              <div class="appie-header-main-menu">
                <nav-items :menuItems="navs" />
              </div>
            </div>
            <div class="col-lg-4 col-md-7 col-sm-6 col-6 order-2 order-sm-3">
              <div class="appie-btn-box" style="text-align: right">
                <a class="login-btn" href="#"
                  ><i class="fal fa-user"></i> Login</a
                >
                <a class="main-btn ml-30" href="#">Get Started</a>
                <div class="toggle-btn ml-30 canvas_open d-lg-none d-block">
                  <i class="fa fa-bars" @click="toggleSidebar"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="appie-page-title-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="appie-page-title-item">
              <h3 class="title">Shops</h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    <a href="/shops">Shops</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="appie-shop-grid-area pt-100 pb-50">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 order-2 order-lg-1">
            <filter-sidebar />
          </div>
          <div class="col-lg-9 order-1 order-lg-2">
            <shop-products />
          </div>
        </div>
      </div>
    </div>
    <footer-home-one />
    <!--====== APPIE BACK TO TOP PART ENDS ======-->
    <div class="back-to-top">
      <a href="#"><i class="fal fa-arrow-up"></i></a>
    </div>
    <!--====== APPIE BACK TO TOP PART ENDS ======-->
  </div>
</template>

<script>
import FooterHomeOne from "../HomeOne/FooterHomeOne.vue";
import SidebarHomeOne from "../HomeOne/SidebarHomeOne.vue";
import NavItems from "../NavItems.vue";
import FilterSidebar from "./FilterSidebar.vue";
import ShopProducts from "./ShopProducts.vue";
export default {
  components: {
    SidebarHomeOne,
    NavItems,
    FooterHomeOne,
    ShopProducts,
    FilterSidebar,
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