import { serviceData } from '@/public/asset'
import { motion } from "motion/react"
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='services'
    className='w-full px-[12%] py-10 scroll-mt-20 transform scale-[80%] sm:scale-[70%] md:scale-[90%]'>
    
    <h3 className='text-center mb-2 text-lg font-Ovo'>About my</h3>
    <h2 className='text-center text-5xl font-Ovo'>Work & Personnal Experience</h2>

    <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        <br />
    </p>

    <div className='grid grid-cols-1 md:grid-cols-5 gap-6 my-10'>
        {serviceData.map(({ icon, width, height, title, description, link }, index) => (
            <Link 
                key={index} 
                href={link} 
                className='border border-gray-400 rounded-lg px-6 py-5 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 flex flex-col h-full'>
                
                {/* 圖示 */}
                <div className="flex flex-col items-center text-center flex-grow">
                    <Image src={icon} alt={title} width={width} height={height} className='w-30' />
                    <h3 className='text-lg my-4 text-gray-700 font-bold'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5'>{description}</p>
                </div>

                {/* Read More 固定到底部 */}
                <p className="flex items-center gap-2 text-sm mt-6 pb-0.5 justify-center">
                    Read More
                    <Image src="/arrow-right.png" alt='' width={10} height={10} className='w-3'/>
                </p>
            </Link>
        ))}
    </div>

</motion.div>

  )
}

export default Services
