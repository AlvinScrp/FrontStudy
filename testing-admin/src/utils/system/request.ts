import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'
const baseURL: any = import.meta.env.VITE_BASE_URL

const service: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
})

// // 请求前的统一处理
// service.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     // JWT鉴权处理
//     if (store.getters['user/token']) {
//       config.headers['token'] = store.state.user.token
//     }
//     return config
//   },
//   (error: AxiosError) => {
//     console.log(error) // for debug
//     return Promise.reject(error)
//   }
// )

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    if (res.code === 200) {
      return response
    } else {
      showError(res)
      return Promise.reject(response)
    }
  },
  (error: AxiosError) => {
    console.log(error) // for debug
    const badMessage: any = error.message || error
    const code = parseInt(badMessage.toString().replace('Error: Request failed with status code ', ''))
    showError({ code, message: badMessage })
    return Promise.reject(error)
  }
)

function showError(error: any) {
  ElMessage({
    message: `${error.msg || error.message || '服务异常'}(code:${error.code})`,
    type: 'error',
    duration: 3 * 1000,
  })
}

export default service
