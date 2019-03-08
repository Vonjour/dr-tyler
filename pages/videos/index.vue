<template>
    <div>
        <article-nav></article-nav>
        <video-header></video-header>
        <mail-signup></mail-signup> 
        <Footer/>

    </div>
</template>

<script>
import ArticleNav from "~/components/ArticleNav";
import VideoHeader from "~/components/VideoHeader";
import Footer from "~/components/Footer";
import MailSignup from "~/components/MailSignup";
import drInfo from '~/assets/json/drInfo';


export default {
    head(){
        return {
            title: 'Videos from ' + drInfo.location.name,
            meta: [
                { hid : 'description', name: 'description', content: "Dr. Lee's videos on Spiritual Psychiatry" },

            ]

            }
    },
    components: {
        ArticleNav : ArticleNav,
        VideoHeader : VideoHeader,
        Footer : Footer,
        MailSignup : MailSignup

    },
    
}
</script>

<style lang="scss">
    @import "styles.scss";
</style>
