import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info, marks}) => {
    const ref = useRef(null)
        return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref} />
                <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:'spring'}}>
                    <h3 className='capitalize font-bold text-2xl'>{type}&nbsp;
                    </h3>
                    <span className='capitalize font-medium text-dark/75'>
                        {time} | {place}
                    </span>
                    <p className='font-medium w-full'>
                        {info}
                    </p>
                </motion.div>
            </li>
        
        
}

const Education = () => {
    const ref = useRef(null) 
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    )
  return (
   <>
    <div className="my-64">
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Education 
        </h2>
        <motion.div className="w-[75%] mx-auto relative" ref={ref}>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top" />

            <ul>
            <Details 
                type='Online Coursework'
                time='2022-2023'
                place='Prepbytes'
                info='Completed coursework in advanced topics such as  Javascript, ReactJs, NodeJs, ExpressJs and
               MongoDB.'
               /> 

               <Details 
                type='Bachelor Of Technology In Mechanical And Automation'
                time='2018-2022'
                place='HMR Institute Of Technology And Management (HMRITM)'
                info='Relevant courses included Engineering Mechanics, Theory Of Machines, Mechatronics, Robotics, and Automobile 
                Engineering.'
               />      

                <Details 
                type='+2 Standard From Central Board Of Secondary Education (CBSE)'
                time='2016-2017'
                place='Nav Jeewan Academy'
                info='Physics, Mathmatics, Chemistry'
               />
            </ul> 
        </motion.div>
    </div>
   </>
  )
}

export default Education