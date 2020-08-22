import React, {FC, useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {getBots} from '../state/ducks/bots/actions'
import {RouteComponentProps} from 'react-router'
import bg from '../assets/images/city-profile.jpg'

type TParams = { botId: string }

const Dashboard: FC<RouteComponentProps<TParams>> = (props) => {
  // const bots = useSelector(state => state.bots.bots);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBots())
  }, [dispatch]);

  const botId = parseInt(props.match.params.botId)

  return (
    <>
      <div className="page-header header-filter" style={{backgroundImage: `url(${bg})`, maxHeight: '300px'}} />
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
    </>
  );
};

export default Dashboard