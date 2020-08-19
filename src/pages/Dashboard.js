import React  from "react";
import {Link} from "react-router-dom";


const Dashboard = props => {
  document.title = "Панель управления";
  return (
    <>
      <div className="page-header header-filter" style={{backgroundImage: 'url(/images/city-profile.jpg)', maxHeight: '300px'}}></div>
      <div className="main">
        <div className="container">
          <div className="section text-center">
            <div className="row">
              <div className="col-md-12">
                <div id="contentAreas" className="cd-section">
                  <h2>Панель управления</h2>
                  <div className="row">
                    <div className="col-12">
                      <Link className="btn btn-info" to={{pathname: '/bots'}}>Боты</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;