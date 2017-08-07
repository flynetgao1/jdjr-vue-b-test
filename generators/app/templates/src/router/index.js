import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import Gaoxiang from '@/components/Gaoxiang'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/gaoxiang',
        name: 'Gaoxiang',
        component: Gaoxiang
    }]
})