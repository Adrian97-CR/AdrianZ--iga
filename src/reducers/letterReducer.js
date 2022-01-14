import { types } from "../types/types";


const initialState = {
    id:'',
    reload: true,
    animation: 'animate__headShake'
}

export const letterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setLetterID:
            return {
                ...state,
                id:action.payload
            }
        case types.setReloadingScreen:
            return {
                ...state,
                reload:action.payload
            }
        case types.setNewAnimate:
            return {
                ...state,

            }
        default:
            return state;
    }
}