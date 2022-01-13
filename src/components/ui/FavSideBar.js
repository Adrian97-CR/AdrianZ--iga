import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSideBState } from '../../actions/navbar'

export const FavSideBar = () => {
   const { show } = useSelector(state => state.sideB);
   const dispatch = useDispatch();
   const handleModalState = () => {
      dispatch(changeSideBState());
   }
   return (
      <button
          className='btn fab'
          onClick={ handleModalState }
      >
          <i className='fas fa-plus'></i>
      </button>
   )
}
