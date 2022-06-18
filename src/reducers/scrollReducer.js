import { types } from "../types/types";

const initialState = {
   route:'/',
   disable: false,
}

export const scrollReducer = ( state = initialState, action) => {
   switch (action.type) {
      case types.setNewScrollIndex:
         return {
            ...state,
            route:action.payload
         }
      case types.setDisableScroll:
         return {
            ...state,
            disable:action.payload
         }
      default:
         return state;
   }
}