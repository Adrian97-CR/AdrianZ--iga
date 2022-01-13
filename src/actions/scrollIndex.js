import { types } from "../types/types";

const routs = ['/about', '/myskills', '/work', '/contact'];

export const changeIndexByScroll = (scroll, path) => {
   let pos = routs.findIndex((r) => (r===(path==='/'?'/about':path)));
   const dir = scroll.deltaY/125;
   return ({
      type: types.setNewScrollIndex,
      payload: (!!routs[pos+dir]?routs[pos+dir]:routs[pos])
   })
}