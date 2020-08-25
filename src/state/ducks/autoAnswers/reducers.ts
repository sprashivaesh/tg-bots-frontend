import {ActionsTypes} from "./actions"
import {AutoAnswer} from "./types"

type InitialState = {
  answers: Array<AutoAnswer>,
  // autoAnswer: AutoAnswer|null,
  loading: boolean,
  inSavingIds: Array<number>
  inDeletingIds: Array<number>
  isCreating: boolean
  loaded: boolean,
  errors: Array<string>
}
const initialState: InitialState = {
  answers: [],
  // autoAnswer: null,
  loading: false,
  inSavingIds: [],
  inDeletingIds: [],
  isCreating: false,
  loaded: false,
  errors: []
};


const botReducer = (state = initialState, action: ActionsTypes): InitialState => {
  switch (action.type) {
    case "tg-bots/answers/GET_ANSWERS_REQUEST":
      return {...state, loading: true, loaded: false, answers: []}
    case "tg-bots/answers/GET_ANSWERS_SUCCESS":
      return {...state, loading: false, loaded: true, answers: action.payload.answers}
    // case "tg-bots/answers/GET_ANSWERS_FAILURE": return {...state, loading: false, loaded: false, errors}

    // case "tg-bots/answers/GET_ONE_ANSWER_REQUEST":
    //   return {...state, loading: true, loaded: false, autoAnswer: null}
    // case "tg-bots/answers/GET_ONE_ANSWER_SUCCESS":
    //   return {...state, loading: false, loaded: true, autoAnswer: action.payload.autoAnswer}
    // case "tg-bots/answers/GET_ONE_ANSWER_FAILURE": return {...state, loading: false, loaded: false, errors}

    case "tg-bots/answers/SET_IS_CREATING_ONE_ANSWER": return {...state, isCreating: true}
    case "tg-bots/answers/CREATE_ONE_ANSWER_REQUEST":
      return {...state, inSavingIds: [...state.inSavingIds, 0]}
    case "tg-bots/answers/CREATE_ONE_ANSWER_SUCCESS": {
      return {...state, inSavingIds: state.inSavingIds.filter(id=>id!==0), answers: [...state.answers, ...[action.payload.autoAnswer]], isCreating: false}
    }
    // case "tg-bots/answers/CREATE_ONE_ANSWER_FAILURE": return {...state, loading: false, loaded: false, errors}

    case "tg-bots/answers/UPDATE_ONE_ANSWER_REQUEST":
      return {...state, inSavingIds: [...state.inSavingIds, action.payload.autoAnswerId]}
    case "tg-bots/answers/UPDATE_ONE_ANSWER_SUCCESS": {
      const ind = state.answers.findIndex((a) => a.id === action.payload.autoAnswer.id)
      const answers = [...state.answers]
      if (ind !== -1) answers[ind] = {...action.payload.autoAnswer}
      return {...state, inSavingIds: state.inSavingIds.filter(id=>id!==action.payload.autoAnswer.id), answers}
    }
    // case "tg-bots/answers/UPDATE_ONE_ANSWER_FAILURE": return {...state, loading: false, loaded: false, errors}

    case "tg-bots/answers/DELETE_ONE_ANSWER_REQUEST":
      return {...state, inDeletingIds: [...state.inDeletingIds, action.payload.autoAnswerId]}
    case "tg-bots/answers/DELETE_ONE_ANSWER_SUCCESS": {
      const ind = state.answers.findIndex((a) => a.id === action.payload.autoAnswer.id)
      const answers = [...state.answers]
      if (ind !== -1) answers.splice(ind, 1)
      return {...state, inDeletingIds: state.inDeletingIds.filter(id=>id!==action.payload.autoAnswer.id), answers}
    }
    // case "tg-bots/answers/DELETE_ONE_ANSWER_FAILURE": return {...state, loading: false, loaded: false, errors}

    default:
      return state
  }
}
export default botReducer