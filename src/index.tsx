import React, {useEffect, FC, PropsWithChildren} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import {BrowserRouter, useLocation} from "react-router-dom"
import store from "./state/store";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import App from "./routes"
import * as serviceWorker from './serviceWorker'
import './styles/index.css'


const ScrollToTop: FC<PropsWithChildren<any>> = (props) => {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
}


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <Navbar/>
        <App/>
        <Footer/>
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
