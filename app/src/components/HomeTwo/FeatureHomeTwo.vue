<template>
      <!--====== APPIE FEATURES 2 PART START ======-->
    
    <section class="appie-features-area-2 pt-90 pb-100" id="features">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="appie-section-title appie-section-title-2 text-center">
                        <h3 class="appie-title">{{title}}<br> {{more_title}}</h3>
                        <p>{{description}}</p>
                    </div>
                </div>
            </div>
            <div class="row mt-30 align-items-center">
                <div class="col-lg-6">
                    <div class="appie-features-boxes">
                        <div class="appie-features-box-item">
                            <h4 class="title">Well Integrated</h4>
                            <p>The bee's knees chancer car boot absolutely.</p>
                        </div>
                        <div class="appie-features-box-item item-2">
                            <h4 class="title">Clean and modern Design</h4>
                            <p>The bee's knees chancer car boot absolutely.</p>
                        </div>
                        <div class="appie-features-box-item item-3">
                            <h4 class="title">Light and dark mode</h4>
                            <p>The bee's knees chancer car boot absolutely.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="appie-features-thumb wow animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="200ms">
                        <img src="@/assets/images/features-thumb-2.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="features-shape-1">
            <img src="@/assets/images/shape/shape-15.png" alt="">
        </div>
        <div class="features-shape-2">
            <img src="@/assets/images/shape/shape-14.png" alt="">
        </div>
        <div class="features-shape-3">
            <img src="@/assets/images/shape/shape-13.png" alt="">
        </div>
    </section>
    
    <!--====== APPIE FEATURES 2 PART ENDS ======-->
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
        },
    }

}
</script>

<style>

</style>