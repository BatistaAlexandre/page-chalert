<template>
  <section class="appie-team-area pt-90 pb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="appie-section-title text-center">
            <h3 class="appie-title">{{ title }}</h3>
            <p>{{ description }}</p>
            <div class="divider"></div>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="pt-30 text-center pb-50 appie-section-title">
          <h3 class="pb-10">Our Team at Excel Security Solutions</h3>
          <p>We take immense pride in our diverse and professional international team here at <span>Excel Security Solutions</span>.
            Our team members hail from various corners of the world, including Switzerland, Portugal, Macedonia, Turkey, Mali, Poland, Italy, the United Kingdom, Nigeria/Malta, Thailand, Algeria, and beyond.
            Despite our different backgrounds and experiences, we share a common love and appreciation for this beautiful region that we all call home.
            Our team's expertise allows us to interact seamlessly with guests and workers from various nationalities who also reside in this little speck of the world.
            We believe that this rich diversity enhances our ability to provide <span>exceptional security services</span> tailored to the unique needs of our clients.
          </p>
        </div>
      </div>

      <div class="row team-row">
        <div class="col-lg-3 col-md-6 col-sm-6" v-for="(member, index) in members" :key="index">
          <div class="appie-team-item mt-30 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
            <div class="thumb" @mouseover="hover = index" @mouseleave="hover = null">
              <img v-if="member.img" :src="member.img" :alt="member.name">
              <h5 class="name-overlay" v-show="hover === index">{{ member.name }}</h5>
              <ul class="social-links" v-show="hover === index">
                <li v-for="(social, sIndex) in member.socials" :key="sIndex">
                  <a :href="social.url"><i :class="social.icon"></i></a>
                </li>
              </ul>
            </div>
            <div class="content text-center">
              <h5 class="title" v-show="hover !== index">{{ member.name }}</h5>
              <span v-show="hover !== index">{{ member.position }}</span>
              <p class="hover-bio" v-if="hover === index">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

  

<script>
export default {
  data() {
    return {
      hover: false
    };
  },
    props:{
        title:{
            type:String,
        },
        description:{
            type:String
        },
        members:{
            type:Array,
            default: () =>{
                return []
            }
        }
    },
    

}
</script>


<style scoped>
.team-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.thumb {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.social-links {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  list-style: none;
  opacity: 0; /* Start invisible */
  visibility: hidden; /* Start hidden */
  transition: opacity 0.5s ease 0.3s, visibility 0s linear 0.3s; /* Delayed appearance */
}

.name-overlay {
  position: absolute;
  top: 93%;  /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%);
  color: #333;
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  text-align: center;
  padding: 10px 0;
  opacity: 0; /* Start invisible */
  visibility: hidden; /* Start hidden */
  transition: opacity 0.8s ease 0.8s, visibility 1s linear 0.8s; /* Delayed appearance */
}

.thumb:hover .name-overlay,
.thumb:hover .social-links {
  opacity: 1; /* Make visible */
  visibility: visible; /* Make visible */
  transition-delay: 1s; /* Remove delay when hiding */
}

.content {
  transition: opacity 0.3s ease;
  background-color: rgba(255, 255, 255, 0.8);
}

.hover-bio {
  display: none;
  text-align: left;
  font-size: 14px;
  color: #333;
}

.thumb:hover + .content .hover-bio {
  display: block;
}

.content .title, .content span {
  visibility: visible;
}

.thumb:hover + .content .title,
.thumb:hover + .content span {
  visibility: hidden;
}

.divider {
  height: 1px;
  background-color: #ed1f27;
  width: 40%;
  margin: 0 auto;
  margin-top: 30px;
}
</style>
