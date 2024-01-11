import axios from 'axios'

// 1. 新axios实例，基础配置
export const request = axios.create({
  baseURL: '/api',
  withCredentials: true,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 2. 请求拦截器，携带token
request.interceptors.request.use(
  (config) => {
    // const store = useUserStore()
    // if (store.user?.token && config.headers) {
    //   config.headers['Authorization'] = `Bearer ${store.user?.token}`
    // }
    return config
  },
  (err) => Promise.reject(err)
)

// 3. 响应拦截器，剥离无效数据，401拦截
request.interceptors.response.use(
  (res) => {
    if (res.status == 200) {
      console.log(res)
      console.log(res.headers['set-cookie'])
      return res.data
    }
  },
  (err) => {
    return Promise.reject(err)
  }
)

