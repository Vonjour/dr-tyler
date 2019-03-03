<template>
    <div>
        <div class="footer-container">
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <a class="map-container" v-bind:class="{'box-shadow-wrap' : open_map }">
                        <div class="map-header">
                            <h3 class="map-location-header">Culver City Office</h3>
                            <p class="map-address">
                                {{user.location.address}}<br/>{{user.location.address_2}}<br/>{{user.location.city_state}}<br/>Phone: {{user.location.phone}}
                            </p>
                            <a v-on:click="openMap" class="map-address" style="color:#3f46ad"><span v-if="!open_map">Show On Map</span><span v-if="open_map">Collapse Map</span></a>
                        </div>
                        <div class="map-frame" v-bind:class="{'show-map' : open_map }">
                            <iframe class="google-map" v-bind:class="{'show-map' : open_map }" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=3831%20Hughes%20Ave.&key=AIzaSyC0avrOptCpQ8A_EdH__O5ed9jcMZ4oY_8" allowfullscreen></iframe>
                        </div>
                        <a class="map-footer"  href="https://www.google.com/maps/place/3831+Hughes+Ave+%23604,+Culver+City,+CA+90232/@34.0222168,-118.4004708,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2ba29346edded:0xacc6ecd60d09fd22!8m2!3d34.0222168!4d-118.3982821">
                            <span>Get Directions</span>
                            <img src="~static/images/arrow-right.svg" class="arrow-direction-left"/>
                        </a>
                    </a>
                </div>
                <div class="col-xs-6 col-sm-2">
                    <p class="footer-list-header">Resources</p>
                    <ul class="footer-list-item">
                        <li>
                            <a href="/my-practice">Dr. Lee's Practice</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                        <li>
                            <a href="/videos">Videos</a>
                        </li>
                        <li>
                            <a href="/store">Store</a>
                        </li>
                        
                        <!--<li>
                            <a href="/video-classes">Video Course</a>
                        </li>
                        <li>
                            <a href="/e-book">eBooks</a>
                        </li>-->
                    </ul>
                </div>
                <div class="col-xs-6 col-sm-2">
                    <p class="footer-list-header">Follow Dr. Lee</p>
                    <ul class="footer-list-item">
                        <li>
                            <a href="https://www.facebook.com/samuelleemd">Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/drsamuellee/">Instagram</a>
                        </li>
                        <!--<li>
                            <a href="">Twitter</a>
                        </li>-->
                        <li>
                            <a href="https://www.youtube.com/watch?v=lCYPFWSjo7w">YouTube</a>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-6 col-sm-2">
                    <p class="footer-list-header">Contact Dr. Lee</p>
                    <ul class="footer-list-item">
                        <li>
                            <a href="/contact">
                                Message Dr. Lee
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
                        <img src="@/static/images/powered-by.jpg" class="fr logo-footer"/>
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

