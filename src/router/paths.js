export default [
    {
        path:'workSpace',
        name:'work-space',
        icon:'el-icon-s-home',
        component:{render:h=>h('router-view')},
        meta:{
            label:'工作台'
        },
        children:[
            {
                path:'userManage',
                name:'user-manage',
                component:() => import('@/views/work-space/user-manage'),
                meta:{
                    label:'用户管理'
                },
            },
            {
                path:'monitorDevice',
                name:'monitor-device',
                component:() => import('@/views/work-space/monitor-device'),
                meta:{
                    label:'监测设备'
                },
            },
        ]
    }
]
