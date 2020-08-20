import React from "react"
// import {useSelector, useDispatch} from 'react-redux'
// import {useForm} from 'react-hook-form'
// import * as yup from 'yup'
// import {yupResolver} from '@hookform/resolvers'
// import {signUp} from "../state/ducks/user/actions"
// import {RootState} from "../state/store"
//
//
// const SignUp = () => {
//   const signUpErrors = useSelector((state:RootState) => state.user.errors)
//   const dispatch = useDispatch();
//
//   const schema = yup.object().shape({
//     username: yup.string().min(5,'Минимум 5 символов').max(20, 'Максимум 20 символов').required(),
//     email: yup.string().email('Укажите валидный Email').required('Email не указан'),
//     password: yup.string().min(6, 'Минимум 6 символов').max(20, 'Максимум 20 символов').required(),
//   });
//
//   const {register, handleSubmit, errors} = useForm({
//     mode: 'onBlur',
//     resolver: yupResolver(schema)
//   });
//
//   const onSubmit = (form:any) => {
//     dispatch(signUp(form));
//   }
//
//   return (
//     <div className="page-header header-filter"
//          style={{backgroundImage: 'url(/images/bg7.jpg)', backgroundSize: 'cover', backgroundPosition: 'top center'}}>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
//             <form className="form" onSubmit={handleSubmit(onSubmit)}>
//               <div className="card card-login card-hidden">
//                 <div className="card-header card-header-primary text-center">
//                   <h4 className="card-title">Регистрация</h4>
//                 </div>
//                 <div className="card-body">
//                   {/*<p className="card-description text-center">Or Be Classical</p>*/}
//                   <div className={`input-group${errors.username?' has-danger':''}`}>
//                     <div className="input-group-prepend">
//                     <span className="input-group-text">
//                       <i className="fa fa-user"></i>
//                     </span>
//                     </div>
//                     <div className="flex-auto">
//                       <input id="usernameInput" className="form-control" type="text" placeholder="Имя пользователя" name="username" ref={register} />
//                       {errors.username && (<label htmlFor="usernameInput" className="bmd-label-floating">{errors.username.message}</label>)}
//                     </div>
//                   </div>
//                   <div className={`input-group${errors.email?' has-danger':''}`}>
//                     <div className="input-group-prepend">
//                       <span className="input-group-text">
//                         <i className="fa fa-envelope-o"></i>
//                       </span>
//                     </div>
//                     <div className="flex-auto">
//                       <input className="form-control" id="emailInput" type="text" placeholder="Email" name="email" ref={register} />
//                       {errors.email && (<label htmlFor="emailInput" className="bmd-label-floating">{errors.email.message}</label>)}
//                     </div>
//                   </div>
//                   <div className={`input-group${errors.password?' has-danger':''}`}>
//                     <div className="input-group-prepend">
//                       <span className="input-group-text">
//                         <i className="fa fa-unlock-alt"></i>
//                       </span>
//                     </div>
//                     <div className="flex-auto">
//                       <input className="form-control" id="passwordInput" type="text" placeholder="Пароль" name="password" ref={register}></input>
//                       {errors.password && (<label htmlFor="passwordInput" className="bmd-label-floating">{errors.password.message}</label>)}
//                     </div>
//
//                   </div>
//                 </div>
//                 {signUpErrors.map(err=>(<div className="text-center text-danger" key={err}>{err}</div>))}
//                 <div className="card-footer justify-content-center">
//                   <button className="btn btn-rose btn-link" type="submit">Погнали</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default SignUp

export default () => (<div>sign up</div>)