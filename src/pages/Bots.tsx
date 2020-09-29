import React, {FC, useCallback, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getBots} from "../state/ducks/bots/actions"
import {RootState} from "../state/store"
import bg from '../assets/images/city-profile.jpg'
import BotEditForm from "../components/Forms/BotEditForm"
import Spinner from "../components/Spinner"
import {FormValues} from "../state/ducks/bots/types"

const Bots: FC = () => {
  const bots = useSelector((state: RootState) => state.bots.bots)
  const inSavingIds = useSelector((state: RootState) => state.bots.inSavingIds)
  const inDeletingIds = useSelector((state: RootState) => state.bots.inDeletingIds)
  const loading = useSelector((state: RootState) => state.bots.loading)
  const isCreating = useSelector((state: RootState) => state.bots.isCreating)

  const dispatch = useDispatch()

  const initFetch = useCallback(() => {
    dispatch(getBots())
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const onCreate = () => {
    // dispatch(setIsCreatingBot())
  }

  const onDelete = (botId: number) => {
    // eslint-disable-next-line no-restricted-globals
    // if (confirm('Вы уверены?')) dispatch(deleteBot(botId))
  }

  const onSubmit = (botId: number, values: FormValues) => {
    // if (botId === 0) {
    //   dispatch(createBot(values))
    // } else {
    //   dispatch(updateBot(botId, values))
    // }
  }


  // const botRows = bots.map(bot => [
  //   (<div className="form-check ml-2">
  //     <label className="form-check-label">
  //       <input className="form-check-input" type="checkbox" value="" checked={bot.enable} onChange={() => {}}/>
  //       <span className="form-check-sign">
  //           <span className="check"/>
  //         </span>
  //     </label>
  //   </div>),
  //   bot.allowedChatsId,
  //   (<>
  //     <Link className="btn btn-info btn-just-icon btn-sm mr-1" to={{pathname: `/bots/${bot.id}/autoAnswers`}}>
  //       <i className="fa fa-th-list"/>
  //     </Link>
  //     <Link className="btn btn-success btn-just-icon btn-sm mr-1 disabled" to={{pathname: `/bots/${bot.id}`}}>
  //       <i className="fa fa-pencil"/>
  //     </Link>
  //     <button type="button" className="btn btn-danger btn-just-icon btn-sm disabled">
  //       <i className="fa fa-times"/>
  //     </button>
  //   </>)
  // ])

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
                  {loading ?
                    <Spinner/> :
                    <div className="row">
                      <div className="col-12 mt-5">
                        {bots.map((bot) => (
                          <BotEditForm
                            key={bot.id}
                            id={bot.id}
                            values={{
                              allowedChatsId: bot.allowedChatsId,
                              enable: bot.enable,
                              token: bot.token,
                              name: bot.name
                            }}
                            onSubmit={onSubmit}
                            onDelete={onDelete}
                            isSaving={inSavingIds.some(id=>id===bot.id)}
                            isDeleting={inDeletingIds.some(id=>id===bot.id)}
                          />
                        ))}
                        {isCreating ?
                          <BotEditForm
                            id={0}
                            values={{
                              allowedChatsId: [],
                              enable: false,
                              token: '',
                              name: ''
                            }}
                            onSubmit={onSubmit}
                            isSaving={inSavingIds.some(id=>id===0)}
                          /> :
                          <div className="text-center">
                            <button className="btn btn-warning btn-sm" onClick={onCreate} disabled={true}>Добавить</button>
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
export default Bots