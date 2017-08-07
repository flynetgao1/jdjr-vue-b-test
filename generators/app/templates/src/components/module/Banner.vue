<template>
    <div class="banner">
        <m-info></m-info>
        <m-scroll></m-scroll>
    </div>
</template>


<script>


import scroll from "./Scroll"
import bannerInfo from './BannerInfo'

export default {
    name:"banner",
    components:{
        'm-scroll': scroll,
        'm-info': bannerInfo
    }
}
</script>