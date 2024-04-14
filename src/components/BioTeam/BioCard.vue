<template>
    <div class="bio-card">
        <img :src="image" :alt="name" class="bio-img">
        <div class="bio-text">
            <h3>{{ name }}</h3>
            <h5>{{ position }}</h5>
            <!-- Social Media Icons List -->
            <ul class="social-icons">
                <li v-for="(social, index) in socials" :key="index">
                    <a :href="social.url" target="_blank">
                        <i :class="social.icon"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="divider"></div>
        <p class="bio-desc">{{ bio }}</p>
        
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        position: String,
        bio: String,
        image: String,
        socials: Array // Make sure to receive the socials array as a prop
    }
}
</script>

<style scoped>
.bio-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    width: 48%;
    margin-right: 2%;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.bio-img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 10px;
}

.bio-text h3, .bio-text h5 {
    margin: 5px 0;
}

.bio-desc {
    padding:20px 0px;
}

.social-icons {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
}

.social-icons li {
    margin: 0 5px;
}

.social-icons a {
    color: inherit;
    text-decoration: none;
    background: white;  /* Circle background */
    border-radius: 50%;  /* Makes the background rounded */
    width: 40px;        /* Set the width of the circle */
    height: 40px;       /* Set the height of the circle */
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Specific style for LinkedIn icon */
.social-icons a i.fa-linkedin {
    color: red;  /* Red color for the LinkedIn icon */
    transition: transform 0.4s ease;  /* Smooth transform on hover */
}

/* Zoom effect on hover */
.social-icons a i.fa-linkedin:hover {
    transform: scale(1.2);  /* Makes the icon larger on hover */
}

.divider {
    border-bottom: solid 1px red;
    width: 40%;
    padding-top: 10px;
}

@media (max-width: 992px) {
    .bio-card {
        width: 80%;
        margin: 1%;
    }
}
@media (min-width: 993px) and (max-width: 1200px) {
    .bio-card {
        width: 45%;
        margin: 1%;
    }
}
</style>
