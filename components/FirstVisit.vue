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
                    <p class="content-description">When a patient first visits the LA Longevity, our team will do a thorough medical examination and comprehensive genetic analysis, and screen for the most relevant biomarkers to understand your body's biology. Patients can expect to spend more than an hour with Dr. Tyler and his team in this initial visit.</p>
                    <a href="/contact" class="purple-button oval mt-32">Book You Diagnostic Exam</a>
                </div>
                <div class="col-xs-12 col-sm-6">
                        <div class="happy-patient-wrapper">
                            <div class="happy-patient-dr-tyle-patient"></div> 
                            <img src="~static/images/blob-yellow.png" class="happy-patient-yellow-blob" style="z-index:1;display:none;"> 
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
                                <p class="pricing-copy pricing-title">Initial Consult (60-90 minutes) $995</p> <p class="pricing-copy">Starting with our first session, our team will perform a thorough physical examination, and complete a host of preventative care diagnostic tests.</p>
                            </div>
                            <div class="pricing-grid-items">
                                <p class="pricing-copy pricing-title">Review (60 minutes) $499</p> <p class="pricing-copy">Our team will analyze your diagnostic results, and present an individualized treatment plan and therapies.</p>
                            </div>
                            <div  class="pricing-grid-items pricing-end">
                                <p class="pricing-copy pricing-title">Follow Up — As varies $250</p> <p class="pricing-copy">Our team will continue to monitor your biomarkers, and work with you on fine tuning your treatment plan to insure sustained peak health.</p>
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
