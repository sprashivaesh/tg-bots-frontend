import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <footer className="footer footer-default">
      <div className="container">
        <div className="copyright float-right">
          <Link to={{pathname: '/'}}>TG-Bots</Link> {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
export default Footer;