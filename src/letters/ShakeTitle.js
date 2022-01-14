import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { eventSetLetterID, setReloadingScreen } from '../actions/letter';
import { Letters } from './Letters';

export const ShakeTitle = ({title}) => {
    const { id } = useSelector(state => state.letter)
    const dispatch = useDispatch();
    const timerRef = useRef();
    useLayoutEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setReloadingScreen(false))
          }, 1000);
        return () => {
            clearTimeout(timer);
        }
    }, [dispatch])
    useEffect(() => {
        let timer;
        if (id!='') {
            !!timerRef.current&&clearTimeout(timerRef.current)
            console.log(timer);
            timer = setTimeout(() => {
                dispatch(eventSetLetterID(''))
            }, 1500);
            timerRef.current = timer;
        }
    }, [id, dispatch])
    const getLetters = ( word, i) => (
            word.split('').map((l, j) => (
                <Letters
                    key={`${i}${j}`} {...{i, j, l}}
                >
                </Letters>
        )))

    const generateText = () => {
        let shakeTitle = [];
        for (let i = 0; i < title.length; i++) {
            let Letters = [];
            Letters.push(getLetters(title[i], i))
            if(i+1 !== title.length && !title[i+1]) {
                Letters.push(
                    <div className='letIcon  animate__animated animate__jackInTheBox'
                        key={`${i}`}>
                        <img
                            className='img img-responsive'
                            src='../assets/A.png'
                        />
                    </div>
                    // <div
                    // className='tadaLetter'
                    // key={`${i}`}
                    // >
                    //     <h1
                    //         >l
                    //     </h1>
                    // </div>
                )
                if ( i+2 < title.length) {
                    i += 2;
                    Letters.push(getLetters(title[i], i))
                }
                shakeTitle.push(<div key={i} className='concatRow' >{Letters}</div>)
                continue;
            }
            shakeTitle.push(<div key={i} >{Letters}</div>)
        }
        return shakeTitle;
    }

    return (
        <div>
            {
                generateText()
            }
        </div>
    )
}
