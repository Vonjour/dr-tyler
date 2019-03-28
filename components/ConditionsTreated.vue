<template>
    <div>
        <div class="conditions-content-wrapper" style="border:none!important;">
            <div class="row">
                <div class="col-xs-12 col-sm-12">
                    <div class="condition-content">
                        <h2 class="featured-content-header centered" >The Pillars of Prevention</h2>
                        <p class="content-description centered">To prevent illness, it is helpful to know illnesses of which you might be susceptible. To assess this, we perform well researched state-of-the-art genetic tests and biomarkers that could predispose you to heart attacks, Alzheimer’s disease and a variety of cancers and other diseases. Once your risk is identified, we will design a thorough preventative health regiment to attenuate the health issues we have identified.
</p>
                    </div>
                </div>
            </div>
            
            <div class="row mt20 fixed-content-width">
                <img src="~static/images/blob-yellow.png" class="fixed-content-yellow-tracks"/>
                <img src="~static/images/blob-blue.png" class="fixed-content-blue-blob" />
                <div class="col-sm-12 mt-20">
                    <div class="row mt-20">
                    

                        <div class="col-sm-6 col-md-6 col-xs-12 wrapper-wrapper" v-for="(condition, index) in user.conditions" :key="condition.index"  v-bind:index="index">
                            <div class="condition-cell" :style="{ backgroundImage: 'url(' + require('@/assets/'+ condition.img ) + ')' }">
                            
                            
                                <a :href="'/services/' + condition.path" style="height:100%; width: 100%;display: block;">
                                    <div class="condition-name-wrapper">
                                        <p class="condition-name">{{condition.name}}</p>
                                            
                                        <a :href="user.baseUrl + 'services/' + condition.path" class="condition-link-text" >Learn More </a>
                                          
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

import drInfo from '../assets/json/drInfo';

export default {
    data(){
        return {
            user : drInfo, 
            
        }
    }
}
</script>

<style>

</style>
