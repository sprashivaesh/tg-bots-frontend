import {User} from "./types";
import {ActionsTypes} from "./actions";

type InitialState = {
  user: null | User
  token: string
  loading: boolean,
  loaded: boolean,
  errors: Array<string>
}

const initialState: InitialState = {
  user: null,
  token: localStorage.getItem('auth._token') || '',
  loading: false,
  loaded: false,
  errors: []
};

const signInReducer = (state = initialState, action: ActionsTypes): InitialState => {
  switch (action.type) {
    case "tg-bots/user/SIGN_UP_REQUEST": return {...state, loading: true, loaded: false, errors: []}
    case "user/SIGN_UP_FAILURE": return {...state, loading: false, loaded: false, errors: action.errors}

    case 'tg-bots/user/LOGIN_REQUEST': return {...state, loading: true, loaded: false, errors: []};
    case 'tg-bots/user/LOGIN_SUCCESS': return {...state, loading: false, loaded: true, token: action.payload.jwt};
    // case 'tg-bots/user/LOGIN_FAILURE': return {...state, loading: false, loaded: false, errors};

    case 'tg-bots/user/ME_SUCCESS': return {...state, loading: false, loaded: true, user: action.payload};

    case 'tg-bots/user/LOGOUT': return {...state, user: null, token: ''};
    default: return state;
  }
}

export default signInReducer;