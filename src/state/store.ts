import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import * as reducers from "./ducks";

const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk))
);