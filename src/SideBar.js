import React from 'react'
function SideBar() {
  return (
    <div className=' w-full h-full text-center text-sm font-semibold'>
      <div className='w-full h-[25%] mt-5'>
        <a href='#AboutMe'><i class="fas fa-user text-2xl hover:text-orange-600"></i></a>
        <p className=' text-[13px]'>ABOUT</p>
      </div>
      <div className='w-full h-[25%]'>
        <i class="fas fa-clone text-2xl hover:text-orange-600"></i>
        <p className=' text-[13px]'>RESUME</p>
      </div>
      <div className='w-full h-[25%]'>
        <i class="fas fa-briefcase text-2xl hover:text-orange-600"></i>
        <p className=' text-[13px]'>WORKS</p>
      </div>
      <div className='w-full h-[25%] '>
        <i class="fas fa-envelope text-2xl  hover:text-orange-600"></i>
        <p className=' text-[12px] font-bold'>CONTACT</p>
      </div>
    </div>
  )
}

export default SideBar