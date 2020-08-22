import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, RouteComponentProps} from 'react-router-dom'
import {createOneAnswer, deleteOneAnswer, getAnswers, updateOneAnswer} from "../state/ducks/autoAnswers/actions";
import {RootState} from "../state/store";
import bg from '../assets/images/city-profile.jpg'
import AutoAnswerForm from "../components/Forms/AutoAnswerForm";
import {FormValues} from "../state/ducks/autoAnswers/types";

type TParams = { botId: string };

const AutoAnswers: FC<RouteComponentProps<TParams>> = (props) => {
  const botId = parseInt(props.match.params.botId)

  const answers = useSelector((state: RootState) => state.autoAnswers.answers)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnswers(botId))
  }, [dispatch, botId])

  const onDelete = (answerId: number) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Вы уверены?')) dispatch(deleteOneAnswer(answerId))
  }

  const onSubmit = (autoAnswerId: number, values: FormValues) => {
    if (autoAnswerId === 0) {
      dispatch(createOneAnswer(botId, values))
    } else {
      dispatch(updateOneAnswer(autoAnswerId, values))
    }
  }

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
                        <Link className="btn btn-warning btn-sm"
                              to={{pathname: `/bots/${botId}/answers/0`}}>Добавить</Link>
                      </div>
                      {answers.map((autoAnswer) => (
                        <AutoAnswerForm
                          key={autoAnswer.id}
                          values={{
                            private: autoAnswer.private,
                            coincidences: autoAnswer.coincidences,
                            answers: autoAnswer.answers
                          }}
                          onSubmit={(values) => {
                            onSubmit(autoAnswer.id, values)
                          }}
                          onDelete={onDelete}
                          id={autoAnswer.id}
                        />
                      ))}
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