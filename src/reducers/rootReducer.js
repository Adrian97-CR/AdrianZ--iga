import { combineReducers } from "redux";
import { letterReducer } from "./letterReducer";
import { sideBReducer } from "./sideBReducer";
import { scrollReducer } from "./scrollReducer";


export const rootReducer = combineReducers({
    letter:letterReducer,
    sideB:sideBReducer,
    scroll:scrollReducer
})