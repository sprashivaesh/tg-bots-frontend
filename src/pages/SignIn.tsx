import React from "react";
import {useDispatch} from 'react-redux'
import {useFormik} from 'formik';
import {loginWith} from "../state/ducks/user/actions";
import bg from '../assets/images/bg7.jpg'
import {Link} from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      identifier: '',
      password: ''
    },
    onSubmit: (values) => {
      dispatch(loginWith(values))
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
                  <h4 className="card-title">Войти</h4>
                </div>
                <div className="card-body">
                  <span className="bmd-form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-user"></i>
                      </span>
                    </div>
                    <input type="text"
                           name="identifier"
                           className="form-control"
                           placeholder="Логин или Email..."
                           onChange={formik.handleChange}
                    />
                  </div>
                </span>
                  <span className="bmd-form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-unlock-alt"></i>
                      </span>
                    </div>
                    <input type="password"
                           name="password"
                           className="form-control"
                           placeholder="Пароль..."
                           onChange={formik.handleChange}
                    />
                  </div>
                </span>
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
  );
};

export default SignIn;