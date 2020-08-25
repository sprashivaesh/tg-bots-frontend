import {ActionsTypes} from "./actions"
import {Notification} from "./types"

const initialState = {
  notifications: [] as Array<Notification>
}

type InitialState = typeof initialState

const notificationReducer = (state = initialState, action: ActionsTypes): InitialState => {
  switch (action.type) {
    case "tg-bots/notifications/ADD_NOTIFICATION":
      return {...state, notifications: [...state.notifications, action.payload.notification]}
    case "tg-bots/notifications/REMOVE_NOTIFICATION":
      return {...state, notifications: state.notifications.filter(n => n.id !== action.payload.id)}
    default:
      return state
  }
}
export default notificationReducer