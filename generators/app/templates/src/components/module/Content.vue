<template>
    <div class="w">
        <m-module-2></m-module-2>
    </div>
</template>


<script>

    import Module2 from './module2.vue'
console.log(Module2);
    export default{
        name:"content",
        components:{
            'm-module-2': Module2
        }
    }
</script>