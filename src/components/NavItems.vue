<template>
    <ul class="navigation-menu">
        <li v-for="(item, index) in menuItems" :key="index">
            <router-link
                v-if="item.path && !item.path.startsWith('#')"
                :to="item.path"
                class="nav-link"
                exact-active-class="active-link"  
            >
                {{ item.name }}
            </router-link>
            <a v-else :href="item.path ? item.path : '#'" class="nav-link">
                {{ item.name }}
            </a>
            <ul v-if="item.childrens && nasted" class="sub-menu">
                <li v-for="(subItem, index) in item.childrens" :key="index">
                    <router-link
                        :to="subItem.path ? subItem.path : '#'"
                        class="nav-link"
                        exact-active-class="active-link"  
                    >
                        {{ subItem.name }}
                    </router-link>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        menuItems: {
            type: Array,
            required: true
        },
        nasted: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>
.navigation-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
}

.nav-link {
    text-transform: capitalize;
    padding: 0px 0px; 
    display: block;
    text-decoration: none;
    color: inherit;
    font-size: 13px;
    transition: all 0.3s ease;
}

.sub-menu {
    list-style: none;
    padding: 0;
}

.nav-link.active-link {
    font-weight: bold !important;
    border-bottom: 2px solid red !important;
}

@media (min-width: 992px) and (max-width: 1200px) {
    .nav-link {
        font-size: 12px; /* Smaller font size between 992px and 1200px screen width */
        padding: 0px 2px; /* Smaller padding */
    }
}
</style>




<!--


<template>
    <ul>
        <li v-for="(item, index) in menuItems" :key="index">
            <router-link style="text-transform: capitalize;" v-if="item.path && !item.path.startsWith('#')" :to="item.path">
                {{ item.name }}
            </router-link>

            <a v-else :href="item.path ? item.path : '#'" style="text-transform: capitalize;">
                {{ item.name }}
                <i v-if="nasted" class="fal fa-angle-down"></i> 
           </a>


            <ul v-if="item.childrens && nasted" class="sub-menu">
                <li v-for="(subItem, index) in item.childrens" :key="index">
                    <router-link style="text-transform: capitalize;" :to="subItem.path ? subItem.path : '#'">{{ subItem.name
                    }}</router-link>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        menuItems: {
            type: Array,
            required: true,
        },
        nasted: {
            type: Boolean,
            default: true
        }
    }

}
</script>

<style></style>
-->