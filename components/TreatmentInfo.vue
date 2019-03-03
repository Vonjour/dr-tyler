<template>
    <div>
        <div class="conditions-content-wrapper">
            <div class="row">
                <div class="col-xs-12 col-sm-12">
                    <div class="condition-content">
                        <h2 class="featured-content-header centered"> {{condition.name}}</h2>
                        <p class="content-description centered">{{condition.program_description}}</p>
                    </div>
                </div>
            </div>

            <div class="">
                <div v-for="(step, index) in condition.steps" v-bind:key="index">
                    <div class="condition-step-wrapper">
                        <div class="col-sm-6 col-xs-12" v-bind:class="{'fl' : index % 2 === 0, 'fr' : index % 2 !== 0 }" style="position:relative;">         
                            <h2 class="step-title">{{index + 1}}. {{step.title}}</h2>
                            <p class="content-description">{{step.description}}</p>
                            
                        </div>
                        <div class="col-sm-6 col-xs-12" v-bind:class="{'fr' : index % 2 === 0, 'fl' : index % 2 !== 0 }">
                            <div class="pricing-wrap-medium">
                                <div class="pricing-grid">
                                    <h3 class="step-title" style="text-align:center; margin-top:0px;">{{step.checklist_title}}</h3> 
                                    <div class="list-grid-items" v-for="(item, index) in step.checklist" v-bind:key="index">
                                        <p class="pricing-copy pricing-title">{{item}}</p>
                                    </div>
                                </div>
                                <img src="~/static/images/blob-yellow.png" class="happy-patient-yellow-blob background" v-if="index === 0">
                                <img src="~/static/images/blob-green.png" class="happy-patient-green-blob background" v-if="index === 0">
                                <img src="~/static/images/blob-yellow.png" class="fixed-content-yellow-tracks background" v-if="index === 1">
                                <img src="~/static/images/blob-blue.png" class="fixed-content-blue-blob background" v-if="index === 2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-80">
                <div class="col-xs-10 col-sm-10">
                    <h2 class="credential-subheader" style="font-size:22px;">{{condition.name}} Q&A</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-10 col-sm-10">
                    <div class="condition-question" v-for="(question, index) in condition.questions" v-bind:key="index">
                        <h3 class="feature-link" style="text-decoration:none">{{question.question}}</h3>
                        <div class="content-description" v-html="question.answer"></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: ['condition']
}
</script>

<style>

</style>
