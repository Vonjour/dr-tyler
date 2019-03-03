<template>
    <div>
        <form id="subscribe" @submit.prevent="formSubmit" class="subscribe-submit arrow-right-submit">
            <input type="email"  placeholder="Enter your email to subscribe" class="btn email-subscribe-btn"/>
            <i class="fa fa-arrow-right submit-icon" aria-hidden="true"></i>
        </form>
    </div>
</template>
