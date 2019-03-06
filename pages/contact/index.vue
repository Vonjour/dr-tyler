<template>
    <div>
        <article-nav></article-nav>
        <contact/>
        <Footer/>
    </div>
</template>

<script>
import ArticleNav from "~/components/ArticleNav";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";

export default {
    components: {
        ArticleNav : ArticleNav,
        Contact : Contact,
        Footer : Footer,

    }
}
</script>

<style lang="scss">
  @import 'styles.scss';
</style>

