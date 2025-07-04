import React from 'react'
import "./services.css"
import LaptopContainer from './laptop/LaptopContainer'
import RobotContainer from './robot/RobotContainer'
import JeepContainer from './jeep/JeepContainer'
import Counter from './Counter'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useState } from 'react'

const textVariants ={
  initial: {x: -100, y: -100, opacity: 0},
  animate: {x: 0, y: 0, opacity: 1, transition: {duration: 1}},
}

const listVariants ={
  initial: {x: -100, opacity: 0},
  animate: {x: 0, opacity: 1, transition: {duration: 1, staggerChildren: 0.5}},
}

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Development",
    counter: 35,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Product Design",
    counter: 23,
  },
  {
    id: 3,
    img: "service3.png",
    title: "Branding",
    counter: 46,
  },
]

const Services = () => {

  const [serviceId, setServiceId] = useState(1)
  const ref = useRef()
  const inView = useInView(ref, {margin: "-200px"})

  return (
    <div className='services' ref={ref}>

      <div className="sSection left">

        <motion.h1 className='sTitle' variants={textVariants} animate={inView ? "animate" : "initial"}>How can I help?</motion.h1>

        <motion.div className='serviceList' variants={listVariants} animate={inView ? "animate" : "initial"} >
          {services.map((service) => (
            <motion.div className='serviceItem' key={service.id} variants={listVariants} onClick={() => setServiceId(service.id)} >
              <div className='serviceIcon'>
                <img src={service.img} alt="" />
              </div>
              <div className='serviceInfo'>
                <h2>{service.title}</h2>
                <p>{service.counter} Projects</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className='counterList'>
          <Counter from={0} to={100} text="Successfull Projects" timing={6} />
          <Counter from={0} to={80} text="Satisfied Clients" timing={4} />
        </div>
      </div>

      <div className="sSection right">
        {serviceId === 1 && <LaptopContainer />}
        {serviceId === 2 && <RobotContainer />}
        {serviceId === 3 && <JeepContainer />}
      </div>

    </div>
  )
}

export default Services