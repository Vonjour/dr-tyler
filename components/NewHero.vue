<template>
    <section class="hero-container-new">
        <nav class="clear">
            <div class="article-nav-wrapper">
                <div class="float-left logo-section">
                    <a class="logo-link" href="/">
                        <img class="text-logo" src="../static/images/zen-patient-icon.svg"/>
                    </a>
                    <a class="blog-link" href="/">
                        <span class="blog-link-text">Now and Forever Health </span>
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
								The Premiere Preventative Medicine Center 
							</h1>
							<p class="hero-text-info">
								Glee makes it easy speak to a doctor, get your
								medication, and access the most effective and
								comprehensive therapy plans designed by leading
								integrative psychiatrists and neurologists.
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
