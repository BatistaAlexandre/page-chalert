<template>
  <!--====== APPIE FAQ PART START ======-->
    
    <section class="appie-faq-area pb-95">
        <div class="container" >
            <div class="row" >
                <div class="col-lg-12" style="margin-top: 5%;">
                    <div class="appie-section-title text-center">
                        <h3 class="appie-title">{{title}}</h3>
                        <p>{{description}}</p>
                    </div>                    
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="faq-accordion wow fadeInRight mt-30" data-wow-duration="1500ms">
                        <div class="accrodion-grp animated fadeIn faq-accrodion wow" data-wow-duration="1500ms" data-grp-name="faq-accrodion">
                            <div class="accrodion" @click.prevent="OpenQuestion(1)" :class="[showQuestion === 1?'active':'']">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>What is the Chalert Neighbourhood Watch program?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 1?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>Chalert Neighbourhood Watch is a proactive crime prevention initiative by Excel Security Solutions. It's designed for individual chalet owners and the entire community, encouraging collective action to safeguard neighborhoods.</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion  " :class="[showQuestion === 2?'active':'']" @click.prevent="OpenQuestion(2)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>How does Chalert differ from other programs?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 2?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>Chalert stands out for its proactive approach, utilizing observation, awareness, and intelligence gathering. It fosters a community-driven movement, empowering residents to play an active role in making their neighborhoods safer.</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion " :class="[showQuestion === 3?'active':'']" @click.prevent="OpenQuestion(3)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4> What strategies does Chalert employ for crime prevention?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 3?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>Chalert employs various strategies, including fostering social interaction, conducting active patrols, and intervening rapidly when needed. The program goes beyond conventional methods, aiming for a collective effort among residents, businesses, and private clients.</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion" :class="[showQuestion ===4?'active':'']" @click.prevent="OpenQuestion(4)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>How does Chalert Watch contribute to community safety?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 4?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>Chalert Watch serves as a vital channel for receiving and sharing relevant information, ensuring the safety of chalet owners at home and away. Building a network of vigilant and informed residents contributes to a safer, more connected community.</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion " :class="[showQuestion === 5?'active':'']" @click.prevent="OpenQuestion(5)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4> How can I join the Chalert Neighbourhood Watch program?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 5?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>Joining is simple and free. If you own a chalet in the region, visit our website, fill out the online form, and receive a confirmation email with access to the exclusive platform for chalet owners.</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion" :class="[showQuestion ===6?'active':'']" @click.prevent="OpenQuestion(6)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>What are the benefits of joining Chalert?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 6?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>Chalert Watch serves as a vital channel for receiving and sharing relevant information, ensuring the safety of chalet owners at home and away. Building a network of vigilant and informed residents contributes to a safer, more connected community.</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="faq-accordion wow fadeInRight mt-30" data-wow-duration="1500ms">
                        <div class="accrodion-grp animated fadeIn faq-accrodion wow" data-wow-duration="1500ms" data-grp-name="faq-accrodion">
                            <div class="accrodion " :class="[showQuestion === 7?'active':'']" @click.prevent="OpenQuestion(7)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4> What are the different Chalert Neighbourhood Watch program packages?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 7?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>The packages include Free Membership of Chalert Community, Silver Program, Gold Program, and Platinum Program. Each offers varying levels of security features, with additional benefits such as the ProtectMe mobile app, emergency SOS button, daily patrols, and more.</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion" :class="[showQuestion ===8?'active':'']" @click.prevent="OpenQuestion(8)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>What is the difference between Gold and Platinum Programs?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 8?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>The Platinum Program includes all features of the Gold Program and an additional foot patrol around your property. This ensures that all doors are locked, and windows are shut according to your instructions, providing constant peace of mind.</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion " :class="[showQuestion === 9?'active':'']" @click.prevent="OpenQuestion(9)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>What is the Business Partnership with Chalert Program?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 9?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>The Business Partnership is an opportunity for businesses to elevate their commitment to security and community welfare. It includes benefits such as a GDPR-compliant reporting system, communication network, immediate assistance, risk identification, regular updates, business promotion, and training course discounts.</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion" :class="[showQuestion ===10?'active':'']" @click.prevent="OpenQuestion(10)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>How can I report incidents or suspicious behavior as a business in the program?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 10?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>Businesses in the program can access a secure online system to report incidents or suspicious behavior. Excel Security Solutions collaborates with the police to determine the need for sharing information with fellow members.</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion " :class="[showQuestion === 11?'active':'']" @click.prevent="OpenQuestion(11)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>What is included in the profile page for businesses on the website?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 11?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>Business partners enjoy a profile on the Excel Security Solutions website, showcasing their business, products, and services. This includes links to their own website and social media accounts, enhancing exposure and reputation.</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion" :class="[showQuestion ===12?'active':'']" @click.prevent="OpenQuestion(12)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>Are there training course discounts for business partners?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 12?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>Yes, business partners receive exclusive discounts on training courses focused on first aid and security, providing access to a variety of courses designed to enhance skills and knowledge in dealing with emergencies, injuries, and security threats.</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="faq-text text-center pt-40">
                        <p>Can't find an answer? <a href="mailto:demo@gmail.com">Email us</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!--====== APPIE FAQ PART ENDS ======-->
</template>

<script>
export default {
    props:{
        title:{
            type:String,
        },
        description:{
            type:String,
        }
    },
   data(){
       return {
           showQuestion: null, // Inicialize com null para indicar que nenhuma pergunta está aberta inicialmente
       }
   },
    methods: {
        OpenQuestion(value){
            if (this.showQuestion === value) {
                // Se a pergunta clicada já estiver aberta, fecha ela
                this.showQuestion = null;
            } else {
                // Se a pergunta clicada não estiver aberta, abre ela
                this.showQuestion = value;
            }
        }
    }
}
</script>

<style>

</style>