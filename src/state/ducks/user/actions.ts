import {userApi} from "./api";
import {LoginForm, Provider, SignUpForm} from "./types";
import {ThunkAction} from "redux-thunk";
import {InferActionsTypes, RootState} from "../../store";
import {addNotification} from "../notifications/actions";
import errorsFormatter from "../../utils/errorsFormatter";

export const actions = {
  loginRequest: () => ({type: 'tg-bots/user/LOGIN_REQUEST'} as const),
  loginSuccess: (data: any) => ({type: 'tg-bots/user/LOGIN_SUCCESS', payload: {...data}} as const),
  loginFailure: (errors: Array<string>) => ({type: 'tg-bots/user/LOGIN_FAILURE', payload: {errors}} as const),
  meSuccess: (data: any) => ({type: 'tg-bots/user/ME_SUCCESS', payload: {...data}} as const),
  signUpRequest: () => ({type: 'tg-bots/user/SIGN_UP_REQUEST'} as const),
  signUpFailure: (errors: Array<string>) => ({type: 'user/SIGN_UP_FAILURE', errors} as const),
  logout: () => ({type: 'tg-bots/user/LOGOUT'} as const)
}

export type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkAT = ThunkAction<Promise<void>, RootState, any, ActionsTypes>


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
    const errors = errorsFormatter(e)
    errors.forEach(message => (dispatch(addNotification({type: 'danger', message}))))
    dispatch(actions.signUpFailure(errors))
  }
}
export const getUserData = (): ThunkAT => async (dispatch) => {
  try {
    const data = await userApi.getUserData()
    dispatch(actions.meSuccess(data))
  } catch (e) {
    const errors = errorsFormatter(e)
    errors.forEach(message => (dispatch(addNotification({type: 'danger', message}))))
  }
}
export const signUp = (form: SignUpForm): ThunkAT => async (dispatch) => {
  dispatch(actions.signUpRequest())
  try {
    let data = await userApi.signUp(form)
    localStorage.setItem('auth._token', data.jwt)
    dispatch(actions.loginSuccess(data))
    dispatch(actions.meSuccess(data.user))
  } catch (e) {
    const errors = errorsFormatter(e)
    errors.forEach(message => (dispatch(addNotification({type: 'danger', message}))))
    dispatch(actions.signUpFailure(errors))
  }
}
export const logout = (): ThunkAT => async (dispatch) => {
  localStorage.removeItem('auth._token');
  dispatch(actions.logout());
}
