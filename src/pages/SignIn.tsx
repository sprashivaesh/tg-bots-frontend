import React, {useCallback} from "react"
import {useDispatch, useSelector} from 'react-redux'
import {loginWith} from "../state/ducks/user/actions"
import {Link} from "react-router-dom"
import bg from '../assets/images/bg7.jpg'
import * as yup from "yup";
import Form, { FieldModel } from "../components/Forms/Form"
import {RootState} from "../state/store";

const validationSchema = yup.object().shape({
  identifier: yup.string().required('Логин не указан'),
  password: yup.string().required('Пароль не указан')
})

const fields: Array<FieldModel> = [
  {
    type: 'text',
    name: 'identifier',
    placeholder: 'Логин или Email...',
    iconClassName: 'fa fa-user'
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Пароль...',
    iconClassName: 'fa fa-unlock-alt'
  }
]

type Values = { identifier: string, password: string }

const SignIn = () => {
  const dispatch = useDispatch()

  const loading = useSelector((state:RootState) => state.user.loading)

  const onSubmit = useCallback((values: Values) => {
    dispatch(loginWith(values))
  }, [dispatch])

  return (
    <div className="page-header header-filter"
         style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'top center'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
            <div className="card card-login card-hidden">
              <div className="card-header card-header-primary text-center">
                <h4 className="card-title">Войти</h4>
              </div>
              <div className="card-body">
                <Form submitBtnText="Погнали" validationSchema={validationSchema} onSubmit={onSubmit} fields={fields} loading={loading}/>
                <div className="text-center mb-4">
                  Нет аккаунта? <Link to={{pathname: '/sign_up'}}>Зарегистрируйтесь</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignIn