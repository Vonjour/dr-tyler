<template>
    <div class="conditions-content-wrapper">
        <div class="row">
            <div class="col-xs-12 col-sm-12">
                <div class="condition-content">
                    <h2 class="featured-content-header centered">About Dr. Tyler</h2>
                    <p class="content-description centered">Are you seeking a professional who will thoroughly evaluate the root causes of your medical  conditions, and utilize state of the art knowledge to augment your current and future health status? Dr. Tyler has over three decades of experience treating thousands of patients, designing strategies and tactics to improve their lifespan, healthspan, and emotional well-being. </p>
                </div>
            </div>
        </div>
		<div class="row mt-100">
			<div class="col-sm-6 col-md-7 col-xs-12">
				<div class="info-section-text-left">
					
					<h2 class="credential-subheader" style="text-align: left!important;">Explore Dr. Tyler's credentials</h2>
					<p class="credential-list-item content-description"><img src="~static/images/check-icon.svg" /> Over 30 Years of Clinical Experience in Private Practice</p>
                    <p class="credential-list-item content-description"><img src="~static/images/check-icon.svg" /> Lead Researcher on the relationship between cholesterol and the development of heart disease.</p>
                    <p class="credential-list-item content-description"><img src="~static/images/check-icon.svg" /> Active Researcher on the relationship between cholesterol and the development of heart disease.</p>

                    <p class="credential-list-item content-description"><img src="~static/images/check-icon.svg" /> Lecturer on athlerossclerosis</p>
                    <p class="credential-list-item content-description"><img src="~static/images/check-icon.svg" /> Medical Residency at St Mary's Medical Center, Long Beach California and UCLA/Harbor General County Hospital.</p>
                    <p class="credential-list-item content-description"><img src="~static/images/check-icon.svg" /> Medical Director of skilled nursing facilities, treating patients with end stage dementia and Alzheimer's Disease. </p>
					<p class="credential-list-item content-description"><img src="~static/images/check-icon.svg" /> MD SUNY Medical School, Downstate Medical Center</p>
                    <p class="credential-list-item content-description"><img src="~static/images/check-icon.svg" /> Board Certified Internal Medicine</p>
					

					<p class="connect-message">Would you like to connect with {{user.location.name}}? <a href="/contact" class="connect-message-link">Visit message center <img src="/images/arrow-right.svg" alt="right-arrow"  /></a></p>
				</div>
			</div>
			<div class="col-sm-6 col-md-5 col-xs-12">
				<div class="profile-image-box">
                    <div class="profile-image-wrapper">
                        <div class="physician-profile">
                            <img src="~static/images/profile/dr_tyler_phone.jpg" class="physician-profile-image">
                        </div>
                    </div> 
                    <img src="~static/images/blob-green.png" class="credentials-green-blob">
                </div>
			</div>
		</div>
	</div>
</template>

<script>
import drInfo from '../assets/json/drInfo';

export default {
    data(){
        return {
            user : drInfo, 
            
        }
    }
}
</script>

<style>

</style>
