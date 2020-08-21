import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Link} from 'react-router-dom'
import {getBots} from "../state/ducks/bots/actions"
import Table from "../components/Table"
import {RootState} from "../state/store"
import bg from '../assets/images/city-profile.jpg'

const Dashboard = () => {
  const bots = useSelector((state: RootState) => state.bots.bots)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBots())
  }, [dispatch])

  const botRows = bots.map(bot => [
    (<div className="form-check ml-2">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" value="" checked={bot.enable} onChange={() => {}}/>
        <span className="form-check-sign">
            <span className="check"/>
          </span>
      </label>
    </div>),
    bot.allowedChatsId,
    (<>
      <Link className="btn btn-info btn-just-icon btn-sm mr-1" to={{pathname: `/bots/${bot.id}/autoAnswers`}}>
        <i className="fa fa-th-list"/>
      </Link>
      <Link className="btn btn-success btn-just-icon btn-sm mr-1 disabled" to={{pathname: `/bots/${bot.id}`}}>
        <i className="fa fa-pencil"/>
      </Link>
      <button type="button" className="btn btn-danger btn-just-icon btn-sm disabled">
        <i className="fa fa-times"/>
      </button>
    </>)
  ])

  return (
    <>
      <div className="page-header header-filter" style={{backgroundImage: `url(${bg})`, maxHeight: '300px'}}/>
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
                      <Table th={['Запущен', 'Разрешенные id чатов', 'Действия']} rows={botRows}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard