import {ActionsTypes} from "./actions";
import {Bot} from "./types";

const initialState = {
  bots: [] as Array<Bot>,
  loading: false,
  inSavingIds: [] as Array<number>,
  inDeletingIds: [] as Array<number>,
  isCreating: false,
  loaded: false,
  errors: [] as Array<string>
}

type InitialState = typeof initialState

const botReducer = (state = initialState, action: ActionsTypes):InitialState => {
  switch (action.type) {
    case "tg-bots/bot/GET_BOTS_REQUEST": return {...state, loading: true, loaded: false, bots: []}
    case "tg-bots/bot/GET_BOTS_SUCCESS": return {...state, loading: false, loaded: true, bots: action.payload.bots }
    // case 'tg-bots/bot/GET_BOTS_FAILURE': return {...state, loading: false, loaded: false, action.errors};
    default: return state;
  }
}

export default botReducer