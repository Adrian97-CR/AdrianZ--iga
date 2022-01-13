import { useSelector } from "react-redux";
import { types } from "../types/types";


const initialState = {
    id:''
}

export const letterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setLetterID:
            return {
                ...state,
                id:action.payload
            }    
        default:
            return state;
    }
}