<template>
    <div>
        <div class="featured-content-container">
            <div class="row">
                <div class="col-xs-12 col-sm-12">
                    <div class="condition-content">
                        <h2 class="featured-content-header centered">Visiting My Practice</h2>
                        <p class="content-description centered">I work directly with patients in my Los Angeles based private practice.</p>
                    </div>
                </div>
            </div>
            
            <div class="row mt-100">
                <div class="col-xs-12 col-sm-6">
                    <h2 class="featured-content-header">What can I expect on my first visit?</h2>
                    <p class="content-description">Prior to our first visit, we can connect on the phone for a brief 5-10 minute conversation to ensure that we are a good fit to work together. You may also fill out an initial intake form and send it back to me so we can save time for our actual visit, and I can have an idea of your medical history prior to meeting</p>
                    <p class="content-description">During our first visit, I will strive to be completely present with you. This means, I will not be typing and you will have my undivided attention and care.</p>
                    <p class="content-description">We may utilize breath work to arrive in a relaxed and present state of being.</p>
                    <p class="content-description">We will then proceed to engage in open and honest dialogue and everything we speak about will remain confidential.</p>
                    <p class="content-description">We will explore your physical, emotional, mental, and spiritual health and examine areas of strength, and areas that we may want to bring into balance. We will discuss symptoms, without placing you into a box of a diagnosis. When we feel there is a mutual understanding of the desired outcome of treatment we will formulate a realistic, specific treatment plan geared towards eradicating symptoms by addressing the root cause. We will ensure that you have the adequate knowledge, tools, medication (if necessary), supplements, and support to make progress towards your goal of becoming the best version of yourself.</p>
                </div>
                <div class="col-xs-12 col-sm-6">
                        <div class="happy-patient-wrapper">
                            <div class="happy-patient-pink"></div> 
                            <img src="~static/images/blob-yellow.png" class="happy-patient-yellow-blob"> 
                            <img src="~static/images/blob-green.png" class="happy-patient-green-blob">
                        </div>


                </div>
            </div>
            <div class="row mt-100">
                <div class="col-xs-12 col-sm-12">
                    <div class="condition-content">
                        <h2 class="featured-content-header centered">Treatment Fees</h2>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-12">
                    <div class="pricing-wrap-medium">
                        <div class="pricing-grid">
                            <div class="pricing-grid-items">
                                <p class="pricing-copy pricing-title">Initial Consult (60-90 minutes) $400</p> <p class="pricing-copy">Starting with our first session, we’ll clarify what your specific needs are and how to address them.</p>
                            </div>
                            <div class="pricing-grid-items">
                                <p class="pricing-copy pricing-title">Follow Up (30 minutes) $200</p> <p class="pricing-copy">I work with you directly to put you on a path to sustained wellbeing.</p>
                            </div>
                            <div class="pricing-grid-items pricing-end">
                                <p class="pricing-copy pricing-title">15-Minute Follow Up — As varies</p> <p class="pricing-copy">There may also be occasion for a brief phone follow up.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-100">
                <div class="col-xs-12 col-sm-12">
                    <div class="condition-content">
                        <h2 class="faq-header centered">Frequently Asked Questions</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <faq></faq>
            </div>
        </div>
    </div>    
</template>

<script>
import FAQ from '~/components/FAQ';

export default {
    components: {
        faq : FAQ,
    }
}
</script>

<style>

</style>
