import React from 'react'
import myimage from "./pic/MyPic.jpg"
import bg from "./pic/bg.jpg"
import EslamResume from "./pic/Eslam-Resume.pdf"
function MainInfo() {
  return (
    <div className=' w-full h-full flex flex-col'>
      <div className=' w-full h-[40%] bg-cover rounded-b-none rounded-md relative flex justify-center items-end' style={{ backgroundImage: `url(${bg})` }} >
        <div className=' w-40 h-40 rounded-full border-2 border-gray-300 absolute bottom-[-60px] trans scaleHover'>
          <img src={myimage} alt="sdds" className=' w-full h-full rounded-full' />
        </div>
      </div> {/* top div , backgroung image */}
      <div className=' w-full h-[60%]'>
        <div className=' w-[80%] h-[85%] m-auto'>
          <div className='w-full h-full flex flex-col justify-center items-center pt-5'>
            <h2 className=' text-4xl'>Eslam Emam</h2>
            <p className=' text-2xl pt-5 pb-5'>Frontend Developer</p>
            <div className='text-2xl'>
              <a href="https://www.linkedin.com/in/eslam-emam-12695815b" target="_blank" rel="noreferrer"><i className="fab fa-linkedin OrangeHover"></i></a>
              <a href='https://github.com/eslamemam1' target="_blank" rel="noreferrer"><i className="fab fa-github pr-3 pl-3 OrangeHover"></i></a>
              <a href='https://www.facebook.com/Eslam.Emam.Abdelmonam' target="_blank" rel="noreferrer"><i className="fab fa-facebook-square OrangeHover"></i></a>
            </div> {/* icon */}
          </div>
        </div> {/* secction info */}
        <div className=' w-full h-[15%]'>
          <a href={EslamResume} download><button className=' w-[50%] h-full border-dotted border rounded-bl-lg border-gray-500 hover:bg-slate-700 font-semibold text-xl'>DOWNLOAD CV</button></a>
          <a href='#CONTACT'><button className=' w-[50%] h-full border-dotted border-l-0 border rounded-br-lg border-gray-500 hover:bg-slate-700 font-semibold text-xl '>CONTACT ME</button></a>
        </div> {/* buttons */}
      </div> {/* buttom div for all */}
      {/* MainInfo div */}
    </div> 
  )
}

export default MainInfo