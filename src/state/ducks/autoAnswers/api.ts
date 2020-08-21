import api from "../../utils/api"
import {AutoAnswer} from "./types";

export const autoAnswerApi = {
  getAutoAnswers: (botId: number):Promise<Array<AutoAnswer>> => {
    return api('get', `/auto-answers/byBotId/${botId}`)
  },
  getOneAutoAnswer: (answerId: number):Promise<AutoAnswer> => {
    return api('get', `/auto-answers/${answerId}`)
  },
  createOneAutoAnswer: (botId: number, data:any):Promise<AutoAnswer> => {
    return api('post', `/auto-answers/${botId}`, data)
  },
  updateOneAutoAnswer: (answerId: number, data:any):Promise<AutoAnswer> => {
    return api('post', `/auto-answers/${answerId}`, data)
  },
  deleteOneAutoAnswer: (answerId: number):Promise<AutoAnswer> => {
    return api('delete', `/auto-answers/${answerId}`)
  }
}