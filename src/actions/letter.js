import { types } from "../types/types"



export const eventSetLetterID = (id) => ({
    type:types.setLetterID,
    payload: id
})

export const setReloadingScreen = (state) => ({
    type: types.setReloadingScreen,
    payload: state
})