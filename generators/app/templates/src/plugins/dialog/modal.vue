<template>
    <div class="cu-modal">
        <div class="cu-mask"></div>
        <div class="cu-dialog-parent":style="'z-index:'+zindex">
            <div class="cu-dialog clearfix"  v-show="show" transition="fade" :style="'width:'+width+'px;'">
                <div class="cu-dialog-title">
                    <slot name="title">
                        <strong>{{title}}</strong>
                    </slot>
                    <slot name="close">
                        <a class="cu-dialog-close" href="javascript:void(0);" @click="close"></a>
                    </slot>
                </div>

                <slot name="cont">
                    <div :class="'cu-dialog-cont '+ icon">
                        <strong>
                            <i></i>
                            <span>您要用 360 京豆兑换 3 钢镚吗？<br>兑换成功后将无法撤销！</span>
                        </strong>
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>




<script>
export default{
    data(){
        return {
            show: false,
            left:0
        }
    },
    
    props:{
        title:{
            type: String
        },
        icon:{
            type: String
        },
        zindex: {
            type: Number
        },
        width:{
            type: Number,
            default: 490
        }
    },
    methods:{
        close(){
            this.show = false;
        },
        getOffset: function() {
            const winW = window.outerWidth,
                w = this.$el.lastElementChild.clientWidth;
            
            this.left = (winW-w)/2;
        }
    },
    watch:{
        show(val){
            const self = this;
            if(val){
                setTimeout(function(){
                    self.getOffset();
                }, 100);
            }
        }
    }
}
</script>

<style scoped>
    .cu-modal{
        width:100%;
        height:100%;
        position: fixed;
        top:0;
        left:0;
        z-index:1000;
    }
    .cu-mask{
        width:100%;
        height: 100%;
        background:#000;
        opacity: .7;
        filter: alpha(opacity=70);
        position: absolute;
        top:0;
        left:0;z-index:1000;
    }
    .cu-dialog-parent{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
    .cu-dialog{
        margin: 0 auto;
    }
</style>