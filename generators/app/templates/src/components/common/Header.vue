<template>
    <!--header-->
    <div class="header">
        <!--topbar-->
        <div class="topbar" id="topbar">
            <div class="grid-1200 topbar-wrap clearfix">
                <div class="topbar-left">
                    <ul class="toplink">
                        <li class="toplink-link">
                            <i class="icon icon-home"></i>
                            <a target="_blank" href="http://www.jd.com/">京东首页</a>
                        </li>
                    </ul>
                </div>
                <div class="topbar-right">
                    <ul class="topmenu fl">
                        <li class="topmenu-item topmenu-userinfo">
                            <span id="loginbar"></span>
                        </li>
                        <li class="topmenu-item">
                            <a href="http://trade.jr.jd.com/trade/tradebuy.action" clstag="jr|keycount|jr_shouye|jiaoyidan">我的交易单</a>
                        </li>
                        <li id="app-jr" class="topmenu-item dropdown topmenu-dropdown" data-hover="topmenu-dropdown-hover">
                            <i class="drop-arrow"></i>
                            <b class="topmenu-app-ico"></b>
                            <a href="http://m.jr.jd.com/helppage/downApp/jrAppPromote.html" target="_blank" class="topmenu-outline" clstag="jr|keycount|jr_shouye|sjjr">手机金融</a>
                            <div class="dropbox clearfix">
                                <div class="fl">
                                    <img src="//static.360buyimg.com/finance/base/1.2.0/images/topbar-ercode-04.jpg" />
                                </div>
                                <div class="fr">
                                    <span class="topmenu-app-tip">下载金融客户端</span>
                                    <a class="topmenu-app-iphone" target="_blank" href="https://itunes.apple.com/cn/app/jing-dong-jin-rong/id895682747?mt=8"></a>
                                    <a class="topmenu-app-android" target="_blank" href="http://app.jd.com/download/jr/jrapp.apk"></a>
                                </div>
                            </div>
                        </li>
                        <li id="topbar-help" class="topmenu-item dropdown topmenu-dropdown" data-hover="topmenu-dropdown-hover">
                            <i class="drop-arrow"></i>
                            <a id="J_topbarFeedback" target="_blank" href="http://ur.jr.jd.com/survey/show?id=100" clstag="jr|keycount|jr_shouye|topbar_feedback" class="topmenu-outline">我要吐槽</a>
                            <ul class="dropbox">
                                    <li><a href="http://help.jr.jd.com/" clstag="jr|keycount|jr_shouye|help">帮助中心</a>
                                </li>
                                <li><a id="J_topbarKf" href="http://chat.jd.com/jd/chat?entry=jd_jr_trade" target="_blank" clstag="jr|keycount|jr_shouye|topbar_kf">在线客服</a></li>
                            </ul>
                        </li>
                        <li class="topmenu-item dropdown topmenu-dropdown" data-hover="topmenu-dropdown-hover">
                            <i class="drop-arrow"></i>
                            <a href="javascript:;" class="topmenu-sitemap">网站导航</a>
                            <ul class="dropbox">
                                <li><a href="http://list.jr.jd.com/fundlist/1-11-112.htm" clstag="jr|keycount|jr_shouye|hdjjlc">基金理财</a>
                                </li>
                                <li><a href="http://z.jd.com" clstag="jr|keycount|jr_shouye|hdyzc">众筹</a></li>
                                <li><a href="http://sq.jd.com/X3dvw1" target="_blank" clstag="jr|keycount|jr_shouye|hdwyqb">京东钱包</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="toplink fl">
                        <li class="toplink-item toplink-title">&nbsp;</li>
                        <li class="toplink-item dropdown toplink-dropdown " data-hover="toplink-dropdown-hover">
                            <i class="icon icon-weixin"></i>
                            <ul class="dropbox dropbox-weixin">
                                <li><img src="//static.360buyimg.com/finance/base/1.2.0/images/topbar-ercode-01.jpg" alt="京东金融"/><h6>京东金融</h6></li>
                            </ul>
                        </li>
                        <li class="toplink-item dropdown toplink-dropdown" data-hover="toplink-dropdown-hover">
                            <i class="icon icon-weibo"></i>
                            <ul class="dropbox dropbox-weibo">
                                <li><img src="//static.360buyimg.com/finance/base/1.2.0/images/topbar-weibo.jpg" alt="京东金融微博"/></li>
                                <li>
                                    <div class="pub-btn btn-style-0">
                                        <a class="size12" href="http://weibo.com/u/5057784708" target="_blank" clstag="jr|keycount|jr_shouye|hdblogjr"><img src="//static.360buyimg.com/finance/base/1.2.0/images/topbar-weibo-addbtn.png"/>京东金融</a>
                                    </div>
                                    
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
        <!--topbar end-->
        <!--main-nav-->
        <div class="main-nav">
            <div class="grid-1200 nav-wrap pr clearfix">
                <div class="main-nav-logo fl">
                    <a href="http://jr.jd.com/index.html" clstag="jr|keycount|jr_shouye|jrlogo">
                        <img src="//static.360buyimg.com/finance/base/1.2.0/images/logo-slogan.png" width="164" height="36" alt="京东金融" />
                    </a>
                </div>
                <div class="nav fl">
                    <ul class="nav-box fl clearfix" id="navBox">
                        <li id="nav-index" class="nav-item">
                            <a class="nav-item-primary" href="http://jr.jd.com" clstag="jr|keycount|jr_shouye|shouye">首页<i></i></a>
                        </li>
                        <li id="nav-licai" class="nav-item">
                            <a class="nav-item-primary" href="http://licai.jd.com" clstag="jr|keycount|jr_shouye|jr_shouye_licai">理财<i></i></a>
                            <ul class="dropbox">
                                <i class="dropbox-mask"></i>
                                <li><a href="http://xjk.jr.jd.com/index.htm " clstag="jr|keycount|jr_shouye|jjxjk">京东小金库</a></li>
                                <li><a href="http://xiaobai.jr.jd.com/xiaobai/main.htm" clstag="jr|keycount|jr_shouye|xblc">京东小白理财</a></li>
                                <li><a href="http://list.jr.jd.com/fundlist/1-11-112.htm" clstag="jr|keycount|jr_shouye|jjlc">基金理财</a></li>
                                <li><a href="http://bill.jr.jd.com/buy/list.htm" clstag="jr|keycount|jr_shouye|pjlc">票据理财</a></li>
                                <li><a href="http://dq.jd.com/" clstag="jr|keycount|jr_shouye|bxlc">定期理财</a></li>
                                <li><a href="http://jdd.jr.jd.com/" clstag="jr|keycount|jr_shouye|fblc">固收理财</a></li>
                                <li><a href="http://club.jr.jd.com" clstag="jr|keycount|jr_shouye|cswd">理财问答</a></li>
                            </ul>
                            <i class="nav-item-mask"></i>
                        </li>
                        <li id="nav-zhongchou" class="nav-item">
                            <a class="nav-item-primary" href="http://z.jd.com" target="_blank" clstag="jr|keycount|jr_shouye|zc">众筹<i></i></a>
                            <ul class="dropbox">
                                <i class="dropbox-mask"></i>
                                <li><a href="http://z.jd.com" target="_blank" clstag="jr|keycount|jr_shouye|cpzc">产品众筹</a></li>
                                <li><a href="http://q.jd.com" target="_blank" clstag="jr|keycount|jr_shouye|qzc">轻众筹</a></li>
                                <li><a href="http://zbbs.jd.com/" target="_blank" clstag="jr|keycount|jr_shouye|zcsq">众筹社区</a></li>
                            </ul>
                            <i class="nav-item-mask"></i>
                        </li>
                        <li id="nav-baoxian" class="nav-item">
                            <a class="nav-item-primary" href="http://bao.jd.com/" clstag="jr|keycount|jr_shouye|baoxian">保险<i></i></a>
                            <ul class="dropbox">
                                <i class="dropbox-mask"></i>
                                <li><a href="http://bao.jd.com/vehicle" clstag="jr|keycount|jr_shouye|chexian">车险</a></li>
                                <li><a href="http://bao.jd.com/health" clstag="jr|keycount|jr_shouye|jiankangxian">健康险</a></li>
                                <li><a href="http://bao.jd.com/accident" clstag="jr|keycount|jr_shouye|yiwaixian">意外险</a></li>
                                <li><a href="http://bao.jd.com/travel" clstag="jr|keycount|jr_shouye|lvxingxian">旅行险</a></li>
                            </ul>
                            <i class="nav-item-mask"></i>
                        </li>
                        <li id="nav-baitiao" class="nav-item">
                            <a class="nav-item-primary" href="http://baitiao.jd.com/activity/third" clstag="jr|keycount|jr_shouye|bt">白条<i></i></a>
                            <ul class="dropbox">
                                <i class="dropbox-mask"></i>
                                <li><a href="http://baitiao.jd.com/" clstag="jr|keycount|jr_shouye|jdbt">京东白条</a></li>
                                <li><a href="http://bk.jd.com/" clstag="jr|keycount|jr_shouye|btlmk">白条联名卡</a></li>
                                <li><a href="http://gb.jd.com" clstag="jr|keycount|jr_shouye|gangbeng">京东钢镚</a></li>
                                <li><a href="http://go.jd.com/activity/introduce" clstag="jr|keycount|jr_shouye|btly">旅游白条+</a></li>
                                <li><a href="http://fang.jd.com" clstag="jr|keycount|jr_shouye|btzf">安居白条+</a></li>
                                <li><a href="http://baitiao.jd.com/stu/home" clstag="jr|keycount|jr_shouye|btxy">校园白条</a></li>
                                <li><a href="http://chedai.jd.com/" clstag="jr|keycount|jr_shouye|qcjr">汽车金融</a></li>
                                <li><a href="http://jincai.jd.com/" clstag="jr|keycount|jr_shouye|jincai">京东金采</a></li>
                                <li><a href="http://nj.jd.com/" clstag="jr|keycount|jr_shouye|ncjr">农村金融</a></li>
                            </ul>
                            <i class="nav-item-mask"></i>
                        </li>
                        <li id="nav-loan" class="nav-item">
                            <a class="nav-item-primary" href="http://loan.jd.com/jdd.html" clstag="jr|keycount|jr_shouye|jingdongdai">京东贷<i></i></a>
                            <ul class="dropbox">
                                <i class="dropbox-mask"></i>
                                <li><a href="http://loan.jd.com/jdd.html" clstag="jr|keycount|jr_shouye|jddsy">京东贷首页</a></li>
                                <li><a href="http://dcrz.jd.com" clstag="jr|keycount|jr_shouye|dcrz">动产融资</a></li>
                                <li><a href="http://8.jd.com" clstag="jr|keycount|jr_shouye|wsd">网商贷</a></li>
                                <li><a href="http://loan.jd.com/home.html" clstag="jr|keycount|jr_shouye|jxd">京小贷</a></li>
                                <li><a href="http://loan.jd.com/scf/" clstag="jr|keycount|jr_shouye|jbb">京保贝</a></li>
                            </ul>
                            <i class="nav-item-mask"></i>
                        </li>
                        <li id="nav-caimi" class="nav-item">
                            <a class="nav-item-primary" href="http://caimi.jd.com/" clstag="jr|keycount|jr_shouye|caimi">股票<i></i></a>
                        </li>
                        <li id="nav-dongjia" class="nav-item"> <a class="nav-item-primary" href="http://dj.jd.com/" clstag="jr|keycount|jr_shouye|dongjia">东家<i></i></a>
                            <ul class="dropbox">
                                <i class="dropbox-mask"></i>
                                <li><a href="http://dj.jd.com" target="_blank" clstag="jr|keycount|jr_shouye|gqzc">私募股权</a></li>
                                <li><a href="http://zbbs.jd.com/portal.php?mod=list&amp;catid=1" target="_blank" clstag="jr|keycount|jr_shouye|djsq">东家社区</a></li>
                                <li><a href="http://y.jd.com/forum-73-1.html" target="_blank" clstag="jr|keycount|jr_shouye|jdzc">京东众创</a></li>
                            </ul>
                            <i class="nav-item-mask"></i>
                        </li>
                    </ul>
                </div>
                <div class="main-nav-search">
                    <div class="search-wrap">
                        <input type="text" class="search-ipt" id="searchIpt" title="请输入搜索内容" autocomplete="off" />
                        <a class="search-btn" id="searchBtn" clstag="jr|keycount|jr_search|search_button" href="javascript:;" ></a>
                        <div class="search-result" id="recommend"></div>
                        <div class="search-result" id="keyWords"></div>
                    </div>
                </div>
                <div class="main-nav-userCenter-wrap fr">
                    <div id="J_userCenter" class="userCenter-main">
                        <div class="userCenter-portal">
                            <i class="userCenter-portal-icon"></i>
                            <a href="http://trade.jr.jd.com/centre/browse.action" class="userCenter-portal-text">我的资产</a>
                            <i class="userCenter-portal-right"></i>
                        </div>
                        <div id="J_userCenterBoard" class="userCenter-board"></div>
                        <i class="userCenter-mask"></i>
                    </div>
                </div>
            </div>
        </div>
        <!--main-nav end-->
        <!--sub-nav 如果页面项目需要二级导航 才需添加 否则此段落请删除-->
        <!-- <div class="sub-nav">
            <div class="grid-1200 sub-nav-wrap">
                <a id="nav-baitiao" class="sub-nav-item" href="http://baitiao.jd.com/">京东白条</a>
                <a id="nav-studentFenQi" class="sub-nav-item" href="http://jr.jd.com/stubaitiao/">校园白条</a>
                <a id="nav-travelBaitiao" class="sub-nav-item" href="http://go.jd.com/">旅游白条+</a>
                <a id="nav-houseBaitiao" class="sub-nav-item" href="http://sale.jd.com/act/WjwCrsdLe7.html">租房白条+</a>
                <a id="nav-gangbeng" class="sub-nav-item" href="http://gb.jd.com/">钢镚</a>
            </div>
        </div> -->
        <!--sub-nav-end-->
    </div>
    <!--header end-->
</template>
<script>
    export default{
        name:'header'
    }
</script>