
<template>
    <!--====== APPIE FAQ PART START ======-->
    <section class="appie-faq-area pb-95">
      <div class="container">
        <div class="row">
          <div class="col-lg-12" style="margin-top: 5%;">
            <div class="appie-section-title text-center">
              <h3 class="appie-title">{{ title }}</h3>
              <p>{{ description }}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="faq-accordion wow fadeInRight mt-30" data-wow-duration="1500ms">
              <div
                class="accrodion-grp animated fadeIn faq-accrodion wow"
                data-wow-duration="1500ms"
                data-grp-name="faq-accrodion"
              >
                <div
                  class="accrodion"
                  @click.prevent="OpenQuestion(1)"
                  :class="[showQuestion === 1 ? 'active' : '']"
                >
                  <div class="accrodion-inner">
                    <div class="accrodion-title">
                      <h4>What is the CHalert Neighbourhood Watch program?</h4>
                    </div>
                    <div
                      class="accrodion-content"
                      :style="[showQuestion === 1 ? { display: 'block' } : { display: 'none' }]"
                    >
                      <div class="inner">
                        <p>
                          CHalert Neighbourhood watch is a proactive crime prevention initiative by Excel
                          Security Solutions. It is designed for chalet owners and businesses in the region,
                          encountering collective action to safeguard the neighbourhood.
                        </p>
                      </div>
                      <!-- /.inner -->
                    </div>
                  </div>
                  <!-- /.accrodion-inner -->
                </div>
                <div
                  class="accrodion"
                  :class="[showQuestion === 2 ? 'active' : '']"
                  @click.prevent="OpenQuestion(2)"
                >
                  <div class="accrodion-inner">
                    <div class="accrodion-title">
                      <h4>How does CHalert differ from other programs?</h4>
                    </div>
                    <div
                      class="accrodion-content"
                      :style="[showQuestion === 2 ? { display: 'block' } : { display: 'none' }]"
                    >
                      <div class="inner">
                        <p>
                          CHalert stands out for its proactive approach, utilizing observation, awareness, and
                          intelligence gathering. It fosters a community-driven movement, empowering residents
                          to play an active role in making their neighborhoods safer.
                        </p>
                      </div>
                      <!-- /.inner -->
                    </div>
                  </div>
                  <!-- /.accrodion-inner -->
                </div>
                <div
                  class="accrodion"
                  :class="[showQuestion === 3 ? 'active' : '']"
                  @click.prevent="OpenQuestion(3)"
                >
                  <div class="accrodion-inner">
                    <div class="accrodion-title">
                      <h4> What strategies does CHalert employ for crime prevention?</h4>
                    </div>
                    <div
                      class="accrodion-content"
                      :style="[showQuestion === 3 ? { display: 'block' } : { display: 'none' }]"
                    >
                      <div class="inner">
                        <p>
                          CHalert employs various strategies, including fostering social interaction,
                          conducting active patrols, and intervening rapidly when needed. The program goes
                          beyond conventional methods, aiming for a collective effort among residents,
                          businesses, and private clients.
                        </p>
                      </div>
                      <!-- /.inner -->
                    </div>
                  </div>
                  <!-- /.accrodion-inner -->
                </div>
                <div
                  class="accrodion"
                  :class="[showQuestion === 5 ? 'active' : '']"
                  @click.prevent="OpenQuestion(5)"
                >
                  <div class="accrodion-inner">
                    <div class="accrodion-title">
                      <h4> How can I join the CHalert Neighbourhood Watch program?</h4>
                    </div>
                    <div
                      class="accrodion-content"
                      :style="[showQuestion === 5 ? { display: 'block' } : { display: 'none' }]"
                    >
                      <div class="inner">
                        <p>
                          We have different plans. In order for you to be a part of the community
                          <a href="#">click here</a>
                        </p>
                      </div>
                      <!-- /.inner -->
                    </div>
                  </div>
                  <!-- /.accrodion-inner -->
                </div>
                <!-- Missing closing div for .accrodion -->
                <!-- /.accrodion -->
                <div
                  class="accrodion"
                  :class="[showQuestion === 6 ? 'active' : '']"
                  @click.prevent="OpenQuestion(6)"
                >
                  <div class="accrodion-inner">
                    <div class="accrodion-title">
                      <h4>What are the benefits of joining our WhatsApp community group?</h4>
                    </div>
                    <div
                      class="accrodion-content"
                      :style="[showQuestion === 6 ? { display: 'block' } : { display: 'none' }]"
                    >
                      <div class="inner">
                        <p>
                            It serves information, dispelling rumours and misinformation 
                            and a channel in order 
                            to sharing best practices to enhance your security.
                        </p>
                      </div>
                      <!-- /.inner -->
                    </div>
                  </div>
                  <!-- /.accrodion-inner -->
                </div>
                <!-- /.accrodion -->
              </div>
              <!-- /.accrodion-grp -->
            </div>
          </div>
          <div class="col-lg-6">
            <div class="faq-accordion wow fadeInRight mt-30" data-wow-duration="1500ms">
              <div
                class="accrodion-grp animated fadeIn faq-accrodion wow"
                data-wow-duration="1500ms"
                data-grp-name="faq-accrodion"
              >
                <div
                  class="accrodion"
                  :class="[showQuestion === 7 ? 'active' : '']"
                  @click.prevent="OpenQuestion(7)"
                >
                  <div class="accrodion-inner">
                    <div class="accrodion-title">
                      <h4> What are the different CHalert Neighbourhood Watch program packages?</h4>
                    </div>
                    <div
                      class="accrodion-content"
                      :style="[showQuestion === 7 ? { display: 'block' } : { display: 'none' }]"
                    >
                      <div class="inner">
                        <p>
                          The packages include Free Membership of CHalert Community, Gold Program, and
                          Platinum Program. Each offers varying levels of security features, with additional
                          benefits such as daily patrols, and more.
                        </p>
                      </div>
                      <!-- /.inner -->
                    </div>
                  </div>
                  <!-- /.accrodion-inner -->
                </div>
                <!-- /.accrodion -->
                <div
                  class="accrodion"
                  :class="[showQuestion === 8 ? 'active' : '']"
                  @click.prevent="OpenQuestion(8)"
                >
                  <div class="accrodion-inner">
                    <div class="accrodion-title">
                      <h4>What is the Excel Care Package?</h4>
                    </div>
                    <div
                      class="accrodion-content"
                      :style="[showQuestion === 8 ? { display: 'block' } : { display: 'none' }]"
                    >
                      <div class="inner">
                        <p>
                            The Excel Care package is designed for the elderly and people with 
                            limited mobility who would like to retain their independence. 
                            We provide them with an emergency button which we monitor and respond 
                            to 24hrs/day, 7 days a week, in the event of medical emergencies.
                        </p>
                      </div>
                      <!-- /.inner -->
                    </div>
                  </div>
                  <!-- /.accrodion-inner -->
                </div>
                <!-- /.accrodion -->
                <div
                  class="accrodion"
                  :class="[showQuestion === 9 ? 'active' : '']"
                  @click.prevent="OpenQuestion(9)"
                >
                  <div class="accrodion-inner">
                    <div class="accrodion-title">
                      <h4>What is the Business/Alliance Partnership with CHalert program?</h4>
                    </div>
                    <div
                      class="accrodion-content"
                      :style="[showQuestion === 9 ? { display: 'block' } : { display: 'none' }]"
                    >
                      <div class="inner">
                        <p>
                            The business partnership is an opportunity for businesses to elevate their 
                            commitment to the security and safety of the community.
                            Each organisation is different. Please get in touch with us for 
                            a tailored partnership program.
                        </p>
                      </div>
                      <!-- /.inner -->
                    </div>
                  </div>
                  <!-- /.accrodion-inner -->
                </div>
                <!-- /.accrodion -->
                <div
                  class="accrodion"
                  :class="[showQuestion === 10 ? 'active' : '']"
                  @click.prevent="OpenQuestion(10)"
                >
                  <div class="accrodion-inner">
                    <div class="accrodion-title">
                      <h4>How can I report suspicious behaviour I have witnessed?</h4>
                    </div>
                    <div
                      class="accrodion-content"
                      :style="[showQuestion === 10 ? { display: 'block' } : { display: 'none' }]"
                    >
                      <div class="inner">
                        <p>
                            We always advise to first contact the local authorities on 112. 
                            However in leu of that you can contact us and we will get in 
                            touch with the authorities on your behalf.
                        </p>
                      </div>
                      <!-- /.inner -->
                    </div>
                  </div>
                  <!-- /.accrodion-inner -->
                </div>
                <!-- /.accrodion -->
                <div
                  class="accrodion"
                  :class="[showQuestion === 11 ? 'active' : '']"
                  @click.prevent="OpenQuestion(11)"
                >
                  <div class="accrodion-inner">
                    <div class="accrodion-title">
                      <h4>What is included in the profile page for businesses on the website?</h4>
                    </div>
                    <div
                      class="accrodion-content"
                      :style="[showQuestion === 11 ? { display: 'block' } : { display: 'none' }]"
                    >
                      <div class="inner">
                        <p>
                          Business partners enjoy a profile on the Excel Security Solutions website,
                          showcasing their business, products, and services. This includes links to their own
                          website and social media accounts, enhancing exposure and reputation.
                        </p>
                      </div>
                      <!-- /.inner -->
                    </div>
                  </div>
                  <!-- /.accrodion-inner -->
                </div>
                <!-- /.accrodion -->
                <div
                  class="accrodion"
                  :class="[showQuestion === 12 ? 'active' : '']"
                  @click.prevent="OpenQuestion(12)"
                >
                  <div class="accrodion-inner">
                    <div class="accrodion-title">
                      <h4>Are there training course discounts for business partners?</h4>
                    </div>
                    <div
                      class="accrodion-content"
                      :style="[showQuestion === 12 ? { display: 'block' } : { display: 'none' }]"
                    >
                      <div class="inner">
                        <p>
                          Yes, business partners receive exclusive discounts on training courses focused on
                          first aid and security, providing access to a variety of courses designed to enhance
                          skills and knowledge in dealing with emergencies, injuries, and security threats.
                        </p>
                      </div>
                      <!-- /.inner -->
                    </div>
                  </div>
                  <!-- /.accrodion-inner -->
                </div>
                <!-- /.accrodion -->
              </div>
              <!-- /.accrodion-grp -->
            </div>
          </div>
          <div class="col-lg-12">
            <div class="faq-text text-center pt-40">
              <p>
                Can't find an answer? <a href="mailto:5elementszone@gmail.com">Email us</a>
              </p>
            </div>
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
    <!--====== APPIE FAQ PART ENDS ======-->
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
        showQuestion: null, // Inicialize com null para indicar que nenhuma pergunta está aberta inicialmente
      };
    },
    methods: {
      OpenQuestion(value) {
        if (this.showQuestion === value) {
          // Se a pergunta clicada já estiver aberta, fecha ela
          this.showQuestion = null;
        } else {
          // Se a pergunta clicada não estiver aberta, abre ela
          this.showQuestion = value;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  











