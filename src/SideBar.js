import React from 'react'
function SideBar() {
  return (
    <div className=' w-full h-full text-center text-sm font-semibold'>
      <div className='w-full h-[25%] mt-5'>
        <a href='#AboutMe'><i class="fas fa-user text-3xl OrangeHover"></i></a>
        <p className=' text-[13px] font-semibold'>ABOUT</p>
      </div>
      <div className='w-full h-[25%]'>
        <i class="fas fa-clone text-3xl OrangeHover"></i>
        <p className=' text-[13px] font-semibold'>RESUME</p>
      </div>
      <div className='w-full h-[25%]'>
        <i class="fas fa-briefcase text-3xl OrangeHover"></i>
        <p className=' text-[13px] font-semibold'>PROJECTS</p>
      </div>
      <div className='w-full h-[25%] '>
        <i class="fas fa-envelope text-3xl  OrangeHover"></i>
        <p className=' text-[13px] font-semibold'>CONTACT</p>
      </div>
    </div>
  )
}

export default SideBar