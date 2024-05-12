<template>
    <section class="appie-blog-area ">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="appie-section-title text-center">
              <h3 class="appie-title">{{ title }}</h3>
              <p>{{ description }}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div v-for="(blog, index) in blogs" :key="index" class="col-lg-4 col-md-6 col-sm-12">
            <a :href="blog.url" class="appie-blog-item-link">
            <div class="appie-blog-item mt-30 wow animated fadeInUp" data-wow-duration="1000ms" data-wow-delay="200ms">
              <div class="blog-thumb">
                <img :src="blog.img" :alt="blog.title">
              </div>
              <div class="blog-content">
                <div class="blog-meta">
                  <span>{{ blog.date }}</span> | <span>{{ blog.category }}</span>
                </div>
                <h4 class="blog-title">{{ blog.title }}</h4>
              </div>
            
            </div>
        </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  


<script>
export default {
    props:{
        title:{
            type:String,
        },
        description:{
            type:String,
        },
        blogs:{
            type:Array,
            default:()=>{
                return []
            }
        }
    }

}
</script>

<style scoped>
.appie-blog-area {
  background-color: #f9f9f9; /* Light background for the blog area */
  padding-top: 90px;
  padding-bottom: 95px;
}

.appie-blog-item {
  margin-top: 30px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1); /* Subtle shadow for depth */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.appie-blog-item:hover {
  transform: translateY(-10px); /* Slight lift on hover */
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.blog-thumb img {
  width: 100%;
  height: auto;
  border-top-left-radius: 8px; /* Rounded corners at the top */
  border-top-right-radius: 8px;
}

.blog-content {
  padding: 20px;
  background: white; /* White background for text content */
  border-bottom-left-radius: 8px; /* Rounded corners at the bottom */
  border-bottom-right-radius: 8px;
}

.blog-meta {
  font-size: 14px;
  color: #666; /* Grey text for meta info */
  margin-bottom: 5px;
}

.blog-title {
  font-size: 18px;
  color: #333; /* Darker text for title */
  margin-top: 5px;
  font-weight: 600;
}

/* Responsive styles */
@media (max-width: 991px) {
  .appie-blog-item {
    margin-top: 20px;
  }

  .blog-content {
    padding: 15px;
  }
}

@media (max-width: 767px) {
  .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .blog-thumb img {
    border-radius: 6px; /* Slightly smaller radius for mobile */
  }

  .blog-content {
    padding: 10px;
  }
}

@media (max-width: 575px) {
  .appie-blog-area {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .blog-meta {
    font-size: 13px; /* Smaller font size for meta on mobile */
  }

  .blog-title {
    font-size: 16px; /* Smaller font size for title on mobile */
  }
}
</style>
