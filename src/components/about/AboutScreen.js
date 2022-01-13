import React from 'react';
import { ShakeTitle } from '../../letters/ShakeTitle';

export const AboutScreen = () => {
    const title = ['Hi,', 'Im ', false,'drián', 'web developer'];
    return (
            <div className='aboutContainer animate__animated '>
                <ShakeTitle title={[...title]} />
            </div>
        
    )
}
