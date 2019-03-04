<template>
    <div>
        <div class="featured-content-container">
            <div class="row">
                <div class="col-xs-12 col-sm-12">
                    <div class="condition-content">
                        <h2 class="featured-content-header centered">Visiting Our Practice</h2>
                        <p class="content-description centered">Dr. Tyler and his wellness team work directly with patients in their Wellness Center in Santa Monica, CA.</p>
                    </div>
                </div>
            </div>
            
            <div class="row mt-100">
                <div class="col-xs-12 col-sm-6">
                    <h2 class="featured-content-header">What can I expect on my first visit?</h2>
                    <p class="content-description">When a patient first visits the LA Preventative Medicine Clinic, our team will do a thorough medical examination and comprehensive genetic analysis and screen for the most relevant biomarkers. Patients can expect to spend more than an hour with Dr. Tyler and his team in this initial visit.</p>
                    <a href="/contact" class="purple-button oval mt-32">Book You Diagnostic Exam</a>
                </div>
                <div class="col-xs-12 col-sm-6">
                        <div class="happy-patient-wrapper">
                            <div class="happy-patient-dr-tyle-patient"></div> 
                            <img src="~static/images/blob-yellow.png" class="happy-patient-yellow-blob" style="z-index:1"> 
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
