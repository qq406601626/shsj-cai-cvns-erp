import Vue from 'vue'
import VueRouter from 'vue-router'
import routerPaths from './paths'
import {getDecryptToken} from '@/utils/auth'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        meta: {
            label: '首页'
        },
        component: () => import('@/views/dashboard'),
        children: routerPaths
    },
    {
        path: '/auth',
        meta: {
            label: '权限'
        },
        component: {render: h => h('router-view')},
        children: [
            {
                name: 'auth-login',
                path: 'login',
                meta: {
                    label: '登录页'
                },
                component: () => import('@/views/auth/login'),
            }
        ]
    }
]

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    // todo
    const token = getDecryptToken()
    if (to.name !== 'auth-login' && !token) {
        next({name: 'auth-login'})
    } else {
        next()
    }
})

export default router
