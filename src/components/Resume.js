import React from 'react'

function Resume() {
  return (
          <div id='Resume'>
          <div className=' w-full h-[50px] border-b border-gray-600 text-4xl ' id='AboutMe'>
            <h2><span className='text-[#ff9800]'>R</span>esume</h2>
          </div> {/** header */}
          <div className=' flex'>
            <div className=' pt-5 w-[45%] border-b border-gray-600'>
              <span className='h-10  w-full text-2xl border-gray-600 border-b pb-2'>
                <i class="fas fa-university w-5 text-[#ff9800] text-3xl mr-5"></i>
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
            <div className=' w-[55%] border-l border-b border-gray-600 pl-5 pb-5 pt-5'>
              <span className='h-10 text-2xl border-b border-gray-600 pb-2'><i class="fas fa-briefcase w-5 text-[#ff9800] text-3xl mr-5"></i>EXPERIENCE</span>
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
          </div> 
           <div className=' flex'>
            <div className=' pt-5 w-[45%] border-b border-gray-600'>
              <span className='h-10  w-full text-2xl border-gray-600 border-b pb-2'>
                <i class="fas fa-briefcase w-5 text-[#ff9800] text-3xl mr-5"></i>
                FREELANCER
              </span>
              <div className='mt-5 font-semibold'>
                <ul>
                  <li>Google Ads Rater<br/> <span className=' text-sm text-gray-400'></span> </li>
                  <li className=' text-sm text-gray-400'>Part-time remote job</li>
                  <li className=' text-sm text-gray-400'>Evaluate Google ads and improve the quality of search engines optimization Google .</li>
                </ul>
              </div>
            </div> {/** FREELANCER section */}
            <div className=' w-[55%] border-l border-b border-gray-600 pl-5 pb-5 pt-5'>
              <span className='h-10 text-2xl border-b border-gray-600 pb-2'><i class="fas fa-briefcase w-5 text-[#ff9800] text-3xl mr-5"></i>EXPERIENCE</span>
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
      </div> 
  )
}

export default Resume