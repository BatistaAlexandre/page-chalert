<template>
  <section class="appie-service-area pt-90 pb-100" id="service">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="appie-section-title text-center">
            <h3 class="appie-title">{{ section_heading }}<br>{{ more_heading }}</h3>
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6" v-for="(item, index) in grid_items" :key="index">
          <div class="appie-single-service text-center mt-30" @click.prevent="showMultiple(index)">
            <div class="icon">
              <i :class="`fas ${item.icon}`"></i>
            </div>
            <h4 class="appie-title">{{ item.title }}</h4>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center highlighted">
        Each member of the CHalert program is entitled to a discount on Excel Security Solutions services and trainings
      </div>
    </div>

       <!-- Modal Component -->
       <b-modal v-model="modalVisible" hide-header hide-footer centered>
      <template #default="{ hide }">
        <div class="modal-body-content text-center">
          <div class="icon-modal">
            <i :class="`fas ${selectedService.icon}`"></i>
          </div>
          <h4>{{ selectedService.title }}</h4>
          <p v-if="!showForm">{{ selectedService.description }}</p>
          <form v-else @submit.prevent="submitForm" class="form-body">
           <div>
            <div class="form-group mt-2 pl-10 pr-10">
            <input class="form-control" type="text" v-model="form.name" placeholder="Name" required>
            </div>
            <div class="form-group mt-2 pl-10 pr-10">
            <input class="form-control" type="text" v-model="form.surname" placeholder="Surname" required>
            </div>
            <div class="form-group mt-2 pl-10 pr-10">
              <input class="form-control" type="email" v-model="form.email" placeholder="Email" required>
            </div>
            <div class="form-group mt-2 pl-10 pr-10">
              <input class="form-control" type="phone" v-model="form.phone" placeholder="Phone" required>
            </div>
            <div class="form-group mt-2 pl-10 pr-10">
              <textarea class="form-control" v-model="form.message" placeholder="Message"></textarea>
            </div>
            <div class="checkbox-group checkbox-item">
                <input type="checkbox" v-model="acceptTerms" name="terms" class="mr-5">
                <label for="terms">I accept <a class="terms-link" @click="toggleInfoModal">terms & conditions</a>
                </label>
            </div>
           </div>
            <b-button variant="primary" class="main-btn mb-2 mt-3" type="submit">Send</b-button>
          </form>
          <b-button :variant="showForm ? 'secondary' : 'primary'" class="main-btn" @click="toggleForm">{{ showForm ? 'Cancel' : 'Contact us' }}</b-button>
        </div>
      </template>
    </b-modal>


    <b-modal ref="infoModal" hide-footer hide-header centered>
      <div class="info-modal-body">
        <div class="scrollable-text">
          

          <div class="privacy">
        <h1>Privacy Policy</h1>
        <p>Last updated: May 06 2024</p>
        <p>This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
        <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
        
        <div class="p-section">
            <div class="p-section-title">Interpretation and Definitions</div>
            <div class="p-subsection">
                <div class="p-subsection-title">Interpretation</div>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            </div>
            <div class="p-subsection">
                <div class="p-subsection-title">Definitions</div>
                <p>For the purposes of this Privacy Policy:</p>
                <ul>
                    <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                    <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.</li>
                    <li><strong>Application</strong> refers to the software program provided by the Company.</li>
                    <li><strong>Company</strong> (referred to as either "the Company", "We", "Us", or "Our" in this Agreement) refers to Excel Security Solutions Ag, Rübeldorfstrasse 23, 3792 Saanen, Switzerland.</li>
                    <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device, or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                    <li><strong>Country</strong> refers to: Switzerland.</li>
                    <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.</li>
                    <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                    <li><strong>Service</strong> refers to the Application or the Website or both.</li>
                    <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used.</li>
                    <li><strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</li>
                    <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                    <li><strong>Website</strong> refers to / accessible from http://chalert-123-vue-app.s3-website.eu-north-1.amazonaws.com/#</li>
                    <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                </ul>
            </div>
        </div>
        
        <div class="p-section">
            <div class="p-section-title">Collecting and Using Your Personal Data</div>
            <div class="p-subsection">
                <div class="p-subsection-title">Types of Data Collected</div>
                <div class="p-subsubsection">
                    <div class="sp-ubsubsection-title">Personal Data</div>
                    <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                    <ul>
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Phone number</li>
                        <li>Address, State, Province, Postal code, City</li>
                    </ul>
                </div>
                <div class="p-subsubsection">
                    <div class="p-subsubsection-title">Usage Data</div>
                    <p>Usage Data is collected automatically when using the Service.</p>
                    <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                    <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                    <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
                </div>
            </div>
        </div>

        <div class="p-section">
            <div class="p-section-title">Information from Third-Party Social Media Services</div>
            <p>The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>
            <ul>
                <li>Google</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
            </ul>
            <p>If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities, or Your contact list associated with that account.</p>
            <p>You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.</p>
        </div>

        <div class="p-section">
            <div class="p-section-title">Information Collected while Using the Application</div>
            <p>While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:</p>
            <ul>
                <li>Information regarding your location</li>
                <li>Information from your Device's phone book (contacts list)</li>
                <li>Pictures and other information from your Device's camera and photo library</li>
            </ul>
            <p>We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device.</p>
            <p>You can enable or disable access to this information at any time through Your Device settings.</p>
        </div>

        <div class="p-section">
            <div class="p-section-title">Tracking Technologies and Cookies</div>
            <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
            <ul>
                <li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
                <li><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
            </ul>
            <p>Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the Privacy Policies website article.</p>
            <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
            <ul>
                <li><strong>Necessary / Essential Cookies</strong><br>Type: Session Cookies<br>Administered by: Us<br>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</li>
                <li><strong>Cookies Policy / Notice Acceptance Cookies</strong><br>Type: Persistent Cookies<br>Administered by: Us<br>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</li>
                <li><strong>Functionality Cookies</strong><br>Type: Persistent Cookies<br>Administered by: Us<br>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</li>
            </ul>
            <p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>
        </div>

        <div class="sp-ection">
            <div class="p-section-title">Use of Your Personal Data</div>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul>
                <li><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>
                <li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                <li><strong>For the performance of a contract:</strong> the development, compliance, and undertaking of the purchase contract for the products, items, or services You have purchased or of any other contract with Us through the Service.</li>
                <li><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products, or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                <li><strong>To provide You</strong> with news, special offers, and general information about other goods, services, and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
                <li><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
                <li><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
                <li><strong>For other purposes:</strong> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and to evaluate and improve our Service, products, services, marketing, and your experience.</li>
            </ul>
        </div>

        <div class="p-section">
            <div class="p-section-title">We may share Your personal information in the following situations:</div>
            <ul>
                <li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                <li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                <li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners, or other companies that We control or that are under common control with Us.</li>
                <li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services, or promotions.</li>
                <li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile pictures, and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You, and view Your profile.</li>
                <li><strong>With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent.</li>
            </ul>
        </div>

        <div class="p-section">
            <div class="p-section-title">Retention of Your Personal Data</div>
            <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
            <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
        </div>

        <div class="p-section">
            <div class="p-section-title">Transfer of Your Personal Data</div>
            <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country, or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
            <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
            <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
        </div>

        <div class="p-section">
            <div class="p-section-title">Delete Your Personal Data</div>
            <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
            <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
            <p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to correct or delete any personal information that You have provided to Us.</p>
            <p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
        </div>

        <div class="p-section">
            <div class="p-section-title">Disclosure of Your Personal Data</div>
            <div class="p-subsection">
                <div class="p-subsection-title">Business Transactions</div>
                <p>If the Company is involved in a merger, acquisition, or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
            </div>
            <div class="p-subsection">
                <div class="p-subsection-title">Law enforcement</div>
                <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
            </div>
            <div class="p-subsection">
                <div class="p-subsection-title">Other legal requirements</div>
                <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                <ul>
                    <li>Comply with a legal obligation</li>
                    <li>Protect and defend the rights or property of the Company</li>
                    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>Protect the personal safety of Users of the Service or the public</li>
                    <li>Protect against legal liability</li>
                </ul>
            </div>
        </div>

        <div class="p-section">
            <div class="p-section-title">Security of Your Personal Data</div>
            <p>The security of Your Personal Data is important to Us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
        </div>

        <div class="p-section">
            <div class="p-section-title">Children's Privacy</div>
            <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
            <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
        </div>

        <div class="p-section">
            <div class="p-section-title">Links to Other Websites</div>
            <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
            <p>We have no control over and assume no responsibility for the content, privacy policies, or practices of any third party sites or services.</p>
        </div>

        <div class="p-section">
            <div class="p-section-title">Changes to this Privacy Policy</div>
            <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
            <p>We will let You know via email and/or a prominent notice on Our Service prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
        </div>

        <div class="p-section">
            <div class="p-section-title">Contact Us</div>
            <p>If you have any questions about this Privacy Policy, You can contact us:</p>
            <ul>
                <li>By email: contact@chalert.ch</li>
                <li>By phone number: +41 33 748 31 01</li>
            </ul>
        </div>
    </div>



  </div>
      </div>
    </b-modal>
  </section>
