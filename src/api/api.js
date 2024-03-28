import axios from 'axios'

const http = axios.create({
  // baseURL:"http://localhost:3000",
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  // },
  timeout: 5000,
})
// 添加请求拦截器
http.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么 token
    return config
  },
  (error) => {
    // 对请求错误做些什么
    console.warn(error)
    return Promise.reject(error)
  }
)

// 添加响应拦截器
http.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.status === 200) {
      return response
    }
    return response
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 封装get post方法
export function get(url, param = {}) {
  let params = {
    params: param,
  }
  return new Promise((resolve, reject) => {
    http
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    http({
      method: 'post',
      url: url,
      data: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export default http
