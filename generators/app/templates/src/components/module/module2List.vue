<template>
    <ul>
        <li v-for="(list, index) in listData">
            <div class="img">
                <a :href="'//item.jd.com/'+list.skuId+'.html'" :title="list.itemName" target="_blank" :clstag="'jr|keycount|xybt_shouye|mianxi'+(index+1)"><img src="//static.360buyimg.com/finance/consumer/stuBaitiao/index/3.0.0/css/i/blank.png"  alt="" width="160" height="160" :lazyload="list.itemImageUrl"></a>
            </div>
            <p class="title" title="list.itemName">
                <i class="green">免息</i>
                {{list.itemName}}
            </p>
            <p><span class="price"><i>￥</i>{{list.price}}</span><em class="icon-fenqi">{{list.stag}}期</em></p>

            <a class="bttn" :href="list.buyUrl" :node-data="list.skuId" node-type="submit" :clstag="'jr|keycount|xybt_shouye|mianxifenqi'+(index+1)" v-if="!list.isOwn && !list.isFinish">抢免息券</a>

            <a class="bttn" :href="list.buyUrl" target="_blank" :clstag="'jr|keycount|xybt_shouye|mianxifenqi'+(index+1)" v-else>分期购买</a>

        </li>
    </ul>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
    export default{
        name:"module2List",
        methods: {
            ...mapActions([
                'getModule2ListData'
            ])
        },
        computed: mapGetters({
            listData:'Module2ListData'
        }),
        created(){
            this.$store.dispatch('getModule2ListData', {});
        }
    }
</script>
