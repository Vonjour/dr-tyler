<template>
    <div>
        <nav>
            <div class="article-nav-wrapper">
                <div class="float-left logo-section">
                    <a class="logo-link" href="/">
                        <img class="text-logo" src="../static/images/zen-patient-icon.svg"/>
                    </a>
                    <a class="blog-link" href="/">
                        <span class="blog-link-text">LA Longevity Center</span>
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
    </div>

</template>

<script>
export default {
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
