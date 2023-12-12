<template>
      <!--====== APPIE DOWNLOAD PART START ======-->
    
    <section class="appie-download-area pt-150 pb-160 mb-90">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="appie-download-content">
                        <span>Download Our App</span>
                        <h3 class="title">{{ title}} <br> {{more_title}}</h3>
                        <p>{{description}}</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <i class="fab fa-apple"></i>
                                    <span>Download for <span>iOS</span></span>
                                </a>
                            </li>
                            <li>
                                <a class="item-2" href="#">
                                    <i class="fab fa-google-play"></i>
                                    <span>Download for <span>Android</span></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="download-shape-1">
            <img src="@/assets/images/shape/shape-15.png" alt="">
        </div>
        <div class="download-shape-2">
            <img src="@/assets/images/shape/shape-14.png" alt="">
        </div>
        <div class="download-shape-3">
            <img src="@/assets/images/shape/shape-13.png" alt="">
        </div>
    </section>
    
    <!--====== APPIE DOWNLOAD PART ENDS ======-->
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