<template>
    <div :class="'w '+ (BannerInfoData.status==2?'login': 'unlogin')">
        <div class="banner-left">
            <div class="bg"></div>
            <m-l-unlogin v-if="BannerInfoData.status!=2" :infoData="BannerInfoData" class="hide"></m-l-unlogin>
            <m-l-login v-if="BannerInfoData.status==2" :infoData="BannerInfoData" class="hide"></m-l-login>
        </div>
        <div class="banner-right">
            <div class="bg"></div>
            <m-r-unlogin v-if="BannerInfoData.status!=2" :infoData="BannerInfoData"></m-r-unlogin>
            <m-r-login v-if="BannerInfoData.status==2" :infoData="BannerInfoData"></m-r-login>
        </div>
    </div>
</template>


<script>
    import {mapActions, mapGetters} from 'vuex'
    import bannerLeftUnLogin from "./bannerLeftUnLogin"
    import bannerLeftLogin from "./bannerLeftLogin"

    import bannerRightUnLogin from "./bannerRightUnLogin"
    import bannerRightLogin from "./bannerRightLogin"

    export default{
        name:"bannerInfo",
        components:{
            "m-l-unlogin": bannerLeftUnLogin,
            "m-l-login": bannerLeftLogin,
            'm-r-unlogin': bannerRightUnLogin,
            'm-r-login': bannerRightLogin
        },
        methods:{
            ...mapActions([
                'getBannerInfoData'// ajax 取数据存到state去
            ]),

            test:function(){
                console.log(this.BannerInfoData);
            }
        },

        computed:mapGetters({
            BannerInfoData:'BannerInfoData'//从state 取数据
        }),

        

        created:function(){
            this.$store.dispatch('getBannerInfoData',{});
        }

    }
</script>
