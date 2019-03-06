<template>
    <div>    
        <article-nav></article-nav>
        <hero-home></hero-home>
        <featured-content></featured-content>
        <visit-practice v-bind:title="'Visit My Practice'" v-bind:button="'Learn More'" v-bind:href="'/my-practice'"></visit-practice>
        <Footer/>
    </div>

</template>


<script>
    import ArticleNav from "~/components/ArticleNav";
    import HeroHome  from "~/components/HeroHome";
    import FeaturedContent  from "~/components/FeaturedContent";
    import VisitPractice from "~/components/VisitPractice";
    import MailSignup from "~/components/MailSignup";
    import Footer from "~/components/Footer";

     export default {
        components: {
            ArticleNav : ArticleNav,
            HeroHome : HeroHome,
            FeaturedContent : FeaturedContent,
            VisitPractice : VisitPractice,
            MailSignup: MailSignup,
            Footer : Footer
        },
    }
</script>

<style lang="scss">
  @import 'styles.scss';
</style>
