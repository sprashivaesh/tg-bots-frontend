import {botsApi} from "./api";
import {InferActionsTypes, RootState} from "../../store";
import {ThunkAction} from "redux-thunk";
import {Bot} from "./types";

const actions = {
  getBotsRequest: () => ({type: 'tg-bots/bot/GET_BOTS_REQUEST'} as const),
  getBotsSuccess: (data:Array<Bot>) => ({ type: 'tg-bots/bot/GET_BOTS_SUCCESS', payload: { bots: data }} as const)
}

export type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkAT = ThunkAction<Promise<void>, RootState, any, ActionsTypes>

export const getBots = ():ThunkAT => async (dispatch) => {
  dispatch(actions.getBotsRequest())
  try {
    let data = await botsApi.getBots()
    dispatch(actions.getBotsSuccess(data))
  } catch (e) {
    console.log(e)
  }
}
