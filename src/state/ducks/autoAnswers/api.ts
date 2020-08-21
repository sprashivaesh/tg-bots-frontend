import api from "../../utils/api"
import {Answer} from "./types";

export const autoAnswerApi = {
  getAutoAnswers: (botId: number):Promise<Array<Answer>> => {
    return api('get', `/auto-answers/byBotId/${botId}`)
  },
  getOneAutoAnswer: (answerId: number):Promise<Answer> => {
    return api('get', `/auto-answers/${answerId}`)
  },
  createOneAutoAnswer: (botId: number, data:any):Promise<Answer> => {
    return api('post', `/auto-answers/${botId}`, data)
  },
  updateOneAutoAnswer: (answerId: number, data:any):Promise<Answer> => {
    return api('post', `/auto-answers/${answerId}`, data)
  },
  deleteOneAutoAnswer: (answerId: number):Promise<Answer> => {
    return api('delete', `/auto-answers/${answerId}`)
  }
}