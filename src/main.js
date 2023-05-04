import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosInstance from '@/axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import contentLayout from '@/global/components/content-layout'
import searchItem from '@/global/components/search-item'
import mixins from "@/global/mixins"
Vue.prototype.$axios =  axiosInstance
Vue.mixin(mixins)
Vue.component('contentLayout', contentLayout)
Vue.component('searchItem', searchItem)
Vue.use(ElementUI, {size: 'small'});


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
