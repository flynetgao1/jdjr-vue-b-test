const BannerData = function(state) {
    return state.bannerDatas.Banner.listData
}

const BannerInfoData = function(state) {
    return state.bannerDatas.Banner.Info
}

const Module2ListData = function(state) {
    return state.module2List.listData
}

export default {
    BannerData,
    BannerInfoData,
    Module2ListData
}