<template>
  
      <!--====== APPIE PROJECT PART START ======-->
    
    <section class="appie-project-area pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-project-box wow animated slideInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="appie-project-content">
                                    <h3 class="title">{{title}}</h3>
                                    <p>{{description}}</p>
                                    <form action="#">
                                        <div class="input-box mt-30">
                                            <input type="text" placeholder="Your email">
                                            <button>Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="appie-project-thumb">
                            <img src="@/assets/images/project-thumb.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!--====== APPIE PROJECT PART ENDS ======-->
</template>

<script>
export default {
    props:{
        title:{
            type:String,
        },
        description:{
            type:String,
        }
    }

}
</script>

<style>

</style>