import Vue from 'vue'
import VueRouter from 'vue-router'
import routerPaths from './paths'

Vue.use(VueRouter)

const routes = [{
    path:'/',
    meta:{
        label:'首页'
    },
    component: () => import('@/views/index'),
    children:routerPaths
}]

const router = new VueRouter({
    routes
})

export default router
