import { types } from "../types/types";

const routs = ['/home','/about', '/myskills', '/projects', '/contact'];

export const changeIndexByScroll = (scroll, path) => {
   let pos = routs.findIndex((r) => (r===(path==='/'?'/home':path)));
   const dir = scroll.deltaY/Math.abs(scroll.deltaY);
   return ({
      type: types.setNewScrollIndex,
      payload: (!!routs[pos+dir]?routs[pos+dir]:routs[pos])
   })
}

export const setScrollState = (state) => ({
   type: types.setDisableScroll,
   payload: state
})