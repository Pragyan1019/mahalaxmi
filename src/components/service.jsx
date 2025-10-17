import React from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

const Service = () => {
    gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
gsap.fromTo('.t3',{y:20,opacity:0},{y:0,opacity:1,duration:0.7,scrollTrigger:{trigger:'.t3',start:'top 90%'}})
gsap.fromTo('.t4',{y:-20,opacity:0},{y:0,opacity:1,duration:0.7,scrollTrigger:{trigger:'.t3',start:'top 90%'}})
gsap.fromTo('.card3_text span',{x:200,opacity:0},{x:0,opacity:1,duration:1,stagger: { each: 0.1 },scrollTrigger:{trigger:'.card3_text',start:'top 90%'}})
gsap.fromTo('.card4_text span',{x:-200,opacity:0},{x:0,opacity:1,duration:1,scrollTrigger:{trigger:'.card4_text',start:'top 90%'}})

  },[])
  return (
    <div className='min-h-screen w-[85%] mx-auto flex flex-col items-center gap-2 pt-10 relative '>
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
<h1 className='font-serif text-4xl t3'>Programs &amp; Support </h1>
      <h2 className='font-sans t4'>
        <span className='font-extrabold text-[#371b26]'>-</span> Explore. Challenge. Succeed. <span className='font-extrabold text-[#371b26]'>-</span>
      </h2>   
      <div className='flex flex-col items-center  w-[95%] pt-13 gap-10'>
<div className='flex lg:flex-row flex-col w-[full] h-full mx-auto '>
    <div className='lg:w-[40%]  h-[300px] rounded-lg overflow-hidden mx-auto'>
        <img src="https://i.pinimg.com/736x/20/ac/d1/20acd1e6def6b977e62982c8c1f6ae64.jpg" alt="" srcset="" className='w-full h-full object-cover' />
        
    </div>
    <div className='mx-auto flex flex-col justify-center items-center lg:w-[50%]'>
        <h1 className='font-sans text-4xl sm:mt-3'>Academics</h1>
        <p className='font-sans text-xl flex flex-col gap-3 mt-5  items-start card3_text overflow-hidden'>
                <span>&rarr; Pre‑Nursery &amp; Nursery — Play‑based foundations</span>
                <span>&rarr; Classes 1–10 — Core subjects, labs, clubs, SEE prep</span>
                <span>&rarr; BBS (Bachelor of Business Studies) — 4‑year management degree</span>
         </p>
    </div>
</div>
<div className='flex lg:flex-row flex-col  w-full h-full  '>
   
    <div className='mx-auto flex flex-col justify-center items-center lg:order-1 order-2'>
        <h1 className='font-sans text-4xl sm:mt-3'>Counseling &amp; Guidance</h1>
        <p className='font-sans text-xl flex flex-col gap-3 mt-5  items-start card4_text overflow-hidden'>
                <span>&rarr; 1:1 and group counseling</span>
                <span>&rarr; Study skills, stress, friendships</span>
                <span>&rarr; Anti‑bullying &amp; digital safety</span>
                <span>&rarr; SEE/BBS college &amp; career guidance</span>
         </p>
    </div>
     <div className='lg:w-[40%]  h-[300px] rounded-lg overflow-hidden mx-auto lg:order-2 order-1'>
        <img src="https://cdn.pixabay.com/photo/2022/10/17/15/55/meditate-7528123_1280.jpg" alt="" srcset="" className='w-full h-full object-cover' />
        
    </div>
</div>
      </div>
       </div>
  )
}

export default Service
