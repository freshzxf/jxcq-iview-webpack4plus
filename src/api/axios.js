/**
 * @desc: axios是基于es6的Promise而实现的一款既能运行在浏览器端（XMLHttpRequest），又能运行在Node端（Http）数据异步请求插件
 * @note1: Promise对象用于一个异步操作的最终完成（或失败）及其结果值的表示
 * @note2: new Promise(executor) 创建一个promise对象，参数是一个执行器函数（该执行器函数有两个默认参数：resolve、reject）
 * @note3: 上述用于异步逻辑，如果成功了则调用resolve将状态置为fullfilled，如果失败了则调用reject（支持传入reason参数，用于说明错误，会被传入catch中读取）将状态置为rejected
 * @note4: 任何Promise对象都有then方法（Promise.prototype.then()）,该then方法可接受两个函数作为参数，如then(successFun, failFun)，分别执行成功或失败回调逻辑，并最终返回一个新的Promise对象
 * @note5: 任何Promise对象都有catch方法（Promise.prototype.catch()）,此方法用于捕获上一步的Promise被rejected的回调，如同then方法中第二个函数参数效果
 * @note6: 除非Promise.then()方法内部抛出异常或者是明确置为rejected态，否则它返回的Promise的状态都是fulfilled态，即完成态，并且它的状态不受它的上一级的状态的影响。
 * @note7: Promise.resolve()接受一个参数值，可以是普通的值，具有then()方法的对象和Promise实例。正常情况下，它返回一个Promise对象，状态为fulfilled。但是，当解析时发生错误时，返回的Promise对象将会置为rejected态
 * @note8: Promise是一种链式的回调，每一个then或者catch返回的是一个已经处理过的promise对象，同时catch只能catch之前链条中出现的错误。如果catch到了错误但是并未reject错误，系统默认catch到了错误并已处理，则catch后面的then还会被执行，比如这种情况：
 *    promise.catch(function(error){
         console.log("失败了:"+error); // 会执行
        }).then(function(str){
        console.log("成功了:"+str); // 会执行
      });
 * @note9: catch捕获到错误如果并未抛出新的错误，则会默认错误已处理好，如果抛出了新的错误，则后面需要继续添加catch错误的链式逻辑，不然会报错“Uncaught (in promise) ”（出现错误但是没有捕获错误的方法）
 * @note10: 并非所有的resolve都返回fullfilled态，如果resolve的参数是rejected态的对象，则返回rejected
 * 如：// 参数为Promise实例,但参数是rejected态
     var p8 = Promise.reject(8); // rejected
     var p9 = Promise.resolve(p8); resolve一个rejected参数，返回的是rejected状态

     p9.then(function(data) {
      // 这里的值时Promise实例返回的值
      console.log('fulfilled:'+ data); // 不执行
    }).catch(function(err) {
      console.log('rejected:' + err); // rejected: 8
    });
 */
import axios from 'axios'
/**
 1. qs.parse()将URL解析成对象的形式
 2. qs.stringify()将对象序列化成URL的形式，以&进行拼接
 3. node自带的querystring模块可替换qs模块，实现同样甚至更强大的功能，可参照：https://blog.csdn.net/yywan1314520/article/details/47723957
 */
import qs from 'qs'

export const commonParams = {}

const instance = axios.create({
  baseURL: 'http://yapi.demo.qunar.com/mock/14630',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  }
})

// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

/**
 * 拦截响应response，并做一些错误处理
 */
instance.interceptors.response.use((response) => {
  const data = response.data
  // console.info('response', response)
  if (data) {
    switch (data.status) {
      case '0':
        // 处理相关业务
        return data
      // 需要重新登录
      case '0005':
        // 写相关需要登录的代码
        // location.replace(`/user/login?${search}`)
        // 不显示提示消息
        data.message = ''
        break
      default:
    }
    return response
  } else {
    const err = new Error('未知错误，请重试')
    err.data = data
    err.response = response
    throw err
  }
// 根据返回的code值来做不同的处理（和后端约定）
}, function (err) {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求参数错误'
        break

      case 401:
        err.message = '未授权，请登录'
        break

      case 403:
        err.message = '跨域拒绝访问'
        break

      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`
        break

      case 408:
        err.message = '请求超时'
        break

      case 500:
        err.message = '服务器内部错误'
        break

      case 501:
        err.message = '服务未实现'
        break

      case 502:
        err.message = '网关错误'
        break

      case 503:
        err.message = '服务不可用'
        break

      case 504:
        err.message = '网关超时'
        break

      case 505:
        err.message = 'HTTP版本不受支持'
        break

      default:
    }
  }
  return Promise.reject(err)
})

export default axios

/**
 * get请求
 * @param urlLink
 * @param param
 * @returns {Promise<AxiosResponse>}
 */
export function get(urlLink, param) {
  const url = urlLink
  const data = Object.assign({}, commonParams, param)

  return instance.get(url, {
    params: data,
    timeout: 5000
  })
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch(function (error) {
      console.info('get请求错误原因：', error)
      return Promise.resolve(error)
    })
}

/**
 * post请求
 * @param urlLink
 * @param param
 * @returns {Promise<AxiosResponse>}
 */
export function post(urlLink, param) {
  const data = Object.assign({}, commonParams, param)
  return instance.post(urlLink, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch(function (error) {
      console.info('post请求错误原因：', error)
      return Promise.resolve(error)
    })
}
