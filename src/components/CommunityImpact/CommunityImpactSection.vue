<template>
    <section class="community">
            <h2>Our Impact On Community</h2>
        <div class="slider-wrapper">
            <community-impact-slider/>
        </div>
        <div class="claim">
            <p>Chalert's impact extends beyond crime prevention to enhance the overall 
                well-being and quality of life for residents, creating a more vibrant and thriving community</p>
        </div>
    </section>
</template>

<script>
import CommunityImpactSlider from "../CommunityImpact/CommunityImpactSlider.vue"
export default {
    components:{
        CommunityImpactSlider
    }
}
</script>

<style>
.community {
    text-align: center;
    padding: 50px 20px;
    background-color: #1f2128;
    
}

.community h2 {
    color: #eef1f6;
}

.slider-wrapper {
    padding:30px
}

.claim p{
    color: #ed1f27;
    font-family:'Times New Roman', Times, serif;
    font-size: 22px;
    font-style: italic;
}

</style>