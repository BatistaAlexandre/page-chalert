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
            <div class="thumb">
              <img v-if="member.img" :src="member.img" :alt="member.name">
            </div>
            <div class="content text-center">
              <h5 class="title">{{ member.name }}</h5>
              <span>{{ member.position }}</span>
              <button class="contact-button" @click="toggleBio(index)">
                {{ bioIndex === index ? 'HIDE BIO' : 'SHOW BIO' }}
              </button>
              <p class="bio" v-if="bioIndex === index">{{ member.bio }}</p>
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
      hover: false,
      bioIndex: null
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
    methods: {
      toggleBio(index) {
        this.bioIndex = this.bioIndex === index ? null : index;
      }
    }
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
  transition: transform 0.5s ease;
}

.thumb img {
  width: 100%;
  transition: transform 0.5s ease;
}

.thumb:hover img {
  transform: scale(1.1);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.3s ease;
  background-color: rgba(255, 255, 255, 0.8);
}

.bio {
  text-align: left;
  font-size: 14px;
  color: #333;
  margin-top: 10px;
}

.divider {
  height: 1px;
  background-color: #ed1f27;
  width: 40%;
  margin: 0 auto;
  margin-top: 30px;
}

.contact-button {
  background-color: #ed1f27;
  color: #fff;
  border: none;
  padding: 1px 20px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #fff;
  border: #ed1f27 solid 1px;
  color:#ed1f27
}
</style>








