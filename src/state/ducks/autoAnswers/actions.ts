import {InferActionsTypes, RootState} from "../../store";
import {ThunkAction} from "redux-thunk";
import {autoAnswerApi} from "./api";
import {AutoAnswer} from "./types";

export const actions = {
  getAutoAnswersRequest: () => ({type: 'tg-bots/answers/GET_ANSWERS_REQUEST'} as const),
  getAutoAnswersSuccess: (answers: Array<AutoAnswer>) => ({type: 'tg-bots/answers/GET_ANSWERS_SUCCESS', payload: {answers}} as const),//вот так надо делать payload

  // getOneAutoAnswerRequest: () => ({type: 'tg-bots/answers/GET_ONE_ANSWER_REQUEST'} as const),
  // getOneAutoAnswerSuccess: (autoAnswer: AutoAnswer) => ({type: 'tg-bots/answers/GET_ONE_ANSWER_SUCCESS', payload: {autoAnswer}} as const),

  setIsCreatingOneAutoAnswer: () => ({type: 'tg-bots/answers/SET_IS_CREATING_ONE_ANSWER'} as const),
  createOneAutoAnswerRequest: () => ({type: 'tg-bots/answers/CREATE_ONE_ANSWER_REQUEST'} as const),
  createOneAutoAnswerSuccess: (autoAnswer: AutoAnswer) => ({type: 'tg-bots/answers/CREATE_ONE_ANSWER_SUCCESS', payload: {autoAnswer}} as const),

  updateOneAutoAnswerRequest: (autoAnswerId: number) => ({type: 'tg-bots/answers/UPDATE_ONE_ANSWER_REQUEST', payload: {autoAnswerId}} as const),
  updateOneAutoAnswerSuccess: (autoAnswer: AutoAnswer) => ({type: 'tg-bots/answers/UPDATE_ONE_ANSWER_SUCCESS', payload: {autoAnswer}} as const),

  deleteOneAutoAnswerRequest: (autoAnswerId: number) => ({type: 'tg-bots/answers/DELETE_ONE_ANSWER_REQUEST', payload: {autoAnswerId}} as const),
  deleteOneAutoAnswerSuccess: (autoAnswer: AutoAnswer) => ({type: 'tg-bots/answers/DELETE_ONE_ANSWER_SUCCESS', payload: {autoAnswer}} as const)
}

export type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkAT = ThunkAction<Promise<void>, RootState, any, ActionsTypes>

type AutoAnswerForm = {

}

export const getAnswers = (botId: number): ThunkAT => async (dispatch) => {
  dispatch(actions.getAutoAnswersRequest())
  try {
    let data = await autoAnswerApi.getAutoAnswers(botId)
    dispatch(actions.getAutoAnswersSuccess(data))
  } catch (e) {
    console.log(e)
  }
}
// export const getOneAnswer = (autoAnswerId:number): ThunkAT => async (dispatch: any) => {
//   // if (answerId === 0) return dispatch(actions.getOneAutoAnswerSuccess({}))
//   dispatch(actions.getOneAutoAnswerRequest())
//   try {
//     let data = await autoAnswerApi.getOneAutoAnswer(autoAnswerId)
//     dispatch(actions.getOneAutoAnswerSuccess(data))
//   } catch (e) {
//     console.log(e)
//   }
// }
export const setIsCreatingOneAutoAnswer = (): ThunkAT => async (dispatch) => {
  dispatch(actions.setIsCreatingOneAutoAnswer())
}
export const createOneAnswer = (botId:number, form:AutoAnswerForm): ThunkAT => async (dispatch) => {
  dispatch(actions.createOneAutoAnswerRequest())
  try {
    let data = await autoAnswerApi.createOneAutoAnswer(botId, form)
    dispatch(actions.createOneAutoAnswerSuccess(data))
  } catch (e) {
    console.log(e)
  }
}
export const updateOneAnswer = (autoAnswerId:number, form:AutoAnswerForm): ThunkAT => async (dispatch) => {
  dispatch(actions.updateOneAutoAnswerRequest(autoAnswerId))
  try {
    let data = await autoAnswerApi.updateOneAutoAnswer(autoAnswerId, form)
    dispatch(actions.updateOneAutoAnswerSuccess(data))
  } catch (e) {
    console.log(e)
  }
}
export const deleteOneAnswer = (autoAnswerId: number): ThunkAT => async (dispatch) => {
  dispatch(actions.deleteOneAutoAnswerRequest(autoAnswerId))
  try {
    let data = await autoAnswerApi.deleteOneAutoAnswer(autoAnswerId)
    dispatch(actions.deleteOneAutoAnswerSuccess(data))
  } catch (e) {
    console.log(e)
  }
}