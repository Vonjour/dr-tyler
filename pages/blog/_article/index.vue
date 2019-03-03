<template>
  <div class="article-section">
    <article-nav></article-nav>
    <article-content :article="article" :profileImage="profileImage"></article-content>
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
      title: this.article.title + ', by ',
      meta: [
        { hid : 'description', name: 'description', content: this.article.summary },
        { hid : 'keywords', name : 'keywords', content : this.article.keywords }
      ]

    }
  },
  data: function() {
    return {
      profileImage : drInfo.blogProfile,
      article_slug: this.$route.params.article,

    };
  },
  asyncData({ params, error, payload, store}) {
    if (payload) return { article : payload }
    else {
        return { 
          article: store.getters.getArticleBySlug(params.article)
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

