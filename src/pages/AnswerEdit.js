import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {createOneAnswer, getOneAnswer, updateOneAnswer} from "../state/ducks/autoAnswers/actions.ts";
import Spinner from '../components/Spinner'

const AnswerEdit = props => {
  const botId = props.match.params.botId;
  const answerId = props.match.params.answerId;
  const title = `Редактирование ответов бота #${botId}`
  document.title = title;

  const autoAnswer = useSelector(state => state.answers.autoAnswer);
  const loading = useSelector(state => state.answers.loading);
  const dispatch = useDispatch();

  const {register, handleSubmit, reset} = useForm();

  const onSubmit = val => {
    if (Array.isArray(val.private)) {
      val.private = !!val.private.length
    }
    if (answerId === '0') {
      dispatch(createOneAnswer(botId, val))
    } else {
      dispatch(updateOneAnswer(answerId,val))
    }
  }

  useEffect(() => {
    dispatch(getOneAnswer(answerId))
  }, [dispatch, answerId]);

  const AutoAnswerForm = () => {
    return loading ?
      (<Spinner></Spinner>)
      :
      (<>
        {autoAnswer?(<form onSubmit={handleSubmit(onSubmit)}>
          <div className="row text-left">
            <div className="col-12">
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" defaultChecked={autoAnswer.private} name="private" ref={register} />
                    Приватно
                    <span className="form-check-sign"><span className="check"></span></span>
                </label>
              </div>
            </div>
          </div>
          <div className="row text-left">
            <div className="col-6 form-group label-floating">
              <label className="form-control-label bmd-label-floating" htmlFor="coincidencesTextarea">Введите совпадения</label>
              <textarea className="form-control" rows="5" name="coincidences" defaultValue={autoAnswer.coincidences} ref={register} id="coincidencesTextarea"></textarea>
            </div>
            <div className="col-6 form-group label-floating">
              <label className="form-control-label bmd-label-floating" htmlFor="answersTextarea">Введите варианты ответов</label>
              <textarea className="form-control" rows="5" name="answers" defaultValue={autoAnswer.answers} ref={register} id="answersTextarea"></textarea>
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <button className="btn" type="button" onClick={()=>reset()}>Очистить</button>
            <button className="btn btn-success" type="submit">Сохранить</button>
          </div>
        </form>):''}
      </>)
  }
  return (
    <Fragment>
      <div className="page-header header-filter" style={{backgroundImage: 'url(/images/city-profile.jpg)', maxHeight: '300px'}}></div>
      <div className="main">
        <div className="container">
          <div className="section text-center">
            <div className="row">
              <div className="col-12 col-md-8 mx-md-auto">
                <div className="cd-section mb-5">
                  <h2>{title}</h2>
                  {/*{JSON.stringify(autoAnswer)}*/}
                </div>
                <AutoAnswerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AnswerEdit;