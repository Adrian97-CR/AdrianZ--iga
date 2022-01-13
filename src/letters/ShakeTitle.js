import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setReloadingScreen } from '../actions/letter';
import { Letters } from './Letters';

export const ShakeTitle = ({title}) => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setReloadingScreen())
          }, 1000);
        return () => {
            clearTimeout(timer);
        }
    }, [])

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
                    console.log(title[i]);
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
