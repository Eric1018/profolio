import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { infoList, toolsData } from '@/public/asset'

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about'className='w-full px-[12%] py-10 scroll-mt-20 transform scale-90 sm:scale-80'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
      <motion.h4 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5, delay:0.3}}
      className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>

      <motion.h2 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5, delay:0.5}}
      className='text-center text-5xl font-Ovo'>About Me</motion.h2>

        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <motion.div 
            initial={{opacity:0, scale:0.9}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.6}}
            className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src="/portfolio_photo.jpg" alt="User" width={3000} height={3000} className='w-full rounded-3xl'/>
            </motion.div>

            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.5,delay: 0.8}}
            className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'
                >Data Engineer/Data Analyst with over a year of experience in designing data pipelines, 
                resolving ad-hoc business, leveraging data, delivering actionable and high-quality 
                business insights, specializing in database management and large-scale data warehousing solutions.
                 Proficient in deploying data-driven solutions to complex business problems</p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                  {infoList.map(({icon,width,height, title, description},index)=>(
                    <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                     hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black" key={index}>
                      <Image src={icon} width={width} height={height} alt={title} className='w-7 mt-3' />
                      <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                      <p className='text-gray-600 text-sm'>{description}</p>
                    </li>
                  ))}
                </ul>

                  <h4 className='my-4 text-gray-700 font-Ovo font-bold'>KEY SKILLS</h4>
                  <ul className='flex items-center gap-2 sm:gap-5'>
                    {toolsData.map((tool,index)=>(
                      <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
                      rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                      key={index}>
                          <Image src={tool} width={500} height={500} alt='tool' className='w-5 sm:w-12'/>
                      </li>
                    ))}
                  </ul>

            </motion.div>
        </motion.div>

    </motion.div>
  )
}

export default About
