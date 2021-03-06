const title = '江西产权交易中心'
const routers = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: title
    },
    component: (resolve) => require(['./views/index/index.vue'], resolve)
  },
  {
    path: '/agency',
    name: 'agency',
    meta: {
      title: title + '-机构介绍'
    },
    component: (resolve) => require(['./views/introduction/agency.vue'], resolve)
  },
  {
    path: '/speech',
    name: 'speech',
    meta: {
      title: title + '-领导致辞'
    },
    component: (resolve) => require(['./views/introduction/speech.vue'], resolve)
  },
  {
    path: '/history',
    name: 'history',
    meta: {
      title: title + '-发展历程'
    },
    component: (resolve) => require(['./views/introduction/history.vue'], resolve)
  },
  {
    path: '/organization/:id/:name',
    name: 'organization',
    meta: {
      title: title + '-组织架构'
    },
    component: (resolve) => require(['./views/introduction/organization.vue'], resolve)
  },
  {
    path: '/business',
    name: 'business',
    meta: {
      title: title + '-业务频道'
    },
    component: (resolve) => require(['./views/business/transaction.vue'], resolve)
  },
  {
    path: '*',
    meta: {
      title: '访问出错啦'
    },
    component: (resolve) => require(['./views/errors/404.vue'], resolve)
  }
]
export default routers
