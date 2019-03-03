<template>
    <div>
        <div class="content-hero-section">
            <div class="hero-content-wrapper mb136"> 
              
                <div class="row">
                    <div class="col-sm-6 col-xs-12">
                        <div class="header-content-container-left">
                            <h1 class="content-article-title">{{article.title}}</h1>
                            <p class="content-description">{{article.summary}}</p>
                        </div>
                    </div>
                    
                    <div class="col-sm-6 col-xs-12">
                        <div class="header-content-container-right">
                            <img class="content-header-image" v-bind:src="require('../static/images/' + article.featured_image)" />
                        </div>
                    </div>

                </div>
            </div>
            <div class="hero-content-wrapper">
                <div class="row mlr0">
                    <div class="post-meta">
                        
                        <div class="post-meta-share float-sm-right float-xs-left">
                            <social-sharing :url="$route.query.page" :title="article.title" :description="article.summary" :quote="article.description" inline-template>
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
                            <span class="content-description vertical-enter-byline">By , {{article.author}}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="article-post">
            <div class="article-post-inner-wrapper">
                <div class="article-post-content-wrapper">
                    <div class="t-dropcap" v-html="article.body">
                        
                    </div>
                    <div class="join-zenpatient-container container">
                        <div class="row">
                            
                            <div class="col-xs-12 col-sm-12">    
                                <h2 class="join-cta">Connect with Dr. Lee</h2>
                                <p class="value-prop">Work with Dr. Lee to learn his integrative and spiritual approach to not only treat mental illness, but to ultimately promote physical, mental, and energetic wellness.</p>
                                <a class="get-started-cta" href="/contact">
                                    <span>Get started</span>
                                    <svg height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 24">
								        <path fill="#323648" d="M1.032 14.192l23.628-.413-7.08 7.343 2.388 2.31 11.03-11.444L19.575.936l-2.307 2.393 7.333 7.09-23.628.413z"></path>
							        </svg>
                                    
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


export default {
    name: 'ArticleContent',
    props: ['article', 'profileImage'],

    data : function () {
        return {
            baseUrl : process.env.baseUrl
            //article_content : this.article
        }
    },
     mount(){
         console.log(profileImage)
     }
}
</script>
