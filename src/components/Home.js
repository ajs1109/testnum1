import React from 'react';

import Lottie from 'lottie-react'
import animationData from '../animation/animationLove.json'

const Home = () => {
    return (
        <div className='home'>
            <div className='main'>
                <span className='text'>Do You Wanna Go Out With Me ?</span>
                <div className='animation'>
                <Lottie animationData={animationData}/>
                </div>
          </div>
        </div>
    )
}

export default Home;