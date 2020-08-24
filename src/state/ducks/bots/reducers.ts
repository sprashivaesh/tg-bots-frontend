import {ActionsTypes} from "./actions";
import {Bot} from "./types";

type InitialState = {
  bots: Array<Bot>,
  loading: boolean,
  loadingSavingIds: {[key:string]:boolean}
  loadingDeletingIds: {[key:string]:boolean}
  isCreating: boolean
  loaded: boolean,
  errors: Array<string>
}

const initialState: InitialState = {
  bots: [],
  loading: false,
  loadingSavingIds: {},
  loadingDeletingIds: {},
  isCreating: false,
  loaded: false,
  errors: []
};

const botReducer = (state = initialState, action: ActionsTypes):InitialState => {
  switch (action.type) {
    case "tg-bots/bot/GET_BOTS_REQUEST": return {...state, loading: true, loaded: false, bots: []}
    case "tg-bots/bot/GET_BOTS_SUCCESS": return {...state, loading: false, loaded: true, bots: action.payload.bots }
    // case 'tg-bots/bot/GET_BOTS_FAILURE': return {...state, loading: false, loaded: false, action.errors};
    default: return state;
  }
}

export default botReducer