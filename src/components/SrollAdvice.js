import React from 'react'
import { useSelector } from 'react-redux'

export const SrollAdvice = () => {
   const {} = useSelector((state) => (state.scroll))

   return (
      <div style={float}>
         <div id="arrowAnim">
            <div class="arrowSliding">
               <div class="arrow"></div>
            </div>
            <div class="arrowSliding delay1">
               <div class="arrow"></div>
            </div>
            <div class="arrowSliding delay2">
               <div class="arrow"></div>
            </div>
         </div>
      </div>
   )
}
const float = {
	position:'absolute',
	justifyContent: 'center',
	alignItems:'center',
	right:'20px',
	top:'50%'
}