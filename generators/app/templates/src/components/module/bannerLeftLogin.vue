<template>
    <div class="cont login-cont">
				<div class="b-l-user-face">
					<img :src="infoData.btinfo.faceImgUrl||'//static.360buyimg.com/finance/assets/common/1.3.0/css/i/user-logo.jpg'" alt="">
				</div>
				<p class="b-l-user-name"><span>{{timeNotice}}</span>，{{infoData.btinfo.nickName|| "京东会员"}}</p>
				<div class="b-l-user-tabs" node-type="bTab">
					<div class="b-l-user-info" node-type="bTab-cont">
						<p class="b-l-user-info-title">近七日待还款</p>
						<p class="b-l-user-info-weekpay">{{infoData.btinfo.sevenpay}}</p>
						<p class="b-l-user-info-allpay">全部待还款：<span>{{infoData.btinfo.allpay}}</span></p>
						<p><a class="pay-btn" href="//baitiao.jd.com/v3/ious/list" target="_blank" clstag="jr|keycount|xybt_shouye|huankuan">立即还款</a></p>
						<span class="line"></span>
						<p class="b-l-user-info-title">白条可用额度</p>
						<p class="b-l-user-info-weekpay">{{infoData.btinfo.ablequota}}</p>
						<p class="b-l-user-info-allpay">白条总额度：<span>{{infoData.btinfo.allquota}}</span></p>
						
						<p v-if="infoData.addAmount.isShow">
							
							<!--<a v-if="!infoData.addAmount.status" href="javascript:void(0);" class="pay-btn" node-data="type=&msg=&href=" node-type="addAmount" clstag="jr|keycount|xybt_shouye|tie">提额</a> -->
							
							<a :href="!!infoData.addAmount.status?infoData.addAmount.href:'javascript:void(0);'" class="pay-btn" :target="!!infoData.addAmount.status?'_blank':'_self'" clstag="jr|keycount|xybt_shouye|tie" @click="addAmount">提额</a>
							
						</p>
						
					</div>
					<div class="b-l-user-info two-screen hide" node-type="bTab-cont">
						<p class="b-l-user-info-title">您打白条节省总金额</p>
						<p class="b-l-user-info-freepay">{{infoData.btinfo.freesavepay}}</p>
						<div class="b-l-user-info-persent">
							<span class="b-l-user-info-persent-title">您超越了{{infoData.btinfo.beyondPercent}}的白条用户</span>
							<p><i :style="'width:'+infoData.btinfo.beyondPercent"></i></p>
						</div>
						<p class="free-money">直减、满减节省金额</p>
						<p class="free-money"><em>{{infoData.btinfo.freepay}}</em></p>
						<p class="free-money">免息节省金额</p>
						<p class="free-money"><em>{{infoData.btinfo.savepay}}</em></p>
					</div>
					<div class="b-l-user-tabs-bar" node-type="bTab-title">
						<a href="javascript:void(0);" node-type="prev">&lt;</a>
						<span>
							<i node-type="pageSize">1</i>/<i node-type="pageCount">2</i>
						</span>
						<a href="javascript:void(0);" node-type="next">&gt;</a>
					</div>
				</div>
				
			</div>
</template>

<script>
    export default{
        name:"leftLogin",
        props:{
            infoData: Object
        },
        data(){
            return {
                timeNotice: (function(){
                    let d = new Date().getHours();
                    return d <= 8 ? "早上好" : (d <= 11 ? "上午好" : (d <= 13 ? "中午好" : (d <= 17 ? "下午好" : d <= 19 ? "傍晚好" : (d <= 12 ? "晚上好" : "午夜好"))));
                })()
            }
        },
        methods:{
            // 提额
            addAmount:function(){
                const self = this, 
                infoData = self.infoData,
                type = infoData.addAmount.type, 
                msg=infoData.addAmount.msg, 
                href=infoData.addAmount.href;
				
                this.$Modal.alert({
					title:"自定义"
				})
            }
        }
    }
</script>