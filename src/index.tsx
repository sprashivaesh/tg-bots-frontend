import React, {useEffect, FC, PropsWithChildren} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter, withRouter, useLocation} from "react-router-dom";
import store from "./state/store";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

import App from "./routes";
import * as serviceWorker from './serviceWorker';
import './styles/material-kit.css';
import './styles/index.css';


const _ScrollToTop: FC<PropsWithChildren<any>> = function (props) {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        {/*<Navbar />*/}
        <App/>
        {/*<Footer />*/}
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
