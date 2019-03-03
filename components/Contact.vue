<template>
    <div>
        <div class="info-section extra-padding mobile-contactus-padding">
            <div class="inquiry-wrapper" v-if="!contact_section_open">
                <div class="row">	
                    <div class="col-xs-12 col-sm-12 vertical-padding">
                        <h2 class="info-section-text-header-left">Contact {{user.location.name}}</h2>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-xs-12 col-sm-12 inquiry-subtext">
                        <h3 class="inquiry-type">How can we help you?</h3>
                        <p class="inquiry-type-description">How would you like to connect with {{user.location.name}}?</p>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-xs-12 col-sm-12">
                        <div class="row no-gutters">
                            <div class="col-xs-6 col-sm-3 pr-5">	
                                <button class="inquiry-type-button" type="button" v-on:click="contactSectionOpen('appointment')">
                                    <a style="text-decoration: none!important;">
                                        <img class="calendar-icon" src="~static/images/icons/calendar.svg"/>
                                        <div class="inquiry-type-button-label">Book an appointment with {{user.location.name}}</div></a>
                                </button>
                            </div>
                            
                            <div class="col-xs-6 col-sm-3 pl-5">	
                                <button class="inquiry-type-button" type="button" v-on:click="contactSectionOpen('message')">
                                    <img class="message-icon" src="~static/images/icons/message.svg"/>
                                    <div class="inquiry-type-button-label">Send a message to our office.</div>
                                </button>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        


            <div class="inquiry-wrapper" v-if="contact_section_open">
                <div class="row">	
                    <div class="col-xs-12 col-sm-12 vertical-padding">
                        <div class="back-arrow" v-on:click="contactSectionOpen('')"><span><img class="back-arrow-rotate" src="~static/images/arrow-right.svg"/></span>Back to contact options</div>
                        <h2 class="info-section-text-header-left mobile-contact-header">Message {{user.location.name}}</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 inquiry-subtext">
                        <h3 class="inquiry-type">How can we help you?</h3>
                        <p class="inquiry-type-description">If you have any questions, concerns, or comments regarding {{user.location.name}}, please fill out the short contact form below.</p>
                    </div>
                </div>
                <form @submit.prevent="submitMessage">
                    <div class="row">
                        <div class="col-sm-6 col-xs-12">
                            <div class="row mb20">	
                                <div class="col-xs-12 col-sm-12 no-padding">
                                    <label class="form-label">Subject</label>
                                    <input class="text-input" type="name" v-model="email.subject" required />
                                </div>
                            </div> 
                            <div class="row mb20">	
                                <div class="col-xs-12 col-sm-12 no-padding">
                                    <label class="form-label">Name</label>
                                    <input class="text-input" type="name" v-model="email.name" required />
                                </div>
                            </div>
                            <div class="row mb20">
                                <div class="col-xs-12 col-sm-12 no-padding">
                                    <label class="form-label">Email</label>
                                    <input class="text-input" type="email" name="email" v-model="email.email_address" required />
                                </div>
                            </div>
                            <div class="row mb20">
                                <div class="col-xs-12 col-sm-12 no-padding">
                                    <label class="form-label">Phone Number</label>
                                    <input class="text-input" type="text" name="phone" v-model="email.phone_number" required/>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xs-12">
                            <div class="row mb20">
                                <div class="col-xs-12 col-sm-12 no-padding">
                                    <label class="form-label">Message</label>
                                    <textarea class="text-input" style="height:252px;width: 100%;" name="message" v-model="email.message" required></textarea>
                                </div>
                            </div>
                            <div class="row mb20">
                                <div class="col-xs-12 col-sm-12 no-padding">
                                    <input type="checkbox" />
                                    <label class="checkbox-label">I understand and agree that any information submitted will be forwarded to our office by email and not via a secure messaging system. This form should not be used to transmit private health information, and we disclaim all warranties with respect to the privacy and confidentiality of any information submitted through this form.</label>
                                </div>
                            </div>
                            <div class="row mb20">
                                <div class="col-xs-12 col-sm-12 no-padding" style="overflow:-webkit-paged-x">
                                    <div vc-recaptcha key="'6LdU62UUAAAAAGH9KJEJfx8mhovc4IphsNRaaTSr'" ></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 no-padding">
                                    
                                    <button class="booking-button-contact-section" style="outline: none !important; border: none !important;">{{button_state}}</button>
                                </div>
                            </div>
            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import drInfo from "../assets/json/drInfo.js";
import API from '@/services/api/API';

export default {
    data(){
        return{
            user : drInfo,
            contact_section_open : false,
            section : '',
            email: {
                name: '',
                subject: '',
                email_address : '',
                phone_number : '',
                to_email : drInfo.location.email,
                message : ''
            },
            button_state : 'Message',
            error_send : false
        }
    },
    methods: {
        contactSectionOpen: function(section){
            this.email.subject = '';
            this.contact_section_open = !this.contact_section_open;
            this.section = section;
            if(section == 'appointment'){
                this.email.subject = 'Scheduling an appointment with ' + this.user.location.name;
            }
            console.log(this.section);
        },
        submitMessage: function(){
            this.button_state = 'Submitting';
            var payload = {
                email : this.email.email_address,
                name :  this.email.name,
                phone : this.email.phone_number,
                message :  this.email.message,
                physician_info : {
                    physician_email : this.user.location.email
                }
            }
            API.sendMessage(payload).then(response => {
                if(response.status === 200){
                    this.button_state = 'Message Sent';
                    this.email = {
                        name: '',
                        subject: '',
                        email_address : '',
                        phone_number : '',
                        to_email : drInfo.location.email,
                        message : ''
                    }
                }
                else{
                    this.error_send = true;
                }
            })
        }
    }
}
</script>

<style>

</style>
