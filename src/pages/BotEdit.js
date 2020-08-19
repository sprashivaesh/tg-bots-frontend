import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import {getBots} from "../state/ducks/bots/actions";

const Dashboard = props => {
  document.title = "Боты";

  // const bots = useSelector(state => state.bots.bots);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBots())
  }, [dispatch]);
  const botId = props.match.params.botId;

  return (
    <Fragment>
      <div className="page-header header-filter" style={{backgroundImage: 'url(/images/city-profile.jpg)', maxHeight: '300px'}}></div>
      <div className="main">
        <div className="container">
          <div className="section text-center">
            <div className="row">
              <div className="col-md-12">
                <div id="contentAreas" className="cd-section">
                  <h2>Редактирование бота #{botId}</h2>
                  <div className="row">
                    <div className="col-12">
                      ывпывпывпывпывп
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;