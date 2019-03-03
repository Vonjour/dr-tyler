<template>
    <div>
        <div class="col-xs-6 col-sm-6 fl">
            <div class="faq-container" v-on:click="showFAQ" v-bind:class="{ 'shownFAQ' : show }">
                <h5 class="faq-question">{{question}}</h5>
                <span class="section-open-icon" v-bind:class="{ 'open' : show }"></span>
            </div>
            <div class="faq-container-answer" v-if="show" v-html="answer"></div>
        </div>
    </div>
</template>

<script>
export default {
    props : [
        'question',
        'answer'
    ],
    data(){
        return {
            show: false
        }
    },
    methods:{
        showFAQ : function(){
            this.show = !this.show
        }
    }
}
</script>

<style>

</style>
