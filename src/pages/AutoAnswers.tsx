import React, {FC, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, RouteComponentProps} from 'react-router-dom'
import Table from "../components/Table";
import {deleteOneAnswer, getAnswers} from "../state/ducks/autoAnswers/actions";
import {RootState} from "../state/store";
import bg from '../assets/images/city-profile.jpg'

type TParams = { botId: string };

const AutoAnswers: FC<RouteComponentProps<TParams>> = (props) => {
  const botId = parseInt(props.match.params.botId)

  const answers = useSelector((state:RootState) => state.autoAnswers.answers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnswers(botId))
  }, [dispatch, botId])

  const onDelete = (answerId: number) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Вы уверены?')) dispatch(deleteOneAnswer(answerId))
  };

  const answerRows = answers.map(answer=> [
    (<div className="form-check ml-2">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" value="" checked={!!answer.private} onChange={()=>{}}/>
        <span className="form-check-sign">
            <span className="check"/>
          </span>
      </label>
    </div>),
    answer.coincidences,
    answer.answers,
    (<>
      <Link className="btn btn-success btn-just-icon btn-sm mr-1" to={{pathname: `/bots/${botId}/autoAnswers/${answer.id}`}}>
        <i className="fa fa-pencil"/>
      </Link>
      <button type="button" className="btn btn-danger btn-just-icon btn-sm" onClick={()=>onDelete(answer.id)}>
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
                  <h2>Ответы бота #{botId}</h2>
                  <div className="row">
                    <div className="col-12">
                      <div className="text-right">
                        <Link className="btn btn-warning btn-sm" to={{pathname: `/bots/${botId}/answers/0`}}>Добавить</Link>
                      </div>
                      <Table th={['Приватно', 'Совпадения', 'Ответы', 'Действия']} rows={answerRows} />
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

export default AutoAnswers