import React from "react"
import {useDispatch} from 'react-redux'
import {useFormik} from 'formik'
import {loginWith} from "../state/ducks/user/actions"
import {Link} from "react-router-dom"
import bg from '../assets/images/bg7.jpg'
import * as yup from "yup";

const SignIn = () => {
  const dispatch = useDispatch()

  const validationSchema = yup.object().shape({
    identifier: yup.string().required('Логин не указан'),
    password: yup.string().required('Пароль не указан'),
  })
  const form = useFormik({
    initialValues: {
      identifier: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(loginWith(values))
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
                  <h4 className="card-title">Войти</h4>
                </div>
                <div className="card-body">
                  <div
                    className={`input-group${form.touched.identifier && form.errors.identifier ? ' has-danger' : ''}`}>
                    <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user"/>
                    </span>
                    </div>
                    <div className="flex-auto">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Логин или Email..."
                        name="identifier"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      {form.touched.identifier && form.errors.identifier && (
                        <span className="bmd-label-floating">{form.errors.identifier}</span>)}
                    </div>
                  </div>
                  <div
                    className={`input-group${form.touched.password && form.errors.password ? ' has-danger' : ''}`}>
                    <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user"/>
                    </span>
                    </div>
                    <div className="flex-auto">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Пароль..."
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
                  <button type="submit" className="btn btn-rose btn-link">Погнали</button>
                </div>
                <div className="text-center mb-4">
                  Нет аккаунта? <Link to={{pathname: '/sign_up'}}>Зарегистрируйтесь</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignIn