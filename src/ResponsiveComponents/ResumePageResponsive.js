import React from 'react'

function ResumePageResponsive() {
  return (
          <div className=' w-full bg-[#31313a]'>
        <div className='w-[90%] m-auto'>
         <div className=' w-full h-[50px] border-b border-gray-600 text-2xl pt-2 mt-10' id='Resume2'>
            <h2><span className='text-[#ff9800]'>R</span>esume</h2>
          </div> {/** header */}
          <div className=' flex flex-col'>
            <div className=' pt-3 w-full border-b border-gray-600 pb-3'>
              <span className='h-10  w-full text-xl border-gray-600 border-b pb-2'>
                <i class="fas fa-university text-[#ff9800] text-2xl mr-2"></i>
                EDUCATION
              </span>
              <div className='mt-5 font-semibold'>
                <ul>
                  <li>Bachelor of Computer Science <br/> <span className=' text-sm text-gray-400'>( 2015 – 2019 )</span> </li>
                  <li>Ahram Canadian University</li>
                  <li><span className=' text-sm text-gray-400'>Computer networks department and studied computer science as well</span></li>
                </ul>
              </div>
            </div> {/** University icon */}
          </div> 
          <div className=' flex flex-col'>
            <div className='w-full border-b border-gray-600 pb-3 pt-3'>
              <span className='h-10  w-full text-xl border-gray-600 border-b pb-2'>
                <i class="fas fa-briefcase text-[#ff9800] text-2xl mr-2"></i>
                Present Work
              </span>
              <div className='mt-5 font-semibold'>
                <ul>
                  <li>React Developer<br/> <span className=' text-sm text-gray-400'></span> </li>
                  <li className=' text-sm text-gray-400'>Exios | 6th of October</li>
                  <li className=' text-sm text-gray-400'>Part-time job .</li>
                </ul>
              </div>
            </div> {/** FREELANCER section */}
            <div className=' w-full border-b border-gray-600 pb-3 pt-3'>
              <span className='h-10  w-full text-xl border-gray-600 border-b pb-2'>
                <i class="fas fa-briefcase text-[#ff9800] text-2xl mr-2"></i>
                EXPERIENCE
              </span>
                <div className='mt-5 font-semibold'>
                  <ul>
                    <li>React Developer</li>
                    <li className=' text-sm text-gray-400'>YAT Software · Internship</li>
                    <li className=' text-sm text-gray-400'>Jan 2022 - May 2022 · 5 mos</li>
                    <li>Training content</li>
                    <li className=' text-sm text-gray-400'>Html,Css, Javascript and React.js<br/>
                    <span className=' text-lg text-gray-300'>projects</span> <br/> To Do App , Calculator , Blog App and E-Commerce App <br/>
                    Skills: Tailwind CSS · HTML5 · Cascading Style Sheets (CSS) · JavaScript · React.js</li>
                  </ul>
                </div>
            </div> {/** React Developer section */}
            </div> {/** EXPERIENCE section */}
            <div className=' w-full border-b border-gray-600 pt-3 pb-3'>
              <span className='h-10  w-full text-xl border-gray-600 border-b pb-2'>
                <i class="fas fa-briefcase text-[#ff9800] text-2xl mr-2"></i>
                EXPERIENCE
              </span>
                <div className='mt-5 font-semibold'>
                  <ul>
                    <li>Frontend Developer</li>
                    <li className=' text-sm text-gray-400'>Transit · Internship</li>
                    <li className=' text-sm text-gray-400'>Aug 2021 - Dec 2021 · 5 mos</li>
                    <li>Training content</li>
                    <li className=' text-sm text-gray-400'>Html,Css and Javascript <br/>
                    <span className=' text-lg text-gray-300'>projects</span> <br/> counter , calculator , Clock and Ecommerce App <br/>
                    Skills: CSS3 · HTML5 · JavaScript</li>
                  </ul>
                </div>
            </div> {/** EXPERIENCE section */}
        </div> {/** contaner */}
      </div> 
  )
}

export default ResumePageResponsive