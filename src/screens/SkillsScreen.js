import React, { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux';
import { eventSetLetterID, setNewAnimation } from '../actions/letter';
import { ShakeTitle } from '../letters/ShakeTitle'

const title = ['My Skills', 'Coming soon...'];
export const SkillsScreen = ( ) => {
    
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        let i = -1;
        let j = 0;
        dispatch(setNewAnimation('animate__shakeY'));
        const event = setInterval(() => {
            if (i!==-1) {
                if (i === title[j].length) {
                    i=0;
                    j++;
                    console.log(title.length);
                    if (j === title.length) {
                        j=0;
                    }
                }
                title[j][i] === ' '&&i++;
             //    if (title[j][i] === ' ') {
                    
             //    }
                dispatch(eventSetLetterID(`${j}${i}`));
            }
             i++;
        },1000)
        return () => {
         clearInterval(event)
        }
    }, [dispatch])
     return (
         <div className='homeContainer animate__animated '>
             <ShakeTitle ovc={'overRideColor'} title={[...title]} />
         </div>
     )
}
