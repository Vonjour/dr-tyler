<template>
    <div>
        <article-nav></article-nav>
        <hero-practice v-bind:h1="h1" v-bind:description="description" v-bind:description2="description_2"></hero-practice>
        <philosophy-section></philosophy-section>
        <conditions-treated></conditions-treated>
        <credentials></credentials>
        <first-visit></first-visit>
        <faq></faq>
        <visit-practice v-bind:title="'Make An Appointment'" v-bind:button="'Contact Dr. Lee'" v-bind:href="'/contact'"></visit-practice>
        <mail-signup></mail-signup> 
        <Footer/>

    </div>
</template>

<script>
import ArticleNav from "~/components/ArticleNav";
import HeroPractice from "~/components/HeroPractice";
import PhilosophySection from "~/components/PhilosophySection";
import ConditionsTreated from "~/components/ConditionsTreated";
import Credentials from "~/components/Credentials";
import FirstVisit from "~/components/FirstVisit";
import VisitPractice from "~/components/VisitPractice";
import Footer from "~/components/Footer";



export default {
    components: {
        ArticleNav : ArticleNav,
        HeroPractice : HeroPractice,
        PhilosophySection : PhilosophySection,
        ConditionsTreated : ConditionsTreated,
        Credentials: Credentials,
        FirstVisit : FirstVisit,
        VisitPractice : VisitPractice,
        Footer : Footer
    },
    data(){
        return{
            h1 : 'LA Preventative Medicine Center',
            description : "At the LA Preventative Medicine Center, Dr. Tyler and his team take a data driven and proactive approach to uncovering the root causes of your symptoms. We focus on preparing each patient a personalized care plan based on risk factors for chronic diseases, genes, medical conditions, and the latest scientific research.",
            description_2 : "Our mission is promote chronic disease prevention, increase lifespan, healthspan, and opmitize cognitive, physical and emotional health."
        }
    }
}
</script>

<style lang="scss">
    @import "styles.scss";
</style>
