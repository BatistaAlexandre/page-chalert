










<template>
  <section class="appie-blog-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="appie-section-title text-center">
            <h3 class="appie-title">{{ title }}</h3>
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div v-for="(blog, index) in blogs" :key="index" class="col-12 d-flex justify-content-center">
          <a :href="blog.url" class="appie-blog-item-link">
            <div class="appie-blog-item mt-30 wow animated fadeInUp" data-wow-duration="1000ms" data-wow-delay="200ms">
              <div class="blog-horizontal">
                <div class="blog-thumb">
                  <img :src="blog.img" :alt="blog.title">
                </div>
                <div class="blog-content">
                  <div>
                    <div class="blog-meta">
                      <span>{{ blog.date }}</span> | <span>{{ blog.category }}</span>
                    </div>
                    <h4 class="blog-title">{{ blog.title }}</h4>
                    <p class="blog-excerpt">{{ blog.excerpt }}</p>
                  </div>
                  <button class="main-btn read-more" @click="goToUrl(blog.url)">READ MORE</button>
                </div>
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
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    blogs: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    goToUrl(url) {
      window.location.href = url;
    }
  }
}
</script>

<style scoped>
.appie-blog-area {
  background-color: #f9f9f9;
  padding-top: 90px;
  padding-bottom: 95px;
}

.appie-blog-item {
  margin-top: 30px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 800px;
}

.appie-blog-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.blog-horizontal {
  display: flex;
  flex-direction: row;
}

.blog-thumb img {
  width: 300px;
  height: auto;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.blog-content {
  padding: 20px;
  background: white;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.blog-meta {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.blog-title {
  font-size: 18px;
  color: #333;
  margin-top: 5px;
  font-weight: 600;
}

.blog-excerpt {
  font-size: 16px;
  color: #555;
  margin-top: 30px;
  margin-bottom: 20px;
}

.read-more {
  align-self: flex-end;
  background-color: #ed1f27;
  border-color: #ed1f27;
  color: white;
}



@media (max-width: 991px) {
  .appie-blog-item {
    margin-top: 20px;
  }

  .blog-content {
    padding: 15px;
  }
}

@media (max-width: 767px) {
  .blog-horizontal {
    flex-direction: column;
    align-items: center;
  }

  .appie-blog-item {
    max-width: 90%; /* Ensure maximum width of 90% on small screens */
    margin-left: auto; /* Center align */
    margin-right: auto; /* Center align */
  }

  .blog-thumb {
    width: 100%; /* Ensure the thumbnail width is 100% */
  }

  .blog-thumb img {
    width: 100%;
    height: auto;
    border-radius: 6px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .blog-content {
    padding: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}

@media (max-width: 575px) {
  .appie-blog-area {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .blog-meta {
    font-size: 13px;
  }

  .blog-title {
    font-size: 16px;
  }
}
</style>
