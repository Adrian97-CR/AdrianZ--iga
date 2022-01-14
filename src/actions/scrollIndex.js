import { types } from "../types/types";

const routs = ['/home','/about', '/myskills', '/work', '/contact'];

export const changeIndexByScroll = (scroll, path) => {
   let pos = routs.findIndex((r) => (r===(path==='/'?'/home':path)));
   const dir = scroll.deltaY/Math.abs(scroll.deltaY);
   console.log(pos+dir);
   return ({
      type: types.setNewScrollIndex,
      payload: (!!routs[pos+dir]?routs[pos+dir]:routs[pos])
   })
}