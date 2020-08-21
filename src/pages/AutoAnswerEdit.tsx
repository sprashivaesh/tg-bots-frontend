import React, {FC, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {createOneAnswer, getOneAnswer, updateOneAnswer} from "../state/ducks/autoAnswers/actions"
import Spinner from '../components/Spinner'
import {RootState} from "../state/store"
import bg from '../assets/images/city-profile.jpg'
import {RouteComponentProps} from "react-router-dom"
import AutoAnswerForm from "../components/Forms/AutoAnswerForm"
import {FormValues} from "../state/ducks/autoAnswers/types"

type TParams = { botId: string, answerId: string }

const AutoAnswerEdit: FC<RouteComponentProps<TParams>> = (props) => {
  const botId = parseInt(props.match.params.botId)
  const answerId = parseInt(props.match.params.answerId)

  const loading = useSelector((state: RootState) => state.autoAnswers.loading)
  const autoAnswer = useSelector((state: RootState) => state.autoAnswers.autoAnswer)

  const dispatch = useDispatch()

  const onSubmit = (values: FormValues) => {
    if (answerId === 0) {
      dispatch(createOneAnswer(botId, values))
    } else {
      dispatch(updateOneAnswer(answerId, values))
    }
  }

  useEffect(() => {
    dispatch(getOneAnswer(answerId))
  }, [dispatch, answerId])

  return (
    <>
      <div className="page-header header-filter" style={{backgroundImage: `url(${bg})`, maxHeight: '300px'}}/>
      <div className="main">
        <div className="container">
          <div className="section text-center">
            <div className="row">
              <div className="col-12 col-md-8 mx-md-auto">
                <div className="cd-section mb-5">
                  <h2>Редактирование ответов бота #{botId}</h2>
                </div>
                {loading ? <Spinner/> : (autoAnswer ? (
                  <AutoAnswerForm values={{
                    private: autoAnswer.private,
                    coincidences: autoAnswer.coincidences,
                    answers: autoAnswer.answers
                  }} onSubmit={onSubmit} />) : '')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AutoAnswerEdit