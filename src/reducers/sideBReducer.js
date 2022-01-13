import { types } from "../types/types";

const initialState = {
   show: false
}

export const sideBReducer = ( state = initialState, action) => {
   switch (action.type) {
      case types.sideBOpenClose:
         return {
            ...state,
            show:!state.show
         }
   
      default:
         return state;
   }
}