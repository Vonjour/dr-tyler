<template>
    <div>
        <article-nav></article-nav>
        <hero-practice  v-bind:h1="drInfo.location.name + ' ' + condition.name" v-bind:description="condition.heroText"></hero-practice>
        <treatment-section v-bind:condition="condition"></treatment-section>
        <philosophy-section></philosophy-section>
        <conditions-treated></conditions-treated>
        <credentials></credentials>
        <first-visit></first-visit>
        <faq></faq>
        <visit-practice v-bind:title="'Make An Appointment'" v-bind:button="'Contact Dr. Tyler'" v-bind:href="'/my-practice'"></visit-practice>
        <mail-signup></mail-signup> 
        <Footer/>
    </div>
</template>

<script>

import { getters } from 'vuex';
import drInfo from '~/assets/json/drInfo';
import ArticleNav from '~/components/ArticleNav.vue';
import PhilosophySection from '~/components/PhilosophySection.vue';
import MailSignup from '~/components/MailSignup.vue';
import HeroPractice from '~/components/HeroPractice.vue';
import ConditionsTreated from "~/components/ConditionsTreated.vue";
import Credentials from "~/components/Credentials.vue";
import FirstVisit from "~/components/FirstVisit.vue";
import VisitPractice from "~/components/VisitPractice.vue";
import Footer from "~/components/Footer.vue";
import TreatmentSection from "~/components/TreatmentInfo.vue";


export default {
  components: {
    MailSignup: MailSignup,
    Footer: Footer,
    ArticleNav: ArticleNav,
    HeroPractice : HeroPractice,
    PhilosophySection : PhilosophySection,
    ConditionsTreated : ConditionsTreated,
    Credentials : Credentials,
    FirstVisit : FirstVisit,
    VisitPractice : VisitPractice,
    Footer : Footer,
    TreatmentSection : TreatmentSection
  },
  head(){
    return{
      title: this.drInfo.target_geo + ' ' + this.condition.name + ' Specialist',
        meta: [
          { hid : "description", name: "descritpion", content: this.condition.heroText },
          { hid: 'keywords', name: 'keywords', content : this.condition.name + ', psychiatrist, treatment'}
          ]
    }
  },

  data: function() {
    return {
      profileImage : drInfo.blogProfile,
      drInfo : drInfo
      
    };
  },
  asyncData({ params, error, payload, store}) {
    if (payload) return { condition : payload }
    else {
        return { 
          condition : store.getters.getServicesBySlug(params.condition)
          //article: store.getters.getArticleBySlug(params.condition)
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
  @import 'styles.scss';
</style>
