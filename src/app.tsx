import React, {FC, PropsWithChildren, useEffect} from "react"
import {Switch, Route, useLocation} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


import DefaultRoute from "./utils/hoc/DefaultRoute"
import PrivateRoute from "./utils/hoc/PrivateRoute"
import GuestRoute from "./utils/hoc/GuestRoute"

import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from './pages/Dashboard'
import Bots from "./pages/Bots"
import AutoAnswers from "./pages/AutoAnswers"
import NotFound from "./pages/NotFound"
import Notifications from "./components/Notifications"


const ScrollToTop: FC<PropsWithChildren<any>> = (props) => {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
}


function App() {
  return (
    <ScrollToTop>
      <Navbar/>
      <Switch>
        <DefaultRoute exact path="/" component={Home} />
        <DefaultRoute exact path="/index.html" component={Home} />
        <GuestRoute exact path="/sign_in" component={SignIn} />
        <GuestRoute exact path="/sign_up" component={SignUp} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/bots" component={Bots} />
        <PrivateRoute exact path="/bots/:botId/autoAnswers" component={AutoAnswers} />
        <Route component={NotFound} />
      </Switch>
      <Notifications />
      <Footer/>
    </ScrollToTop>
  )
}

export default App