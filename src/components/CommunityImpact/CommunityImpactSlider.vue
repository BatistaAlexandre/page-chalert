<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" sm="6" md="4" v-for="(project, index) in items" :key="index">
        <div class="photo-item">
          <img :src="project.photo.url" :alt="project.project" class="img-fluid">
          <div class="label">{{ project.project }}</div>
        </div>
      </b-col>
    </b-row>
  
    <div class="col-lg-12">
      <div class="pt-30 text-center pb-60 pl-40 pr-40">
          <h3 class="pb-10">Kick Boxing Academy Gstaad</h3>
          <p>Gstaad Kickboxing was founded in 2021 by Cüneyt Günes in collaboration and the support of Excel Security Solutions. Cüneyt, a six-time winner of the Istanbul championship and Turkish championship in various kickboxing championships. 
              Cüneyt is a firm believer in giving back to the community he now calls home. Gstaad Kickboxing provides free kickboxing lessons to children aged 6 yrs. to 13 yrs. from all backgrounds in the community of Saanenland. Gstaad Kickboxing offers group and private lessons. Join to change your life for the better and learn a valuable life skills. 
          </p>        
      </div>
    </div>

    <b-row>
      <h2>Global Impact</h2>
        
        <div class="stars-container">
            <i class="fas fa-caret-up"></i>
            <i class="fas fa-caret-up"></i>
            <i class="fas fa-caret-up"></i>
            <i class="fas fa-caret-up"></i>
            <i class="fas fa-caret-up"></i>
        </div>
      <b-col cols="12" sm="6" md="4" v-for="(project, index) in global" :key="index">
        <div class="photo-item">
          <img :src="project.photo.url" :alt="project.project" class="img-fluid">
          <div class="label">{{ project.project }}</div>
        </div>
      </b-col>
    </b-row>
    <div class="col-lg-12">
      <div class="pt-30 text-center pb-30 pl-40 pr-40">
          <h3 class="pb-10">I Am My Bodyguard</h3>
          <p>I Am My Bodyguard is a program that empowers children who have experienced sexual abuse or violence. It started as a workshop for children in collaboration with Innocence in Danger, an international non-profit organization in Gstaad.
            With the success of the initial I Am My Bodyguard workshop for children. Excel Security Solutions decided to develop a course specifically for some of the victims’ mothers, who were too often also victims of abuse. This program was named Fight Like a Girl!
            he program has a social mission: to provide free workshops to the most vulnerable women andchildren in developing countries, funded by donations and paid training for those who can afford it.
          </p>  
          <div class="divider"></div>
        <div class="description">
          <p>You can join this mission and make a difference by supporting I Am My Bodyguard today.</p>
          <p>Bank details Switzerland:</p>
          <p>Bank: Raiffeisenbank Obersimmental-Saanenland</p>
          <p>Account: CH 15 8080 8001 6533 9267 3</p>
          <p>SWIFT/BIC: RAIFCH22856</p>
          <p>Beneficiary: I Am My Bodyguard Switzerland</p>
        </div>     
      </div>
    </div>
  </b-container>
</template> 




<script>

export default {
  data() {
    return {
      items: [
        { photo: { url: require('@/assets/images/impact-1.jpg') }, description: 'Gstaad Kickboxing was founded in 2021 by Cüneyt Günes in collaboration and the support of Excel Security Solutions. Cüneyt, a six-time winner of the Istanbul championship and Turkish championship in various kickboxing championships', project:'Kick Boxing Academy Gstaad' },
        { photo: { url: require('@/assets/images/impact-5.png') }, description: 'Kickboxing provides both group and private lessons. Join to change your life for the better and learn a valuable life skill', project:'Kick Boxing Academy Gstaad' },
        { photo: { url: require('@/assets/images/impact-3.jpg') }, description: 'Cüneyt is a firm believer in giving back to the community he now calls home. Gstaad Kickboxing provides free kickboxing lessons to children aged 6 yrs. to 13 yrs. from all backgrounds in the community of Saanenland', project:'Kick Boxing Academy Gstaad' },
      ],

      global:[
        { photo: { url: require('@/assets/images/impact-6.jpg') }, description: 'I Am My Bodyguard is a program that empowers children who have experienced sexual abuse or violence. It started as a workshop for children in collaboration with Innocence in Danger, an international non-profit organization in Gstaad.', project:'I am my Bodyguard' },
        { photo: { url: require('@/assets/images/impact-8.jpg') }, description: 'The program has a social mission: to provide free workshops to the most vulnerable women andchildren in developing countries, funded by donations and paid training for those who can afford it.', project: 'I am my Bodyguard' },
        { photo: { url: require('@/assets/images/impact-9.jpg') }, project: 'I am my Bodyguard'}
      ],
    };
  }
}
</script>

<style scoped>

.photo-item {
  position: relative;
  overflow: hidden;
  margin-bottom: 20px; 
  border-radius: 8px 8px 0px 0px;
}

.photo-item img {
  width: 100%; 
  transition: transform 0.5s ease; /* Space between images */
}

.photo-item:hover img {
  transform: scale(1.1); /* Optional: zooms image on hover */
}

.label {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px 0;
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

.description {
  padding: 30px;
  text-align: center;
}

.divider {
  height: 1px;
  background-color: #ed1f27;
  width: 40%;
  margin: 0 auto;
  margin-top: 30px;
}

@media (max-width: 576px) {
  .photo-item {
    margin-bottom: 15px; 
  }
}

</style>



