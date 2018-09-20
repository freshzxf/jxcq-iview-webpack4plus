const title = '江西产权交易中心'
const routers = [
    {
        path: '/',
        meta: {
            title: title
        },
        component: (resolve) => require(['./views/index/index.vue'], resolve)
    },
    {
        path: '/agency',
        meta: {
            title: title + '-机构介绍'
        },
        component: (resolve) => require(['./views/introduction/agency.vue'], resolve)
    },
    {
        path: '/speech',
        meta: {
            title: title + '-领导致辞'
        },
        component: (resolve) => require(['./views/introduction/speech.vue'], resolve)
    },
    {
        path: '/history',
        meta: {
            title: title + '-发展历程'
        },
        component: (resolve) => require(['./views/introduction/history.vue'], resolve)
    }
]
export default routers
