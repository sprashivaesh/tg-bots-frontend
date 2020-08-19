import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <footer className="footer footer-default">
      <div className="container">
        <nav className="float-left">
          {/*<ul>*/}
          {/*  <li>*/}
          {/*    <a href="https://www.creative-tim.com">*/}
          {/*      Creative Tim*/}
          {/*    </a>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <a href="https://creative-tim.com/presentation">*/}
          {/*      About Us*/}
          {/*    </a>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <a href="http://blog.creative-tim.com">*/}
          {/*      Blog*/}
          {/*    </a>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <a href="https://www.creative-tim.com/license">*/}
          {/*      Licenses*/}
          {/*    </a>*/}
          {/*  </li>*/}
          {/*</ul>*/}
        </nav>
        <div className="copyright float-right">
          <Link to={{pathname: '/'}}>TG-Bots</Link> {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
export default Footer;