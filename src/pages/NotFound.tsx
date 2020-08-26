import React from "react"
import bg from '../assets/images/clint-mckoy.jpg'

const NotFound = () => {
  return (
    <div className="page-header error-page header-filter" style={{backgroundImage: `url("${bg}")`}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="title">404</h1>
            <h2 className="description">Страница не найдена :(</h2>
            <h4 className="description">Упс! Похоже, ты заблудился.</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NotFound