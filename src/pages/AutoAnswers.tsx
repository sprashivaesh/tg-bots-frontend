import React, {FC, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RouteComponentProps} from 'react-router-dom'
import {
  createOneAnswer,
  deleteOneAnswer,
  getAnswers,
  setIsCreatingOneAutoAnswer,
  updateOneAnswer
} from "../state/ducks/autoAnswers/actions";
import {RootState} from "../state/store";
import bg from '../assets/images/city-profile.jpg'
import AutoAnswerForm from "../components/Forms/AutoAnswerForm";
import {FormValues} from "../state/ducks/autoAnswers/types";
import Spinner from "../components/Spinner";

type TParams = { botId: string };

const AutoAnswers: FC<RouteComponentProps<TParams>> = (props) => {
  console.log('render autoAnswers')
  const botId = parseInt(props.match.params.botId)

  const answers = useSelector((state: RootState) => state.autoAnswers.answers)
  const inSavingIds = useSelector((state: RootState) => state.autoAnswers.inSavingIds)
  const inDeletingIds = useSelector((state: RootState) => state.autoAnswers.inDeletingIds)
  const loading = useSelector((state: RootState) => state.autoAnswers.loading)
  const isCreating = useSelector((state: RootState) => state.autoAnswers.isCreating)

  const dispatch = useDispatch()

  const initFetch = useCallback(() => {
    dispatch(getAnswers(botId))
  }, [dispatch, botId]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const onCreate = useCallback(() => {
    dispatch(setIsCreatingOneAutoAnswer())
  }, [dispatch])

  const onDelete = useCallback((answerId: number) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Вы уверены?')) dispatch(deleteOneAnswer(answerId))
  }, [dispatch])

  const onSubmit = useCallback((autoAnswerId: number, values: FormValues) => {
    if (autoAnswerId === 0) {
      dispatch(createOneAnswer(botId, values))
    } else {
      dispatch(updateOneAnswer(autoAnswerId, values))
    }
  }, [dispatch, botId])

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
                  {loading ?
                    <Spinner/> :
                    <div className="row">
                      <div className="col-12 mt-5">
                        {answers.map((autoAnswer) => (
                          <AutoAnswerForm
                            key={autoAnswer.id}
                            autoAnswer={autoAnswer}
                            onSubmit={onSubmit}
                            onDelete={onDelete}
                            isSaving={inSavingIds.some(id => id === autoAnswer.id)}
                            isDeleting={inDeletingIds.some(id => id === autoAnswer.id)}
                          />
                        ))}
                        {isCreating ?
                          <AutoAnswerForm
                            onSubmit={onSubmit}
                            isSaving={inSavingIds.some(id => id === 0)}
                          /> :
                          <div className="text-center">
                            <button className="btn btn-warning btn-sm" onClick={onCreate}>Добавить</button>
                          </div>
                        }
                      </div>
                    </div>
                  }
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