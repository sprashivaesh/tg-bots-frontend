import api from "../../utils/api"
import {LoginForm, Provider, SignUpForm, User} from "./types";

const LOGIN = '/auth'
const SIGN_UP = '/auth/local/register'
const ME = '/users/me'
// const EMAIL_CONFIRMATION = '/auth/email-confirmation'
// const SEND_EMAIL_CONFIRMATION = '/auth/send-email-confirmation'
// const UPDATE_ME = '/users/updateMe'
// const FORGOT_PASSWORD = '/auth/forgot-password'
// const RESET_PASSWORD = '/auth/reset-password'


type LoginResponse = {
    jwt: string
    user: User
}

export const userApi = {
    loginWith: (form:LoginForm, provider?: Provider): Promise<LoginResponse> => {
        if (provider) return api('post', LOGIN+'/'+provider, form)
        return api('post', LOGIN+'/local', form)
    },
    signUp: (form:SignUpForm): Promise<LoginResponse> => {
        return api('post', SIGN_UP, form)
    },
    getUserData: (): Promise<User> => {
        return api('get', ME)
    }
}