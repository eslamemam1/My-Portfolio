import React, { useEffect, useState } from 'react'
import bg from "../pic/bg.jpg"
import EslamResume from "../pic/Eslam-Resume.pdf"
import myimage from "../pic/MyPic.jpg"
import logo from "../pic/logo.png"
function FirstPage() {
    const [togol, setTogol] = useState(false);
    useEffect(() => {
        console.log(togol);
    }, [togol]);
  return (
        <div className=' w-full h-screen  flex flex-col '>
          <div className=' w-full h-[40%] bg-cover rounded-b-none rounded-md relative flex justify-center items-end' style={{ backgroundImage: `url(${bg})` }} >
                <div className=' w-full h-[50px] bg-[#646464d3] top-0 rounded-t fixed z-10'>
                  <div className='flex w-[90%] h-full m-auto '>
                <div className=' h-full w-[50%] leading-10'><img src={ logo } alt="logo" className=' h-[40px] mt-[5px] ' /></div> {/** logo */}
                <div className=' w-[50%] h-full text-center text-sm font-semibold sm:flex hidden sm:visible'>
                  <div className='w-[25%] h-full '>
                    <a href='#AboutMe2'><p className=' leading-[50px] text-[10px] sm:text-[13px] font-semibold text-white'>ABOUT</p></a>
                  </div>
                  <div className='w-[25%] h-full '>
                    <a href='#Resume2'><p className=' leading-[50px] text-[10px] sm:text-[13px] font-semibold text-white'>RESUME</p></a>
                  </div>
                  <div className='w-[25%] h-full '>
                    <a href='#PROJECTS2'><p className=' leading-[50px] text-[10px] sm:text-[13px] font-semibold text-white'>PROJECTS</p></a>
                  </div>
                  <div className='w-[25%] h-full  '>
                    <a href='#CONTACT2'><p className=' leading-[50px] text-[10px] sm:text-[13px] font-semibold text-white'>CONTACT</p></a>
                  </div>
                </div> {/** links */}
                <div className='w-[50%] h-full relative sm:hidden visible' onClick={()=>setTimeout(()=>{setTogol(!togol)},100)}>
                  <i className="fas fa-list absolute right-0 text-2xl leading-[50px] text-white"></i>
                </div> {/** icon list */}
              </div> {/** display flex for logo div and links div */}
              {
                togol === true &&
                <div className='w-full h-[100px] text-center relative z-10 sm:hidden visible'>
                    <div className='w-full h-[25px] border-t border-gray-300 '>
                      <a href='#AboutMe2'><p className=' leading-[25px] bg-[#646464d3] text-[10px] sm:text-[13px] font-semibold text-white'>ABOUT</p></a>
                    </div>
                    <div className='w-full h-[25px] border-t border-gray-300'>
                      <a href='#Resume2'><p className=' leading-[25px] bg-[#646464d3] text-[10px] sm:text-[13px] font-semibold text-white'>RESUME</p></a>
                    </div>
                    <div className='w-full h-[25px] border-t border-gray-300'>
                      <a href='#PROJECTS2'><p className=' leading-[25px] bg-[#646464d3] text-[10px] sm:text-[13px] font-semibold text-white'>PROJECTS</p></a>
                    </div>
                    <div className='w-full h-[25px] border-t border-gray-300'>
                      <a href='#CONTACT2'><p className=' leading-[25px] bg-[#646464d3] text-[10px] sm:text-[13px] font-semibold text-white'>CONTACT</p></a>
                    </div>
                </div>
               }
          </div> {/** header */}
            <div className=' w-40 h-40 rounded-full border-2 border-gray-300 absolute bottom-[-60px] trans scaleHover '>
              <img src={myimage} alt="sdds" className=' w-full h-full rounded-full' />
            </div>
          </div> {/* top div , backgroung image */}
          <div className=' w-full h-[60%]'>
            <div className=' w-[90%] h-full m-auto'>
              <div className='w-full h-full flex flex-col justify-evenly items-center pt-14'>
                <h2 className=' text-2xl font-semibold sm:font-normal sm:text-4xl'>Eslam Emam</h2>
                <p className=' sm:font-normal font-semibold sm:text-2xl'>Frontend Developer</p>
                <div className='text-2xl'>
                  <i className="fab fa-linkedin"></i>
                  <i className="fab fa-github pr-5 pl-5"></i>
                  <i className="fas fa-envelope"></i>
                </div> {/* icon */}
              <div className=' w-full h-[15%] mt-[20px]'>
                <a href={EslamResume} download>
                  <button className=' w-[44%] h-full border-dotted border rounded border-gray-500 hover:bg-slate-700 sm:font-semibold text-sm sm:text-xl mr-[2.5%] ml-[3.5%]'>
                    DOWNLOAD CV
                  </button>
                </a>
                <a href='#CONTACT2'>
                  <button className=' w-[44%] h-full border-dotted border rounded border-gray-500 hover:bg-slate-700 sm:font-semibold text-sm sm:text-xl mr-[3.5%] ml-[2.5%]'>
                    CONTACT ME
                  </button>
                </a> 
                </div> {/* buttons */}
              </div> {/* buttom div for all */}
            </div> {/* section info */}
          </div>{/* MainInfo div */}
        </div>
  )
}

export default FirstPage