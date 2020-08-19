export const LOGIN_REQUEST = "user/LOGIN_REQUEST";
export const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "user/LOGIN_FAILURE";

export const ME_SUCCESS = "user/ME_SUCCESS";

export const SIGN_UP_REQUEST = "user/SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "user/SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "user/SIGN_UP_FAILURE";

export const LOGOUT = "user/LOGOUT";



export type Provider = 'google'


export type User = {
    id: number
    username: string,
    email: string,
    provider: Provider,
    confirmed: boolean,
    blocked: boolean,
    role: {
        id: number,
        name: string,
        description: string,
        type: string
    },
    created_at: string,
    updated_at: string
}
export type LoginForm = {
    identifier: string
    password: string
}
export type SignUpForm = {
    username: string
    email: string
    password: string
}