import React, {FC, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {createOneAnswer, getOneAnswer, updateOneAnswer} from "../state/ducks/autoAnswers/actions"
import Spinner from '../components/Spinner'
import {RootState} from "../state/store"
import bg from '../assets/images/city-profile.jpg'
import {RouteComponentProps} from "react-router-dom"
import {useFormik} from "formik";

type TParams = { botId: string, answerId: string }

type FormValues = {
  private: boolean | null
  coincidences: string
  answers: string
}


const AutoAnswerForm = () => {
  const autoAnswer = useSelector((state: RootState) => state.autoAnswers.autoAnswer)
  const formik = useFormik({
    initialValues: {
      private: autoAnswer?autoAnswer.private : false,
      coincidences: autoAnswer?autoAnswer.coincidences : '',
      answers: autoAnswer?autoAnswer.answers : ''
    },
    onSubmit: (values:FormValues) => {
      console.log(values)
      // if (answerId === 0) {
      //   dispatch(createOneAnswer(botId, values))
      // } else {
      //   dispatch(updateOneAnswer(answerId, values))
      // }
    }
  })
  return (<form onSubmit={formik.handleSubmit}>
    <div className="row text-left">
      <div className="col-12">
        <div className="form-check">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              name="private"
              onChange={formik.handleChange}
            />
            Приватно
            <span className="form-check-sign"><span className="check"/></span>
          </label>
        </div>
      </div>
    </div>
    <div className="row text-left">
      <div className="col-6 form-group label-floating">
        <label className="form-control-label bmd-label-floating" htmlFor="coincidencesTextarea">Введите совпадения</label>
        <textarea
          className="form-control"
          rows={5}
          name="coincidences"
          id="coincidencesTextarea"
          onChange={formik.handleChange}
        />
      </div>
      <div className="col-6 form-group label-floating">
        <label className="form-control-label bmd-label-floating" htmlFor="answersTextarea">Введите варианты ответов</label>
        <textarea
          className="form-control"
          rows={5}
          name="answers"
          id="answersTextarea"
          onChange={formik.handleChange}
        />
      </div>
    </div>
    <div className="d-flex justify-content-around">
      {/*<button className="btn" type="button" onClick={()=>reset()}>Очистить</button>*/}
      <button className="btn btn-success" type="submit">Сохранить</button>
    </div>
  </form>)
}


const AutoAnswerEdit: FC<RouteComponentProps<TParams>> = (props) => {
  const botId = parseInt(props.match.params.botId)
  const answerId = parseInt(props.match.params.answerId)

  const loading = useSelector((state: RootState) => state.autoAnswers.loading)
  const autoAnswer = useSelector((state: RootState) => state.autoAnswers.autoAnswer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOneAnswer(answerId))
  }, [dispatch, answerId])

  // const onSubmit = (val) => {
  //   if (Array.isArray(val.private)) {
  //     val.private = !!val.private.length
  //   }
  //   if (answerId === 0) {
  //     dispatch(createOneAnswer(botId, val))
  //   } else {
  //     dispatch(updateOneAnswer(answerId,val))
  //   }
  // }

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
                {loading ? <Spinner/> : (autoAnswer ? <AutoAnswerForm /> : '')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AutoAnswerEdit