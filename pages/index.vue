<template>
    <div>
        
        <new-hero></new-hero>
        <hero-practice v-bind:h1="h1" v-bind:description="description" v-bind:description2="description_2"></hero-practice>
        <philosophy-section></philosophy-section>
        <conditions-treated></conditions-treated>
        <credentials></credentials>
        <first-visit></first-visit>
        <faq></faq>
        <visit-practice v-bind:title="'Make An Appointment'" v-bind:button="'Contact Dr. Tyler'" v-bind:href="'/contact'"></visit-practice>
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
import NewHero from "~/components/NewHero";



export default {
    components: {
        NewHero : NewHero,
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
            h1 : 'Now and Forever Preventative Health',
            description : "Welcome to our clinic! Along with myself, Douglas Tyler M.D., and my partner, health coach Patricia Tawfik, we are dedicated to keeping you healthy for as long as possible. This is the stated mission at Now And Forever Preventative Health Center.",
            description_2 : "We evaluate you from head to toe employing not only a complete battery of conventional tests but also those on the cutting edge of medical science. In this way we are able to not only determine your current state of health but also identify potential future medical problems. Going forward with this information, we will formulate a list of recommendations designed to improve your health now and forever."
        }
    }
}
</script>

<style lang="scss">
  @import 'styles.scss';
</style>

