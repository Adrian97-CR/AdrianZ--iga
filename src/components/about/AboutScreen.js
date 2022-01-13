import React from 'react'
import { ShakeTitle } from '../../letters/ShakeTitle'

export const AboutScreen = () => {
    const title = ['Hi,', 'Im', false,'drian', 'web developer']
    return (
        <div className='animate__animated animate__fadeInUp'>
            <h2 className='animate__animated animate__headShake'>AboutScreen</h2>
            <ShakeTitle title={[...title]} />
        </div>
    )
}
