export default [
    {
        path: '',
        name:'index',
        component:() => import('@/views/work-space/index'),
        meta:{
            label:'首页',
            hidden:true
        },
    },
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
            {
                path:'deviceManage',
                name:'device-manage',
                component:{render:h=>h('router-view')},
                meta:{
                    label:'设备管理'
                },
                children:[
                    {
                        path:'deviceList',
                        name:'device-list',
                        component:() => import('@/views/work-space/device-manage/device-list'),
                        meta:{
                            label:'设备列表'
                        },
                    },
                    {
                        path:'addDevice',
                        name:'add-device',
                        component:() => import('@/views/work-space/device-manage/add-device'),
                        meta:{
                            label:'新增设备'
                        },
                    },
                    {
                        path:'editDevice',
                        name:'edit-device',
                        component:() => import('@/views/work-space/device-manage/edit-device'),
                        meta:{
                            label:'编辑设备',
                            hidden:true
                        },
                    }
                ]
            },
            {
                path:'monitorReport',
                name:'monitor-report',
                component:() => import('@/views/work-space/monitor-report'),
                meta:{
                    label:'监测报告'
                },
            },
            {
                path:'feedback',
                name:'feedback',
                component:() => import('@/views/work-space/feedback'),
                meta:{
                    label:'意见反馈'
                },
            },
        ]
    },
]
