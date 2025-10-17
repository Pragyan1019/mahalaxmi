import React from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
const About = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
gsap.fromTo('.t1',{y:20,opacity:0},{y:0,opacity:1,duration:0.5,scrollTrigger:{trigger:'.t1',start:'top 90%'}})
gsap.fromTo('.t2',{y:-20,opacity:0},{y:0,opacity:1,duration:0.7,scrollTrigger:{trigger:'.t2',start:'top 90%'}})
gsap.fromTo('.card1',{y:100,opacity:0},{y:0,opacity:1,duration:1,scrollTrigger:{trigger:'.card1',start:'top 90%'}})
gsap.fromTo('.card2',{opacity:0},{opacity:1,duration:0.7,scrollTrigger:{trigger:'.card2',start:'top 95%'}})
  },[])
  return (
    <section id='about'>
    <div className='lg:h-[100vh] w-[85%] mx-auto flex flex-col items-center gap-2'>
      
      <h1 className='font-serif text-4xl   t1'>About us</h1>
      <h2 className='font-sans t2'>
        <span className='font-extrabold text-[#371b26]'>-</span> Learn. Grow. Belong <span className='font-extrabold text-[#371b26]'>-</span>
      </h2>
      <div className='flex lg:flex-row flex-col gap-10 w-full mt-10 justify-around'>
        <div className='card1 flex justify-center items-center lg:h-[80vh] lg:w-[32%] lg:bg-[#e8e9eb] rounded'>
        <div className='flex flex-col items-center '>
          <img
            src="/about-section-image.png"
            alt="Students"
            className='w-[300px] rounded-2xl h-[180px] object-cover'
          />
          <span className='mt-4 text-xl font-medium '>School Culture</span>
          <p className='text-center text-[#2a2b2c] max-w-xs mt-2'>We emphasize an inclusive, respectful environment built on collaboration and critical thinking. This positive atmosphere allows every student to thrive and succeed.</p>
        </div></div>
        <div className='card2 flex justify-center items-center lg:h-[80vh] lg:w-[32%] lg:bg-[#1b2637] rounded'>
        <div className='flex flex-col items-center '>
          <img
            src="/teachers.jpg"
            alt="Teachers"
            className='w-[300px] rounded-2xl h-[180px]'
          />
          <span className='mt-4 text-xl font-medium lg:text-white'>Meet Our Dedicated Educators</span>
          <p className='text-center lg:text-[#d5d8e0] max-w-xs mt-2'>Meet the heart of our school! Our dedicated team of teachers is committed to creating a nurturing and inspiring environment where every student can succeed.  </p>
        </div></div>
        <div className='card1 flex justify-center items-center lg:h-[80vh] lg:w-[32%] lg:bg-[#e8e9eb] rounded'>
        <div className='flex flex-col items-center '>
          <img
            src="/chess.png"
            alt="Teachers"
            className='w-[300px] rounded-2xl h-[180px] object-cover'
          />
          <span className='mt-4 text-xl font-medium '>Extracurricular activities</span>
          <p className='text-center text-[#2a2b2c] max-w-xs mt-2'>Students join various sports, arts, and clubs that build essential skills. These activities complement academics, boosting confidence and encouraging personal growth.</p>
        </div></div>
      </div>
    </div>
      </section>
  )
}

export default About
