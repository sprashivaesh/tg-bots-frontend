import React from "react";
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {loginWith} from "../state/ducks/user/actions";

const SignIn = props => {
  const title = 'Войти'
  document.title = title;
  const dispatch = useDispatch();
  const loginSubmit = (e) => {
    e.preventDefault();
    const payload = {
      data: {
        identifier: e.target.identifier.value,
        password: e.target.password.value
      }
    }
    dispatch(loginWith(payload))
  }

  return (
    <div className="page-header header-filter"
         style={{backgroundImage: 'url(/images/bg7.jpg)', backgroundSize: 'cover', backgroundPosition: 'top center'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
            <form className="form" onSubmit={loginSubmit}>
              <div className="card card-login card-hidden">
                <div className="card-header card-header-primary text-center">
                  <h4 className="card-title">{title}</h4>
                </div>
                <div className="card-body">
                  {/*<p className="card-description text-center">Or Be Classical</p>*/}
                  <span className="bmd-form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-user"></i>
                      </span>
                    </div>
                    <input type="text" name="identifier" className="form-control" placeholder="Логин или Email..."></input>
                  </div>
                </span>
                  <span className="bmd-form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-unlock-alt"></i>
                      </span>
                    </div>
                    <input type="password" name="password" className="form-control" placeholder="Пароль..."></input>
                  </div>
                </span>
                </div>
                <div className="card-footer justify-content-center">
                  <button className="btn btn-rose btn-link">Погнали</button>
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