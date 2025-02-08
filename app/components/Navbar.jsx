'use client'

import { Asset } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from "next/navigation";

const Navbar = () => {

    const router = useRouter();

    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll',()=>{
            if(scrollY> 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])

  return (
    <>
    <div className="fixed top-0 right-0 w-full h-[80px] -z-0 dark:hidden">
    <div className="relative w-full h-full hidden sm:block">  {/* 在手機模式下隱藏，桌面模式顯示 */}
        <Image 
            src="/blackground.png" 
            alt="background" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-15"
        />
        </div>
</div>

<nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 
    flex items-center justify-between z-50 
    ${isScroll ? "bg-white bg-opacity-30 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
    
    <a href="#top">
    {/* <Image 
        src="/logo2.webp" 
        alt="DH Logo" 
        width={50} 
        height={50} 
        className='w-19 h-19 cursor-pointer' 
    /> */}
    </a>

    <ul className={`hidden md:flex items-center gap-12 lg:gap-14 rounded-full 
        px-16 py-3 absolute left-1/2 transform -translate-x-1/2 
        ${isScroll ? "" : "bg-white shadow-sm bg-opacity-95"} `}>
        <li><a className="font-Ovo text-lg" href='#top'>Home</a></li>
        <li><a className="font-Ovo text-lg" href='#about'>About Me</a></li>
        <li><a className="font-Ovo text-lg" href='#services'>Work Experience</a></li>
        {/* <li><a className="font-Ovo text-lg" href='#work'>Work</a></li> */}
        <li><a className="font-Ovo text-lg" href='#contact'>Contact Me</a></li>
    </ul>

        <div className='flex items-center gap-4'>

            {/* <button onClick={()=> setIsDarkMode(prev => !prev)}>
                <Image src="/plubic.png" alt="My Image" width={12} height={12}/>
            </button> */}

        <button 
        onClick={() => router.push('/contact')}
        className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 
                    rounded-full ml-4 font-Ovo text-lg 
                    transition-transform duration-200 ease-in-out hover:scale-105'
        >
        Bulletin Board
        <Image src="/arrow-up-right.png" alt="My Image" width={200} height={200} className='w-3' />
        </button>

            <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src="/list.png" alt="My Image" width={200} height={200} className='w-6'/>
            </button>

        </div>

        {/*----------mobile menu----------*/}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-10 w-64 z-50 h-screen
         bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white '>

            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src="/cross.png" alt="My Image" width={12} height={12} className='w-5 cursor-pointer'/>
            </div>

            <li><a className="font-Ovo" href='#top'>Home</a></li>
            <li><a className = 'font-Ovo'href='#about'>About Me</a></li>
            <li><a className = 'font-Ovo'href='#services'>Work Experience</a></li>
            {/* <li><a className = 'font-Ovo'href='#home'>Work</a></li> */}
            <li><a className = 'font-Ovo'href='#contact'>Contact Me</a></li>
            <li><a className='font-Ovo' href='/contact'>Bulletin Board</a></li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar
