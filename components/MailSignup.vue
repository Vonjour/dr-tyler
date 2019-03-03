<template>
    <div>
        <div class="footer-signup">
            <div class="row">
                <div class="col-sm-6 col-xs-12">
                    <p class="brand-summary article-tile-description">Dr. Lee is a certified holistic psychiatrist that teaches a spiritual based mental health discipline. He focuses on natural healing techniques that promote the body's innate ability to heal itself. Through an emphasis on breathwork, and other natural healing techniques Dr. Lee helps his patients feel empowered to overcome their programming, conditioning, and traumas so that they can realize the greatness that lies within themselves.</p>
                </div>
                <div class="col-sm-6 col-xs-12">
                    <div class="mail-container">
                        <h3 class="stay-updated-section">Stay updated with Dr. Lee by signing up for his holistic psychiatry newsletter</h3>
                        <form name="signup" @submit.prevent="joinList">
                            <div class="input-submit-group">
                                <input type="email" class="input-email" v-model="email" placeholder="Your email address" /> 
                                <button class="input-append">
                                    <svg v-if="!success" class="icon-submit" width="23" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M15.486 9.363L8.518 2.325l2.27-2.293L21.643 11 10.788 21.968l-2.27-2.293 6.97-7.04H1V9.364h14.486z" fill="#FFF" stroke="#3E42B0" fill-rule="evenodd"></path></svg>
                                    <svg v-if="success" class="icon-submit" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" stroke="#FFF" fill="none" fill-rule="evenodd"><path stroke-width="2" stroke-linecap="round" d="M10 14.714L14 21l7-11"></path><circle cx="15" cy="15" r="15"></circle></g></svg>
                                </button>
                            </div>
                            <span v-if="success" class="success-email-subscription">Thanks! You've been subscribed!</span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '@/services/api/API.js'
import drInfo from "../assets/json/drInfo.js"

export default {
    data(){
        return {
            email : '',
            success : false,
        }
    },
    methods: {
        joinList : function(){
            this.success = false;
            const payload = {
                email_address : this.email,
                status : "subscribed",
                newsletter_id : drInfo.mailchimpId
            }
            API.addToSubscriberList(payload).then(response => {
                console.log(response);
                if(response.status === 200){
                    this.success = !this.success;
                    this.email = '';
                }
                else{
                    console.log(response);
                }
            })
            
        }
    }
}

</script>