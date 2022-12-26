import React from 'react'
import project1 from "../pic/project1.png"
import project2 from "../pic/project2.png"
import flipCard from "../pic/flipCard.png"
import quranKareem from "../pic/quranKareem.png"
function Projects() {
  return (
    <div className=' h-[500px]' id='PROJECTS'>
        <div className=' w-full h-[50px] mt-5 mb-2 text-4xl '>
          <h2 className=' pb-3'><span className='text-[#ff9800]'>P</span>rojects</h2>
        </div> {/** header */}
        <div className='flex border-t border-gray-600'>
          <div className=' relative w-[50%] border-r border-l border-b pb-2 pt-1 border-gray-600 imgContener'>
            <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={project1} alt="project1"></img>
            <a href='https://eslamemam1.github.io/Food-Resturant/' target="_blank" rel="noreferrer">
              <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-center searchIcon"><i class="fas fa-search search text-white"></i>
                <p className=' text-xl text-white font-semibold'>Food-Resturant</p>
                <p className=' text-base text-white font-semibold'>Not responsive design using html and css</p>
              </div>
              </a>
          </div>  {/** lift side */}
          <div className=' relative w-[50%] border-r border-b pb-2 pt-1 border-gray-600 imgContener'>
            <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={project2} alt="project1"></img>
            <a href='https://eslamemam1.github.io/responsive-website/' target="_blank" rel="noreferrer">
              <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-center searchIcon"><i class="fas fa-search search text-white"></i>
                <p className=' text-xl text-white font-semibold'>Template Two</p>
                <p className=' text-base text-white font-semibold'>Responsive Design using html and css</p>
              </div>
            </a>
          </div>  {/** right side */}
        </div>
        <div className='flex'>
          <div className=' relative w-[50%] border-r border-l border-b pb-2 pt-1 border-gray-600 imgContener'>
           <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={flipCard} alt="project1"></img>
            <a href='https://eslamemam1.github.io/Flip-Card/' target="_blank" rel="noreferrer">
              <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-center searchIcon"><i class="fas fa-search search text-white"></i>
                <p className=' text-xl text-white font-semibold'>Flip Card</p>
                <p className=' text-base text-white font-semibold'>Not Responsive Design using React Js</p>
              </div>
            </a>
          </div>  {/** lift side */}
          <div className=' relative w-[50%] border-r border-b pb-2 pt-1 border-gray-600 imgContener'>
           <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={quranKareem} alt="project1"></img>
            <a href='https://eslamemam1.github.io/The-Holy-Quran-/' target="_blank" rel="noreferrer">
              <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-center searchIcon"><i class="fas fa-search search text-white"></i>
                <p className=' text-xl text-white font-semibold'>quran Kareem</p>
                <p className=' text-base text-white font-semibold'>Responsive Design using React Js</p>
              </div>
            </a>
          </div>  {/** right side */}
        </div> {/** PROJECTS section */}
      </div> 
  )
}

export default Projects