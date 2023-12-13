import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeOne from '../views/HomeOne.vue'
import HomeDark from '../views/HomeDark.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeOne',
    component: HomeOne
  },
  {
    path: '/home-dark',
    name: 'HomeDark',
    component: HomeDark
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // stop stop cache
  scrollBehavior() {
      document.getElementById('app').scrollIntoView();
  }
})

export default router
