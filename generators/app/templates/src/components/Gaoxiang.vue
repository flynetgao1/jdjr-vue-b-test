<template>
    <div class="lists">
        <div class="list">
            <h2>list</h2>
            <ul>
                <li  v-for="list in lists" v-text="list.name"></li>
            </ul>
        </div>

        <div class="add">
            <input type="text" v-model="newName">
            <button @click="add">添加</button>
        </div>
    </div>
</template>



<script>
//加载样式表

import '../assets/css/lists.css'

export default {
  name: 'gaoxiang',
  data(){
      return {
        newName:"",

        lists:[{
            name:'李明1'
        },{
            name:'李明2'
        },{
            name:'李明3'
        }]
      }
  },
  methods:{
    add(){
        var newName = this.newName;
        if(newName.length) this.lists.push({name:newName});
    }
  }
}
</script>


