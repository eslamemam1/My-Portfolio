import React from 'react'

function AboutMe() {
  return (
          <div className=' h-[510px] font-semibold'>
        <div className=' w-full h-[50px] border-b border-gray-500 text-4xl mt-2 ' id='AboutMe'>
          <h2><span className='text-[#ff9800]'>About</span> Me</h2>
        </div>
        <div>
          <p className=' pt-5 text-lg'>
           Hi, I am a frontend software development engineer from Giza, Cairo.
            I have rich experience in web site design and building and customization.
            who love Programming.Developing,
            learning and Problem Solving. I am passionate about taking risks and solving them by Communicating & Sharing experience
            and knowledge.
          </p>
        </div>
        <div className='w-full'>
          <div className=' pt-5'>
            <div className=' w-full flex flex-col justify-between'>
              <p className='w-[100%] '><i className="fas fa-calendar-week w-5 text-[#ff9800] text-xl mr-3 "></i>10 April 1997 </p>
              <p className='w-[100%] pt-2'><i className="fas fa-phone w-5 text-[#ff9800] text-xl mr-3 "></i>01090145286 </p>
              <p className='w-[100%] pt-2'><i className="fas fa-envelope w-5 text-[#ff9800] text-xl mr-3 "></i>eslamemam65@gmail.com</p>
              <p className='w-[100%] pt-2'><i className="fas fa-map-marker-alt w-5 text-[#ff9800] text-xl mr-3 "></i>6TH Of October, Giza, Egypt</p>
              <p className='w-[100%] pt-2'><i class="fas fa-university w-5 text-[#ff9800] text-xl mr-3 "></i>Bachelor of Computer Science | (2015 – 2019)</p>
            </div>
          </div>
        </div>
      </div> 
  )
}

export default AboutMe