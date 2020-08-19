import React, {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from "../../state/ducks/user/actions";
const Navbar = ({user, isAuthentificated, onLogout}) => {
  const [isSticky, setSticky] = useState(false)
  const navRef = useRef()
  const userMenuRef = useRef()

  const onToggleNavbar = (e) => {
    navRef.current.classList.toggle('nav-open')
  }

  const onTogleUserMenu = () => {
    userMenuRef.current.classList.toggle('show')
    userMenuRef.current.lastChild.classList.toggle('show')
  }

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };
  const onClickNotNavbar = (e) =>{
    if (navRef.current && !navRef.current.contains(e.target)) {
      navRef.current.classList.remove('nav-open')
    }
  }
  const onClickNotUserMenu = (e) =>{
    if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
      userMenuRef.current.classList.remove('show')
      userMenuRef.current.lastChild.classList.remove('show')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mouseup', onClickNotUserMenu);
    window.addEventListener('mouseup', onClickNotNavbar);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mouseup', onClickNotUserMenu);
      window.removeEventListener('mouseup', onClickNotNavbar);
    };
  }, []);

  return (
    <nav className={'navbar navbar-color-on-scroll fixed-top navbar-expand-lg'+(isSticky?'':' navbar-transparent')} ref={navRef}>
      <div className="container">
        <div className="navbar-translate">
          <Link className="navbar-brand" to={{pathname: '/'}}>TG-Bots</Link>
          <button className="navbar-toggler" type="button" onClick={onToggleNavbar}>
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            {user?(
              <li className="dropdown nav-item" ref={userMenuRef} onClick={onTogleUserMenu}>
                <span className="dropdown-toggle nav-link pointer">{user.username}</span>
                <div className="dropdown-menu dropdown-with-icons">
                  <Link className="dropdown-item" to={{pathname: '/dashboard'}}>Панель управления</Link>
                  <span className="dropdown-item pointer" onClick={onLogout}>Выйти</span>
                </div>
              </li>
            ):''}
            <li className="button-container nav-item iframe-extern">
              {isAuthentificated?'':
                (<Link className="btn btn-rose btn-round btn-block" to={{pathname: '/sign_in'}}>
                  <i className="fa fa-sign-in"></i> Войти
                </Link>)}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
const mapStateToProps = state => {
  return {
    user: state.user.user,
    isAuthentificated: !!state.user.token
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch(logout())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);