import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSideBState } from '../actions/navbar'

export const FavSideBar = () => {
   const { show } = useSelector(state => state.sideB);
   const dispatch = useDispatch();
   const handleModalState = () => {
      dispatch(changeSideBState());
   }
   return (
      <button
          className='btn fabBtn'
          onClick={ handleModalState }
      >
         {
            !show
            ?<i className="fas fa-bars iconSize"></i>
            :<i className="fas fa-times iconSize"></i>

         }
      </button>
   )
}
