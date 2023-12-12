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
              <h3 class="title">Smartwatch with Music</h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    <a href="/shop-details">Smartwatch with Music</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <single-product />
    <div class="shop-details-info-area pt-85 pb-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="shop-details-box">
              <ul class="nav nav-pills mb-35" id="pills-tab" role="tablist">
                <li
                  @click.prevent="selectTab('desc')"
                  class="nav-item"
                  role="presentation"
                >
                  <a
                    :class="[selected === 'desc' ? 'active' : '']"
                    class="nav-link"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    >Description</a
                  >
                </li>
                <li
                  @click.prevent="selectTab('review')"
                  class="nav-item"
                  role="presentation"
                >
                  <a
                    :class="[selected === 'review' ? 'active' : '']"
                    class="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                    >Reviews (2)</a
                  >
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  :class="[selected === 'desc' ? 'show active' : '']"
                  class="tab-pane fade"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div class="shop-description">
                    <p>
                      Uninhibited carnally hired played in whimpered dear
                      gorilla koala depending and much yikes off far quetzal
                      goodness and from for grimaced goodness unaccountably and
                      meadowlark near unblushingly crucial scallop tightly
                      neurotic hungrily some and dear furiously this apart.
                      Spluttered narrowly yikes left moth in yikes bowed this
                      that grizzly much hello on spoon-fed that alas rethought
                      much decently richly and wow against the frequent fluidly
                      at formidable acceptably flapped besides and much circa
                      far over the bucolically hey precarious goldfinch mastodon
                      goodness gnashed a jellyfish and one however because.
                    </p>
                    <p>
                      Laconic overheard dear woodchuck wow this outrageously
                      taut beaver hey hello far meadowlark imitatively
                      egregiously hugged that yikes minimally unanimous pouted
                      flirtatiously as beaver beheld above forward energetic
                      across this jeepers beneficently cockily less a the
                      raucously that magic upheld far so the this where crud
                      then below after jeez enchanting drunkenly more much wow
                      callously irrespective limpet.
                    </p>
                    <h4 class="title">Packaging & Delivery</h4>
                    <p>
                      Less lion goodness that euphemistically robin
                      expeditiously bluebird smugly scratched far while thus
                      cackled sheepishly rigid after due one assenting regarding
                      censorious while occasional or this more crane went more
                      as this less much amid overhung anathematic because much
                      held one exuberantly sheep goodness so where rat wry well
                      concomitantly.
                    </p>
                    <p>
                      Scallop or far crud plain remarkably far by thus far
                      iguana lewd precociously and and less rattlesnake contrary
                      caustic wow this near alas and next and pled the yikes
                      articulate about as less cackled dalmatian in much less
                      well jeering for the thanks blindly sentimental whimpered
                      less across objectively fanciful grimaced wildly some wow
                      and rose jeepers outgrew lugubrious luridly irrationally
                      attractively dachshund.
                    </p>
                  </div>
                </div>
                <div
                  :class="[selected === 'review' ? 'show active' : '']"
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <div class="review-rating-box">
                    <div class="top-rating-result">
                      <h3 class="title">2 Reviews for Watch</h3>
                      <div class="rating-result-box">
                        <div class="thumb">
                          <img
                            src="@/assets/images/testimonial-user-2.png"
                            alt=""
                          />
                        </div>
                        <div class="content">
                          <ul>
                            <li><i class="fas fa-star"></i></li>
                            <li><i class="fas fa-star"></i></li>
                            <li><i class="fas fa-star"></i></li>
                            <li><i class="fas fa-star"></i></li>
                            <li><i class="fas fa-star-half-alt"></i></li>
                          </ul>
                          <div class="shop-meta">
                            <div class="author-user-name">
                              <a href="#">Will Barrow</a>
                            </div>
                            <div class="date">
                              <span>March 15, 2022</span>
                            </div>
                          </div>
                          <p>
                            That arse over tit a load of old tosh pardon you
                            wellies amongst william my good sir grub your bike
                            mate james bond morish a blinding.
                          </p>
                        </div>
                      </div>
                      <div class="rating-result-box">
                        <div class="thumb">
                          <img
                            src="@/assets/images/testimonial-user-1.png"
                            alt=""
                          />
                        </div>
                        <div class="content">
                          <ul>
                            <li><i class="fas fa-star"></i></li>
                            <li><i class="fas fa-star"></i></li>
                            <li><i class="fas fa-star"></i></li>
                            <li><i class="fas fa-star"></i></li>
                            <li><i class="fas fa-star-half-alt"></i></li>
                          </ul>
                          <div class="shop-meta">
                            <div class="author-user-name">
                              <a href="#">Elon Gated</a>
                            </div>
                            <div class="date">
                              <span>April 24, 2022</span>
                            </div>
                          </div>
                          <p>
                            Lost the plot twit the full monty down the pub Why
                            off his nut cheers say a blinding shot happy days
                            bog argy bargy.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="review-box">
                      <div class="review-title">
                        <h4 class="title">Add a Review</h4>
                        <p>
                          Your email address will not be published.Required
                          fields are marked*
                        </p>
                      </div>
                      <div class="add-review-star">
                        <span>Rate this product:</span>
                        <ul>
                          <li><i class="fas fa-star"></i></li>
                          <li><i class="fas fa-star"></i></li>
                          <li><i class="fal fa-star"></i></li>
                          <li><i class="fal fa-star"></i></li>
                          <li><i class="fal fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                    <div class="rating-form-box">
                      <form action="#">
                        <div class="input-box">
                          <label for="#">Name *</label>
                          <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-box">
                          <label for="#">Email *</label>
                          <input type="email" placeholder="E-mail address" />
                        </div>
                        <div class="input-box">
                          <label for="#">Your review </label>
                          <textarea
                            name="#"
                            id="#"
                            cols="30"
                            rows="10"
                            placeholder="Type you message"
                          ></textarea>
                        </div>
                        <div class="input-box">
                          <div class="condition-check pb-15">
                            <input id="terms-conditions" type="checkbox" />
                            <label for="terms-conditions"
                              >Save my name, email, and website in this browser
                              for the next time I comment</label
                            >
                          </div>
                          <button class="main-btn" type="submit">
                            Submit Review
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shop-related-area pt-90 pb-170">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="appie-section-title text-center">
              <h3 class="appie-title">Related products</h3>
              <p>
                So I said knees up cuppa such a fibber jeffrey a bit of how's
                your.
              </p>
            </div>
          </div>
        </div>
        <div class="shop-related-product-slider-active">
          <VueSlickCarousel v-bind="settings" ref="carousel">
            <div class="px-3">
              <product />
            </div>
            <div class="px-3">
              <product />
            </div>
            <div class="px-3">
              <product />
            </div>
            <div class="px-3">
              <product />
            </div>
            <div class="px-3">
              <product />
            </div>
            <div class="px-3">
              <product />
            </div>
            <div class="px-3">
              <product />
            </div>
            <div class="px-3">
              <product />
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
    <footer-home-one />
    <div class="back-to-top">
      <a href="#"><i class="fal fa-arrow-up"></i></a>
    </div>
  </div>
</template>

<script>
import FooterHomeOne from "../HomeOne/FooterHomeOne.vue";
import SidebarHomeOne from "../HomeOne/SidebarHomeOne.vue";
import NavItems from "../NavItems.vue";
import Product from "./Product.vue";
import SingleProduct from "./SingleProduct.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    SidebarHomeOne,
    FooterHomeOne,
    NavItems,
    SingleProduct,
    Product,
    VueSlickCarousel,
  },
  data() {
    return {
      sidebar: false,
      selected: "review",
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
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
    selectTab(value) {
      this.selected = value;
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
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
  },
};
</script>

<style>
.shop-related-product-slider-active .slick-dots li button {
  background: #e2e2e2;
}
</style>