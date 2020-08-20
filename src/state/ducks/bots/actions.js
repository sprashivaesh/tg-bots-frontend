import API from "../../utils/API.ts";
import * as types from "./types";
import {GET_BOTS} from "./api";

export const getBots = () => async dispatch => {
  dispatch({ type: types.GET_BOTS_REQUEST })
  try {
    let resData = await API('get', GET_BOTS)
    dispatch({ type: types.GET_BOTS_SUCCESS, payload: { bots: resData } })
  } catch (e) {
    console.log(e)
    // const { message } = e.response.data
    // if (message && message[0] && message[0].messages && message[0].messages[0]) {
    //   switch (message[0].messages[0].id) {
    //     case 'Auth.form.error.confirmed':
    //       throw this.$translate('AuthFormErrorConfirmed')
    //     case 'Auth.form.error.invalid':
    //       throw this.$translate('AuthFormErrorInvalid')
    //     case 'Auth.form.error.email.provide':
    //       throw this.$translate('AuthFormErrorEmailProvide')
    //     case 'Auth.form.error.blocked':
    //       throw this.$translate('AuthFormErrorBlocked')
    //     case 'Auth.form.error.ratelimit':
    //       throw this.$translate('AuthFormErrorRatelimit')
    //     default:
    //       // eslint-disable-next-line no-throw-literal
    //       throw 'Ошибка авторизации'
    //   }
    // }
  }
}
