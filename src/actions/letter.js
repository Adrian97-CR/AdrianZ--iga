import { types } from "../types/types"



export const eventSetLetterID = (id) => ({
    type:types.setLetterID,
    payload: id
})