<template>
  <!--====== OFFCANVAS MENU PART START ======-->
  <div>
    <div
      class="off_canvars_overlay"
      :class="[sidebar ? 'active' : '']"
      @click.prevent="hideSidebar"
    ></div>
    <div class="offcanvas_menu">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div
              class="offcanvas_menu_wrapper"
              :class="[sidebar ? 'active' : '']"
              style="overflow-y: scroll; overflow-x: hidden"
            >
              <div class="canvas_close">
                <a href="javascript:void(0)" @click="hideSidebar"
                  ><i class="fa fa-times"></i
                ></a>
              </div>
              <div class="offcanvas-brand text-center mb-40">
                <img src="@/assets/images/logo.png" alt="appie" />
              </div>
              <div id="menu" :style="heightPro" class="text-left">
                <ul class="offcanvas_main_menu">
                  <li
                    v-for="(item, index) in menuItems"
                    :key="index"
                    class="menu-item-has-children active"
                    :class="[menuOpen === item.name ? 'menu-open' : '']"
                  >
                    <span
                      v-if="
                        item.childrens && item.childrens.length > 0 && nested
                      "
                      class="menu-expand"
                      @click="toggleSubMenu(item.name)"
                    >
                      <i class="fa fa-angle-down"></i>
                    </span>
                    <router-link
                      v-if="item.path && !item.path.startsWith('#')"
                      :to="item.path"
                      style="text-transform: capitalize;"
                      @click="hideSidebar" 
                    >
                      {{ item.name }}
                    </router-link>
                    <a v-else :href="item.path ? item.path : '#'" style="text-transform: capitalize;" @click="hideSidebar" >
                      {{ item.name }}
                    </a>
                    <ul
                      v-if="item.childrens && nested"
                      :id="item.name"
                      class="sidebar-sub-menu"
                      :class="[
                        menuOpen === item.name ? 'expend_menu_item' : '',
                      ]"
                    >
                      <li v-for="(subItem, i) in item.childrens" :key="i">
                        <router-link :to="subItem.path ? subItem.path : '#'">{{
                          subItem.name
                        }}</router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
               <!--<p>Book Free Consultation</p> -->
              </div>
              <div class="offcanvas-social">
                <ul class="text-center">
                  <li>
                    <a href="https://www.facebook.com/excelgst"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/excel-security-solutions/"><i class="fab fa-linkedin-in"></i></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/excelsecuritysolutions/"><i class="fab fa-instagram"></i></a>
                  </li>
                  <!-- <li>
                    <a href="#"><i class="fab fa-dribbble"></i></a>
                  </li> -->
                </ul>
              </div>
              <div class="footer-widget-info">
                <ul>
                  <li>
                <a href="mailto:office@chalert.com">
                  <i class="fal fa-envelope"></i> office@chalert.com
                </a>
              </li>
              <li>
                <a href="tel:+41764343113">
                  <i class="fal fa-phone"></i> +41 76 434 31 13
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/Excel+Security+Solutions+AG/@46.4850781,7.2626024,15z/data=!4m6!3m5!1s0x478ef1af1633e61b:0x1c2a56d16165b7b5!8m2!3d46.4850781!4d7.2626024!16s%2Fg%2F11g6qk75pm?entry=ttu"
                  target="_blank">
                  <i class="fal fa-map-marker-alt"></i> Excel Security Solutions AG Rübeldorfstrasse 23 3792 Saanen
                  Switzerland
                </a>
              </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====== OFFCANVAS MENU PART ENDS ======-->
</template>

<script>
export default {
  props: {
    sidebar: {
      type: Boolean,
      required: true,
    },
    menuItems: {
      type: Array,
      required: true,
    },
    nested: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      menuOpen: null,
      subMenuHeight: null,
    };
  },
  computed: {
    heightPro() {
      return {
        "--height": this.subMenuHeight,
      };
    },
  },
  methods: {
    toggleSubMenu(menuName) {
      this.menuOpen = this.menuOpen === menuName ? null : menuName;
    },
    hideSidebar() {
      this.$emit("toggleSidebar");
    },
  },
};
</script>

<style>
.sidebar-sub-menu {
  padding-left: 20px;
  overflow: hidden;
  height: 0px;
}
.sidebar-sub-menu {
  transition: all linear 0.65s;
}
.sidebar-sub-menu.expend_menu_item {
  transition: all linear 0.65s;
}
.expend_menu_item.sidebar-sub-menu {
  height: var(--height);
}
</style>
