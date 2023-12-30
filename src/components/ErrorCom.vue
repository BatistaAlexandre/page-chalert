<template>
  <div>
    <!--====== PRELOADER PART START ======-->

    <!-- <div class="loader-wrap">
        <div class="preloader"><div class="preloader-close">Preloader Close</div></div>
        <div class="layer layer-one"><span class="overlay"></span></div>
        <div class="layer layer-two"><span class="overlay"></span></div>        
        <div class="layer layer-three"><span class="overlay"></span></div>        
    </div> -->

    <!--====== PRELOADER PART ENDS ======-->

    <!--====== OFFCANVAS MENU PART START ======-->

    <sidebar-home-one :sidebar="sidebar" @toggleSidebar="toggleSidebar" />

    <!--====== OFFCANVAS MENU PART ENDS ======-->
   
    <!--====== PART START ======-->
    <header-home-one @toggleSidebar="toggleSidebar" :menuItems="navs"/>
    
    <!--====== PART ENDS ======-->

    <!--====== PART ENDS ======-->

    <div class="appie-error-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="appie-error-content text-center">
                        <img src="@/assets/images/error.png" alt="">
                        <span>Sorry!</span>
                        <h3 class="title">The page can’t be found.</h3>
                        <p>The page you're looking for isn't available. Try with another page or use the go home button below</p>
                        <router-link to="/">Back to Home <i class="fal fa-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    <!--====== PART ENDS ======-->

    <!--====== APPIE FOOTER PART START ======-->
    
    <footer-home-one class="mt-160"/>
    
    <!--====== APPIE FOOTER PART ENDS ======-->


    <!--====== APPIE BACK TO TOP PART ENDS ======-->
    <div class="back-to-top">
        <a href="#"><i class="fal fa-arrow-up"></i></a>
    </div>
    <!--====== APPIE BACK TO TOP PART ENDS ======-->


  </div>
</template>

<script>
import FooterHomeOne from './HomeOne/FooterHomeOne.vue'
import HeaderHomeOne from './HomeOne/HeaderHomeOne.vue'
import SidebarHomeOne from './HomeOne/SidebarHomeOne.vue'
export default {
	components: { HeaderHomeOne, SidebarHomeOne, FooterHomeOne },
     data(){
        return{
            sidebar:false,
             navs:[
            {
                name:'home',
                childrens:[
                    {
                        name:'Home 1',
                        path:'/'
                    },
                    {
                        name:'Home 2',
                        path:'/home-two'
                    },
                    {
                        name:'Home 3',
                        path:'/home-three'
                    },
                    {
                        name:'Home 4',
                        path:'/home-four'
                    },
                    {
                        name:'Home 5',
                        path:'/home-five'
                    },
                    {
                        name:'Home 6',
                        path:'/home-six'
                    },
                    {
                        name:'Home 7',
                        path:'/home-seven'
                    },
                    {
                        name:'Home 8',
                        path:'/home-eight'
                    },
                ],
            },
            {
                name:'service',
                path:'/service-details'
            },
                {
                name:'pages',
                    childrens:[
                    {
                        name:'About us',
                        path:'/about-us'
                    },
                    {
                        name:'Error',
                        path:'/error'
                    }
                ],
            },
            {
                name:'news',
                    childrens:[
                    {
                        name:'News',
                        path:'/news'
                    },
                    {
                        name:'Single news',
                        path:'/single-news'
                    },
                ],
            },
            {
                name:'contact',
                    path:'/contact'
            }
            ]
        }
    },
     mounted() {
        document.addEventListener('scroll', this.topToBottom)
    },
    methods:{
        topToBottom(){
        const result = document.querySelector('.back-to-top')
           if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight ) {
                result.style.display = "block";
            } else {
                result.style.display = "none";
            }
        },
         toggleSidebar(){
           this.sidebar = !this.sidebar
        },  
    }

}
</script>

<style>


</style>