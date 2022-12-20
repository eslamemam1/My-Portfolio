import React from 'react'
import myimage from "./MyPic.jpg"
import bg from "./bg.jpg"
function ResponsiveWindow() {
  return (
    <div className=' w-full h-full flex flex-col'>
      <div className=' w-full h-[40%] bg-cover rounded-b-none rounded-md relative flex justify-center items-end' style={{ backgroundImage: `url(${bg})` }} >
        <div className=' w-full h-[20%] bg-[#9696968e] absolute top-0 rounded-t'>
          <div className='flex w-[90%] m-auto'>
            <div className=' h-full w-[50%]'><h2 className=' font-bold sm:text-xl leading-10 sm:leading-10 text-white'>My Portfolio</h2></div> {/** logo */}
            <div className=' w-[50%] h-full text-center text-sm font-semibold sm:flex hidden sm:visible'>
              <div className='w-[25%] h-full leading-10'>
                <a href='#AboutMe'><p className=' text-[10px] sm:text-[13px] font-semibold text-white'>ABOUT</p></a>
              </div>
              <div className='w-[25%] h-full leading-10'>
                <a href='#AboutMe'><p className=' text-[10px] sm:text-[13px] font-semibold text-white'>RESUME</p></a>
              </div>
              <div className='w-[25%] h-full leading-10'>
                <a href='#AboutMe'><p className=' text-[10px] sm:text-[13px] font-semibold text-white'>PROJECTS</p></a>
              </div>
              <div className='w-[25%] h-full leading-10 '>
                <a href='#AboutMe'><p className=' text-[10px] sm:text-[13px] font-semibold text-white'>CONTACT</p></a>
              </div>
            </div> {/** links */}
            <div className='w-[50%] h-full relative sm:hidden visible'>
            <i class="fas fa-list absolute right-0 text-2xl leading-10 text-white"></i>
            </div>
          </div> {/** display flex for logo div and links div */}
        </div> {/** header */}
        <div className=' w-40 h-40 rounded-full border-2 border-gray-300 absolute bottom-[-60px] '>
          <img src={myimage} alt="sdds" className=' w-full h-full rounded-full' />
        </div>
      </div> {/* top div , backgroung image */}
      <div className=' w-full h-[60%]'>
        <div className=' w-[90%] h-full m-auto'>
          <div className='w-full h-full flex flex-col justify-center items-center pt-5'>
            <h2 className=' text-4xl'>Eslam Emam</h2>
            <p className=' text-2xl pt-5 pb-5'>Front End Developer</p>
            <div className='text-2xl'>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-github pr-5 pl-5"></i>
              <i class="fas fa-envelope"></i>
            </div> {/* icon */}
            <div className=' w-full h-[15%] mt-[10px]'>
              <button className=' w-[45%] h-full border-dotted border rounded border-gray-500 hover:bg-slate-700 font-semibold text-xl mr-[2.5%] ml-[2.5%]'>DOWNLOAD CV</button>
              <button className=' w-[45%] h-full border-dotted border rounded border-gray-500 hover:bg-slate-700 font-semibold text-xl mr-[2.5%] ml-[2.5%]'>CONTACT ME</button>
            </div> {/* buttons */}
          </div> {/* buttom div for all */}
        </div> {/* secction info */}
      </div>
      {/* MainInfo div */}
    </div> 
  )
}

export default ResponsiveWindow