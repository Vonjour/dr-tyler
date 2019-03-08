<template>
    <div>
        <div class="content-hero-section">
            <div class="hero-content-wrapper">
                <div class="row">
                    <div class="col-xs-6 col-sm-6">
                        <div class="profile-image-box">
                            <div class="profile-image-wrapper">
                                <div class="physician-profile">    
                                    <img src="~static/images/profile/dr_tyler_white_coat.jpg" class="physician-profile-image"/>
                                </div>
                            </div>
                            <img src="~static/images/blob-orange.png" class="orange-blob" />
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-6">
                        <h1 class="hero-header">{{h1}}</h1>
                        <p class="content-description">{{description}}</p>
                        <p class="content-description">{{description2}}</p>
                        <a class="purple-button oval mt-32" href="/contact">Book You Diagnostic Exam</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['h1', 'description', 'description2']
}
</script>

<style>

</style>