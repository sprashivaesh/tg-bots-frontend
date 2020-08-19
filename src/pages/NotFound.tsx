import React from "react"
import bg from '../assets/images/clint-mckoy.jpg'

const NotFound = () => {
  return (
    <>
      <div className="page-header error-page header-filter" style={{backgroundImage: `url("${bg}")`}}>
        {/*you can change the color of the filter page using: data-color="blue | green | orange | red | purple"*/}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="title">404</h1>
              <h2 className="description">Page not found :(</h2>
              <h4 className="description">Ooooups! Looks like you got lost.</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default NotFound