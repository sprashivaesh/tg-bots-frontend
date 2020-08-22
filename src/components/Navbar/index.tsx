import React, {FC, useEffect, useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../../state/ducks/user/actions'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../state/store'
import classNames from 'classnames'

const Navbar: FC = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user.user)
  const isAuthentificated = useSelector((state: RootState) => !!state.user.token)


  const [isSticky, setSticky] = useState(false)
  const handleScroll = () => {
    setSticky(window.scrollY > 0)
  }


  const navRef = useRef<any>()
  const onToggleNavbar = () => {
    navRef.current.classList.toggle('nav-open')
  }
  const onClickOutsideNavbar = (e: any) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      navRef.current.classList.remove('nav-open')
    }
  }


  const userMenuRef = useRef<any>()
  const onToggleUserMenu = () => {
    userMenuRef.current.classList.toggle('show')
  }
  const onClickOutsideUserMenu = (e: any) => {
    if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
      userMenuRef.current.classList.remove('show')
    }
  }


  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    document.addEventListener('mouseup', onClickOutsideNavbar)
    document.addEventListener('mouseup', onClickOutsideUserMenu)
    return () => {
      document.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mouseup', onClickOutsideNavbar)
      document.removeEventListener('mouseup', onClickOutsideUserMenu)
    }
  }, [])


  const onLogout = () => {
    dispatch(logout())
  }

  return (
    <nav ref={navRef}
         className={classNames('navbar navbar-color-on-scroll fixed-top navbar-expand-lg', {'navbar-transparent': !isSticky})}
    >
      <div className="container">
        <div className="navbar-translate">
          <Link className="navbar-brand" to={{pathname: '/'}}>TG-Bots</Link>
          <button className="navbar-toggler" type="button" onClick={onToggleNavbar}>
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"/>
            <span className="navbar-toggler-icon"/>
            <span className="navbar-toggler-icon"/>
          </button>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            {user ? (
              <li className="dropdown nav-item" ref={userMenuRef} onClick={onToggleUserMenu}>
                <span className="dropdown-toggle nav-link pointer">{user.username}</span>
                <div className={'dropdown-menu dropdown-with-icons show-dropdown-menu'}>
                  <Link className="dropdown-item" to={{pathname: '/dashboard'}}>Панель управления</Link>
                  <span className="dropdown-item pointer" onClick={onLogout}>Выйти</span>
                </div>
              </li>
            ) : ''}
            <li className="button-container nav-item iframe-extern">
              {isAuthentificated ? '' :
                (<Link className="btn btn-rose btn-round btn-block" to={{pathname: '/sign_in'}}>
                  <i className="fa fa-sign-in"/> Войти
                </Link>)}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar