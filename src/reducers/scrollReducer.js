import { types } from "../types/types";

const initialState = {
   route:'/'
}

export const scrollReducer = ( state = initialState, action) => {
   switch (action.type) {
      case types.setNewScrollIndex:
         return {
            ...state,
            route:action.payload
         }
   
      default:
         return state;
   }
}