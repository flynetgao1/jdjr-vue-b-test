<template>
    <div class="cont login-cont">
        <div class="b-r-title-login">
            <strong>校园白条专享</strong>
            <span>{{infoData.rightImgSummary}}</span>
        </div>
        <div class="b-r-img">
            <a :href="'//item.jd.com/'+infoData.product.skuId+'.html'" target="_blank" clstag="jr|keycount|xybt_shouye|xyzhx">
                <img :src="infoData.product.itemImgUrl" alt="">
            </a>
        </div>
        <div class="b-r-price">
            <span>￥</span>
            <span class="font-en">{{infoData.product.price}}</span>
            <i class="icon-fenqi">{{infoData.product.stage}}期</i>
        </div>
        <ul class="b-r-hot">
            <li v-for="(v, index) in infoData.news">
                <i></i><a :href="v.href" target="_blank" :clstag="'jr|keycount|xybt_shouye|wenzi'+(index+1)">{{v.title}}</a>
            </li>
        </ul>
        <div class="line b-r-line"></div>
        <div class="banner-ewm">
            <div class="img"></div>
            关注微信账号<br>享专属优惠
        </div>
    </div>
</template>


<script>
    export default{
        name:"rightLogin",
        props:{
            'infoData': Object
        }
    }
</script>