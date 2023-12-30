<template>
  <!--====== APPIE FAQ PART START ======-->
    
    <section class="appie-faq-area pb-95">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
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
                                        <h4>Where do I usually find FAQs in a page?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 1?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery that I bits and bobs up the duff cras boot bevvy no biggie.</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion  " :class="[showQuestion === 2?'active':'']" @click.prevent="OpenQuestion(2)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>Where do I usually find FAQs in a page?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 2?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery that I bits and bobs up the duff cras boot bevvy no biggie.</p>
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
                            <div class="accrodion " :class="[showQuestion === 3?'active':'']" @click.prevent="OpenQuestion(3)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>Where do I usually find FAQs in a page?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 3?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery that I bits and bobs up the duff cras boot bevvy no biggie.</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div><!-- /.accrodion-inner -->
                            </div>
                            <div class="accrodion" :class="[showQuestion ===4?'active':'']" @click.prevent="OpenQuestion(4)">
                                <div class="accrodion-inner">
                                    <div class="accrodion-title">
                                        <h4>Where do I usually find FAQs in a page?</h4>
                                    </div>
                                    <div class="accrodion-content" :style="[showQuestion === 4?{'display':'block'}:{'display':'none'}]">
                                        <div class="inner">
                                            <p>Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery that I bits and bobs up the duff cras boot bevvy no biggie.</p>
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
           showQuestion:1,
       }
   },
    methods: {
        OpenQuestion(value){
            this.showQuestion = value
        }
    }

}
</script>

<style>

</style>