import React, {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import {RootState} from "../../state/store";
import {getUserData} from "../../state/ducks/user/actions";

const GuestRoute: FC<any> = ({component: Component, ...rest}) => {
  const isAuthentificated = useSelector((state: RootState) => !!state.user.token)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuthentificated) dispatch(getUserData())
  })
  return (
    <Route {...rest} render={props => isAuthentificated ?
      (<Redirect to={{pathname: '/dashboard'}}/>) :
      (<Component {...props} />)}
    />
  )
}

export default GuestRoute;