<template>
  <div v-if="this.$store.state.rtl">
    <sidebar-home-rtl
      :sidebar="sidebar"
      @toggleSidebar="toggleSidebar"
      :menuItems="navs"
    />

    <!--====== OFFCANVAS MENU PART ENDS ======-->

    <!--====== PART START ======-->

    <header-home-rtl @toggleSidebar="toggleSidebar" :menuItems="navRtl" />

    <!--====== PART ENDS ======-->

    <!--====== APPIE HERO PART START ======-->

    <hero-home-rtl
      welcome_message="مرحبا بكم في Appie"
      slogan="قم بإدارة كل شيء ، في هذا النظام الجديد كليًا."
      description=" مرحاض منديل بانكي فوق Duff jolly good cack brolly هو chinwag zonked أيام سعيدة مغمورة."
      first_button_content=" تنزيل لنظام iOS"
      first_button_icon="fab fa-apple"
      second_button_content="تنزيل لنظام Android"
      second_button_icon="fab fa-google-play"
    />

    <!--====== APPIE HERO PART ENDS ======-->

    <!--====== APPIE SERVICES PART START ======-->
    <services-home-rtl
      :grid_items="itemsGrid"
      section_heading="مصممة مع "
      more_heading="مقدم الطلب في الاعتبار."
      description="مونتي الكامل spiffing الوقت المناسب لا نكش بيجي نكش رائع."
    />
    <!--====== APPIE SERVICES PART ENDS ======-->

    <!--====== APPIE FEATURES PART START ======-->
    <features-home-rtl />

    <!--====== APPIE FEATURES PART ENDS ======-->

    <!--====== APPIE TRAFFIC PART START ======-->

    <traffic-home-rtl
      :traffic_thumbnail="traffic_thumb"
      small_title="مرور"
      big_title="إعداد التقارير مع 50 ألف استفسار"
      description="لقد قام بتجسيدها بوو هاري ذا كراش بارج تشاب هري سبيفينج تنفق فلسا واحدا على مونتي بورك باتي الكامل."
      :features="features"
    />

    <!--====== APPIE TRAFFIC PART ENDS ======-->

    <!--====== APPIE TESTIMONIAL PART START ======-->

    <testimonial-home-rtl :sliderContents="sliderContents" />

    <!--====== APPIE TESTIMONIAL PART ENDS ======-->

    <!--====== APPIE TEAM PART START ======-->

    <team-home-rtl
      title="قابل أعضاء فريقنا"
      description="تخطيطات وأنماط مختلفة لأقسام الفريق."
      :members="members"
    />

    <!--====== APPIE TEAM PART ENDS ======-->

    <!--====== APPIE PRICING PART START ======-->

    <priceing-home-rtl
      title="اختر خطتك"
      description="تخطيطات وأنماط مختلفة لأقسام الفريق"
    />

    <!--====== APPIE PRICING PART ENDS ======-->

    <!--====== APPIE FAQ PART START ======-->

    <faq-home-rtl
      title="أسئلة مكررة"
      description="تخطيطات وأنماط مختلفة لأقسام الفريق."
    />

    <!--====== APPIE FAQ PART ENDS ======-->

    <!--====== APPIE BLOG PART START ======-->

    <blog-home-rtl
      title="أحدث مشاركات المدونة"
      description="تخطيطات وأنماط مختلفة لأقسام الفريق."
      :blogs="blogs"
    />

    <!--====== APPIE BLOG PART ENDS ======-->

    <!--====== APPIE PROJECT PART START ======-->

    <project-home-rtl
      title="ابدأ مشروعك مع appie."
      description="سنرسل لك بريدًا إلكترونيًا حول هذا المنتج فقط."
    />

    <!--====== APPIE PROJECT PART ENDS ======-->

    <!--====== APPIE FOOTER PART START ======-->

    <footer-home-rtl />

    <!--====== APPIE FOOTER PART ENDS ======-->

    <!--====== APPIE BACK TO TOP PART ENDS ======-->
    <div class="back-to-top">
      <a href="#"><i class="fal fa-arrow-up"></i></a>
    </div>
    <!--====== APPIE BACK TO TOP PART ENDS ======-->
  </div>
  <div v-else>
    <HomeOne :rtl="true" />
  </div>
