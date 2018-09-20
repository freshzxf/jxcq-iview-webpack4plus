import * as types from '../mutation-types'
import API from '@/api/index'

const state = {
  ordersList: [],
  foodsMenu: [],
  show: false
}

// todo:待完善getters
const getters = {
  selectedFoodsMenu: function (state) {
    let sfmTpl = []
    state.foodsMenu.forEach(function (item, index) {
      item.content.forEach(function (item1, index1) {
        item1.content.filter(function (item2, index2, arr) {
          if (item2.amount > 0) {
            sfmTpl.push(item2)
          }
        })
      })
    })
    return sfmTpl
    // return state.foodsMenu.filter(function (item, index, arr) {
    //   item.content.filter(function (item1, index1, arr1) {
    //     item1.content.filter(function (item2, index2, arr2) {
    //       return item2.title.length
    //     })
    //   })
    // })
  }
  // order: state => state.order
  // needPayOrders: state => state.needPayOrders,
  // needSeedOrders: state => state.needSeedOrders,
  // needGetOrders: state => state.needGetOrders,
  // needCommentOrders: state => state.needCommentOrders,
  // needServiceOrders: state => state.needServiceOrders
}

const mutations = {
  [types.UPDATE_ORDERSLIST](state, payload) {
    state.ordersList = payload.ordersList
  },
  [types.UPDATE_FOODSMENU](state, payload) {
    state.foodsMenu = payload.foodsMenu
  },
  [types.SHOW_ORDERSLIST](state, payload) {
    state.show = payload.show
  },
  // 修改食材订购量
  editFoodData(state, data) {
    state.foodsMenu[data.idx].content[data.idx1].content[data.idx2].amount = data.currentAmount
  }
}

const actions = {
  // 异步获取订单列表数据
  async initList({dispatch, commit, state}, param) {
    // 设置公共loading
    dispatch('showLoading')
    // 异步修改shop对象
    let ajaxOrdersList
    API.postOrdersList(param).then((result) => {
      if (result.data && result.data.length) ajaxOrdersList = result.data
      // 关闭公共loading
      dispatch('hideLoading')
      // commit执行的是mutaions中对应的修改公共state的方法（根据type值寻找，并传入载荷对象参数进行修改）
      commit({
        type: types.UPDATE_ORDERSLIST,
        // 以下为es6中键值重名的缩写
        ordersList: param.refresh ? ajaxOrdersList : state.ordersList.concat(ajaxOrdersList)
      })
      if (!state.show) {
        commit({
          type: types.SHOW_ORDERSLIST,
          // 以下为es6中键值重名的缩写
          show: true
        })
      }
    })
  },
  // 异步获取食材列表数据
  async initFoodMenu({dispatch, commit, state}, param) {
    // 设置公共loading
    dispatch('showLoading')
    // 异步修改shop对象
    let ajaxFoodMenu
    API.postFoodsMenu(param).then((result) => {
      if (result.data && result.data.length) ajaxFoodMenu = result.data
      // 关闭公共loading
      dispatch('hideLoading')
      // commit执行的是mutaions中对应的修改公共state的方法（根据type值寻找，并传入载荷对象参数进行修改）
      commit({
        type: types.UPDATE_FOODSMENU,
        // 以下为es6中键值重名的缩写
        foodsMenu: ajaxFoodMenu
      })
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
