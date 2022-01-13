import React, { useState } from 'react'
import { Letters } from './Letters';

export const ShakeTitle = ({title}) => {



    const getSpans = ( word , i, len) => (
            word.split('').map((l, j) => (
                <Letters
                    key={`${i}${j}`} {...{i, j, len, l}}
                >
                </Letters>
        )))

    const generateText = () => {
        let shakeTitle = [];
        for (let i = 0; i < title.length-1; i++) {
            let spans = []
            console.log(title[i]);
            spans.push(getSpans(title[i], i, title[i].length))
            if(i+1 !== title.length-1 && !title[i+1]) {
                spans.push(
                    <span
                    className='tadaLetter'
                    key={`${i}`}
                    >
                        <div
                            >l
                        </div>
                    </span>
                )
                if ( i+2 < title.length-1) {
                    i += 2;
                    console.log(title[i]);
                    spans.push(getSpans(title[i], i, title[i].length))
                }
            }
            shakeTitle.push(<div key={i} className='lineCont'>{spans}</div>)
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
