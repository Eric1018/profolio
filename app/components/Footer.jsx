import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src="" alt='' className='w-36 mx-auto mb-2'/>

        {/* <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src="" alt='' className='w-6 '/>
            qwer6986270@gmail.com
        </div> */}
      </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>©2025 Derrick Hsu. All rights reserved</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href='https://www.linkedin.com/in/derrick-hsu-70469a270/'>LinkedIn</a></li>
                <li>qwer6986270@gmail.com</li>
                {/* <li><a target='_blank' href=''>Instagram</a></li> */}
            </ul>
        </div>


    </div>
  )
}

export default Footer
