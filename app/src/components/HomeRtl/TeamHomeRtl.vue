<template>
  <!--====== APPIE TEAM PART START ======-->

  <section class="appie-team-area pt-90 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="appie-section-title text-center">
            <h3 class="appie-title">{{ title }}</h3>
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
      <div class="row" v-if="members && members.length > 0">
        <div
          class="col-lg-3 col-md-6"
          v-for="(member, index) in members"
          :key="index"
        >
          <div
            class="appie-team-item mt-30 wow animated fadeInUp"
            data-wow-duration="2000ms"
            data-wow-delay="200ms"
          >
            <div class="thumb">
              <img v-if="member.img" :src="member.img" :alt="member.name" />
              <ul>
                <li v-for="(social, index) in member.socials" :key="index">
                  <a :href="social.url"><i :class="social.icon"></i></a>
                </li>
              </ul>
            </div>
            <div class="content text-center">
              <h5 class="title">{{ member.name }}</h5>
              <span>{{ member.position }}</span>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="team-btn text-center mt-50">
            <a class="main-btn" href="#">
              عرض كل الأعضاء<i class="fal fa-arrow-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--====== APPIE TEAM PART ENDS ======-->
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
    members: {
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