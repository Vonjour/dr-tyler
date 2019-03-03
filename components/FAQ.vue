<template>
        <div class="faq-wrapper">
            <faq-container v-for="(faq,index) in user.faqs" :key="index" v-bind:answer="faq.answer" v-bind:question="faq.question" v-bind:index="index"></faq-container>
        </div>

</template>
<script>

import drInfo from '../assets/json/drInfo';
import FaqContainer from '../components/FaqContainer';

export default {
    data(){
        return {
            user : drInfo, 
            
        }
    },
    components: {
        FaqContainer : FaqContainer
    }
}
</script>

<style>

</style>
