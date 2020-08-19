import {userApi} from "./api";
import * as types from "./types";
import {LoginForm, Provider, SignUpForm} from "./types";
import {RootState} from "../../store";
import {ThunkAction} from "redux-thunk";


type ActionsTypes = any
type ThunkAT = ThunkAction<Promise<void>, RootState, any, ActionsTypes>


export const actions = {
  loginRequest: () => ({type: 'user/LOGIN_REQUEST'}),
  loginSuccess: (data: any) => ({type: 'user/LOGIN_SUCCESS', payload: {data}}),
  meSuccess: (data: any) => ({type: types.ME_SUCCESS, payload: {data}}),
  signUpRequest: () => ({type: types.SIGN_UP_REQUEST}),
  signUpSuccess: () => ({type: types.SIGN_UP_REQUEST}),
  logout: () => ({type: types.LOGOUT}),
}

export const loginWith = (form: LoginForm, provider?: Provider): ThunkAT => async (dispatch) => {
  dispatch(actions.loginRequest())
  try {
    let data
    switch (provider) {
      case 'google':
        data = await userApi.loginWith(form, provider)
        break
      default:
        data = await userApi.loginWith(form)
        break
    }
    localStorage.setItem('auth._token', data.jwt)
    dispatch(actions.loginSuccess(data))
  } catch (e) {
    console.log(e)
  }
}
export const getUserData = (): ThunkAT => async (dispatch) => {
  const data = await userApi.getUserData()
  dispatch(actions.meSuccess(data))
}
export const signUp = (form: SignUpForm): ThunkAT => async (dispatch) => {
  dispatch(actions.signUpRequest())
  try {
    let data = await userApi.signUp(form)
    localStorage.setItem('auth._token', data.jwt)
    dispatch(actions.loginSuccess(data))
    dispatch(actions.meSuccess(data.user))
  } catch (e) {
    const {message} = e.response.data
    const errors = []
    if (message && message[0] && message[0].messages && message[0].messages[0]) {
      switch (message[0].messages[0].id) {
        case 'Auth.form.error.confirmed':
          errors.push('Ваш e-mail адрес не подтвержден')
          break
        case 'Auth.form.error.invalid':
          errors.push('Имя пользователя, e-mail или пароль неверны')
          break
        case 'Auth.form.error.email.provide':
          errors.push('Пожалуйста укажите имя пользователя или e-mail')
          break
        case 'Auth.form.error.blocked':
          errors.push('Ваша учетная запись была заблокирована администратором')
          break
        case 'Auth.form.error.ratelimit':
          errors.push('Слишком много попыток, повторите попытку через минуту')
          break
        case 'Auth.form.error.email.taken':
          errors.push('Пользователь с таким e-mail уже зарегистрирован')
          break
        case 'Auth.form.error.username.taken':
          errors.push('Имя пользователя уже занято')
          break
        default:
          errors.push('Ошибка регистрации')
      }
    }
    dispatch({type: types.SIGN_UP_FAILURE, errors})
  }
}
export const logout = (): ThunkAT => async (dispatch) => {
  localStorage.removeItem('auth._token');
  dispatch(actions.logout());
}
