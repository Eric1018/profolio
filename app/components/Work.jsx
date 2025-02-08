import React from 'react'
import { motion } from "motion/react"

const Work = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{y: -20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.3,duration:0.5}}
        className='text-center mb-2 text-lg font-Ovo'>My Protfolio</motion.h4>
      <motion.h2 
      initial={{y: -20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{delay:0.3,duration:0.5}}
      className='text-center text-5xl font-Ovo'>My Latest Work</motion.h2>

        <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.7,duration:0.5}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I am Derrick
        </motion.p>

        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.9,duration:0.6}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        >
            {}
        </motion.div>

      <motion.a 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:1.1,duration:0.5}}
      href=""className='w-max flex item-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full
      py-3 px-10 mx-auto my-20 hover:bg-lighthover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
        Show more
      </motion.a>
    </motion.div>
  )
}

export default Work
