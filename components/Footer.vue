<template>
    <div>
        <div class="footer-container">
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <div class="map-container" v-bind:class="{'box-shadow-wrap' : open_map }">
                        <div class="map-header">
                            <h3 class="map-location-header">Santa Monica Office</h3>
                            <p class="map-address">
                                {{user.location.address}}<br/>{{user.location.address_2}}<br/>{{user.location.city_state}}<br/>Phone: {{user.location.phone}}
                            </p>
                            <a v-on:click="openMap" class="map-address" style="color:#3f46ad"><span v-if="!open_map">Show On Map</span><span v-if="open_map">Collapse Map</span></a>
                        </div>
                        <div class="map-frame" v-bind:class="{'show-map' : open_map }">
                            <iframe class="google-map" v-bind:class="{'show-map' : open_map }" frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.2244942972!2d-118.47769824991268!3d34.038112025828376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb4f9d4e2a91%3A0xd2f4f26ead9e348c!2s2811+Wilshire+Blvd+%23800%2C+Santa+Monica%2C+CA+90403!5e0!3m2!1sen!2sus!4v1551919860887" allowfullscreen></iframe>
                        </div>
                        <a class="map-footer"  href="https://goo.gl/maps/n2VngTuFiE92">
                            <span>Get Directions</span>
                            <img src="~static/images/arrow-right.svg" class="arrow-direction-left"/>
                        </a>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-2">
                    <p class="footer-list-header">Resources</p>
                    <ul class="footer-list-item">
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                        <li>
                            <a href="/videos">Videos</a>
                        </li>

                        <li>
                            <a href="/e-book">eBooks</a>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-6 col-sm-2">
                    <p class="footer-list-header">Follow Dr. Tyler</p>
                    <ul class="footer-list-item">
                        <li>
                            <a href="">Facebook</a>
                        </li>
                        <li>
                            <a href="">Instagram</a>
                        </li>
                        <!--<li>
                            <a href="">Twitter</a>
                        </li>-->
                        <li>
                            <a href="">YouTube</a>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-6 col-sm-2">
                    <p class="footer-list-header">Contact Dr. Tyler</p>
                    <ul class="footer-list-item">
                        <li>
                            <a href="/contact">
                                Message Dr. Tyler
                            </a>
                        </li>
                        <li>
                            <a href="/contact">
                                Book Appointment
                            </a>
                        </li>
                        <li>
                            <a href="tel:+13108761027">
                                {{user.location.phone}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-12">
                    <a href="https://zenpatient.com/products/grow">
                        <img  src="@/static/images/powered-by.jpg" class="fr logo-footer"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>

import drInfo from "../assets/json/drInfo.js";


export default {
    data(){
        return {
            open_map : false,
            user :  drInfo,
}
    },
    methods: {
        openMap : function(){
            this.open_map = !this.open_map;
            
        }
    }
}

</script>



