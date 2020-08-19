import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  ME_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST, User,
  // SIGN_UP_SUCCESS
} from "./types";

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

const signInReducer = (state = initialState, action: any): InitialState => {
  const { errors, payload } = action;
  switch (action.type) {
    case SIGN_UP_REQUEST: return {...state, loading: true, loaded: false, errors: []};
    // case SIGN_UP_SUCCESS: return {...state, loading: false, loaded: true, token: payload.jwt};
    case SIGN_UP_FAILURE: return {...state, loading: false, loaded: false, errors};

    case LOGIN_REQUEST: return {...state, loading: true, loaded: false, errors: []};
    case LOGIN_SUCCESS: return {...state, loading: false, loaded: true, token: payload.jwt};
    case LOGIN_FAILURE: return {...state, loading: false, loaded: false, errors};

    case ME_SUCCESS: return {...state, loading: false, loaded: true, user: payload};

    case LOGOUT: return {...state, user: null, token: ''};
    default: return state;
  }
}

export default signInReducer;