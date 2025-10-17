import React from 'react'
import { useState,useRef } from 'react'
import GlowingDivider from './divider'

const landing = () => {
    const [colorbutton, setcolorbutton] = useState(false)
    const [colorbutton1, setcolorbutton1] = useState(false)
     const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className='h-[100vh]  w-full min-h-screen  relative overflow-hidden flex justify-center text-white'>
      <img src="/image2.jpeg" alt="image" className='absolute w-full h-full object-cover' />
      <div className='bg-black/15 absolute z-10 w-full h-full'></div>
      <div className='lg:w-[60vw] w-[100vw] lg:p-0 p-5 h-[60%] flex flex-col justify-center items-center z-30  mt-[50px] gap-2 bg-blue-900/10 rounded-lg backdrop-blur-xs border-2 border-white/20 shadow-lg shadow-black/30'>
        <img src="/gemini.png" alt="Logo" className='lg:w-[400px] w-[350px] lg:h-[150px] h-[125px]' />
        <p className='text-5xl font-serif lg:mt-10 mt-5 text-center'>Welcome to Mahalaxmi Academy</p>
        <p className='text-xl font-sans'>A community of lifelong learners</p>
        <div className='flex lg:gap-10 gap-5 justify-center items-center text-3xl mt-8   font-serif'>
            <button onMouseEnter={()=> setcolorbutton(true)} onMouseLeave={()=> setcolorbutton(false)} 
            onClick={()=> scrollToSection('contact')} className={` lg:py-5 py-2 lg:px-7 px-4 rounded lg:rounded-3xl ${ colorbutton ? 'bg-[#371b26]' : 'bg-[#1b2637]'
            } hover:cursor-pointer transition-all ease-out`}>Join Us</button>
            <button onMouseEnter={()=> setcolorbutton1(true)} onMouseLeave={()=> setcolorbutton1(false)} onClick={()=> scrollToSection('about')} className={` lg:py-5 py-2 lg:px-7 px-4 rounded lg:rounded-3xl ${ colorbutton1 ? 'bg-[#1b2337]' : 'bg-[#372c1b]'
            } hover:cursor-pointer transition-all ease-out`}>About Us</button>
        </div>
      </div>
          <GlowingDivider 
        // This color MUST match the background of your NEXT section
        fillColor="white" 
      />
    </div>
  )
}

export default landing
