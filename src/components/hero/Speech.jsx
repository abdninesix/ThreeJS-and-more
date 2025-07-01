import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'motion/react'

const Speech = () => {
  return (
    <motion.div animate={{opacity: [0, 1]}} transition={{duration: 1}} className='bubbleContainer'>
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
    </motion.div>
  )
}

export default Speech