<template>
  <div>
    <article-nav></article-nav>
    <articles-home />
    <mail-signup />
    <Footer/>
  </div>
</template>

<script>
  import ArticleNav from '~/components/ArticleNav';
  import Navbar from '~/components/Navbar'
  import Hero from '~/components/Hero'
  import ArticlesHome from '~/components/ArticlesHome'
  import MailSignup from '~/components/MailSignup'
  import Footer from '~/components/Footer.vue'
import drInfo from '../../assets/json/drInfo';

  export default {
    components: {
      ArticleNav : ArticleNav,
      Navbar : Navbar,
      Hero : Hero,
      ArticlesHome : ArticlesHome,
      MailSignup : MailSignup,
      Footer : Footer
    },
    head(){
      return {
        title:  drInfo.location.name + "'s Psychiatry Blog",
        meta: [
          { hid : "description", name: "descritpion", content: drInfo.location.name + "'s Psychiatry Blog" }
        ]

      }
    },
  }
</script>

<style lang="scss">
  @import 'styles.scss';
</style>


