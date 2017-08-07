<template>
    <!--未登录（0） or 已登录 没有开通校园白条（1） or 已登录未开校白但已开普白（3）-->
    <div class="cont unlogin-cont">
        <span class="b-l-top">我们希望的不仅仅是助你消费更是陪你成长</span>
        <span class="b-l-title">校园白条<br>伴你成长</span>
         <!--{{if $data.status < 3}}-->
        <a v-if="infoData.status<3" class="b-l-btn" href="https://baitiao.jd.com/v3/campus/open" target="_blank" clstag="jr|keycount|xybt_shouye|jihuo">激活校园白条</a>
           <!-- {{if $data.status==1}}-->
            <a v-if="infoData.status==1" href="javascript:void(0);" class="black visility clearfix">已有校园白条,直接登录 <span>&gt;</span></a>
            <!--{{else}}-->
            <a v-if="infoData.status<3&&infoData.status!=1" href="https://passport.jd.com/new/login.aspx?ReturnUrl=http%3A%2F%2Fbaitiao.jd.com%2Fstu%2Fhome" class="black clearfix" clstag="jr|keycount|xybt_shouye|denglu">已有校园白条,直接登录 <span>&gt;</span></a>
            <!--{{/if}}-->
            
       <!-- {{else}}-->
        <!--已开通普白-->
            <p v-if="infoData.status>=3" class="b-l-pb-title">您已开通白条</p>
            <p  v-if="infoData.status>=3" class="b-l-pb-cont">校园白条为学生专享<br>你也可以逛逛买买呦</p>
       <!-- {{/if}}-->
        <div class="banner-ewm">
            <div class="img"></div>
            关注微信账号<br>享专属优惠
        </div>
    </div>
</template>


<script>
    export default{
        name:"LeftunLogin",
        props:{
            infoData: Object
        }
    }
</script>