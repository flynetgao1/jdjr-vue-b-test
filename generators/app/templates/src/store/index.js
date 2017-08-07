import Vue from 'vue'
import Vuex from 'vuex'


// getters actions 必须是小写 因为是state里的 actions 
import getters from './getters'

import actions from './actions'

import bannerDatas from './modules/bannerDatas'
import module2List from './modules/module2List'


Vue.use(Vuex);


//computed-->  actions --> mutations 

const store = new Vuex.Store({
    getters,
    actions,
    modules: { //每个模块可以有自己独立的 state 和 更新state 方法库 便是 modules
        bannerDatas,
        module2List
    }
});


export default store