import React from 'react'
import project1 from "./pic/project1.png"
import project2 from "./pic/project2.png"
import flipCard from "./pic/flipCard.png"
import quranKareem from "./pic/quranKareem.png"
import Crud from "./pic/CRUD.png"
import Quiz from "./pic/Quiz.png"
import { NavLink } from "react-router-dom";
function MainComponantProjects() {
  return (
      <div className="App w-full flex items-center justify-center gradient ">
        <div className='bg-[#31313a]'>
        <div className=' w-[90%] m-auto pt-3'>
          <div className=' w-full flex justify-between h-[40px] mt-4 text-2xl '>
            <div><span className='text-[#ff9800]'>P</span>rojects</div>
            <div>
              <button className=' rounded-md pr-1 pl-1 text-xl hover:bg-slate-600'><NavLink to="/"><span className='text-[#ff9800]'>Go</span> Back </NavLink></button>
            </div>
          </div> {/** header */}
          <div className='flex flex-col xl:flex-row border-t border-gray-600 pt-3'>
            <div className=' relative w-[100%] pb-2 pt-1 imgContener'>
            <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={project1} alt="project1"></img>
            <a href='https://eslamemam1.github.io/Food-Resturant/' target="_blank" rel="noreferrer">
              <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-center searchIcon"><i class="fas fa-search search text-white"></i>
                <p className=' text-xl text-white font-semibold'>Food-Resturant</p>
                <p className=' text-base text-white font-semibold'>Not responsive design using html and css</p>
              </div>
            </a>
            </div> {/** lift side */}
            <div className=' relative w-[100%] pb-2 pt-1 imgContener'>
              <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={project2} alt="project1"></img>
              <a href='https://eslamemam1.github.io/responsive-website/' target="_blank" rel="noreferrer">
                <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-center searchIcon"><i class="fas fa-search search text-white"></i>
                  <p className=' text-xl text-white font-semibold'>Template Two</p>
                  <p className=' text-base text-white font-semibold'>Responsive Design using html and css</p>
                </div>
              </a>
            </div>  {/** right side */}
          </div>
          <div className='flex flex-col xl:flex-row pb-3'>
            <div className=' relative w-[100%] pb-2 pt-1 imgContener'>
            <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={flipCard} alt="project1"></img>
              <a href='https://eslamemam1.github.io/Flip-Card/' target="_blank" rel="noreferrer">
                <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-center searchIcon"><i class="fas fa-search search text-white"></i>
                  <p className=' text-xl text-white font-semibold'>Flip Card</p>
                  <p className=' text-base text-white font-semibold'>Responsive Design using html and css</p>
                </div>
              </a>
            </div>  {/** lift side */}
            <div className=' relative w-[100%] pb-2 pt-1 imgContener'>
            <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={quranKareem} alt="project1"></img>
              <a href='https://eslamemam1.github.io/The-Holy-Quran-/' target="_blank" rel="noreferrer">
                <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-center searchIcon"><i class="fas fa-search search text-white"></i>
                  <p className=' text-xl text-white font-semibold'>The Holy Quran</p>
                  <p className=' text-base text-white font-semibold'>Responsive Design using React Js</p>
                </div>
              </a>
            </div>  {/** right side */}
          </div>
          <div className='flex flex-col xl:flex-row pb-3'>
            <div className=' relative w-[100%] pb-2 pt-1 imgContener'>
            <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={Crud} alt="project1"></img>
              <a href='https://github.com/eslamemam1/Crud-React-App' target="_blank" rel="noreferrer">
                <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-center searchIcon"><i class="fas fa-search search text-white"></i>
                  <p className=' text-xl text-white font-semibold'>Crud App</p>
                  <p className=' text-base text-white font-semibold'>Responsive Design</p>
                  <p className=' text-base text-white font-semibold'>React Project with json server</p>
                </div>
              </a>
            </div>  {/** lift side */}
            <div className=' relative w-[100%] pb-2 pt-1 imgContener'>
            <img className=' rounded mt-1 w-[90%] m-auto hoverScall trans img' src={Quiz} alt="project1"></img>
              <a href='https://github.com/eslamemam1/ng-task' target="_blank" rel="noreferrer">
                <div class=" w-full absolute top-[50%] left-[50%] text-4xl translate-x-[-50%] translate-y-[-50%] text-center searchIcon"><i class="fas fa-search search text-white"></i>
                  <p className=' text-xl text-white font-semibold'>Quiz App</p>
                  <p className=' text-base text-white font-semibold'>Responsive Design</p>
                  <p className=' text-base text-white font-semibold'>React Project with Express server</p>
                </div>
              </a>
            </div>  {/** right side */}
          </div>
        </div> {/** contaner */}
      </div>
      </div>
  )
}

export default MainComponantProjects