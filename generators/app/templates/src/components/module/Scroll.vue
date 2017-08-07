<template>
    <div @mouseover="mouseover" @mouseleave="mouseleave">
        <transition-group tag="ul" class="banner-bg" name="Bbg">
            <li v-for="(value, index) in BannerData"  :key="index"  :class="{active:(index==bIndex)}" :index="index" :bIndex="bIndex"><img :src="value.bgImgUrl"/></li>
        </transition-group>
        <transition-group tag="ul" class="banner-list" name="BList">
            <li v-for="(value, index) in BannerData" :key="index"  :class="{active:(index==bIndex)}">
                <p class="w">
                    <a :href="value.href" target="_blank" :style="{'background-image':'url('+value.bgImgUrl+')'}" :clstag="'jr|keycount|xybt_shouye|banner'+(index+1)"></a>
                </p>
            </li>
        </transition-group>

        <div class="banner-bar-wrap">
            <div class="w">
                <p class="w banner-bar"  node-type="bar">
                    <a href="javascript:void(0);" v-for="(value, index) in BannerData" :key="index" :class="{'active':bIndex==index}" :bIndex="index" @click="change(index)"></a>
                </p>
            </div>
        </div>
    </div>
</template>


<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name:"scroll",
        methods:{
            ...mapActions([
                'getBannerListData'
            ]),

            change: function(i){
                const len = this.BannerData.length;
                i = i >= len ? 0 : i;
                this.clear();
                this.bIndex = i;
                if(!this.lock)  this.autoChange();
            },

            clear:function(){
                clearTimeout(this.flag);
                this.flag = null;
            },
            
            mouseover:function(){
                this.clear();
                this.lock = true;
            },

            mouseleave:function(){
                this.lock = false;
                this.autoChange();
            },
            

            autoChange:function(){
                let self = this;
                this.flag = setTimeout(function(){
                    if(self.lock)return false;
                    self.change(self.bIndex+1);
                }, 3000);
            }
            
        },
        computed:mapGetters({
            BannerData:'BannerData'
        }),
        data(){
            return {
                bIndex: 0
            }
        },
        created(){
            // 加载完后 直接调用 action, 在action 里会自动调用 mutations
            this.$store.dispatch('getBannerListData', {});
            this.autoChange();
        }
    }
</script>