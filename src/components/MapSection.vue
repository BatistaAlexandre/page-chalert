<template>
    <div class="container">
      <div class="text">
        <h2>Where We Operate</h2>
        <p class="mb-2">We are proud to serve the communities of the Saanenland region, including:</p> 
        <ul>
          <li>Gstaad</li>
          <li>Saanen</li>
          <li>Schonried</li>
          <li>Saanenmoser</li>
        </ul>
      </div>
      <div class="map">
        <img src="@/assets/images/map.jpeg" alt="Map">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MapSection'
  }
  </script>
  
  <style scoped>

ul {
    list-style-type: disc; /* Use disc for filled circles */
    padding-left: 18px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
}

.map img {
  max-width: 100%;
  height: auto;
  border-radius: 8px; 
  transition: transform 0.5s ease; 
}

.map img:hover {
  transform: scale(1.1); 
}

.text {
  width: 50%;
  padding-right: 30px;
}

.text p{
  padding-top: 20px
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .text {
    width: 100%;
    padding-left: 0;
    padding-top: 0px;
    padding-bottom: 30px;
  }
}
</style>