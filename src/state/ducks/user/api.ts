import api from "../../utils/api"
import {LoginForm, Provider, SignUpForm, User} from "./types";

type LoginResponse = {
    jwt: string
    user: User
}

export const userApi = {
    loginWith: (form:LoginForm, provider?: Provider): Promise<LoginResponse> => {
        if (provider) return api('post', '/auth/'+provider, form)
        return api('post', '/auth/local', form)
    },
    signUp: (form:SignUpForm): Promise<LoginResponse> => {
        return api('post', '/auth/local/register', form)
    },
    getUserData: (): Promise<User> => {
        return api('get', '/users/me')
    }
    // const EMAIL_CONFIRMATION = '/auth/email-confirmation'
    // const SEND_EMAIL_CONFIRMATION = '/auth/send-email-confirmation'
    // const UPDATE_ME = '/users/updateMe'
    // const FORGOT_PASSWORD = '/auth/forgot-password'
    // const RESET_PASSWORD = '/auth/reset-password'
}