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