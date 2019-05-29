<template>
    <section class="hero-container-new">
        <nav class="clear">
            <div class="article-nav-wrapper">
                <div class="float-left logo-section">
                    <a class="logo-link" href="/">
                        <img class="text-logo" src="../static/images/zen-patient-icon.svg"/>
                    </a>
                    <a class="blog-link" href="/">
                        <span class="blog-link-text">The LA Longevity Health Center</span>
                    </a>
                </div>
                <div class="float-right link-section">
                    <ul class="nav-list">
                        <li class="nav-item">
                            
                        </li>
                        <li class="nav-item">
                            <a class="link" href="/blog">
                                Blog
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="link" href="/contact">
                                Contact Dr. Tyler
                            </a>
                        </li>
                    </ul>
                    <div class="nav-mobile-toggle-wrapper display-nav-article-page" v-on:click="openMobileHeader">
                        <a class="nav-mobile-toggle">
                            <span class="toggle-span"></span>
                        </a>
                    </div>
                </div> 
            </div>
        </nav>
        <div class="dropdown-mobile" v-if="mobile_header">
            
            <a class="mobile-link link" href="/blog">Blog</a>
            <a class="mobile-link link" href="/contact">Contact Dr. Tyler</a>
        </div>
			<div class="hero-background-image">
				<div class="hero-image"></div>
			</div>
			<div class="container-text">
				<div class="row">
					<div class="col-sm-7 col-xs-12">
						<div class="hero-text-section">
							<h1 class="main-header-hero">
								LA's Premiere Longevity Health Center 
							</h1>
							<p class="hero-text-info">
								At the LA Longevity Center, we seek to identify and address the root causes of our patient's health concerns, by looking at the body as a whole integrated system and using the most data driven approaches to understanding our patient health conditions. We use the latest scientific evidence and consider a variety of factors — such as current and past medical problems, genetics, and nutritional patterns — to tailor therapies for each patient in order to achieve optimal health.
							</p>
						</div>
					</div>
					<div class="col-sm-5 col-xs-12"></div>
				</div>
			</div>
		</section>
</template>

<script>

import ArticleNav from "~/components/ArticleNav";

export default {
    components: {
        ArticleNav : ArticleNav
    },
     data () {
        return {
            mobile_header : false,
        }
    },
    methods : {
        openMobileHeader : function(){
            this.mobile_header = !this.mobile_header
        }
    }
}
</script>

<style>

</style>
