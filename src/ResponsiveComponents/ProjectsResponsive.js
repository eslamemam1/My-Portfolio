import React from 'react'
import project1 from "../pic/project1.png"
import project2 from "../pic/project2.png"
import flipCard from "../pic/flipCard.png"
import quranKareem from "../pic/quranKareem.png"
import { NavLink } from "react-router-dom";
function ProjectsResponsive() {
  return (
    <div className='bg-[#31313a] ' id='PROJECTS2'>
        <div className=' w-[90%] m-auto'>
          <div className=' w-full h-[40px] mt-4 text-2xl '>
            <h2><span className='text-[#ff9800]'>P</span>rojects</h2>
          </div> {/** header */}
          <div className='flex flex-col border-t border-gray-600 pt-3'>
            <div className=' relative w-full pb-2 pt-1 imgContener'>
              <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={project1} alt="project1"></img>
              <a href='https://eslamemam1.github.io/Food-Resturant/' target="_blank" rel="noreferrer">
                <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-center searchIcon"><i class="fas fa-search search text-white"></i>
                  <p className=' text-xl text-white font-semibold'>Food-Resturant</p>
                  <p className=' text-base text-white font-semibold'>Not responsive design using html and css</p>
                </div>
                </a>
            </div>  {/** lift side */}
            <div className=' relative w-full pb-2 pt-1 imgContener'>
              <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={project2} alt="project1"></img>
              <a href='https://eslamemam1.github.io/responsive-website/' target="_blank" rel="noreferrer">
                <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-center searchIcon"><i class="fas fa-search search text-white"></i>
                  <p className=' text-xl text-white font-semibold'>Template Two</p>
                  <p className=' text-base text-white font-semibold'>Responsive Design using html and css</p>
                </div>
              </a>
            </div>  {/** right side */}
          </div>
          <div className='flex flex-col pb-3'>
            <div className=' relative w-full pb-2 pt-1 imgContener'>
            <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={flipCard} alt="project1"></img>
              <a href='https://eslamemam1.github.io/Flip-Card/' target="_blank" rel="noreferrer">
                <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-center searchIcon"><i class="fas fa-search search text-white"></i>
                  <p className=' text-xl text-white font-semibold'>Flip Card</p>
                  <p className=' text-base text-white font-semibold'>Responsive Design using html and css</p>
                </div>
              </a>
            </div>  {/** lift side */}
            <div className=' relative w-full pb-2 pt-1 imgContener'>
            <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={quranKareem} alt="project1"></img>
              <a href='https://eslamemam1.github.io/The-Holy-Quran-/' target="_blank" rel="noreferrer">
                <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-center searchIcon"><i class="fas fa-search search text-white"></i>
                  <p className=' text-xl text-white font-semibold'>The Holy Quran</p>
                  <p className=' text-base text-white font-semibold'>Responsive Design using React Js</p>
                </div>
              </a>
            </div>  {/** right side */}
           </div>
          <div>
            <button className=' mt-5 border-gray-600 rounded-md p-2 text-xl border hover:bg-slate-600'><NavLink to="/Projects">More projects</NavLink></button>
          </div>
        </div> {/** contaner */}
      </div>
  )
}

export default ProjectsResponsive