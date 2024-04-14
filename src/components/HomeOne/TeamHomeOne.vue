<template>
    <section class="appie-team-area pt-90 pb-100">
      <div class="container">
        <div class="row justify-content-center"> <!-- Changed here -->
          <div class="col-lg-12">
            <div class="appie-section-title text-center">
              <h3 class="appie-title">{{ title }}</h3>
              <p>{{ description }}</p>
              <div class="divider"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
                    <div class="pt-60 text-center pb-60">
                        <h3 class="pb-10">Our Team at Excel Security Solutions</h3>
                        <p>We take immense pride in our diverse and professional international team here at <span>Excel Security Solutions</span>.
                        Our team members hail from various corners of the world, including Switzerland, Portugal, Macedonia, Turkey, Mali, Poland, Italy, the United Kingdom, Nigeria/Malta, Thailand, Algeria, and beyond.
                            Despite our different backgrounds and experiences, we share a common love and appreciation for this beautiful region that we all call home.</p>
                        <p>Our team's expertise allows us to interact seamlessly with guests and workers from various nationalities who also reside in this little speck of the world.
                            We believe that this rich diversity enhances our ability to provide <span>exceptional security services</span> tailored to the unique needs of our clients.</p>
                            
                    </div>
                </div>

        <div class="row team-row"> <!-- Modified class -->
          <div class="col-lg-3 col-md-6 col-sm-6" v-for="(member, index) in members" :key="index"> <!-- Changed here -->
            <div class="appie-team-item mt-30 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
              <div class="thumb">
                <img v-if="member.img" :src="member.img" :alt="member.name">
                <div class="hover-text">{{ member.text }}</div>
                <ul>
                  <li v-for="(social, index) in member.socials" :key="index"><a :href="social.url"><i :class="social.icon"></i></a></li>
                </ul>
              </div>
              <div class="content text-center">
                <h5 class="title">{{ member.name }}</h5>
                <span>{{ member.position }}</span>
              </div>
            </div>
          </div>
          <div class="team-btn text-center pt-50" >
                        <a class="main-btn" href="/bio-team"> VIEW ALL MEMBERS <i class="fal fa-arrow-right"></i></a>
                    </div>
        </div>
      </div>
    </section>
  </template>
  









<!--
<template>
    
    <section class="appie-team-area pt-90 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-section-title text-center">
                        <h3 class="appie-title">{{title}}</h3>
                        <p>{{description}}</p>
                        <div class="divider"></div>
                    </div>
                </div>
            </div>
                <div class="col-lg-12">
                    <div class="pt-60 text-center pb-60">
                        <h3 class="pb-10">Our Team at Excel Security Solutions</h3>
                        <p>We take immense pride in our diverse and professional international team here at <span>Excel Security Solutions</span>.
                        Our team members hail from various corners of the world, including Switzerland, Portugal, Macedonia, Turkey, Mali, Poland, Italy, the United Kingdom, Nigeria/Malta, Thailand, Algeria, and beyond.
                            Despite our different backgrounds and experiences, we share a common love and appreciation for this beautiful region that we all call home.</p>
                        <p>Our team's expertise allows us to interact seamlessly with guests and workers from various nationalities who also reside in this little speck of the world.
                            We believe that this rich diversity enhances our ability to provide <span>exceptional security services</span> tailored to the unique needs of our clients.</p>
                            
                    </div>
           
                    <div class="team-btn text-center mt-50" v-if="visibleCount < members.length" @click="loadMore">
                        <a class="main-btn"> VIEW ALL MEMBERS <i class="fal fa-arrow-right"></i></a>
                    </div>
                </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6" v-for="(member,index) in members" :key="index">
                    <div class="appie-team-item mt-30 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
                        <div class="thumb">
                            <img v-if="member.img" :src="member.img" :alt="member.name">
                            <div class="hover-text">{{ member.text }}</div>
                            <ul>
                                <li v-for="(social,index) in member.socials" :key="index"><a :href="social.url"><i :class="social.icon"></i></a></li>
                            </ul>
                        </div>
                        <div class="content text-center">
                            <h5 class="title">{{member.name}}</h5>
                            <span>{{member.position}}</span>
                        </div>
                    </div>
                </div>
           
            </div>
        </div>
    </section>
</template>
-->
<script>
export default {
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
.row.justify-content-center {
  display: flex;
  justify-content: center; /* This ensures that all items are centered */
}

.team-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Ensures items are centered especially the last row */
}

.thumb {
  position: relative;
  overflow: hidden;
}

.hover-text {
  position: absolute;
  bottom: 80px;
  left: 0;
  width: 100%;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  color: #fff;
  background-color: rgba(255, 255, 255, 0);
  padding: 5px 10px;
  font-family: "Merriweather", serif;
  font-weight: bold;
}

.thumb:hover .hover-text {
  visibility: visible;
  opacity: 1;
}

.text-center {
  margin: 0 auto;
}

.text-center p {
  font-size: 18px;
  line-height: 1.8;
  padding-top: 40px;
  margin: 0 auto;
  text-align: center;
}

.text-center p span {
  color: #ed1f27;
  font-weight: 600;
}

.divider {
  height: 2px;
  background-color: #ed1f27;
  margin: 20px auto;
  width: 40%;
}
</style>





