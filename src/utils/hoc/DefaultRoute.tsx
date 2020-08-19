import React, {useEffect, FC} from "react"
import {useDispatch, useSelector} from 'react-redux'
import {Redirect, Route} from "react-router-dom"
import {getUserData} from "../../state/ducks/user/actions"
import {RootState} from "../../state/store";

const DefaultRoute: FC<any> = ({component: Component, ...rest}) => {
  const isAuthentificated = useSelector((state: RootState) => !!state.user.token)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuthentificated) dispatch(getUserData())
  })
  return (
    <Route{...rest} render={props => props.location.pathname === '/index.html' ?
      (<Redirect to={{pathname: '/'}}/>) :
      (<Component {...props} />)}
    />
  )
}

export default DefaultRoute