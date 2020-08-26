import React from "react"
import {useDispatch} from 'react-redux'
import * as yup from 'yup'
import {signUp} from "../state/ducks/user/actions"
import bg from '../assets/images/bg7.jpg'
import Form from "../components/Forms/Form";
import {Link} from "react-router-dom";


const SignUp = () => {
  const dispatch = useDispatch();
  const onSubmit = (values: any) => {
    dispatch(signUp(values))
  }
  const validationSchema = yup.object().shape({
    username: yup.string().min(4, 'Минимум 4 символов').max(20, 'Максимум 20 символов').required('Имя пользователя не указано'),
    email: yup.string().email('Укажите валидный email').required('Email не указан'),
    password: yup.string().min(4, 'Минимум 4 символов').max(20, 'Максимум 20 символов').required('Пароль не указан'),
  })


  const fields: any = [
    {
      type: 'text',
      name: 'username',
      placeholder: 'Имя пользователя...',
      iconClassName: 'fa fa-user'
    },
    {
      type: 'text',
      name: 'email',
      placeholder: 'Email...',
      iconClassName: 'fa fa-envelope-o'
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
                <h4 className="card-title">Регистрация</h4>
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
export default SignUp