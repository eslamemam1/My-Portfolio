import React from 'react'
import myimage from "./MyPic.jpg"
import bg from "./bg.jpg"
function ResponsiveWindow() {
  return (
    <div className=' w-full h-full flex flex-col'>
      <div className=' w-full h-[40%] bg-cover rounded-b-none rounded-md relative flex justify-center items-end' style={{ backgroundImage: `url(${bg})` }} >
        <div className=' w-40 h-40 rounded-full border-2 border-gray-300 absolute bottom-[-60px] '>
          <img src={myimage} alt="sdds" className=' w-full h-full rounded-full' />
        </div>
      </div> {/* top div , backgroung image */}
      <div className=' w-full h-[60%]'>
        <div className=' w-[80%] h-[85%] m-auto'>
          <div className='w-full h-full flex flex-col justify-center items-center pt-5'>
            <h2 className=' text-4xl'>Eslam Emam</h2>
            <p className=' text-2xl pt-5 pb-5'>Front End Developer</p>
            <div className='text-2xl'>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-github pr-5 pl-5"></i>
              <i class="fas fa-envelope"></i>
            </div> {/* icon */}
          </div>
        </div> {/* secction info */}
        <div className=' w-full h-[15%]'>
          <button className=' w-[50%] h-full border-dotted border rounded-bl-lg border-gray-500 hover:bg-slate-700 font-semibold text-xl'>DOWNLOAD CV</button>
          <button className=' w-[50%] h-full border-dotted border-l-0 border rounded-br-lg border-gray-500 hover:bg-slate-700 font-semibold text-xl '>CONTACT ME</button>
        </div> {/* buttons */}
      </div> {/* buttom div for all */}
      {/* MainInfo div */}
    </div> 
  )
}

export default ResponsiveWindow