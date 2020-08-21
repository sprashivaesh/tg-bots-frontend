import {ActionsTypes} from "./actions";
import {AutoAnswer} from "./types";

export type InitialStateType = {
  answers: Array<AutoAnswer>,
  autoAnswer: AutoAnswer|null,
  loading: boolean,
  loaded: boolean,
  errors: Array<string>
}
const initialState: InitialStateType = {
  answers: [],
  autoAnswer: null,
  loading: false,
  loaded: false,
  errors: []
};


const botReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case "tg-bots/answers/GET_ANSWERS_REQUEST": return {...state, loading: true, loaded: false, answers: []}
    case "tg-bots/answers/GET_ANSWERS_SUCCESS": return {...state, loading: false, loaded: true, answers: action.payload.answers }
    // case "tg-bots/answers/GET_ANSWERS_FAILURE": return {...state, loading: false, loaded: false, errors}

    case "tg-bots/answers/GET_ONE_ANSWER_REQUEST": return {...state, loading: true, loaded: false, autoAnswer: null}
    case "tg-bots/answers/GET_ONE_ANSWER_SUCCESS": return {...state, loading: false, loaded: true, autoAnswer: action.payload.autoAnswer}
    // case "tg-bots/answers/GET_ONE_ANSWER_FAILURE": return {...state, loading: false, loaded: false, errors}

    case "tg-bots/answers/CREATE_ONE_ANSWER_REQUEST": return {...state, loading: true, loaded: false}
    case "tg-bots/answers/CREATE_ONE_ANSWER_SUCCESS": {
      const ind = state.answers.findIndex((a)=>a.id === action.payload.autoAnswer.id)
      const tmp = [...state.answers]
      if (ind !== -1) tmp.push(action.payload.autoAnswer)
      return {...state, loading: false, loaded: true, answers: tmp, autoAnswer: action.payload.autoAnswer}
    }
    // case "tg-bots/answers/CREATE_ONE_ANSWER_FAILURE": return {...state, loading: false, loaded: false, errors}

    case "tg-bots/answers/UPDATE_ONE_ANSWER_REQUEST": return {...state, loading: true, loaded: false}
    case "tg-bots/answers/UPDATE_ONE_ANSWER_SUCCESS": {
      const ind = state.answers.findIndex((a)=>a.id === action.payload.autoAnswer.id)
      const tmp = [...state.answers]
      if (ind === -1) tmp[ind] = {...tmp[ind], ...action.payload.autoAnswer}
      return {...state, loading: false, loaded: true, answers: tmp, autoAnswer: action.payload.autoAnswer}
    }
    // case "tg-bots/answers/UPDATE_ONE_ANSWER_FAILURE": return {...state, loading: false, loaded: false, errors}

    case "tg-bots/answers/DELETE_ONE_ANSWER_REQUEST": return {...state, loading: true, loaded: false}
    case "tg-bots/answers/DELETE_ONE_ANSWER_SUCCESS": {
      const ind = state.answers.findIndex((a)=>a.id === action.payload.autoAnswer.id)
      const tmp = [...state.answers]
      if (ind === -1) tmp.splice(ind, 1)
      return {...state, loading: false, loaded: true, answers: tmp  }
    }
    // case "tg-bots/answers/DELETE_ONE_ANSWER_FAILURE": return {...state, loading: false, loaded: false, errors}

    default: return state
  }
}

export default botReducer