<template>
      <!--====== APPIE BLOG 3 PART START ======-->
    
    <section class="appie-blog-3-area pt-90 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-section-title text-center">
                        <h3 class="appie-title">Latest blog posts</h3>
                        <p>The app provides design and digital marketing.</p>
                    </div>                    
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6" v-for="(blog,index) in blogs" :key="index">
                    <div class="appie-blog-item-3 mt-30" >
                        <div class="thumb">
                            <img :src="blog.img" alt="">
                        </div>
                        <div class="content">
                            <h5 class="title"><router-link to="/news">{{blog.title}}</router-link></h5>
                            <div class="meta-item">
                                <ul>
                                    <li><i class="fal fa-clock"></i> {{blog.date}}</li>
                                    <li><i class="fal fa-comments"></i> {{blog.comment_date}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="blog-btn text-center mt-60">
                        <router-link class="main-btn" to="/news">View All Posts <i class="fal fa-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!--====== APPIE BLOG 3 PART ENDS ======-->
</template>

<script>
export default {
    props: {
        blogs:{
            type: Array,
            default:()=>{
                return []
            }
        }
    }

}
</script>

<style>

</style>