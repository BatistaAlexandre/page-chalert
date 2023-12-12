<template>
  <!--====== APPIE PRICING PART START ======-->

  <section class="appie-pricing-area pt-90 pb-90">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="appie-section-title text-center">
            <h3 class="appie-title">{{ title }}</h3>
            <p>{{ description }}</p>
          </div>
          <ul
            class="list-inline text-center switch-toggler-list"
            role="tablist"
            id="switch-toggle-tab"
          >
            <li class="month" :class="[switchPlan ? 'active' : '']">
              <a href="#">سنوي</a>
            </li>
            <li>
              <!-- Rounded switch -->
              <label
                class="switch"
                :class="[switchPlan ? 'on' : 'off']"
                @click.prevent="change_plan"
              >
                <span class="slider round"></span>
              </label>
            </li>
            <li class="year" :class="[switchPlan === false ? 'active' : '']">
              <a href="#">شهريا</a>
            </li>
          </ul>
          <!-- /.list-inline -->
        </div>
      </div>
      <div class="tabed-content">
        <div
          id="month"
          :style="[switchPlan ? { display: 'block' } : { display: 'none' }]"
        >
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 wow animated fadeInLeft">
              <div class="pricing-one__single">
                <div class="pricig-heading">
                  <h6>طازج</h6>
                  <div class="price-range">
                    <sup>$</sup> <span>04</span>
                    <p>/شهر</p>
                  </div>
                  <p>احصل على نسخة تجريبية مجانية لمدة 14 يومًا</p>
                </div>
                <div class="pricig-body">
                  <ul>
                    <li><i class="fal fa-check"></i> سجل الدردشة 60 يومًا</li>
                    <li><i class="fal fa-check"></i> 15 جيجا تخزين سحابي</li>
                  </ul>
                  <div class="pricing-btn mt-35">
                    <a class="main-btn" href="#"> اختر الخطة</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow animated fadeInUp">
              <div class="pricing-one__single center">
                <div class="pricig-heading">
                  <h6>حلو</h6>
                  <div class="price-range">
                    <sup>$</sup> <span>16</span>
                    <p>/شهر</p>
                  </div>
                  <p>دفع 276 دولارًا لكل موقع سنويًا.</p>
                </div>
                <div class="pricig-body">
                  <ul>
                    <li><i class="fal fa-check"></i> سجل الدردشة 60 يومًا</li>
                    <li><i class="fal fa-check"></i> 50 جيجا تخزين سحابي</li>
                    <li><i class="fal fa-check"></i> 24/7 دعم</li>
                  </ul>
                  <div class="pricing-btn mt-35">
                    <a class="main-btn" href="#"> اختر الخطة</a>
                  </div>
                </div>
                <div class="pricing-rebon">
                  <span>الأكثر شهرة</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow animated fadeInRight">
              <div class="pricing-one__single">
                <div class="pricig-heading">
                  <h6>كثير العصارة</h6>
                  <div class="price-range">
                    <sup>$</sup> <span>27</span>
                    <p>/شهر</p>
                  </div>
                  <p>دفع 276 دولارًا لكل موقع سنويًا.</p>
                </div>
                <div class="pricig-body">
                  <ul>
                    <li><i class="fal fa-check"></i> سجل الدردشة 60 يومًا</li>
                    <li><i class="fal fa-check"></i>أمن البيانات</li>
                    <li><i class="fal fa-check"></i> 100 جيجا بايت</li>
                    <li><i class="fal fa-check"></i> 24/7 دعم</li>
                  </ul>
                  <div class="pricing-btn mt-35">
                    <a class="main-btn" href="#"> اختر الخطة</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /#month -->
        <div
          id="year"
          :style="[
            switchPlan === false ? { display: 'block' } : { display: 'none' },
          ]"
        >
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 wow animated fadeInLeft">
              <div class="pricing-one__single">
                <div class="pricig-heading">
                  <h6>طازج</h6>
                  <div class="price-range">
                    <sup>$</sup> <span>32</span>
                    <p>سنوي</p>
                  </div>
                  <p>احصل على نسخة تجريبية مجانية لمدة 14 يومًا</p>
                </div>
                <div class="pricig-body">
                  <ul>
                    <li><i class="fal fa-check"></i> سجل الدردشة 60 يومًا</li>
                    <li><i class="fal fa-check"></i> 15 جيجا تخزين سحابي</li>
                  </ul>
                  <div class="pricing-btn mt-35">
                    <a class="main-btn" href="#"> اختر الخطة</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow animated fadeInUp">
              <div class="pricing-one__single center">
                <div class="pricig-heading">
                  <h6>حلو</h6>
                  <div class="price-range">
                    <sup>$</sup> <span>116</span>
                    <p>سنوي</p>
                  </div>
                  <p>دفع 276 دولارًا لكل موقع سنويًا.</p>
                </div>
                <div class="pricig-body">
                  <ul>
                    <li><i class="fal fa-check"></i> سجل الدردشة 60 يومًا</li>
                    <li><i class="fal fa-check"></i> 50 جيجا تخزين سحابي</li>
                    <li><i class="fal fa-check"></i> 24/7 دعم</li>
                  </ul>
                  <div class="pricing-btn mt-35">
                    <a class="main-btn" href="#"> اختر الخطة</a>
                  </div>
                </div>
                <div class="pricing-rebon">
                  <span>الأكثر شهرة</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow animated fadeInRight">
              <div class="pricing-one__single">
                <div class="pricig-heading">
                  <h6>كثير العصارة</h6>
                  <div class="price-range">
                    <sup>$</sup> <span>227</span>
                    <p>سنوي</p>
                  </div>
                  <p>دفع 276 دولارًا لكل موقع سنويًا.</p>
                </div>
                <div class="pricig-body">
                  <ul>
                    <li><i class="fal fa-check"></i> سجل الدردشة 60 يومًا</li>
                    <li><i class="fal fa-check"></i>أمن البيانات</li>
                    <li><i class="fal fa-check"></i> تخزين سحابي</li>
                    <li><i class="fal fa-check"></i> 24/7 دعم</li>
                  </ul>
                  <div class="pricing-btn mt-35">
                    <a class="main-btn" href="#"> اختر الخطة</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--====== APPIE PRICING PART ENDS ======-->
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
  },
  data() {
    return {
      switchPlan: true,
    };
  },
  methods: {
    change_plan() {
      this.switchPlan = !this.switchPlan;
    },
  },
};
</script>

<style>
</style>