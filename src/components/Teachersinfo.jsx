import React, { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useState } from 'react'
import { Draggable } from 'gsap/Draggable'


const Teachersinfo = () => {
  const [enter, setenter] = useState(false)
  const tlRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(Draggable)

  useGSAP(function(){
    const tl = gsap.timeline()
tl.from('.images',
  {
    x: '0%',
    ease: 'linear',
    duration: 10,
 repeat: -1,
 repeatDelay: 1,
  }
)
tlRef.current = tl

  },[])
  useEffect(() => {
     if(!tlRef.current) return
    if (enter) {
      tlRef.current.pause()
    } else {
      tlRef.current.play()
    }

  }, [enter])
  
  const a = [
    {
   name: "Prem Shrestha",
   position: "Principal",
   subject: "Social Teacher",
   image: "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
  },
  {
   name: "Dinesh Poudel",
   position: "School Cheif",
   subject: "Social Teacher",
   image: "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64"
  },
  {
    name: "Sandesh Shrestha", 
    position:"Co-ordinator",
    subject: "Math Teacher",
    image: "https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3"
  },
{
   name: "Bidhya Bajracharya",
   position: "Co-ordinator",
   subject: "Math Teacher",
   image: "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991"
  },
  {
   name: "Prem Shrestha",
   position: "Principal",
   subject: "Social Teacher",
   image: "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
  },
  {
   name: "Dinesh Poudel",
   position: "School Cheif",
   subject: "Social Teacher",
   image: "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64"
  },
  {
    name: "Sandesh Shrestha", 
    position:"Co-ordinator",
    subject: "Math Teacher",
    image: "https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3"
  },
{
   name: "Bidhya Bajracharya",
   position: "Co-ordinator",
   subject: "Math Teacher",
   image: "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991"
  },
 
  
]
  return (
    <div className='w-full  h-[75vh] gap-15 px-10  overflow-hidden font-sans mt-10 pt-10 lg:block hidden '>
      <div className='w-full images translate-x-[-95%]   flex '>
      {a.map((teacher,index) => (
        <div key={index} className=' w-[350px] h-[500px] flex flex-col items-center  hover:scale-105 duration-300 cursor-pointer flex-shrink-0'>
        <img src={teacher.image} alt={teacher.name} onMouseEnter={()=>setenter(true)} onMouseLeave={()=> setenter(false)}  className='w-[full] h-[350px] object-cover rounded'/>
        <p className='text-2xl font-serif font-semibold mt-2'>{teacher.name}</p>
        <p className='text-xl -mt-2 font-light'>{teacher.position}</p>
        <p className='text-xl'>{teacher.subject}</p>
        </div>))}
      </div>
    </div>
  )
}

export default Teachersinfo
