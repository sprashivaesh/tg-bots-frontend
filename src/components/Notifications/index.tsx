import React, {FC} from "react"
import styles from "./styles.module.css";
import {RootState} from "../../state/store";
import {useDispatch, useSelector} from "react-redux";
import {removeNotification} from "../../state/ducks/notifications/actions";

const Notifications: FC = () => {

  const notifications = useSelector((state: RootState) => state.notifications.notifications)
  const dispatch = useDispatch()

  const close = (id: number) => {
    dispatch(removeNotification(id))
  }

  return (
    <div className={styles.notifications}>
      {notifications.map((n, ind) =>
        <div className={`alert alert-${n.type}`} key={ind} onClick={()=>{close(n.id)}}>
          <div className="container">
            <span className="mr-2">
              {(n.type === 'info') || (n.type === 'danger') ? <i className="fa fa-exclamation-circle"/> : ''}
              {n.type === 'success' ? <i className="fa fa-check"/> : ''}
              {n.type === 'warning' ? <i className="fa fa-exclamation-triangle"/> : ''}
            </span>
            {n.message}
          </div>
        </div>
      )}
    </div>
  )
}

export default Notifications