</template>


<script>
import { BModal } from 'bootstrap-vue'
import emailjs from 'emailjs-com'
export default {
    components: { BModal },
    props:{
        section_heading: String,
        more_heading: String,
        description: String,
        grid_items: Array,
    },
    data() {
        return {
            modalVisible: false, 
            selectedService: {}, 
            showForm: false,
            acceptTerms: false,
            form:{
                name: '',
                surname: '',
                phone: '',
                email: '',
                message: '',
            },
            service: []
        }
    },
    methods: {
    showMultiple(index) {
      this.selectedService = this.grid_items[index]; 
      this.modalVisible = true; 
      this.showForm = false;
      this.service = this.selectedService.title
    },

    toggleForm() {
      this.showForm = !this.showForm;
    },

    resetForm() {
        this.form = {
          name: '',
          surname: '',
          phone: '',
          email: '',
          message: '',
        };
        this.service = '';
        this.acceptTerms = false; 
        setTimeout(() => {
         this.submissionMessage = ''; // Clear submission message
         }, 3000); // Adjust the delay as needed
    },

    submitForm() {
            const SERVICE_ID = 'service_zg2bepp';
            const TEMPLATE_ID = 'template_g2a1yaq';
            const PUBLIC_KEY = 'MVekMSZT8jTmKVA4n';
      if (!this.acceptTerms) {
                alert("Please accept the terms and conditions.");
                return;
            }
            emailjs.init(PUBLIC_KEY);
            const emailParams = {
                from_name: `${this.form.name} ${this.form.surname}`,
                from_email: this.form.email,
                phone: this.form.phone,
                message: this.form.message,
                services: this.service
            };
            this.isSubmitting = true;
            emailjs.send(SERVICE_ID, TEMPLATE_ID, emailParams, PUBLIC_KEY)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text, 'Form Data:', emailParams);
                    this.submissionMessage = "Form submitted successfully.";
                    this.isSubmitting = false;
                    this.resetForm();
                    this.modalVisible = false;
                }, (err) => {
                    console.error('FAILED...', err);
                    this.submissionMessage = "Failed to submit the form. Please try again.";
                    this.isSubmitting = false;
                });

            this.toggleForm(); 
        },

        toggleInfoModal() {
      if (this.$refs.infoModal.isVisible) {
        this.$refs.infoModal.hide();
      } else {
        this.$refs.infoModal.show();
      }
    }
      
    },
  }
