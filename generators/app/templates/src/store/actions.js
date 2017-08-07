import Vue from 'vue'
import axios from 'axios'
import Config from '../config'

let Configs = Config.Config;


const getBannerListData = function(context, params) {
    Vue.$http.get(Configs.BannerDataAjaxUrl, params).then(res => {
        if (res.status == 200) {
            context.commit('updateListData', res.data);
        }
    });
}



const getBannerInfoData = function(context, params) {
    Vue.$http.get(Configs.BannerInfoAjaxUrl, params).then(res => {
        if (res.status == 200) {
            context.commit('updateInfoData', res.data);
        }
    });
}


const getModule2ListData = function(context, params) {
    Vue.$http.get(Configs.Module2ListAjaxUrl, params).then(res => {
        context.commit('updateModule2Data', res.data);
    })
}


export default {
    getBannerListData,
    getBannerInfoData,
    getModule2ListData
};