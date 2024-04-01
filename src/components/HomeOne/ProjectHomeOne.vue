<template>
    <section class="appie-project-area pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-project-box wow animated slideInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="appie-project-content">
                                    <h3 class="title">{{ title }}</h3>
                                    <p>{{ description }}</p>
                                    <form @submit.prevent="sendEmail">
                                        <div class="input-box mt-30">
                                            <input type="text" v-model="name" name="name" placeholder="Name"
                                                class="form-control m-2">
                                            <input type="text" v-model="phone" name="phone" placeholder="Phone"
                                                class="form-control m-2">
                                            <input type="email" v-model="email" name="email" placeholder="Email"
                                                class="form-control m-2">
                                        </div>
                                        <div class="input-box mt-0">
                                            <textarea name="message" v-model="message" cols="30" rows="5"
                                                placeholder="Message" class="form-control m-2"></textarea>
                                        </div>
                                        <div class="input-box">
                                            <input type="submit" value="Send" class="main-btn m-2">
                                        </div>
                                    </form>
                                    <!-- <div v-if="messageSent" class="message-sent">Message sent</div> -->
                                </div>
                            </div>
                        </div>
                        <div class="appie-project-thumb">
                            <img src="@/assets/images/project-thumb.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    name: 'ContactUs',
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
            name: '',
            email: '',
            phone: '',
            message: '',
            messageSent: false
        }
    },
    methods: {
        sendEmail(e) {
            // Verifica se os campos estão preenchidos
            if (!this.name || !this.email || !this.phone || !this.message) {
                window.alert('Please fill in all fields');
                return;
            }

            try {
                emailjs.sendForm('service_53cnzvq', 'template_du881de', e.target,
                    'klgf2wlFKiITi1Mhj', {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    message: this.message
                }).then(() => {
                    window.alert('Message sent');
                    this.messageSent = true;
                    this.name = '';
                    this.email = '';
                    this.phone = '';
                    this.message = '';
                }).catch(error => {
                    console.log('Error:', error);
                });
            } catch (error) {
                console.log({ error });
            }
        },
    }
}
</script>

<style scoped>
/* Add your custom styles here */
</style>