import React, { useEffect, useState } from 'react'
import myimage from "./MyPic.jpg"
import bg from "./bg.jpg"
import project1 from "./project1.png"
import project2 from "./project2.png"
import quranKareem from "./quranKareem.png"
function ResponsiveWindow() {
  const [togol, setTogol] = useState(false);
  useEffect(() => {
    console.log(togol);
  }, [togol]);
  return (
    <div className=' flex flex-col bg-[#31313a]'>
        <div className=' w-full h-screen  flex flex-col '>
          <div className=' w-full h-[40%] bg-cover rounded-b-none rounded-md relative flex justify-center items-end' style={{ backgroundImage: `url(${bg})` }} >
            <div className=' w-full h-[50px] bg-[#9696968e] top-0 rounded-t fixed z-10'>
              <div className='flex w-[90%] h-full m-auto '>
                <div className=' h-full w-[50%] leading-10'><h2 className=' font-bold sm:text-xl leading-[50px] sm:leading-[50px] text-white'>My Portfolio</h2></div> {/** logo */}
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
                    <div className='w-full h-[25px] border-b-2 '>
                      <a href='#AboutMe2'><p className=' leading-[25px] bg-[#808080d9] text-[10px] sm:text-[13px] font-semibold text-white'>ABOUT</p></a>
                    </div>
                    <div className='w-full h-[25px] border-b-2'>
                      <a href='#Resume2'><p className=' leading-[25px] bg-[#808080d9] text-[10px] sm:text-[13px] font-semibold text-white'>RESUME</p></a>
                    </div>
                    <div className='w-full h-[25px] border-b-2'>
                      <a href='#PROJECTS2'><p className=' leading-[25px] bg-[#808080d9] text-[10px] sm:text-[13px] font-semibold text-white'>PROJECTS</p></a>
                    </div>
                    <div className='w-full h-[25px] border-b-2'>
                      <a href='#CONTACT2'><p className=' leading-[25px] bg-[#808080d9] text-[10px] sm:text-[13px] font-semibold text-white'>CONTACT</p></a>
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
                  <button className=' w-[44%] h-full border-dotted border rounded border-gray-500 hover:bg-slate-700 sm:font-semibold text-sm sm:text-xl mr-[2.5%] ml-[3.5%]'>DOWNLOAD CV</button>
                  <button className=' w-[44%] h-full border-dotted border rounded border-gray-500 hover:bg-slate-700 sm:font-semibold text-sm sm:text-xl mr-[3.5%] ml-[2.5%]'>CONTACT ME</button>
                </div> {/* buttons */}
              </div> {/* buttom div for all */}
            </div> {/* section info */}
          </div>{/* MainInfo div */}
        </div> {/** first page */}
      <div className=' w-[100%] bg-[#31313a] font-semibold ' id='AboutMe2'>
        <div className=' w-[90%] h-[80%] m-auto'>
          <div className=' w-full h-[50px] border-b border-gray-500 text-xl mt-3 ' >
            <h2><span className='text-[#ff9800] text-2xl'>About</span> Me</h2>
          </div>
          <div>
            <p className=' pt-5 text-base'>
            Hi, I am a frontend software development engineer from Giza, Cairo.
            I have rich experience in web site design and building and customization.
            who love Programming.Developing,
            learning and Problem Solving.
            I am passionate about taking risks and solving them by Communicating & Sharing experience
            and knowledge.
            </p>
          </div> {/** paragraf about me */}
          <div className='w-full'>
            <div className=' pt-5'>
              <div className=' flex flex-col justify-between w-full '>
              <p className='w-[100%] '><i className="fas fa-calendar-week w-5 text-[#ff9800] text-xl mr-3 "></i>10 April 1997 </p>
              <p className='w-[100%] pt-2 '><i className="fas fa-phone w-5 text-[#ff9800] text-xl mr-3 "></i>01090145286 </p>
              <p className='w-[100%] pt-2 '><i className="fas fa-envelope w-5 text-[#ff9800] text-xl mr-3 "></i>eslamemam65@gmail.com</p>
              <p className='w-[100%] pt-2 '><i className="fas fa-map-marker-alt w-5 text-[#ff9800] text-xl mr-3 "></i>6TH Of October,Giza,Egypt</p>
              <p className='w-[100%] pt-2 '><i class="fas fa-university w-5 text-[#ff9800] text-xl mr-3 "></i>Bachelor of Computer Science | (2015 – 2019)</p>
              </div>
            </div>
          </div> {/** info icon */}
       </div> {/** About Me section */}
      </div> {/** secand page */}
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
          </div> 
          <div className=' flex flex-col'>
            <div className='w-full border-b border-gray-600 pb-3 pt-3'>
              <span className='h-10  w-full text-xl border-gray-600 border-b pb-2'>
                <i class="fas fa-briefcase text-[#ff9800] text-2xl mr-2"></i>
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
        </div> {/** contaner */}
      </div> {/** Resume page */}
      <div className=' bg-[#31313a]'>
        <div className=' w-[90%] m-auto'>
          <div className=' w-full h-[40px] mt-2 text-2xl '>
            <h2><span className='text-[#ff9800]'>My</span> Skills</h2>
          </div> {/** header */}
          <div className='flex flex-col border-t border-b pb-5 border-gray-600 '>
            <div className=' w-full'>
              <div className=' pt-3'>
                <p className=' text-lg font-semibold'>HTML5</p>
                <div className=' w-full h-1 rounded bg-slate-200'>
                <div className=' w-[95%] h-1 rounded bg-[#ff9800]'></div>
              </div> {/** progress bar */}
              </div> {/** HTML5 */}
                <div className=' pt-3'>
                <p className=' text-lg font-semibold'>CSS3</p>
                <div className=' w-full h-1 rounded bg-slate-200'>
                <div className=' w-[90%] h-1 rounded bg-[#ff9800]'></div>
              </div> {/** progress bar */}
              </div> {/** CSS3 */}
              <div className=' pt-3'>
                <p className=' text-lg font-semibold'>JavaScript</p>
                <div className=' w-full h-1 rounded bg-slate-200'>
                <div className=' w-[80%] h-1 rounded bg-[#ff9800]'></div>
              </div> {/** progress bar */}
              </div> {/** JavaScript */}
              <div className=' pt-3'>
                <p className=' text-lg font-semibold'>Tailwind CSS</p>
                <div className=' w-full h-1 rounded bg-slate-200'>
                <div className=' w-[85%] h-1 rounded bg-[#ff9800]'></div>
              </div> {/** progress bar */}
              </div> {/** Tailwind CSS */}
                <div className=' pt-3'>
                <p className=' text-lg font-semibold'>React.js</p>
                <div className=' w-full h-1 rounded bg-slate-200'>
                <div className=' w-[70%] h-1 rounded bg-[#ff9800]'></div>
              </div> {/** progress bar */}
              </div> {/** React.js */}
            </div> {/** lift side */}
            <div className=' w-full'>
              <div className=' pt-3'>
                <p className=' text-lg font-semibold'>RESTful APIs</p>
                <div className=' w-full h-1 rounded bg-slate-200'>
                <div className=' w-[95%] h-1 rounded bg-[#ff9800]'></div>
              </div> {/** progress bar */}
              </div> {/** RESTful APIs */}
                <div className=' pt-3'>
                <p className=' text-lg font-semibold'>Git</p>
                <div className=' w-full h-1 rounded bg-slate-200'>
                <div className=' w-[75%] h-1 rounded bg-[#ff9800]'></div>
              </div> {/** progress bar */}
              </div> {/** Git */}
              <div className=' pt-3'>
                <p className=' text-lg font-semibold'>Github</p>
                <div className=' w-full h-1 rounded bg-slate-200'>
                <div className=' w-[75%] h-1 rounded bg-[#ff9800]'></div>
              </div> {/** progress bar */}
              </div> {/** Github */}
              <div className=' pt-3'>
                <p className=' text-lg font-semibold'>React Redux</p>
                <div className=' w-full h-1 rounded bg-slate-200'>
                <div className=' w-[50%] h-1 rounded bg-[#ff9800]'></div>
              </div> {/** progress bar */}
              </div> {/** React Redux */}
                <div className=' pt-3'>
                <p className=' text-lg font-semibold'>Express.js</p>
                <div className=' w-full h-1 rounded bg-slate-200'>
                <div className=' w-[50%] h-1 rounded bg-[#ff9800]'></div>
              </div> {/** progress bar */}
              </div> {/** Express.js */}
            </div>  {/** right side */}
          </div> {/** content my skills */}
        </div> {/** contaner */}
      </div> {/** My Skills page */}
      <div className='bg-[#31313a] ' id='PROJECTS2'>
        <div className=' w-[90%] m-auto'>
          <div className=' w-full h-[40px] mt-4 text-2xl '>
            <h2><span className='text-[#ff9800]'>P</span>rojects</h2>
          </div> {/** header */}
          <div className='flex flex-col border-t border-gray-600 pt-3'>
            <div className=' relative w-full pb-2 pt-1 imgContener'>
              <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={project1} alt="project1"></img>
              <a href='https://eslamemam1.github.io/Food-Resturant/' target="_blank" rel="noreferrer">
                <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-white text-center searchIcon"><i class="fas fa-search search"></i>
                  <p className=' text-xl text-white font-semibold'>Food-Resturant</p>
                  <p className=' text-base'>not responsive design using html and css</p>
                </div>
                </a>
            </div>  {/** lift side */}
            <div className=' relative w-full pb-2 pt-1 imgContener'>
              <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={project2} alt="project1"></img>
              <a href='https://eslamemam1.github.io/responsive-website/' target="_blank" rel="noreferrer">
                <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-white text-center searchIcon"><i class="fas fa-search search"></i>
                  <p className=' text-xl text-white font-semibold'>Template Two</p>
                  <p className=' text-base'>Responsive Design using html and css</p>
                </div>
              </a>
            </div>  {/** right side */}
          </div>
          <div className='flex flex-col pb-3'>
            <div className=' relative w-full pb-2 pt-1 imgContener'>
            <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={quranKareem} alt="project1"></img>
              <a href='https://eslamemam1.github.io/The-Holy-Quran-/' target="_blank" rel="noreferrer">
                <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-white text-center searchIcon"><i class="fas fa-search search"></i>
                  <p className=' text-xl text-white font-semibold'>quran Kareem</p>
                  <p className=' text-base'>Responsive Design using React Js</p>
                </div>
              </a>
            </div>  {/** lift side */}
            <div className=' relative w-full pb-2 pt-1 imgContener'>
              <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={project1} alt="project1"></img>
              <a href='https://eslamemam1.github.io/Food-Resturant/' target="_blank" rel="noreferrer">
                <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-white text-center searchIcon"><i class="fas fa-search search"></i>
                  <p className=' text-xl text-white font-semibold'>Food-Resturant</p>
                  <p className=' text-base'>not responsive design</p>
                </div>
              </a>
            </div>  {/** right side */}
          </div>
        </div> {/** contaner */}
      </div> {/** PROJECTS section */}
      <div className='bg-[#31313a]'>
        <div className=' w-[90%] m-auto'>
          <div className=' w-full h-[40px] border-b border-gray-500 text-2xl mt-4' id='CONTACT2'>
            <h2><span className='text-[#ff9800]'>Contact</span> Form</h2>
          </div> {/** header */}
          <div className=' w-full pb-5 '>
            <form className=' flex flex-col'>
              <input className='focus:outline-none hover:border-b hover:border-[#ff9900] mt-3 w-full h-20 bg-[#34343f] border-b border-gray-500' type="text" placeholder='Enter Your Full Name' />
              <input className='focus:outline-none hover:border-b hover:border-[#ff9800] mt-3 w-full h-20 bg-[#34343f] border-b border-gray-500' type="email" placeholder='Enter Your Email Address' />
            </form>
            <textarea className='focus:outline-none hover:border-b hover:border-[#ff9800] w-full h-36 mt-5 border-b bg-[#34343f] border-gray-500' rows="4" cols="50"></textarea>
            <button className=' mt-5 w-40 h-16 border-dotted border rounded border-gray-500 hover:bg-slate-700 font-semibold text-xl ' >SEND MESSAGE</button>
          </div>
        </div> {/** contaner */}
      </div> {/** Contact Form */}
    </div>
  )
}

export default ResponsiveWindow