</template>
<script>
import HomeOne from "../HomeOne/index.vue";
import blogOne from "@/assets/images/blog-1.jpg";
import blogTwo from "@/assets/images/blog-2.jpg";
import blogThree from "@/assets/images/blog-3.jpg";
import memberOne from "@/assets/images/team-1.jpg";
import memberTwo from "@/assets/images/team-2.jpg";
import memberThree from "@/assets/images/team-3.jpg";
import memberFour from "@/assets/images/team-4.jpg";
import testmonialAvater from "@/assets/images/testimonial-user.png";
import traffic_thumb from "@/assets/images/traffic-thumb.png";
import icon_one from "@/assets/images/icon/1.png";
import icon_two from "@/assets/images/icon/2.png";
import icon_three from "@/assets/images/icon/3.png";
import icon_four from "@/assets/images/icon/4.png";
import HeaderHomeRtl from "./HeaderHomeRtl.vue";
import SidebarHomeRtl from "./SidebarHomeRtl.vue";
import HeroHomeRtl from "./HeroHomeRtl.vue";
import ServicesHomeRtl from "./ServicesHomeRtl.vue";
import FeaturesHomeRtl from "./FeaturesHomeRtl.vue";
import TrafficHomeRtl from "./TrafficHomeRtl.vue";
import TestimonialHomeRtl from "./TestimonialHomeRtl.vue";
import TeamHomeRtl from "./TeamHomeRtl.vue";
import PriceingHomeRtl from "./PriceingHomeRtl.vue";
import FaqHomeRtl from "./FaqHomeRtl.vue";
import BlogHomeRtl from "./BlogHomeRtl.vue";
import ProjectHomeRtl from "./ProjectHomeRtl.vue";
import FooterHomeRtl from "./FooterHomeRtl.vue";
export default {
  name: "HomeRtl",
  components: {
    HeaderHomeRtl,
    SidebarHomeRtl,
    HeroHomeRtl,
    ServicesHomeRtl,
    FeaturesHomeRtl,
    TrafficHomeRtl,
    TestimonialHomeRtl,
    TeamHomeRtl,
    PriceingHomeRtl,
    FaqHomeRtl,
    BlogHomeRtl,
    ProjectHomeRtl,
    FooterHomeRtl,
    HomeOne,
  },
  data() {
    return {
      traffic_thumb: traffic_thumb,
      testmonialAvater: testmonialAvater,
      sidebar: false,
      showloading: true,
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
      navRtl: [
        {
          name: " أنا ",
          childrens: [
            {
              name: "الصفحة الرئيسية  1",
              path: "/",
            },
            {
              name: "الصفحة الرئيسية 2",
              path: "/home-two",
            },
            {
              name: "المنزل  3",
              path: "/home-three",
            },
            {
              name: "المنزل  4",
              path: "/home-four",
            },
            {
              name: "المنزل  5",
              path: "/home-five",
            },
            {
              name: "الصفحة الرئيسية 6<",
              path: "/home-six",
            },
            {
              name: "المنزل  7",
              path: "/home-seven",
            },
            {
              name: "لصفحة الرئيسية 8",
              path: "/home-eight",
            },
            {
              name: "الصفحة الرئيسية الظلام",
              path: "/home-dark",
            },
            {
              name: "الصفحة الرئيسية",
              path: "/home-rtl",
            },
          ],
        },
        {
          name: "خدمة",
          path: "/service-details",
        },
        {
          name: "الصفحات ",
          childrens: [
            {
              name: "عن",
              path: "/about-us",
            },
            {
              name: "خطأ",
              path: "/error",
            },
          ],
        },
        {
          name: "أخبار ",
          childrens: [
            {
              name: "صفحة الأخبار",
              path: "/news",
            },
            {
              name: "أخبار واحدة",
              path: "/single-news",
            },
          ],
        },
        {
          name: "اتصل",
          path: "/contact",
        },
      ],
      itemsGrid: [
        {
          count: 1,
          icon: icon_one,
          title: "يبحث",
          content: "Mucker الجص التافه كل ماتي موريش.",
          customClass: "",
        },
        {
          count: 2,
          icon: icon_two,
          title: "تصميم",
          content: "Mucker الجص التافه كل ماتي موريش.",
          customClass: "item-2",
        },
        {
          count: 3,
          icon: icon_three,
          title: "بناء",
          content: "Mucker الجص التافه كل ماتي موريش.",
          customClass: "item-3",
        },
        {
          count: 4,
          icon: icon_four,
          title: "دعم",
          content: "Mucker الجص التافه كل ماتي موريش.",
          customClass: "item-4",
        },
      ],
      features: [
        {
          title: "مصممة بعناية",
          bg: "", // create class for style
          description: "Mucker الجص التافه كل ماتي موريش.",
        },
        {
          title: "اختر التطبيق",
          bg: "item-2", // create class for style
          description: "Mucker الجص التافه كل ماتي موريش.",
        },
        {
          title: "مزامنة سلسة",
          bg: "item-3", // create class for style
          description: "Mucker الجص التافه كل ماتي موريش.",
        },
        {
          title: "مستخدم تفاعلي",
          bg: "item-4", // create class for style
          description: "Mucker الجص التافه كل ماتي موريش.",
        },
      ],
      sliderContents: [
        {
          title: "استجابة جايسون",
          date: "14 أبريل 2022",
          description:
            "لماذا أقول الفصل القديم الذي ينفث هدف أكسفورد المتوهجالنازف ، هاري المستنقع اللامع يسدد تسديدة مذهلة.",
          ratings: 5,
          avatar: testmonialAvater,
        },
        {
          title: "استجابة جايسون",
          date: "14 أبريل 2022",
          description:
            " لماذا أقول الفصل القديم الذي ينفث هدف أكسفورد المتوهجالنازف ، هاري المستنقع اللامع يسدد تسديدة مذهلة.",
          ratings: 5,
          avatar: testmonialAvater,
        },
        {
          title: "استجابة جايسون",
          date: "14 أبريل 2022",
          description:
            "لماذا أقول الفصل القديم الذي ينفث هدف أكسفورد المتوهجالنازف ، هاري المستنقع اللامع يسدد تسديدة مذهلة.",
          ratings: 2,
          avatar: testmonialAvater,
        },
        {
          title: "استجابة جايسون",
          date: "14 أبريل 2022",
          description:
            "لماذا أقول الفصل القديم الذي ينفث هدف أكسفورد المتوهجالنازف ، هاري المستنقع اللامع يسدد تسديدة مذهلة.",
          ratings: 3,
          avatar: testmonialAvater,
        },
      ],
      memberOne: memberOne,
      memberTwo: memberTwo,
      memberThree: memberThree,
      memberFour: memberFour,
      members: [
        {
          name: "تقييم بنيامين",
          position: "الرئيس التنفيذي المؤسس",
          img: memberTwo,
          socials: [
            {
              name: "facebok",
              url: "https://www.facebook.com",
              icon: "fab fa-facebook-f", //user font awesome class
            },
            {
              name: "twitter",
              url: "https://www.twitter.com",
              icon: "fab fa-twitter", //user font awesome class
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.com/",
              icon: "fab fa-pinterest-p", //user font awesome class
            },
          ],
        },
        {
          name: "تقييم بنيامين",
          position: "الرئيس التنفيذي المؤسس",
          img: memberOne,
          socials: [
            {
              name: "facebok",
              url: "https://www.facebook.com",
              icon: "fab fa-facebook-f", //user font awesome class
            },
            {
              name: "twitter",
              url: "https://www.twitter.com",
              icon: "fab fa-twitter", //user font awesome class
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.com/",
              icon: "fab fa-pinterest-p", //user font awesome class
            },
          ],
        },
        {
          name: "تقييم بنيامين",
          position: "الرئيس التنفيذي المؤسس",
          img: memberThree,
          socials: [
            {
              name: "facebok",
              url: "https://www.facebook.com",
              icon: "fab fa-facebook-f", //user font awesome class
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.com/",
              icon: "fab fa-pinterest-p", //user font awesome class
            },
          ],
        },
        {
          name: "تقييم بنيامين",
          position: "الرئيس التنفيذي المؤسس",
          img: memberFour,
          socials: [
            {
              name: "facebok",
              url: "https://www.facebook.com",
              icon: "fab fa-facebook-f", //user font awesome class
            },
            {
              name: "twitter",
              url: "https://www.twitter.com",
              icon: "fab fa-twitter", //user font awesome class
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.com/",
              icon: "fab fa-pinterest-p", //user font awesome class
            },
          ],
        },
      ],
      blogOne: blogOne,
      blogTwo: blogTwo,
      blogThree: blogThree,
      blogs: [
        {
          img: blogOne,
          date: "10 مارس 2022",
          category: "Saas والتطبيق",
          title: "تقديم تصميم تطبيقات جديد لتطبيق iOS الخاص بنا",
        },
        {
          img: blogTwo,
          date: "10 مارس 2022",
          category: "Saas والتطبيق",
          title: "كيفية إحضار Dolce إلى شركتك",
        },
        {
          img: blogThree,
          date: "10 مارس 2022",
          category: "Saas والتطبيق",
          title: " 17 طريقة فعالة لاستثمار تطبيقات الجوال",
        },
      ],
    };
  },
  created() {
    const html = document.getElementsByTagName("html");
    html[0].lang = "ar";
    html[0].dir = "rtl";
    this.preLoading();
    document.addEventListener("scroll", this.topToBottom);
  },
  beforeDestroy() {
    const html = document.getElementsByTagName("html");
    html[0].lang = "en";
    html[0].dir = "";
    this.$store.state.enableRtl = false;
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
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
  },
};
</script>

<style>
</style>