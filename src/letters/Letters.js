import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eventSetLetterID } from '../actions/letter'

export const Letters = ({i, j, len, l}) => {
    const { id } = useSelector(state => state.letter);
    const dispatch = useDispatch();
    const handleHover = (id) => {
        dispatch(eventSetLetterID(id));
    }

    return (
        <h1
            className={
                'tadaLetter animate__animated '
                + (id===`${i}${j}`?'animate__headShake ':'') 
                + (j===len-1?'lastLetterPad':'')}
            onMouseEnter={(e) => (handleHover(`${i}${j}`))}
            >{l}
        </h1>
    )
}
