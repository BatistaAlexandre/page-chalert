<template>
  <!--====== APPIE TEAM PART START ======-->
    
    <section class="appie-team-area pt-90 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-section-title text-center">
                        <h3 class="appie-title">{{title}}</h3>
                        <p>{{description}}</p>
                    </div>
                </div>
            </div>
            <div class="row" v-if="members && members.length > 0">
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6" v-for="(member,index) in members" :key="index">
                    <div class="appie-team-item mt-30 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
                        <div class="thumb">
                            <img v-if="member.img" :src="member.img" :alt="member.name">
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
                <div class="col-lg-12">
                    <div class="pt-30 text-center">
                        <h5 class="pb-10">Our Team at Excel Security Solutions</h5>
                        <p>We take immense pride in our diverse and professional international team here at Excel Security Solutions. Our team members hail from various corners of the world, including Switzerland, Portugal, Macedonia, Turkey, Mali, Poland, Italy, the United Kingdom, Nigeria/Malta, Thailand, Algeria, and beyond.
                            Despite our different backgrounds and experiences, we share a common love and appreciation for this beautiful region that we all call home. Our team's expertise allows us to interact seamlessly with guests and workers from various nationalities who also reside in this little speck of the world.
                            We believe that this rich diversity enhances our ability to provide exceptional security services tailored to the unique needs of our clients</p>
                    </div>
                    <div class="team-btn text-center mt-50">
                        <a class="main-btn" href="#"> VIEW ALL MEMBERS <i class="fal fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!--====== APPIE TEAM PART ENDS ======-->
</template>

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
    }

}
</script>

<style>

</style>