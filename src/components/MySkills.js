import React from 'react'

function MySkills() {
  return (
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
      </div> 
  )
}

export default MySkills