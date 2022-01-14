import React, { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNewAnimation } from '../../actions/letter';
import { ShakeTitle } from '../../letters/ShakeTitle';

export const HomeScreen = () => {
   const title = ['Hi,', 'Im ', false,'drián', 'computer engineer'];
   const nav = useNavigate();
   const dispatch = useDispatch();
   useLayoutEffect(() => {
       dispatch(setNewAnimation('animate__shakeY'));
   }, [dispatch])
    const handleGoContack = () => {
        nav('/contact')
    }
   return (
           <div className='homeContainer animate__animated '>
               <ShakeTitle title={[...title]} />
               <div className='descHm'><span>Front End Developer / Back End Developer</span></div>
               <button className='contactBtn'
                    onClick={handleGoContack}
               >Keep in touch?</button>
           </div>
       
   )
}
