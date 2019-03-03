<template>
    <div>
        <div class="hero-container">
            <img class="scrap-top" src="../static/images/scrap-zenpatient-top-left.png">
            <img class="scrap-middle" src="~/static/scrap-middle-right.png">
            <div class="nav-home-mobile">
                <img class="mobile-logo" src="../static/images/practice-push-icon-words-white.png" />
                <div class="nav-mobile-toggle-wrapper">    
                    <a class="nav-mobile-toggle" v-on:click="openMobileHeader">
                        <span class="toggle-span"></span>
                    </a>
                </div>
                <div class="dropdown-mobile" v-if="mobile_header">
                    <a class="mobile-link" href="https://zenpatient.com/products/grow">Zen Patient Grow</a>
                    <a class="mobile-link" href="https://zenpatient.com/solution">Partner With Us</a>
                    <a class="mobile-link" href="https://zenpatient.com/login">Login</a>
                    <a class="mobile-link" href="https://zenpatient.com/contact/sales">Sign Up</a>

                </div>
            </div>            
            <div class="nav-home">
                <div class="nav-home-links">
                    <a class="nav-home-link" href="https://zenpatient.com/products/grow">Zen Patient Grow</a>
                    <a class="nav-home-link" href="https://zenpatient.com/solution">Partner With Us</a>
                    <a class="nav-home-link" href="https://zenpatient.com/login">Login</a>
                    <a class="nav-home-link signup-nav btn" href="https://zenpatient.com/contact/sales">Sign Up</a>
                </div>

            </div>
            
            <div class="hero-text-container">
                <h3 class="hero-text-top-header">The knowledge center</h3>
                <h1 class="hero-text-header">The knowledge center for healthcare pioneers</h1>
                <p class="learn-more">Learn how the top medical thought leaders are changing the way we deliver medicine.</p>
                <div class="subscribe-section">
                    <signup />
                    <p class="subscribe-text">Stay updated with ZenPatient by signing up for our newsletter</p>
                </div>
            </div>
        </div>


    </div>

</template>

<script>

import Signup from '../components/Signup'

export default {
    components: {
      Signup : Signup
    },
    data () {
        return {
            mobile_header : false,
            email : '',
        }
    },
    methods : {
        openMobileHeader : function(){
            this.mobile_header = !this.mobile_header;
        }
    }

}

</script>