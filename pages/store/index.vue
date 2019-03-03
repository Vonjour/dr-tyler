<template>
    <div>
        <article-nav></article-nav>
        <store-header></store-header>
        <mail-signup></mail-signup>
        <Footer/>
    </div>
</template>

<script>

import ArticleNav from "~/components/ArticleNav";
import StoreHeader from "~/components/StoreHeader"
import VisitPractice from "~/components/VisitPractice";
import Footer from "~/components/Footer";
import MailSignup from "~/components/MailSignup";

export default {
    components : {
        ArticleNav : ArticleNav,
        StoreHeader : StoreHeader,
        Footer : Footer,
        MailSignup : MailSignup
    }
}
</script>

<style>

</style>
