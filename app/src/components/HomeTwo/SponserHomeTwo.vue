<template>
      <!--====== APPIE SPONSER PART START ======-->
    
    <section class="appie-sponser-area pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-section-title text-center">
                        <h3 class="appie-title">{{title}} <br> {{more_title}}</h3>
                        <p>{{description}}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-sponser-box d-flex justify-content-center">
                        <div class="sponser-item">
                            <img src="@/assets/images/sponser-1.png" alt="">
                        </div>
                        <div class="sponser-item">
                            <img src="@/assets/images/sponser-2.png" alt="">
                        </div>
                        <div class="sponser-item">
                            <img src="@/assets/images/sponser-3.png" alt="">
                        </div>
                        <div class="sponser-item">
                            <img src="@/assets/images/sponser-4.png" alt="">
                        </div>
                        <div class="sponser-item">
                            <img src="@/assets/images/sponser-5.png" alt="">
                        </div>
                        <div class="sponser-item">
                            <img src="@/assets/images/sponser-6.png" alt="">
                        </div>
                    </div>
                    <div class="appie-sponser-box item-2 d-flex justify-content-center">
                        <div class="sponser-item">
                            <img src="@/assets/images/sponser-7.png" alt="">
                        </div>
                        <div class="sponser-item">
                            <img src="@/assets/images/sponser-8.png" alt="">
                        </div>
                        <div class="sponser-item">
                            <img src="@/assets/images/sponser-9.png" alt="">
                        </div>
                        <div class="sponser-item">
                            <img src="@/assets/images/sponser-10.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sponser-shape">
            <img src="@/assets/images/sponser-shape.png" alt="">
        </div>
    </section>
    
    <!--====== APPIE SPONSER PART ENDS ======-->
</template>

<script>
export default {
    props:{
        title:{
            type:String,
        },
        more_title:{
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