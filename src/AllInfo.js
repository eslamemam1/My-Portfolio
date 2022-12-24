import React from 'react'
import project1 from "./project1.png"
import project2 from "./project2.png"
import quranKareem from "./quranKareem.png"
function AllInfo() {
  return (
    <div className=' w-[95%] m-auto' >
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
              <span className='w-[100%] h-10'><i className="fas fa-calendar-week w-5 text-[#ff9800] text-xl mr-3 "></i>10 April 1997 </span>
              <span className='w-[100%] h-10'><i className="fas fa-phone w-5 text-[#ff9800] text-xl mr-3 "></i>01090145286 </span>
              <span className='w-[100%] h-10'><i className="fas fa-envelope w-5 text-[#ff9800] text-xl mr-3 "></i>eslamemam65@gmail.com</span>
              <span className='w-[100%] h-10'><i className="fas fa-map-marker-alt w-5 text-[#ff9800] text-xl mr-3 "></i>6TH Of October,Giza,Egypt</span>
              <span className='w-[100%] h-10'><i class="fas fa-university w-5 text-[#ff9800] text-xl mr-3 "></i>Bachelor of Computer Science | (2015 – 2019)</span>
            </div>
          </div>
        </div>
      </div> {/** About Me */}
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
      </div> {/** Resume page */}
      <div className=''>
        <div className=' w-full h-[50px] mt-5 mb-2 text-4xl '>
          <h2 className=' pb-3'><span className='text-[#ff9800]'>My</span> Skills</h2>
        </div> {/** header */}
        <div className='flex border-t border-b pb-5 border-gray-600 '>
          <div className=' w-[50%]'>
            <div className=' pt-3'>
              <p className=' text-lg font-semibold'>HTML5</p>
              <div className=' w-[95%] h-1 rounded bg-slate-200'>
              <div className=' w-[95%] h-1 rounded bg-[#ff9800]'></div>
            </div> {/** progress bar */}
            </div> {/** HTML5 */}
              <div className=' pt-3'>
              <p className=' text-lg font-semibold'>CSS3</p>
              <div className=' w-[95%] h-1 rounded bg-slate-200'>
              <div className=' w-[90%] h-1 rounded bg-[#ff9800]'></div>
            </div> {/** progress bar */}
            </div> {/** CSS3 */}
            <div className=' pt-3'>
              <p className=' text-lg font-semibold'>JavaScript</p>
              <div className=' w-[95%] h-1 rounded bg-slate-200'>
              <div className=' w-[90%] h-1 rounded bg-[#ff9800]'></div>
            </div> {/** progress bar */}
            </div> {/** JavaScript */}
            <div className=' pt-3'>
              <p className=' text-lg font-semibold'>Tailwind CSS</p>
              <div className=' w-[95%] h-1 rounded bg-slate-200'>
              <div className=' w-[85%] h-1 rounded bg-[#ff9800]'></div>
            </div> {/** progress bar */}
            </div> {/** Tailwind CSS */}
              <div className=' pt-3'>
              <p className=' text-lg font-semibold'>React.js</p>
              <div className=' w-[95%] h-1 rounded bg-slate-200'>
              <div className=' w-[70%] h-1 rounded bg-[#ff9800]'></div>
            </div> {/** progress bar */}
            </div> {/** React.js */}
          </div> {/** lift side */}
          <div className=' w-[50%] border-l border-gray-600 pl-5 '>
            <div className=' pt-3'>
              <p className=' text-lg font-semibold'>RESTful APIs</p>
              <div className=' w-[95%] h-1 rounded bg-slate-200'>
              <div className=' w-[95%] h-1 rounded bg-[#ff9800]'></div>
            </div> {/** progress bar */}
            </div> {/** RESTful APIs */}
              <div className=' pt-3'>
              <p className=' text-lg font-semibold'>Git</p>
              <div className=' w-[95%] h-1 rounded bg-slate-200'>
              <div className=' w-[75%] h-1 rounded bg-[#ff9800]'></div>
            </div> {/** progress bar */}
            </div> {/** Git */}
            <div className=' pt-3'>
              <p className=' text-lg font-semibold'>Github</p>
              <div className=' w-[95%] h-1 rounded bg-slate-200'>
              <div className=' w-[75%] h-1 rounded bg-[#ff9800]'></div>
            </div> {/** progress bar */}
            </div> {/** Github */}
            <div className=' pt-3'>
              <p className=' text-lg font-semibold'>React Redux</p>
              <div className=' w-[95%] h-1 rounded bg-slate-200'>
              <div className=' w-[50%] h-1 rounded bg-[#ff9800]'></div>
            </div> {/** progress bar */}
            </div> {/** React Redux */}
              <div className=' pt-3'>
              <p className=' text-lg font-semibold'>Express.js</p>
              <div className=' w-[95%] h-1 rounded bg-slate-200'>
              <div className=' w-[70%] h-1 rounded bg-[#ff9800]'></div>
            </div> {/** progress bar */}
            </div> {/** Express.js */}
          </div>  {/** right side */}
        </div> {/** content my skills */}
      </div> {/** My Skills page */}
      <div className=' h-[500px]' id='PROJECTS'>
        <div className=' w-full h-[50px] mt-5 mb-2 text-4xl '>
          <h2 className=' pb-3'><span className='text-[#ff9800]'>P</span>rojects</h2>
        </div> {/** header */}
        <div className='flex border-t border-gray-600'>
          <div className=' relative w-[50%] border-r border-l border-b pb-2 pt-1 border-gray-600 imgContener'>
            <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={project1} alt="project1"></img>
            <a href='https://eslamemam1.github.io/Food-Resturant/' target="_blank" rel="noreferrer">
              <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-white text-center searchIcon"><i class="fas fa-search search"></i>
                <p className=' text-xl text-white font-semibold'>Food-Resturant</p>
                <p className=' text-base'>not responsive design using html and css</p>
              </div>
              </a>
          </div>  {/** lift side */}
          <div className=' relative w-[50%] border-r border-b pb-2 pt-1 border-gray-600 imgContener'>
            <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={project2} alt="project1"></img>
            <a href='https://eslamemam1.github.io/responsive-website/' target="_blank" rel="noreferrer">
              <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-white text-center searchIcon"><i class="fas fa-search search"></i>
                <p className=' text-xl text-white font-semibold'>Template Two</p>
                <p className=' text-base'>Responsive Design using html and css</p>
              </div>
            </a>
          </div>  {/** right side */}
        </div>
        <div className='flex'>
          <div className=' relative w-[50%] border-r border-l border-b pb-2 pt-1 border-gray-600 imgContener'>
           <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={quranKareem} alt="project1"></img>
            <a href='https://eslamemam1.github.io/The-Holy-Quran-/' target="_blank" rel="noreferrer">
              <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-white text-center searchIcon"><i class="fas fa-search search"></i>
                <p className=' text-xl text-white font-semibold'>quran Kareem</p>
                <p className=' text-base'>Responsive Design using React Js</p>
              </div>
            </a>
          </div>  {/** lift side */}
          <div className=' relative w-[50%] border-r border-b pb-2 pt-1 border-gray-600 imgContener'>
            <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={project1} alt="project1"></img>
            <a href='https://eslamemam1.github.io/Food-Resturant/' target="_blank" rel="noreferrer">
              <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-white text-center searchIcon"><i class="fas fa-search search"></i>
                <p className=' text-xl text-white font-semibold'>Food-Resturant</p>
                <p className=' text-base'>not responsive design</p>
              </div>
            </a>
          </div>  {/** right side */}
        </div>
      </div> {/** PROJECTS section */}
      <div>
        <div className=' w-full h-[50px] border-b border-gray-500 text-4xl mt-2  '>
          <h2 className=' pb-3'><span className='text-[#ff9800]'>Contact</span> Form</h2>
        </div> {/** header */}
        <div className=' w-full h-[500px]'>
          <form className=' flex'>
            <input className='focus:outline-none hover:border-b hover:border-[#ff9800] w-[48%] mr-[2%] h-20 bg-[#34343f] border-b border-gray-500' type="text" placeholder='Enter Your Full Name' />
            <input className='focus:outline-none hover:border-b hover:border-[#ff9800] w-[48%] ml-[2%] h-20 bg-[#34343f] border-b border-gray-500' type="email" placeholder='Enter Your Email Address' />
          </form>
          <textarea className='focus:outline-none hover:border-b hover:border-[#ff9800] w-full h-36 mt-5 bg-[#34343f] border-gray-500' rows="4" cols="50"></textarea>
          <button className=' mt-5 w-40 h-16 border-dotted border rounded border-gray-500 hover:bg-slate-700 font-semibold text-xl ' >SEND MESSAGE</button>
        </div>
      </div> {/** Contact Form */}
    </div>
  )
}

export default AllInfo