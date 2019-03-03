<template>
    <div>
        <article-nav />
        <div class="content-hero-section">
            <div class="main-video-container">   
                <div class="video-info-section">
                    <div class="row">
                        <div class="col-xs-12 col-sm-7">
                            <div class="video-info-text">
                                <h2 class="video-title">{{video_content.name}}</h2>
                                <p class="map-address">{{video_content.summary}}</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-5">
                            
                            
                        </div>
                    </div>

                    <div class="post-meta fl mt-32">
                        
                        <div class="post-meta-share float-sm-right float-xs-left">
                            <social-sharing :url="$route.query.page" :title="video_content.name" :description="video_content.summary" :quote="video_content.summary" inline-template>
                                <div>    
                                    <network network="twitter">

                                        <svg xmlns="http://www.w3.org/2000/svg" class="share-icon" viewBox="0 0 31 27" fill="#a8a9b0" alt="Share to Twitter" title="Share to Twitter"><path fill-rule="evenodd" d="M21.36.226c-3.497 0-6.326 2.907-6.326 6.52 0 .482.069.98.155 1.48-5.16-.258-9.875-2.804-13.029-6.813-.566 1.015-.874 2.099-.874 3.286a6.543 6.543 0 0 0 2.828 5.42 5.948 5.948 0 0 1-2.863-.827v.086c0 3.149 2.16 5.764 5.075 6.4a6.774 6.774 0 0 1-1.663.207c-.377 0-.772-.034-1.2-.086.806 2.598 3.171 4.456 5.914 4.507-2.297 1.859-4.92 2.788-7.851 2.788-.566 0-1.08-.018-1.526-.086 2.931 1.96 6.171 2.924 9.703 2.924 2.263 0 4.354-.361 6.326-1.1 3.942-1.463 6.651-3.975 8.674-7.192 2.023-3.2 3-6.744 3-10.237 0-.378 0-.67-.017-.843a13.793 13.793 0 0 0 3.171-3.372 12.14 12.14 0 0 1-3.634 1.015c1.371-.86 2.28-2.047 2.777-3.595a12.226 12.226 0 0 1-4.011 1.582C24.737.914 23.177.226 21.36.226z"></path></svg>

                                    </network>
                                    <network network="facebook">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 27" class="share-icon" alt="Share to Facebook" title="Share to Facebook"><path d="M24.541.226H1.673C.884.226.25.862.25 1.654v22.95c0 .792.634 1.428 1.423 1.428H13.98v-9.995h-3.36v-3.871h3.36V9.292c0-3.337 2.04-5.144 4.989-5.144 1.406 0 2.64.086 3 .155v3.475h-2.074c-1.612 0-1.903.757-1.903 1.893v2.495h3.823l-.497 3.87h-3.326v9.996h6.548c.789 0 1.423-.636 1.423-1.428V1.654c0-.792-.634-1.428-1.423-1.428z"></path></svg>
                                    </network>

                                    <network network="linkedin">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 27" class="share-icon" alt="Share to LinkedIn" title="Share to LinkedIn"><defs><path d="M0 1.207h6.199v6.092H0z"></path></defs><g fill-rule="evenodd"><path d="M.61 26.825h5.513V9.206H.61z"></path><g transform="translate(.286 -.5)"><path d="M3.08 7.299h-.034C1.196 7.299 0 5.943 0 4.254c0-1.728 1.234-3.047 3.116-3.047 1.887 0 3.049 1.319 3.083 3.047 0 1.689-1.196 3.045-3.118 3.045"></path>
        </g><path d="M26 26.825h-5.513v-9.427c0-2.367-.797-3.986-2.793-3.986-1.52 0-2.43 1.095-2.828 2.145-.147.377-.182.898-.182 1.428v9.84h-5.51s.07-15.968 0-17.62h5.51v2.496c.735-1.203 2.043-2.909 4.97-2.909 3.625 0 6.346 2.518 6.346 7.93v10.103z"></path></g></svg>
                                    </network>
                                </div>
                            </social-sharing>
                        </div>
                        <div class="post-author-info float-left">
                            <div class="logo-image-post" :style="{'background-image': 'url(' + require('~/static/images/profile/dr-lee-blog.jpg') + ')'}"></div>
                            <span class="content-description vertical-enter-byline">By {{video_content.author}}</span>
                        </div>
                    </div>
                </div>
                <div class="main-video-wrapper" v-html="video_content.embed_html"></div>
            </div>

        </div>
        <mail-signup></mail-signup>
        <Footer/>
    </div>

</template>

<script>

import { getters } from 'vuex';
import Navbar from "~/components/Navbar";
import Hero from "~/components/Hero";
import ArticlesHome from "~/components/ArticlesHome";
import MailSignup from "~/components/MailSignup";
import Footer from "~/components/Footer";
import ArticleContent from "~/components/ArticleContent";
import ArticleNav from "~/components/ArticleNav";
import drInfo from '~/assets/json/drInfo';

export default {
  components: {
    Navbar: Navbar,
    MailSignup: MailSignup,
    Footer: Footer,
    ArticleContent: ArticleContent,
    ArticleNav: ArticleNav,
    Footer: Footer
  },
  head(){
    return {
      title: this.video_content.name + ' by ' + drInfo.location.name,
      meta: [
        { hid : 'description', name: 'description', content: this.video_content.summary },
      ]

    }
  },
  data: function() {
    return {
      profileImage : drInfo.blogProfile,
      video_slug: this.$route.params.video,
    };
  },
  asyncData({ params, error, payload, store}) {
    if (payload) return { video_content : payload }
    else {
        return { 
          video_content : store.getters.getVideoBySlug(params.video)
        }
    };
  },
  computed: {
    //article: function() {
    //console.log(this.$store.getters.getArticleBySlug(this.article_slug));
    //return this.$store.getters.getArticleBySlug(this.article_slug);
    //}
  },

};
</script>

<style lang="scss">
@import "styles.scss";
</style>
