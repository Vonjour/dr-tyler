<template>
    <div>
        <div class="video-header content-hero-section">
            <div class="row">
                <div class="col-sm-12 col-xs-12">
                    <h2 class="featured-content-header">Video Knowledge Center</h2>
                </div>
            </div>
        </div>
        <div class="video-section-container" v-for="video in videos" :key="video">
            <div class="row">
                <div class="col-sm-6 col-xs-12 centered">
                    <!--<div class="video-thumbnail" :style="{'background-image': 'url(' + require('../static/images' + video.image_path) + ')'}">
                        <div class="you-tube-halftone">

                        </div>
                    </div>-->
                
                </div>
                <div class="col-sm-6 col-xs-12 centered rel">
                    <div class="video-text-container">    
                        <div class="video-text-wrapper">
                            <h2 class="video-title">{{video.name}}</h2>
                            <p class="video-summary map-address">{{video.summary}}</p>
                            <a class="watch-video-button c-button" v-bind:href="'/videos/' + video.url_path"><span>Watch Video</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="-296 390 35 35" width="20" height="20" aria-hidden="" class="youtube-player-cta__button-text u-margin-left--small svg-replaced" shape-rendering="geometricPrecision"><path d="M-265.4 396.3c1.9 0 3.4 1.5 3.4 3.4v16.5c0 1.9-1.5 3.4-3.4 3.4h-26.2c-1.9 0-3.4-1.5-3.4-3.4v-16.5c0-1.9 1.5-3.4 3.4-3.4h26.2zm.5 20v-16.5c0-.3-.2-.5-.5-.5h-26.2c-.3 0-.5.2-.5.5v16.5c0 .3.2.5.5.5h26.2c.3 0 .5-.3.5-.5zm-17.5-12.2c0-1 .8-1.5 1.6-1.1l7.1 3.8c1 .5 1 1.8 0 2.3l-7.1 3.8c-.8.4-1.6-.1-1.6-1.1v-7.7z"></path></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import drInfo from '~/assets/json/drInfo';

export default {
    data(){
        return{
            videos : drInfo.videos
        }
    }
}
</script>

<style>

</style>

