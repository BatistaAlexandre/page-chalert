<template>
  <!--====== PART START ======-->
  <header class="appie-header-area appie-sticky">
    <div class="container">
      <div class="header-nav-box">
        <div class="row align-items-center">
          <div class="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
            <div class="appie-logo-box">
              <a href="#">
                <img v-if="dark" src="@/assets/images/logo-7.png" alt="appie" />
                <img v-else src="@/assets/images/logo-7.png" alt="appie" />
              </a>
            </div>
          </div>
          <div class="col-lg-8 col-md-1 col-sm-1 order-3 order-sm-2">
            <div class="appie-header-main-menu">
              <nav-items :menuItems="menuItems" :nasted="nasted" />
            </div>
          </div>
          <div class="col-lg-2 col-md-7 col-sm-6 col-6 order-2 order-sm-3">
            <div class="appie-btn-box" style="text-align: right">
              <template v-if="this.$store.state.enableRtl">
                <span
                  v-if="this.$store.state.rtl"
                  class="align-content-center mr-10"
                  @click="changeLang()"
                >
                  LTR
                </span>
                <span
                  v-else
                  class="align-content-center mr-10"
                  @click="changeLang()"
                >
                  RTL
                </span>
              </template>
              <div class="small">
  <a class="main-btn ml-0" @click.prevent="toggleModal" href="#">BOOK FREE CONSULTATION</a>
  <p>Service sponsored by AXA </p><p>and Excel Security Solutions</p>
</div>
<div class="toggle-btn ml-30 canvas_open d-lg-none d-block">
  <i class="fa fa-bars" @click="showSidebar"></i>
</div>


 <!-- Visit Modal-->
 <b-modal
            v-model="visitModalVisible"
            id="partner-modal"
            content-class="custom-modal-content"
            centered
            hide-footer
            hide-header
            @shown="addBodyClass"
            @hidden="removeBodyClass"
        >

        <div class="modal-header">
          <h4>BOOK FREE CONSULTATION</h4>
          <p>I would like to take advantage of the free non obligation offer for a security consultant to visit my chalet/apartment.</p>
          <span>Service sponsored by AXA and Excel Security Solutions</span>
          <span>We will contact you within 24 hours</span>
        </div>
    <form @submit.prevent="submitForm">
        <div class="checkbox-group">
          <p>I am interested in: </p>
          <label v-for="(option, index) in options" :key="index">
            <input type="checkbox" v-model="form.services" :value="option" class="checkbox-box"/>
            {{ option }}
          </label>
        </div>
  
        <div class="input-box">
          <input type="text" v-model="form.title" placeholder="Title" class="form-control mt-2"/>
          <input type="text" v-model="form.name" placeholder="Name" class="form-control mt-2"/>
          <input type="text" v-model="form.surname" placeholder="Surname" class="form-control mt-2"/>
          <input type="tel" v-model="form.phone" placeholder="Phone" class="form-control mt-2"/>
          <input type="email" v-model="form.email" placeholder="Email" class="form-control mt-2"/>
          <input type="text" v-model="form.address" placeholder="Chalet Address" class="form-control mt-2"/>
          <textarea v-model="form.message" placeholder="Message" class="form-control mt-2"></textarea>
        </div>

        <div class="checkbox-terms">
          <input type="checkbox" name="terms" v-model="acceptTerms">
          <label>I read and accept <a href="">terms & conditions</a></label>
        </div>
        <div class="button-container">
          <a type="submit" class="main-btn">BOOK NOW</a>
        </div>
          </form>
        </b-modal>

            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!--====== PART ENDS ======-->
</template>

<script>
import NavItems from "../NavItems.vue";
import { BModal } from 'bootstrap-vue';
export default {
  data() {
    return {
      isModalVisible: false,
      visitModalVisible: false,//For partner modal
      form: {
          services: [],
          title: '',
          name: '',
          surname: '',
          phone: '',
          email: '',
          address: '',
          message: ''
        },
        options: [
          "Advice how to make myself, my family & my chalet safer",
          "Security alarm system",
          "Fire prevention alarm system",
          "Access control",
          "Panic Alarm",
          "Fire extinguishers",
          "Security lightening",
          "Safe or vault for my Chalet",
          "Other service"
        ]
    };
  },
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
    nasted: {
      type: Boolean,
      default: true,
    },
    dark: {
      type: Boolean,
    },
    enableDark: {
      type: Boolean,
    },
  },
  components: { NavItems, BModal },
  mounted() {
    document.addEventListener("scroll", this.stickMenu);
  },
  methods: {
    changeLang() {
      this.$store.dispatch("rtlHandler");
    },
    toggoleMode(e) {
      this.$emit("changMode", e);
    },
    showSidebar(e) {
      this.$emit("toggleSidebar", e);
    },
    stickMenu() {
      const result = document.querySelector(".appie-sticky");
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        result.classList.add("sticky");
      } else {
        result.classList.remove("sticky");
      }
    },
    toggleModal() {
      this.visitModalVisible = !this.visitModalVisible;
    },
  },
};
</script>

<style>
.small {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.small p{
  font-size: 11px; 
  margin: 0 auto;
}

.main-btn {
  font-weight: bold;
  padding: 20px 0;
}

.checkbox-group {
  display: flex;
  justify-content: center; 
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
}

.checkbox-group label {
    font-size: 14px;
    margin-left: 30px;
}

.checkbox-group p {
  margin-bottom: 15px;
}

.checkbox-box {
  margin-right: 10px;
}

.checkbox-terms {
  display: flex; /* Enables flexbox layout */
  align-items: center; /* Vertically centers the checkbox and label */
  margin-bottom: 15px;
}

.checkbox-terms input[type="checkbox"] {
  margin-right: 15px; /* Adds 15px margin to the right of the checkbox */
}

.checkbox-terms a {
 color: #ed1f27;
 font-weight: bold;
}

.modal-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.modal-header p{
 text-align: center;
 padding: 10px;
 font-size: 14px;
}

.modal-header span {
  font-size: 12px;
  color: #ed1f27;
  font-weight: 800;
}

.input-box {
    padding: 10px 30px;
}

.button-container {
  display: flex;
  justify-content: center;
}
</style>