import React, {FC} from 'react'
import { Link } from 'react-router-dom'
const Footer: FC = () => {
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
export default Footer