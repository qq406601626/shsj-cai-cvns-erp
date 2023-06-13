export default [
    // {
    //     path: '',
    //     name: 'index',
    //     component: () => import('@/views/work-space/index'),
    //     meta: {
    //         label: '首页',
    //     },
    // },
    {
        path: 'userManage',
        name: 'user-manage',
        component: {render: h => h('router-view')},
        meta: {
            label: '用户管理'
        },
        children: [
            {
                path: 'userInfo',
                name: 'user-info',
                component: () => import('@/views/work-space/user-manage'),
                meta: {
                    label: '用户信息'
                },
            },
        ]
    },
    {
        path: 'monitorManage',
        name: 'monitor-manage',
        component: {render: h => h('router-view')},
        meta: {
            label: '监测管理'
        },
        children: [
            {
                path: 'monitorDevice',
                name: 'monitor-device',
                component: () => import('@/views/work-space/monitor-device'),
                meta: {
                    label: '监测设备'
                },
            },
        ]
    },
    {
        path: 'monitorReport',
        name: 'monitor-report',
        component: {render: h => h('router-view')},
        meta: {
            label: '监测报告'
        },
        children: [
            {
                path: 'reportInfo',
                name: 'report-info',
                component: () => import('@/views/work-space/monitor-report'),
                meta: {
                    label: '报告信息'
                },
            },
        ]
    },
    {
        path: 'deviceManage',
        name: 'device-manage',
        component: {render: h => h('router-view')},
        meta: {
            label: '设备管理'
        },
        children: [
            {
                path: 'deviceList',
                name: 'device-list',
                component: () => import('@/views/work-space/device-manage/device-list'),
                meta: {
                    label: '设备列表'
                },
            },
            {
                path: 'addDevice',
                name: 'add-device',
                component: () => import('@/views/work-space/device-manage/add-device'),
                meta: {
                    label: '新增设备',
                    hidden: true
                },
            },
            {
                path: 'editDevice',
                name: 'edit-device',
                component: () => import('@/views/work-space/device-manage/edit-device'),
                meta: {
                    label: '编辑设备',
                    hidden: true,
                },
            }
        ]
    },
    {
        path: 'feedback',
        name: 'feedback',
        component: {render: h => h('router-view')},
        meta: {
            label: '意见反馈'
        },
        children: [
            {
                path: 'feedbackInfo',
                name: 'feedback-info',
                component: () => import('@/views/work-space/feedback'),

                meta: {
                    label: '反馈信息'
                },
            },
        ]
    },
    {
        path: 'accountManage',
        name: 'account-manage',
        component: {render: h => h('router-view')},
        meta: {
            label: '账号管理'
        },
        children: [
            {
                path: 'accountInfo',
                name: 'account-info',
                component: () => import('@/views/work-space/account-manage'),
                meta: {
                    label: '账号信息'
                },
            },
        ]
    },
]
