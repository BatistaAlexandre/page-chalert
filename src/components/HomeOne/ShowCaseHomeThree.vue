<template>
    <!--====== APPIE SHOWCASE PART START ======-->
    
    <section class="appie-showcase-area ">
        <div class="container">
            <div class="row">
                <!-- <button @click="toggler = !toggler">
            Toggle Lightbox
            </button> -->
                <!-- <FsLightbox
                    :toggler="toggler"
                    :sources="images"
                /> -->
                 <!-- all props & events -->
                <vue-easy-lightbox
                scrollDisabled
                escDisabled
                moveDisabled
                :visible="visible"
                :imgs="imgs"
                :index="index"
                @hide="handleHide"
                ></vue-easy-lightbox>
                <div class="col-lg-12">
                    <div class="appie-section-title text-center">
                        <h3 class="appie-title">Our Business Partners</h3>
                        <p>Meet our thriving business partners actively shaping the security landscape in collaboration with the Chalert program.</p>
                    </div>
                </div>
            </div>
            <div class="row appie-showcase-slider">
                <VueSlickCarousel v-bind="settings" ref="carousel">
                    <template v-for="(image,index) in images">
                        <div :key="index" class="col-lg-3">
                        <div class="appie-showcase-item mt-30">
                            <a class="appie-image-popup"  @click.prevent="showMultiple(index)" ><img :src="image" alt=""></a>
                        </div>
                    </div>
                    </template>
                </VueSlickCarousel>
            </div>
        </div>
        <!-- <div class="showcase-shape-1">
            <img src="@/assets/images/shape/shape-14.png" alt="">
        </div>
        <div class="showcase-shape-2">
            <img src="@/assets/images/shape/shape-13.png" alt="">
        </div>
        <div class="showcase-shape-3">
            <img src="@/assets/images/shape/shape-12.png" alt="">
        </div>
        <div class="showcase-shape-4">
            <img src="@/assets/images/shape/shape-15.png" alt="">
        </div> -->
    </section>
    
    <!--====== APPIE SHOWCASE PART ENDS ======-->
</template>

<script>  
import VueEasyLightbox from 'vue-easy-lightbox'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components:{ VueSlickCarousel,VueEasyLightbox},
    data(){
        return {
            imgs: '', 
            visible: false,
            index: 0 ,
            images: [
                require('@/assets/images/partner-1.png'),
                require('@/assets/images/partner-2.png'),
            ],
            // showImages:[
            //     require('@/assets/images/showcase-1.png'),
            //      require('@/assets/images/showcase-2.png'),
            //      require('@/assets/images/showcase-3.png'),
            //      require('@/assets/images/showcase-4.png'),
            //      require('@/assets/images/showcase-5.png'),
            // ],
            settings: {
                autoplay: false,
                arrows:false,
                dots:false,
                slidesToShow:7,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 5,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 3,
                        }
                    }
                ]
            },
        }
    },
    methods: {
        // activeImage(index){
        //     console.log(index);
        //     [this.images[0],this.images[index]] = [this.images[index],this.images[0]];
        //     this.toggler = !this.toggler
        // },
        showMultiple(i) {
            this.imgs = this.images
        // this.imgs = [
        //   { title: 'test img', src: 'http://via.placeholder.com/350x150' },
        //   'http://via.placeholder.com/350x150'
        // ]
        // allow mixing

        this.index = i // index of imgList
        this.show()
      },
        show() {
        this.visible = true
      },
      handleHide() {
        this.visible = false
      }
    }

}
</script>

<style>

.slick-slide{
    padding:0 16px
}

</style>