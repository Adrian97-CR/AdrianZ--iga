import { combineReducers } from "redux";
import { letterReducer } from "./letterReducer";
import { scrollReducer } from "./scrollReducer";


export const rootReducer = combineReducers({
    letter:letterReducer,
    scroll:scrollReducer
})