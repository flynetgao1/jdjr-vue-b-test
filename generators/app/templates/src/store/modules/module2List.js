// module2 独立模块

import Vue from 'vue'

const state = {
    listData: []
};


let mutations = {
    updateModule2Data: function(state, listData) {
        state.listData = listData;
    }
};

export default {
    state,
    mutations
}