import React from 'react'
import { useSelector } from 'react-redux'

export const SrollAdvice = () => {
   const {} = useSelector((state) => (state.scroll))
// todo
   return (
      <div style={float}>
         <div style={{justifyContent:'space-evenly', width:'150px'}}>
            <div id="arrowAnim">
               <div className="arrowSliding">
                  <div className="arrow"></div>
               </div>
               <div className="arrowSliding delay1">
                  <div className="arrow"></div>
               </div>
               <div className="arrowSliding delay2">
                  <div className="arrow"></div>
               </div>
            </div>
            <div id="arrowAnim2">
               <div className="arrowSliding">
                  <div className="arrow"></div>
               </div>
               <div className="arrowSliding delay1">
                  <div className="arrow"></div>
               </div>
               <div className="arrowSliding delay2">
                  <div className="arrow"></div>
               </div>
            </div>
            <div>asdf</div>
         </div>
      </div>
   )
}
const float = {
	position:'absolute',
	justifyContent: 'center',
	alignItems:'space-around',
	right:'160px',
	top:'50%'
}