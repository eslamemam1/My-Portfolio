import React, { useEffect, useState } from 'react'
import myimage from "./MyPic.jpg"
import bg from "./bg.jpg"
function ResponsiveWindow() {
  const [togol, setTogol] = useState(false);
  useEffect(() => {
    console.log(togol);
  }, [togol]);
  return (
    <div className=' flex flex-col'>
        <div className=' w-full h-[100vh] bg-[#31313a] flex flex-col '>
          <div className=' w-full h-[40%] bg-cover rounded-b-none rounded-md relative flex justify-center items-end' style={{ backgroundImage: `url(${bg})` }} >
            <div className=' w-full h-[50px] bg-[#9696968e] top-0 rounded-t fixed z-10'>
              <div className='flex w-[90%] h-full m-auto '>
                <div className=' h-full w-[50%] leading-10'><h2 className=' font-bold sm:text-xl leading-[50px] sm:leading-[50px] text-white'>My Portfolio</h2></div> {/** logo */}
                <div className=' w-[50%] h-full text-center text-sm font-semibold sm:flex hidden sm:visible'>
                  <div className='w-[25%] h-full '>
                    <a href='#AboutMe1'><p className=' leading-[50px] text-[10px] sm:text-[13px] font-semibold text-white'>ABOUT</p></a>
                  </div>
                  <div className='w-[25%] h-full '>
                    <a href='#AboutMe'><p className=' leading-[50px] text-[10px] sm:text-[13px] font-semibold text-white'>RESUME</p></a>
                  </div>
                  <div className='w-[25%] h-full '>
                    <a href='#AboutMe'><p className=' leading-[50px] text-[10px] sm:text-[13px] font-semibold text-white'>PROJECTS</p></a>
                  </div>
                  <div className='w-[25%] h-full  '>
                    <a href='#AboutMe'><p className=' leading-[50px] text-[10px] sm:text-[13px] font-semibold text-white'>CONTACT</p></a>
                  </div>
                </div> {/** links */}
                <div className='w-[50%] h-full relative sm:hidden visible' onClick={()=>setTimeout(()=>{setTogol(!togol)},100)}>
                <i className="fas fa-list absolute right-0 text-2xl leading-[50px] text-white"></i>
              </div> {/** icon list */}
            </div> {/** display flex for logo div and links div */}
            {
              togol === true &&
              <div className='w-full h-[100px] text-center relative z-10 sm:hidden visible'>
                  <div className='w-full h-[25px] border-b-2 '>
                    <a href='#AboutMe1'><p className=' leading-[25px] bg-[#808080d9] text-[10px] sm:text-[13px] font-semibold text-white'>ABOUT</p></a>
                  </div>
                  <div className='w-full h-[25px] border-b-2'>
                    <a href='#Resume'><p className=' leading-[25px] bg-[#808080d9] text-[10px] sm:text-[13px] font-semibold text-white'>RESUME</p></a>
                  </div>
                  <div className='w-full h-[25px] border-b-2'>
                    <a href='#AboutMe'><p className=' leading-[25px] bg-[#808080d9] text-[10px] sm:text-[13px] font-semibold text-white'>PROJECTS</p></a>
                  </div>
                  <div className='w-full h-[25px] border-b-2'>
                    <a href='#AboutMe'><p className=' leading-[25px] bg-[#808080d9] text-[10px] sm:text-[13px] font-semibold text-white'>CONTACT</p></a>
                  </div>
              </div>
            }
          </div> {/** header */}
            <div className=' w-40 h-40 rounded-full border-2 border-gray-300 absolute bottom-[-60px] '>
              <img src={myimage} alt="sdds" className=' w-full h-full rounded-full' />
          </div>
          </div> {/* top div , backgroung image */}
          <div className=' w-full h-[60%]'>
            <div className=' w-[90%] h-full m-auto'>
              <div className='w-full h-full flex flex-col justify-evenly items-center pt-14'>
                <h2 className=' text-2xl font-semibold sm:font-normal sm:text-4xl'>Eslam Emam</h2>
                <p className=' sm:font-normal font-semibold sm:text-2xl'>Front End Developer</p>
                <div className='text-2xl'>
                  <i className="fab fa-linkedin"></i>
                  <i className="fab fa-github pr-5 pl-5"></i>
                  <i className="fas fa-envelope"></i>
                </div> {/* icon */}
                <div className=' w-full h-[15%] mt-[20px]'>
                  <button className=' w-[44%] h-full border-dotted border rounded border-gray-500 hover:bg-slate-700 sm:font-semibold text-sm sm:text-xl mr-[2.5%] ml-[3.5%]'>DOWNLOAD CV</button>
                  <button className=' w-[44%] h-full border-dotted border rounded border-gray-500 hover:bg-slate-700 sm:font-semibold text-sm sm:text-xl mr-[3.5%] ml-[2.5%]'>CONTACT ME</button>
                </div> {/* buttons */}
              </div> {/* buttom div for all */}
            </div> {/* section info */}
          </div>{/* MainInfo div */}
        </div> {/** first page */}
      <div className=' w-[100%] h-screen bg-[#31313a] font-semibold '>
        <div className=' w-[90%] m-auto'>
          <div className=' w-full h-[50px] border-b border-gray-500 text-xl mt-3 ' id='AboutMe1'>
            <h2><span className='text-[#ff9800] text-2xl'>About</span> Me</h2>
          </div>
          <div>
            <p className=' pt-5 text-base'>
              I am Eslam Emam Abd Elmonam, Front End Developer from Giza, Cairo.
              I have rich experience in web site design and building and customization.
              I love to talk with you about me .
            </p>
          </div> {/** paragraf about me */}
          <div className='w-full'>
            <div className=' pt-5'>
              <div className=' flex flex-col justify-between w-full '>
              <span className='w-[100%] h-10'><i className="fas fa-calendar-week w-5 text-[#ff9800] text-xl mr-3 "></i>10 April 1997 </span>
              <span className='w-[100%] h-10'><i className="fas fa-phone w-5 text-[#ff9800] text-xl mr-3 "></i>01090145286 </span>
              <span className='w-[100%] h-10'><i className="fas fa-envelope w-5 text-[#ff9800] text-xl mr-3 "></i>eslamemam65@gmail.com</span>
              <span className='w-[100%] h-10'><i className="fas fa-map-marker-alt w-5 text-[#ff9800] text-xl mr-3 "></i>6TH Of October,Giza,Egypt</span>
              <span className='w-[100%] h-10'><i class="fas fa-university w-5 text-[#ff9800] text-xl mr-3 "></i>Bachelor of Computer Science | (2015 – 2019)</span>
              </div>
            </div>
          </div> {/** info icon */}
       </div> {/** About Me section */}
      </div> {/** secand page */}
    </div>
  )
}

export default ResponsiveWindow