<template>
  <!--====== APPIE BLOG PART START ======-->

  <section class="appie-blog-area pt-90 pb-95">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="appie-section-title text-center">
            <h3 class="appie-title">{{ title }}</h3>
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(blog, index) in blogs"
          :key="index"
          class="col-lg-4 col-md-6"
        >
          <div
            class="appie-blog-item mt-30 wow animated fadeInUp"
            data-wow-duration="3000ms"
            data-wow-delay="200ms"
          >
            <div class="thumb">
              <img :src="blog.img" :alt="blog.title" />
            </div>
            <div class="content">
              <div class="blog-meta">
                <ul>
                  <li>{{ blog.date }}</li>
                  <li><a href="#">Saas والتطبيق</a></li>
                </ul>
              </div>
              <h3 class="title">
                <router-link to="/single-news">{{ blog.title }}</router-link>
              </h3>
              <router-link to="/single-news"
                >يتعلم أكثر <i class="fal fa-arrow-right"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--====== APPIE BLOG PART ENDS ======-->
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    blogs: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style>
</style>