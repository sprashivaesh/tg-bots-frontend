import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import * as reducers from "./ducks";

const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>

type PropertiesTypes<T> = T extends {[key:string]: infer U} ? U: never
export type InferActionsTypes<T extends {[key: string]: (...args: Array<any>)=>any}> = ReturnType<PropertiesTypes<T>>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk))
);