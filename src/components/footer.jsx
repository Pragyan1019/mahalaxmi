import React from 'react'

const Footer = () => {
  return (
    <div className=' w-[100%] mx-auto mt-20 bg-[#371b26] text-white p-5'>
      <section id='contact'>
      <div className='lg:w-[80%] flex flex-col mx-auto'>
<div className='lg:w-[29%] w-[250px] h-[10%] mx-auto '>
  <img src="gemini.png" alt="logo" srcset="" className='w-full h-full'  />
</div>
<div className='flex items-center justify-center mt-5 gap-5'>
  <a href="https://www.facebook.com/profile.php?id=100066951042781" target='blank'>
  <div className='flex justify-center items-center border-2 px-5 py-2 rounded-[50%] hover:cursor-pointer'>
    <span className='font-bold font-sans text-2xl'>f</span>
  </div></a>
  <a href="https://www.facebook.com/profile.php?id=100066951042781" target='blank'>
  <div className='flex justify-center items-center border-2 px-3 py-3 rounded-[50%]  hover:cursor-pointer'>
    <img src="/instagram.png" alt="" srcset="" className='w-full' />
  </div></a>
  <a href="https://www.google.com/maps/place/Mahalaxmi+Campus/@27.6414604,85.3765453,777m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39eb109447343d2d:0x788641c0ba347569!8m2!3d27.6414557!4d85.3791202!16s%2Fg%2F11c0_sfz_r?entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D" target='blank'>
  <div className='flex justify-center items-center border-2 px-3 py-3 rounded-[50%]  hover:cursor-pointer'>
    <img src="/pin.png" alt="" srcset="" className='w-full' />
  </div>
</a>
</div>
      <div className='w-[100%]  mt-5 font-sans  gap-1'>
        <div className='flex flex-col justify-around items-center'>
       <p className='text-lg'>Phone: 5580096,9841399112</p>
       <p className='text-lg'>Email: mcma_edu@hotmail.com</p>
       </div>
      </div>
      <p className='text-center mt-10 mx-auto font-sans'>© Mahalaxmi Academy. All rights reserved.Developed by <a href="https://www.linkedin.com/in/pragyan-ghimire-508717363/"className='font-bold' target='blank' >Pragyan Ghimire</a></p>
      <p className='text-center  mx-auto'></p>
      </div>
      </section>
    </div>
  )
}

export default Footer