</script>

<style scoped>

.appie-single-service {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
}

.appie-single-service:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.icon {
    font-size: 30px; 
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon i {
    color: #fff
}

.icon-modal i {
    color: #ed1f27;
    font-size: 25px;
}

.appie-title {
  font-size: 18px; /* Smaller title */
  margin-bottom: 10px;
}

.appie-single-service p {
  font-size: 14px; /* Smaller paragraph */
}

.highlighted {
  font-size: 18px;
  color: #333;
  font-weight: bold;
  padding: 20px 20px;
  text-align: center;
}

.modal-body-content {
  text-align: center; /* Center align the modal content */
  padding: 20px
}

.modal-body-content p {
  margin-bottom: 30px;
  padding: 10px /* Add some space between the elements */
}
.modal-body-content h4 {
  margin-bottom: 10px;
  padding: 10px /* Add some space between the elements */
}

.checkbox-terms {
  display: flex; 
  align-items: center;
  justify-content: center;
  margin: 10px 15px;
}

.checkbox-terms input[type="checkbox"] {
  margin-right: 15px; 
}

.checkbox-terms a {
 color: #ed1f27;
 font-weight: bold;
}

.btn-secondary {
  background-color: #6c757d; 
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #fff; 
  border-color: #545b62;
  color:#6c757d;
}

/* INFO MODAL STYLE */
.checkbox-terms a, 
.terms-link {
color: #ed1f27; /* Red color */
cursor: pointer; /* Pointer cursor */
}
.terms-link{
    cursor: pointer; /* Pointer cursor */
}


.input-box {
    padding: 10px 30px;
}

.info-modal-body {
  max-height: 700px; /* Adjust the height as needed */
  overflow-y: auto;
  padding: 20px;
}

.info-modal-body::-webkit-scrollbar {
    display: none; /* Hide scrollbar in WebKit browsers */
}

.info-modal-body {
    -ms-overflow-style: none;  /* Hide scrollbar in IE and Edge */
    scrollbar-width: none;  /* Hide scrollbar in Firefox */
}

.scrollable-text {
  white-space: pre-wrap; /* Keeps line breaks */
}

h1, h2, h3 {
            margin-top: 20px;
            color: #333;
        }
        p {
            margin: 10px 0;
        }
        .privacy
         {
            max-width: 800px;
            margin: auto;
        }
        .p-section-title {
            font-size: 24px;
            margin-bottom: 10px;
            font-weight: bold;
        }
        .p-subsection-title {
            font-size: 20px;
            margin-bottom: 10px;
            font-weight: bold;
        }
        .p-subsubsection-title {
            font-size: 18px;
            margin-bottom: 10px;
            font-weight: bold;
        }
        ul {
            margin-left: 20px;
            list-style-type: disc;
        }

        label a{
            color: #ed1f27;
            font-weight: bold;
        }
 
</style>