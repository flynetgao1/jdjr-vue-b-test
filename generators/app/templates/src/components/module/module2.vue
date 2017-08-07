<template>
    <div class="module-2 module-btstage">
        <div class="module-2-left">
            <div class="icon">超值</div>
            <img :src="imgSrc" alt="白条分期">
            <div class="crile">
                <span>限量 19:00-24:00</span>
                <div class="bg"></div>
            </div>
        </div>       
        <div class="module-2-right">
            <m-module2-list></m-module2-list>
        </div>       
    </div>
</template>


<script>
    import imgSrc from '../../assets/css/i/btstage-left.png'

    import module2List from './module2List'
    export default{
        name: "module2",
        data(){
            return {
                imgSrc
            }
        },
        components:{
            'm-module2-list': module2List
        }
    }
</script>


