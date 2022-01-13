import { combineReducers } from "redux";
import { letterReducer } from "./letterReducer";


export const rootReducer = combineReducers({
    letter:letterReducer 
})