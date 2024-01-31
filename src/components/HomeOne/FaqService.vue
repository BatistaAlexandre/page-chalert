<template>
    <!--====== APPIE FAQ PART START ======-->

    <section class="appie-faq-area pb-95" style="background: none;">
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
                <div class="col-lg-12">
                    <div class="faq-accordion wow fadeInRight mt-30" data-wow-duration="1500ms">
                        <div class="accrodion-grp animated fadeIn faq-accrodion wow" data-wow-duration="1500ms"
                            data-grp-name="faq-accrodion">
                            <div class="accrodion" @click.prevent="OpenQuestion(1)"
                                :class="[showQuestion === 1 ? 'active' : '']">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>1. Community-Centric Commitment:</h4>
                                    </div>
                                    <div class="accrodion-content"
                                        :style="[showQuestion === 1 ? { 'display': 'block' } : { 'display': 'none' }]">
                                        <div class="inner">
                                            <p>
                                                We prioritize the safety and well-being of the entire community, fostering a
                                                collective
                                                spirit that goes beyond individual interests.<br>
                                                <br>Guiding Principles:<br>
                                                - Place the safety and welfare of the community above all individual
                                                concerns.<br>
                                                - Actively contribute to building a strong and connected community through
                                                collaboration.<br>
                                                - Demonstrate empathy and understanding towards the diverse needs of
                                                community members.<br>

                                            </p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion  " :class="[showQuestion === 2 ? 'active' : '']"
                                @click.prevent="OpenQuestion(2)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>2. Proactive Crime Prevention:</h4>
                                    </div>
                                    <div class="accrodion-content"
                                        :style="[showQuestion === 2 ? { 'display': 'block' } : { 'display': 'none' }]">
                                        <div class="inner">
                                            <p>
                                                We believe in a proactive approach to crime prevention, emphasizing
                                                collective action by
                                                residents and utilizing innovative strategies to safeguard
                                                neighborhoods.<br>

                                                <br>Guiding Principles:<br>
                                                - Stay vigilant and proactive in identifying and addressing potential
                                                security threats.<br>
                                                - Collaborate with residents, businesses, and authorities to develop
                                                innovative crime prevention
                                                measures.<br>
                                                - Continuously assess and update security strategies to stay ahead of
                                                evolving threats.<br>
                                            </p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion " :class="[showQuestion === 3 ? 'active' : '']"
                                @click.prevent="OpenQuestion(3)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>3. Education and Empowerment:</h4>
                                    </div>
                                    <div class="accrodion-content"
                                        :style="[showQuestion === 3 ? { 'display': 'block' } : { 'display': 'none' }]">
                                        <div class="inner">
                                            <p>
                                                We empower citizens through education, encouraging them to actively
                                                participate in creating safer
                                                neighborhoods and enhancing their overall quality of life.<br>

                                                <br>Guiding Principles:<br>
                                                - Promote educational initiatives that empower community members with
                                                security knowledge.<br>
                                                - Encourage active participation of individuals in contributing to the
                                                safety of their
                                                neighborhoods.<br>
                                                - Foster an environment where continuous learning and sharing of security
                                                insights are valued.<br>

                                            </p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion" :class="[showQuestion === 4 ? 'active' : '']"
                                @click.prevent="OpenQuestion(4)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>4. Innovation and Adaptability:</h4>
                                    </div>
                                    <div class="accrodion-content"
                                        :style="[showQuestion === 4 ? { 'display': 'block' } : { 'display': 'none' }]">
                                        <div class="inner">
                                            <p>
                                                Excel Security Solutions embraces innovation and adapts to evolving security
                                                needs, constantly seeking
                                                new ways to enhance the effectiveness of the CHalert Neighbourhood Watch
                                                program.<br>

                                                <br>Guiding Principles:<br>
                                                - Embrace technological advancements and innovative solutions for crime
                                                prevention.<br>
                                                - Foster a culture of adaptability to respond effectively to emerging
                                                security challenges.<br>
                                                - Encourage a proactive approach to incorporating new strategies and
                                                technologies.<br>
                                            </p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion " :class="[showQuestion === 5 ? 'active' : '']"
                                @click.prevent="OpenQuestion(5)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>Enforcement and Accountability:</h4>
                                    </div>
                                    <div class="accrodion-content"
                                        :style="[showQuestion === 5 ? { 'display': 'block' } : { 'display': 'none' }]">
                                        <div class="inner">
                                            <p>
                                                Excel Security Solutions is committed to enforcing and upholding this Code
                                                of Conduct. Violations may
                                                result in corrective actions, including but not limited to education,
                                                warnings, suspension, or
                                                termination from the Chalert Neighbourhood Watch program.
                                                <br>
                                            </p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion" :class="[showQuestion === 6 ? 'active' : '']"
                                @click.prevent="OpenQuestion(6)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>Review and Updates:</h4>
                                    </div>
                                    <div class="accrodion-content"
                                        :style="[showQuestion === 6 ? { 'display': 'block' } : { 'display': 'none' }]">
                                        <div class="inner">
                                            <p>
                                                This Code of Conduct is subject to periodic review to ensure its relevance
                                                and effectiveness. Updates
                                                may be made to reflect changes in the security landscape or the needs of the
                                                community.
                                                <br>
                                            </p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-6">
                    <div class="faq-accordion wow fadeInRight mt-30" data-wow-duration="1500ms">
                        <div class="accrodion-grp animated fadeIn faq-accrodion wow" data-wow-duration="1500ms"
                            data-grp-name="faq-accrodion">
                            <div class="accrodion " :class="[showQuestion === 7 ? 'active' : '']"
                                @click.prevent="OpenQuestion(7)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4> What are the different Chalert Neighbourhood Watch program packages?</h4>
                                    </div>
                                    <div class="accrodion-content"
                                        :style="[showQuestion === 7 ? { 'display': 'block' } : { 'display': 'none' }]">
                                        <div class="inner">
                                            <p>The packages include Free Membership of CHalert Community, Silver Program,
                                                Gold Program, and Platinum Program. Each offers varying levels of security
                                                features, with additional benefits such as the ProtectMe mobile app,
                                                emergency SOS button, daily patrols, and more.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accrodion" :class="[showQuestion === 8 ? 'active' : '']"
                                @click.prevent="OpenQuestion(8)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>What is the difference between Gold and Platinum Programs?</h4>
                                    </div>
                                    <div class="accrodion-content"
                                        :style="[showQuestion === 8 ? { 'display': 'block' } : { 'display': 'none' }]">
                                        <div class="inner">
                                            <p>The Platinum Program includes all features of the Gold Program and an
                                                additional foot patrol around your property. This ensures that all doors are
                                                locked, and windows are shut according to your instructions, providing
                                                constant peace of mind.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accrodion " :class="[showQuestion === 9 ? 'active' : '']"
                                @click.prevent="OpenQuestion(9)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>What is the Business Partnership with CHalert Program?</h4>
                                    </div>
                                    <div class="accrodion-content"
                                        :style="[showQuestion === 9 ? { 'display': 'block' } : { 'display': 'none' }]">
                                        <div class="inner">
                                            <p>The Business Partnership is an opportunity for businesses to elevate their
                                                commitment to security and community welfare. It includes benefits such as a
                                                GDPR-compliant reporting system, communication network, immediate
                                                assistance, risk identification, regular updates, business promotion, and
                                                training course discounts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accrodion" :class="[showQuestion === 10 ? 'active' : '']"
                                @click.prevent="OpenQuestion(10)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>How can I report incidents or suspicious behavior as a business in the program?
                                        </h4>
                                    </div>
                                    <div class="accrodion-content"
                                        :style="[showQuestion === 10 ? { 'display': 'block' } : { 'display': 'none' }]">
                                        <div class="inner">
                                            <p>Businesses in the program can access a secure online system to report
                                                incidents or suspicious behavior. Excel Security Solutions collaborates with
                                                the police to determine the need for sharing information with fellow
                                                members.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accrodion " :class="[showQuestion === 11 ? 'active' : '']"
                                @click.prevent="OpenQuestion(11)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                    <h4>What is included in the profile page for businesses on the website?</h4>
                                </div>
                                <div class="accrodion-content"
                                    :style="[showQuestion === 11?{'display':'block'}:{'display':'none'}]">
                                    <div class="inner">
                                        <p>Business partners enjoy a profile on the Excel Security Solutions website,
                                            showcasing their business, products, and services. This includes links to
                                            their own website and social media accounts, enhancing exposure and
                                            reputation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accrodion" :class="[showQuestion ===12?'active':'']"
                            @click.prevent="OpenQuestion(12)">
                            <div class="accrodion-inner">
                                <div class="accrodion-title">
                                    <h4>Are there training course discounts for business partners?</h4>
                                </div>
                                <div class="accrodion-content"
                                    :style="[showQuestion === 12?{'display':'block'}:{'display':'none'}]">
                                    <div class="inner">
                                        <p>Yes, business partners receive exclusive discounts on training courses
                                            focused on first aid and security, providing access to a variety of courses
                                            designed to enhance skills and knowledge in dealing with emergencies,
                                            injuries, and security threats.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="col-lg-12">
                <div class="faq-text text-center pt-40">
                    <p>Can't find an answer? <a href="mailto:demo@gmail.com">Email us</a></p>
                </div>
            </div>
        </div>
    </div>
</section>

<!--====== APPIE FAQ PART ENDS ======--></template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
        description: {
            type: String,
        }
    },
    data() {
        return {
            showQuestion: 1,
        }
    },
    methods: {
        OpenQuestion(value) {
            this.showQuestion = value
        }
    }

}
</script>

<style></style>