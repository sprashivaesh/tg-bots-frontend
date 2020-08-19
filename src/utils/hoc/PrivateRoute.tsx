import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {Route, Redirect} from "react-router-dom";
import {getUserData} from "../../state/ducks/user/actions"
import {RootState} from "../../state/store";

const PrivateRoute: FC<any> = ({component: Component, ...rest}) => {
  const isAuthentificated = useSelector((state: RootState) => !!state.user.token)
  const dispatch = useDispatch()
  useEffect(() => {
    if (isAuthentificated) dispatch(getUserData())
  });
  return (
    <Route{...rest} render={props => isAuthentificated ?
      (<Component {...props} />) :
      (<Redirect to={{pathname: '/sign_in'}}/>)}
    />)
}

export default PrivateRoute;