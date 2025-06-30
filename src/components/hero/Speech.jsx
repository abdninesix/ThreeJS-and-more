import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Speech = () => {
  return (
    <div className='bubbleContainer'>
        <div className='bubble'>
          <TypeAnimation
          sequence={[
            1000,
            "Random text Random text",
            1000,
            "More random text",
            1000,
          ]}
          wrapper='span'
          speed={40}
          deletionSpeed={80}
          style={{}}
          repeat={Infinity}
          />
        </div>
        <img src="/man.png" alt="bubble" />
    </div>
  )
}

export default Speech