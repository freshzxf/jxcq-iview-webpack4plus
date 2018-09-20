/**
 * 此store为复合型store，包含各个modules
 * 使用Vuex前需要先：import Vuex from 'vuex'
 * 然后使用：Vue.use(Vuex)
 * 然后导出：export default new Vuex.Store({})
 */

/**
 * 每个store或者说每个store的module，均由：state、getters、mutations、actions四个部分组成
 * 一：state不用多说，指的是公共状态值，相当于vue中每个模块中的data中状态，只不过此state是面向全局，只要按照上述步骤成功注册vuex后，各个模块均可通过this.$store.state获取到公共状态
 * 如：const Counter = {
 *      template: `<div>{{ count }}</div>`,
 *        computed: {
 *          count () {
 *            return this.$store.state.count
 *          }
 *        }
 *      }
 * 如果上述需要获取的公共state多了，可以从vuex中导入mapState组件，然后通过es6中扩展运算符...执行
 *
 * 二、getters使得我们可以从各公共state中提取出一些状态，相当于vue组件中的computed计算属性，如：
 * const store = new Vuex.Store({
 *  state: {
 *   todos: [
 *    { id: 1, text: '...', done: true },
 *    { id: 2, text: '...', done: false }
 *   ]
 *  },
 *  getters: {
 *    doneTodos: state => {
 *      return state.todos.filter(item => item.done)
 *    }
 *  }
 * })
 * 其他各组件可以通过this.$store.getters.doneTodos获取并执行该getter，同样，如果需要获取多个，可以导入mapGetters组件并使用es6的扩展运算符执行
 *
 * 三、mutations，是我们修改公共状态的第一步，即修改单个公共state，如：
 * const store = new Vuex.Store({
 *  state: {
 *    count: 1
 *  },
 *  mutations: {
 *    increment (state) {
 *      // 变更状态
 *      state.count++
 *    }
 *  }
 * })
 * 其他各组件可以通过this.$store.commit('increment')来获取并执行该更改行为，同样，如果需要修改多个，可以导入mapMutations组件并使用es6的扩展运算符执行
 * 官方建议mutation必须为同步函数，如果需要执行异步操作，可在actions中进行
 *
 * 四、actions提交的是一个或多个mutaion，而不是像mutaion那样直接改变公共state；mutaion可以执行异步操作
 * const store = new Vuex.Store({
 *  state: {
 *    count: 0
 *  },
 *  mutations: {
 *    increment (state) {
 *      state.count++
 *    }
 *  },
 *  actions: {
 *    increment (context) {
 *      context.commit('increment')
 *    }
 *  }
 * })
 * 也可以通过this.$store.dispathc('increment')执行action，注意此执行action部分模块，他会执行所有store中的名称为increment的mutaion
 */

import Vue from 'vue'
import Vuex from 'vuex'
// import Vuex from '../../node_modules/vuex/dist/vuex'
// var Vuex = require('../../node_modules/vuex/dist/vuex.min.js')

import base from './base/base'
import orders from './orders/orders'
import uploader from './uploader/uploader'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base,
    orders,
    uploader
  }
})
