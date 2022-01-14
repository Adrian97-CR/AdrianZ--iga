import { types } from "../types/types";


const initialState = {
    id:'',
    reload: true
}

export const letterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setLetterID:
            return {
                ...state,
                id:action.payload
            }
        case types.setReloadingScreen:
            console.log(state.reload);
            return {
                ...state,
                reload:action.payload
            }
        default:
            return state;
    }
}