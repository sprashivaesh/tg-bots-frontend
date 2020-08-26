import React from "react"
import {useDispatch} from 'react-redux'
import {loginWith} from "../state/ducks/user/actions"
import {Link} from "react-router-dom"
import bg from '../assets/images/bg7.jpg'
import * as yup from "yup";
import Form from "../components/Forms/Form"

const SignIn = () => {
  const dispatch = useDispatch()
  const onSubmit = (values:any) => {
    dispatch(loginWith(values))
  }
  const validationSchema = yup.object().shape({
    identifier: yup.string().required('Логин не указан'),
    password: yup.string().required('Пароль не указан')
  })

  const fields: any = [
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
                <Form submitBtnText="Погнали" validationSchema={validationSchema} onSubmit={onSubmit} fields={fields}/>
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