<template>
    <section>

    <sidebar-home-one :sidebar="sidebar" @toggleSidebar="toggleSidebar" :menuItems="navs" />
    <header-home-one @toggleSidebar="toggleSidebar" :menuItems="navs"/>
    <div class="header">
      <h3>Our Team at Excel Security Solutions</h3>
    </div>
    <div class="bio-list-container">
        <bio-card 
            v-for="person in members"
            :key="person.id"
            :name="person.name"
            :position="person.position"
            :bio="person.bio"
            :image="person.img"
            :socials="person.socials"
        />
    </div>

    <footer-home-one />

    <div class="back-to-top">
      <a href="#"><i class="fal fa-arrow-up"></i></a>
    </div>
</section>
</template>

<script>
import BioCard from './BioCard.vue';
import HeaderHomeOne from "../HomeOne/HeaderHomeOne.vue";
import SidebarHomeOne from "../HomeOne/SidebarHomeOne.vue";
import FooterHomeOne from "../HomeOne/FooterHomeOne.vue";
import NavItems from '../NavItems.vue';
import { members } from './members';  
export default {
    components: {
        BioCard,
        HeaderHomeOne,
        SidebarHomeOne,
        FooterHomeOne,
        NavItems
    },
    data() {
        return {
            members,
            navs: [
        {
            name: "Home",
            path: "/#header",
          },
          {
            name: "Our Goal",
            path: "/#How It Works",
          },
          {
            name: "Plans",
            path: "/#Plans",
          },
          {
            name: "Values",
            path: "/#Our Values",
          },
          {
            name: "Services",
            path: "/#Services",
          },
          {
            name: "Partners",
            path: "/#Team",
          },
          {
            name: "FAQ",
            path: "/#FAQ",
          },
          {
            name: "Crime Prevention",
            path: "#",
          },
        ]
        }
    }
}
</script>

<style scoped>
.header {
  padding-top: 140px;
  padding-bottom: 30px;
}

.header h3 {
  margin: 0 auto;
  text-align: center;
}

.bio-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* This will handle spacing between cards */
    max-width: 65%;
    margin: auto;
}

@media (max-width: 992px) {
    .bio-list-container {
        flex-direction: column;
        align-items: center; /* This centers the cards on small screens */
        max-width: 90%;
    }
}
@media (min-width: 993px) and (max-width: 1200px) {
    .bio-list-container {
        flex-direction: column;
        align-items: center; /* Centers the cards on medium screens */
        max-width: 95%; /* Specific width adjustment for medium screens */
    }
}
</style>
