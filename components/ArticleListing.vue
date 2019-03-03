<template>
    <div>
        <a v-if="index == 0" class="col-xs-12 col-sm-12 tdnone article-hover" style="position:relative;" v-bind:href="'/blog/' + article.slug">
            <div class="full-article-container" @mouseover="isActive" @mouseleave="isActive">
                
                <a v-bind:href="'/blog/' + article.slug" class="thumbnail-image-large" :style="{'background-image': 'url(' + require('../static/images/' + article.featured_image) + ')'}">
                    
                </a>
                <div class="row">
                    <div class="col-sm-6">

                    </div>
                    <div class="col-md-6 col-xs-12">
                        <div class="large-article-text-container">
                            <h1 class="large-article-title">{{article.title}}</h1>
                            <p class="date">{{article.published}}</p>
                            <h3 class="article-tile-description">{{article.summary}}</h3>
                            <div class="large-article-bottom">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <transition name="fade">
                <div class="article-blob blob-turquoise"></div>
            </transition>
        </a>
        
        <a v-else class="col-sm-6 col-lg-4 col-xs-12 tdnone article-hover" v-bind:href="'/' + article.slug" style="position:relative;">
            <div class="regular-article-container">
                <a class="thumbnail-image" v-bind:style="{backgroundImage: 'url(' + article.featured_image + ')'}"></a>
                <div class="details">
                    <h2 class="details-title">{{article.title}}</h2>
                    <h3 class="article-tile-description">{{article.summary}}</h3>
                </div>
            </div>
            <div class="article-blob" v-bind:class="{ regularblob: index % 2 == 0, regularblobodd: index % 2 !== 0 && index % 3 !== 0, regularbloblast: index % 2 !== 0 && index % 3 == 0}"></div>
        </a>
        
    </div>

</template>

<script>
    export default {
        props : [
            'article',
            'index'
        ],
        data : function() {
            return {
                active : false
            }
        },
        methods: {
            isActive : function(){
                this.active = !this.active;
                console.log(this.active);
            }
        }
    }
</script>