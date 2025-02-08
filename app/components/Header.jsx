import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className="w-11/12 max-w-5xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6 px-8 scale-[60%] sm:scale-[70%] md:scale-[90%]">
      {/* 在手機模式下隱藏 bighead 圖片 */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="hidden sm:block"  // 在手機模式下隱藏，其他模式顯示
      >
        <Image src="/bighead.png" alt="" width={150} height={150} className="rounded-full w-32.3 mt-4" />
      </motion.div>
  
      <motion.h3 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex item-end gap-2 text-xl md:text-2xl mb-3 font-Ovo w-full max-w-4xl text-center px-8"
      >
        My name is Derrick Hsu. Welcome to my personal website. A space where I share my journey in education and my work experience. 
      </motion.h3>
  
      <motion.h1 
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo leading-loose"
      >
        Developer/Data Engineer<br/> Based in Taiwan
      </motion.h1>
  
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-sm sm:text-base text-gray-700 md:text-lg mt-8"
      >
        <br/>
        Feel free to explore my resume or get in touch to discuss potential opportunities and collaborations.
      </motion.p>
  
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
        <motion.a 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.1, boxShadow: "0px 5px 15px rgba(255,255,255,0.3)" }}  
          whileTap={{ scale: 0.95 }}
          href="#contact" 
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me
          <Image src="/789.jpg" alt="" width={200} height={200} className="w-4"/>
        </motion.a>
  
        <motion.a 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.1, boxShadow: "0px 5px 15px rgba(255,255,255,0.3)" }}  
          whileTap={{ scale: 0.95 }}
          href="/Derrick Hsu Resume.pdf" 
          download 
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume
          <Image src="/download.png" alt="" width={200} height={200} className="w-4"/>
        </motion.a>
      </div>
    </div>
  );
  
  
}

export default Header
