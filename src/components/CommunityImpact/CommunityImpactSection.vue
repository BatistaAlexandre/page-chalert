<template>
    <section class="community">
            <h2>Our Impact On Community</h2>
        
        <div class="stars-container">
            <i class="fas fa-caret-up"></i>
            <i class="fas fa-caret-up"></i>
            <i class="fas fa-caret-up"></i>
            <i class="fas fa-caret-up"></i>
            <i class="fas fa-caret-up"></i>
        </div>
        <div class="claim">
            <h2>Chalert’s impact extends beyond  
              <span class="highlight">crime prevention</span> 
              to enhance the overall <span class="highlight">well-being</span> 
              and quality of life for residents, creating a more vibrant and 
              <span class="highlight">thriving community</span>
            </h2>
            <div class="divider"></div>
        </div>
        <div class="slider-wrapper">
            <community-impact-slider/>
        </div>
    </section>
</template>

<script>
import CommunityImpactSlider from "../CommunityImpact/CommunityImpactSlider.vue";



export default {
    components:{
        CommunityImpactSlider
    }
}
</script>

<style scoped>
.community {
    text-align: center;
    padding: 20px 20px;
    background-color: #fff;
    
}

.slider-wrapper {
    padding:30px
}

.claim{
  width: 70%;
 margin: 0 auto;
}

claim h2 {
  width: 60%;
}

.highlight {
  color: #ed1f27;
}

.stars-container {
    display: flex;
    justify-content: center;
    padding: 20px 0; /* Adjust padding as needed */
}

/* Style for the star icons */
.stars-container .fa-caret-up{
    margin: 0 5px; /* Adjust spacing between stars */
    color: #ed1f27; /* Optional: change color of stars */
    font-size: 24px; /* Adjust size of stars */
    animation: bounce 3s forwards; /* Run the bounce animation */
}


.divider {
    height: 2px;
    background-color: #ed1f27; /* Match the highlight color or choose your own */
    margin: 20px auto; /* Adjust based on layout */
    width: 0; /* Start width at 0 to grow from center */
    animation: grow 4s infinite; /* Only run once to grow the divider */
}

/* Keyframes for bounce effect */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}

/* Keyframes for horizontal grow effect */
@keyframes grow {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}
</style>