import {GET_BOTS_REQUEST, GET_BOTS_SUCCESS, GET_BOTS_FAILURE} from "./types";

const initialState = {
  bots: [],
  loading: false,
  loaded: false,
  errors: []
};

const botReducer = (state = initialState, action) => {
  const { errors, payload } = action;
  switch (action.type) {
    case GET_BOTS_REQUEST: return {...state, loading: true, loaded: false, bots: []};
    case GET_BOTS_SUCCESS: return {...state, loading: false, loaded: true, bots: payload.bots }
    case GET_BOTS_FAILURE: return {...state, loading: false, loaded: false, errors};
    default: return state;
  }
}

export default botReducer;