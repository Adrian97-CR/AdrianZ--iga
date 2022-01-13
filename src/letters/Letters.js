import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eventSetLetterID } from '../actions/letter'

export const Letters = ({i, j, l}) => {
    const { id, reload } = useSelector(state => state.letter);
    const dispatch = useDispatch();
    const handleHover = (id) => {
        dispatch(eventSetLetterID(id));
    }
    console.log(reload);
    return (
        l!==' '
        ?
            <h1
                className={
                    'tadaLetter animate__animated '
                    + (id===`${i}${j}`?'animate__headShake ':'')
                    + (reload?'animate__jackInTheBox ':'')}
                onMouseEnter={(e) => (handleHover(`${i}${j}`))}
                >{l}
            </h1>
        :  <span className='whitespace'>   </span>
    )
}