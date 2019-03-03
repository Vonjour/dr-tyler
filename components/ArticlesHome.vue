<template>
    <div>
        <div class="articles-container">
            <!--<h1 class="articles-header">Fresh Off the Press</h1>-->
            <div class="row" id="#articles">
                <article-listing v-for="(article, index) in articles" :key="article.index" v-bind:article="article" v-bind:index="index" class="w100"></article-listing>
            </div>
        </div>
    </div>
</template>

<script>

import ArticleListing from '../components/ArticleListing.vue';
import {mapGetters} from 'vuex'
import Articles from '../static/json/articles.js';

export default {    
    components : {
        ArticleListing : ArticleListing
    },
    data(){
        return{
            articles : Articles
        }
    }
}

</script>