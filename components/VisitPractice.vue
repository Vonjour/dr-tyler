<template>
    <div>
        <div class="visit-practice-container">
            <div class="v-content">    
                <h3 class="visit-practice-header">{{title}}</h3>
                <a class="white-button" :href="href">{{button}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'title',
        'button',
        'href'
    ]

}
</script>

<style>

</style>
