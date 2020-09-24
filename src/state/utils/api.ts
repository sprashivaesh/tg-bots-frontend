import axios from 'axios'
import store, {RootState} from "../store"
import {ActionsTypes, logout} from "../ducks/user/actions";
import {ThunkDispatch} from "redux-thunk";


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
  })
    .then(res => res.data)
    .catch(err => {
      const dispatch: ThunkDispatch<RootState, any, ActionsTypes> = store.dispatch
      if (err?.response?.data?.statusCode === 401) {
        dispatch(logout())
      }
      return Promise.reject(err)
    })
}



