import api from '../../utils/api'
import {Bot} from "./types";

export const botsApi = {
  getBots: ():Promise<Array<Bot>> => {
    return api('get', '/bots')
  }
}