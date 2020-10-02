export default function (e: any): Array<string> {
    const errors: Array<string> = []
    const message = e?.response?.data?.message

    if (!message) return errors

    if (message?.[0]?.messages?.[0]?.id) {
        const errorId = message[0].messages[0].id
        switch (errorId) {
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
                errors.push('Ошибка сервера')
        }
    }
    return errors
}