// Banner 的独立模块定义

import Vue from 'vue'

const state = {
    Banner: {
        listData: [],
        index: 0,
        Info: {}
    }
};


var mutations = {
    // 更新banner 列表state
    updateListData: function(state, listData) {
        // console.log(listData);
        state.Banner.listData = listData;
    },
    // info 更新
    updateInfoData: function(state, info) {
        state.Banner.Info = info;
    }
}

export default {
    state,
    mutations
}