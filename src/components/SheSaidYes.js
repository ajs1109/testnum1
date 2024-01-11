import React from 'react';

import Lottie from 'lottie-react'
import animationData from '../animation/Animation - 1704994561178.json'

const SheSaidYes = () => {

    return (
        <div className='home'>
            <div className='main'>
                <span className='text'>Yeyyy!!!! Finallyyyyy!!</span>
                <div className='animation'>
                <Lottie animationData={animationData}/>
                </div>
          </div>
        </div>
    )

}

export default SheSaidYes;