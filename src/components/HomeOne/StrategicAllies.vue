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
                                    <img class="logo-img" :src="image.image" alt="">
                                </a>
                            </div>
                        </div>
                    </template>
                </VueSlickCarousel>
            </div>
        </div>
 <!-- Description Modal -->
        <b-modal
            v-model="descriptionVisible"
            id="description-modal"
            content-class="custom-modal-content"
            centered
            hide-footer
            hide-header
            @shown="addBodyClass"
            @hidden="removeBodyClass"
        >
        <div class="modal-body">
                <div class="logo-container">
                    <img :src="selectedLogoImage" alt="Logo" class="logo-img-modal">
                </div>
                <div class="description-container">
                    <p>{{ selectedDescription }}</p>
                </div>
            </div>
            
        </b-modal>
    </section>
    
    <!--====== APPIE SHOWCASE PART ENDS ======-->
</template>

<script>  
import VueEasyLightbox from 'vue-easy-lightbox'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { BModal } from 'bootstrap-vue'

export default {
    components: { VueSlickCarousel, VueEasyLightbox, BModal },
    data() {
        return {
            imgs: '',
            visible: false,
            index: 0,
            descriptionVisible: false, // For description modal
            selectedDescription: '', // Selected logo description
            selectedLogoImage: '',
            images: [
                {image: require('@/assets/images/allies-1.png'), description: "This is a very good company"},
                {image: require('@/assets/images/allies-2.png'), description: "This is a very good company"},
                {image: require('@/assets/images/allies-3.png'), description: "Around two million customers trust in AXA’s expertise in personal, property, liability and life insurance as well as healthcare and occupational benefits insurance. With innovative products and services in areas such as mobility, healthcare, pensions and business together with simple, digital processes, AXA is a supportive partner for its customers. Using its “Know You Can” brand promise, it also encourages them to believe in themselves, even in challenging situations. "},
                {image: require('@/assets/images/allies-4.png'),description: "This is a very good company"},
                {image: require('@/assets/images/allies-5.png'),description: "This is a very good company"},
            ],
            settings: {
                autoplay: false,
                arrows: true,
                dots: false,
                slidesToShow: 5,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                        }
                    }
                ]
            },
        }
    },
    methods: {
        showMultiple(i) {
            
            this.selectedDescription = this.images[i].description; 
            this.selectedLogoImage = this.images[i].image; // Set the selected logo description
            this.descriptionVisible = true; // Show the description modal
        },
        show() {
            this.visible = true
        },
        handleHide() {
            this.visible = false
        },
        addBodyClass() {
        document.body.classList.add('modal-open-dark');
    },
    removeBodyClass() {
        document.body.classList.remove('modal-open-dark');
    },
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
    cursor: pointer;
}

.logo-img:hover {
    transform: scale(1.1);
}

/* Dark overlay when modal is open */
.modal-open-dark {
    position: relative;
    z-index: 1040; /* Ensure it's below the modal z-index */
}

.modal-open-dark::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
    z-index: -1;
}


/* Custom modal content styles */
.custom-modal-content {
    border-radius: 15px; /* Rounded corners */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Small shadow effect */
    padding: 2rem; /* Adequate padding */
    border: none;
    background-color: #fff
}

/* Hides the default close icon */
.custom-modal-content .modal-header .close {
    display: none;
}

/* Ensure the modal body (where your content is) is centered */
.custom-modal-content .modal-body {
    text-align: center; /* Center the text */
}



/* Style for the logo and description container */
.logo-container, .description-container {
    margin-bottom: 1rem; /* Spacing between logo and description */
}

/* Logo image styles */
.logo-container img {
    max-width: 100px; /* Adjust based on your logo size */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 1rem; /* Space between logo and text */
}

/* Description text styles */
.description-container {
    /* Additional styling for the description text if needed */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.logo-img-modal {
    max-width: 150px; /* Adjust based on your needs */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 1rem; /* Space between logo and text */
    display: block; /* Ensure it's a block element to center */
    margin-left: auto; /* Center the image */
    margin-right: auto;
}

.modal-backdrop.show {
    opacity: 0.85 !important; /* Make the body darker when modal is open */
}

.custom-modal-content, .modal-dialog {
    border: none !important; /* Remove border from the modal */
    background-color: transparent !important; /* Ensure no background color is causing a border-like effect */
}
</style>