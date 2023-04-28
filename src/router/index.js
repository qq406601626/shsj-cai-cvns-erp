import Vue from 'vue'
import VueRouter from 'vue-router'
import routerPaths from './paths'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        meta: {
            label: '首页'
        },
        component:() => import('@/views/dashboard'),
        children: routerPaths
    },
    {
        path: '/auth',
        meta: {
            label: '权限'
        },
        component:{render:h=>h('router-view')},
        children: [
            {
                path: 'login',
                meta: {
                    label: '登录页'
                },
                component:() => import('@/views/auth/login'),
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
