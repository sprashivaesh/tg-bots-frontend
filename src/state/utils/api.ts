import axios from 'axios'
import store from "../store"

const baseURL = process.env.REACT_APP_BASE_URL

const instance = axios.create({
  baseURL
})

instance.interceptors.request.use(function (config) {
  const token = store.getState().user.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
})

type MethodType = 'get' | 'post' | 'put' | 'delete'

export default (method: MethodType, url: string, data?: any): Promise<any> => {
  return instance({
    baseURL,
    method,
    url,
    data
  }).then(res => res.data)
}



