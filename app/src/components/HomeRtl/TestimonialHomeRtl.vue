 <template>
  <section class="appie-testimonial-area pt-100 pb-160" id="testimonial">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="appie-testimonial-slider" style="position: relative">
            <span
              class="prev slick-arrow"
              style="display: block"
              @click.prevent="showNext"
              ><i class="fal fa-arrow-left"></i
            ></span>
            <VueSlickCarousel v-bind="settings" ref="carousel">
              <template v-for="(sliderContent, index) in sliderContents">
                <div :key="index" class="appie-testimonial-item text-center">
                  <div class="author-info">
                    <img
                      v-if="sliderContent.avatar"
                      :src="sliderContent.avatar"
                      alt=""
                    />
                    <h5 class="title">{{ sliderContent.title }}</h5>
                    <span>{{ sliderContent.date }}</span>
                  </div>
                  <div class="text">
                    <p>{{ sliderContent.description }}</p>
                    <ul>
                      <li
                        v-for="(rating, index) in sliderContent.ratings"
                        :key="index"
                      >
                        <i class="fas fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </template>
            </VueSlickCarousel>
            <span
              @click.prevent="showPrev"
              class="next slick-arrow"
              style="display: block"
              ><i class="fal fa-arrow-right"></i
            ></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  props: {
    sliderContents: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      settings: {
        autoplay: true,
        arrows: false,
        dots: true,
      },
    };
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
  },
};
</script>

<style>
.slick-dots li button:before {
  content: "";
}
.appie-testimonial-slider .slick-arrow.prev {
  left: 20%;
}
.appie-testimonial-slider .slick-arrow {
  top: 50%;
}
</style>