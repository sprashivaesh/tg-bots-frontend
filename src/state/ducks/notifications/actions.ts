import {InferActionsTypes, RootState} from "../../store";
import {ThunkAction} from "redux-thunk";
import {NotificationValues, Notification} from "./types";

export const actions = {
  addNotification: (notification: Notification) => ({type: 'tg-bots/notifications/ADD_NOTIFICATION', payload: {notification}} as const),
  removeNotification: (id:number) => ({type: 'tg-bots/notifications/REMOVE_NOTIFICATION', payload: {id}} as const),
}

export type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkAT = ThunkAction<Promise<void>, RootState, any, ActionsTypes>

export const addNotification = (notificationValues: NotificationValues): ThunkAT => async (dispatch) => {
  const notification = {...notificationValues, id: Date.now()}
  dispatch(actions.addNotification(notification))
  setTimeout( ()=>{
    dispatch(actions.removeNotification(notification.id))
  }, 3000)
}
export const removeNotification = (id: number): ThunkAT => async (dispatch) => {
  dispatch(actions.removeNotification(id))
}