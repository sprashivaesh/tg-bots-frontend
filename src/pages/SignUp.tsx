import React from "react"
import {useDispatch} from 'react-redux'
import * as yup from 'yup'
import {signUp} from "../state/ducks/user/actions"
import {useFormik} from "formik"
import bg from '../assets/images/bg7.jpg'


const SignUp = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    username: yup.string().min(4, 'Минимум 4 символов').max(20, 'Максимум 20 символов').required('Имя пользователя не указано'),
    email: yup.string().email('Укажите валидный Email').required('Email не указан'),
    password: yup.string().min(4, 'Минимум 4 символов').max(20, 'Максимум 20 символов').required('Пароль не указан'),
  })
  const form = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(signUp(values))
    },
  })

  return (
    <div className="page-header header-filter"
         style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'top center'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
            <form className="form" onSubmit={form.handleSubmit}>
              <div className="card card-login card-hidden">
                <div className="card-header card-header-primary text-center">
                  <h4 className="card-title">Регистрация</h4>
                </div>
                <div className="card-body">
                  <div
                    className={`input-group${form.touched.username && form.errors.username ? ' has-danger' : ''}`}>
                    <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user"/>
                    </span>
                    </div>
                    <div className="flex-auto">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Имя пользователя"
                        name="username"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      {form.touched.username && form.errors.username && (
                        <span className="bmd-label-floating">{form.errors.username}</span>)}
                    </div>
                  </div>
                  <div className={`input-group${form.touched.email && form.errors.email ? ' has-danger' : ''}`}>
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-envelope-o"/>
                      </span>
                    </div>
                    <div className="flex-auto">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      {form.touched.email && form.errors.email && (
                        <span className="bmd-label-floating">{form.errors.email}</span>)}
                    </div>
                  </div>
                  <div
                    className={`input-group${form.touched.password && form.errors.password ? ' has-danger' : ''}`}>
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-unlock-alt"/>
                      </span>
                    </div>
                    <div className="flex-auto">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Пароль"
                        name="password"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      {form.touched.password && form.errors.password && (
                        <span className="bmd-label-floating">{form.errors.password}</span>)}
                    </div>
                  </div>
                </div>
                <div className="card-footer justify-content-center">
                  <button className="btn btn-rose btn-link" type="submit">Погнали</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignUp