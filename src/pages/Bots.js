import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import {getBots} from "../state/ducks/bots/actions";
import Table from "../components/Table";

const Dashboard = props => {
  document.title = "Боты";
  const bots = useSelector(state => state.bots.bots);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBots())
  }, [dispatch]);

  const botRows = bots.map(bot=> [
    (<div className="form-check ml-2">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" value="" checked={!!bot.enable} onChange={()=>{}}></input>
        <span className="form-check-sign">
            <span className="check"></span>
          </span>
      </label>
    </div>),
    bot.allowedChatsId,
    (<>
      <Link className="btn btn-info btn-just-icon btn-sm mr-1" to={{pathname: `/bots/${bot.id}/answers`}}>
        <i className="fa fa-th-list"></i>
      </Link>
      <Link className="btn btn-success btn-just-icon btn-sm mr-1 disabled" to={{pathname: `/bots/${bot.id}`}}>
        <i className="fa fa-pencil"></i>
      </Link>
      <button type="button" className="btn btn-danger btn-just-icon btn-sm disabled">
        <i className="fa fa-times"></i>
      </button>
    </>)
  ])

  return (
    <Fragment>
      <div className="page-header header-filter" style={{backgroundImage: 'url(/images/city-profile.jpg)', maxHeight: '300px'}}></div>
      <div className="main">
        <div className="container">
          <div className="section text-center">
            <div className="row">
              <div className="col-md-12">
                <div id="contentAreas" className="cd-section">
                  <h2>Ваши боты</h2>
                  <div className="row">
                    <div className="col-12">
                      <div className="text-right">
                        <button type="button" className="btn btn-warning btn-sm disabled">Добавить</button>
                      </div>
                      <Table th={['Запущен', 'Разрешенные id чатов', 'Действия']} rows={botRows} />
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