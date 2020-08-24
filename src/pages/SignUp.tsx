import React from "react"
import {useSelector, useDispatch} from 'react-redux'
import * as yup from 'yup'
import {signUp} from "../state/ducks/user/actions"
import {RootState} from "../state/store"
import {useFormik} from "formik"
import bg from '../assets/images/bg7.jpg'

const SignUp = () => {
  const signUpErrors = useSelector((state: RootState) => state.user.errors)
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    username: yup.string().min(4, 'Минимум 4 символов').max(20, 'Максимум 20 символов').required('Имя пользователя не указано'),
    email: yup.string().email('Укажите валидный Email').required('Email не указан'),
    password: yup.string().min(4, 'Минимум 4 символов').max(20, 'Максимум 20 символов').required('Пароль не указан'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(signUp(values))
    },
  });

  return (
    <div className="page-header header-filter"
         style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'top center'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
            <form className="form" onSubmit={formik.handleSubmit}>
              <div className="card card-login card-hidden">
                <div className="card-header card-header-primary text-center">
                  <h4 className="card-title">Регистрация</h4>
                </div>
                <div className="card-body">
                  <div
                    className={`input-group${formik.touched.username && formik.errors.username ? ' has-danger' : ''}`}>
                    <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user"/>
                    </span>
                    </div>
                    <div className="flex-auto">
                      <input
                        id="usernameInput"
                        className="form-control"
                        type="text"
                        placeholder="Имя пользователя"
                        name="username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.username && formik.errors.username && (
                        <label htmlFor="usernameInput" className="bmd-label-floating">{formik.errors.username}</label>)}
                    </div>
                  </div>
                  <div className={`input-group${formik.touched.email && formik.errors.email ? ' has-danger' : ''}`}>
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-envelope-o"/>
                      </span>
                    </div>
                    <div className="flex-auto">
                      <input
                        className="form-control"
                        id="emailInput"
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <label htmlFor="emailInput" className="bmd-label-floating">{formik.errors.email}</label>)}
                    </div>
                  </div>
                  <div
                    className={`input-group${formik.touched.password && formik.errors.password ? ' has-danger' : ''}`}>
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-unlock-alt"/>
                      </span>
                    </div>
                    <div className="flex-auto">
                      <input
                        className="form-control"
                        id="passwordInput"
                        type="text"
                        placeholder="Пароль"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.password && formik.errors.password && (
                        <label htmlFor="passwordInput" className="bmd-label-floating">{formik.errors.password}</label>)}
                    </div>
                  </div>
                </div>
                {signUpErrors.map(err => (<div className="text-center text-danger" key={err}>{err}</div>))}
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