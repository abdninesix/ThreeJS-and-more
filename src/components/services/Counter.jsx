import { animate, useInView } from 'motion/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const Counter = ({ from, to, text, timing }) => {

    const [count, setCount] = useState(from)

    const ref = useRef()

    const inView = useInView(ref)

    useEffect(() => {
        const animation = animate(from, to, {
            duration: timing,
            ease: "easeInOut",
            onUpdate: (prev) => {
                setCount(Math.floor(prev));
            },
        });
        return () => animation.cancel();
    }, [inView, from, to, timing]);

    return (
        <div className='counter' ref={ref}>
            <h1>{count}+</h1>
            <p>{text}</p>
        </div>
    )
}

export default Counter