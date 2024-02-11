<template>
    <!--====== APPIE SHOWCASE PART START ======-->
    
    <section class="allies">
        <div class="container">
            <div class="row">
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
                        <h3 class="appie-title">Strategic Allies</h3>
                        <p>Strengthening community safety through collaborative partnerships.</p>
                    </div>
                </div>
            </div>
            <div class="row appie-showcase-slider">
                <VueSlickCarousel v-bind="settings" ref="carousel">
                    <template v-for="(image, index) in images">
                        <div :key="index" class="col-lg-3">
                            <div class="appie-showcase-item mt-30">
                                <a class="appie-image-popup" @click.prevent="showMultiple(index)">
                                    <img class="logo-img" :src="image" alt="">
                                </a>
                            </div>
                        </div>
                    </template>
                </VueSlickCarousel>
            </div>
        </div>
    </section>
    
    <!--====== APPIE SHOWCASE PART ENDS ======-->
</template>

<script>  
import VueEasyLightbox from 'vue-easy-lightbox'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: { VueSlickCarousel, VueEasyLightbox },
    data() {
        return {
            imgs: '',
            visible: false,
            index: 0,
            images: [
                require('@/assets/images/partner-4.png'),
                require('@/assets/images/partner-4.png'),
                require('@/assets/images/allies-1.png'),
                require('@/assets/images/allies-2.png'),
                require('@/assets/images/allies-3.png'), 
                require('@/assets/images/partner-4.png'),
                require('@/assets/images/partner-4.png'),
            ],
            settings: {
                autoplay: false,
                arrows: false,
                dots: false,
                slidesToShow: 7,
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
        showMultiple(i) {
            this.imgs = this.images
            this.index = i
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

<style scoped>
/* Add your custom styles for the logo gallery here */
.appie-showcase-item {
    text-align: center;
}

.logo-img {
    max-width: 100%;
    height: auto;
    transition: transform 0.3s ease;
}

.logo-img:hover {
    transform: scale(1.1);
}
</style>
