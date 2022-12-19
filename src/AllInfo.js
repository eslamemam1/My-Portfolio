import React from 'react'

function AllInfo() {
  return (
    <div className=' w-[95%] m-auto' >
      <div className='h-[1000px] font-semibold'>
        <div className=' w-full h-[50px] border-b border-gray-500 text-4xl ' id='AboutMe'>
          <h2><span className='text-orange-500'>About</span> Me</h2>
        </div>
        <div>
          <p className=' pt-5 text-xl'>
          I am Eslam Emam Abd Elmonam, Front End Developer from Giza, Cairo. I have rich experience in web site design and building and customization.I love to talk with you about me .
          </p>
        </div>
        <div className='w-full h-[300px] '>
          <div className=' pt-5'>
            <div className=' flex justify-between w-full'>
              <span className='w-[50%] h-10'>AGE  . . . . .  25</span>
              <span className='w-[50%] h-10'>RESIDENCE  . . . . .  EGYPT</span>
            </div>
            <div className=' w-full flex justify-between'>
              <span className='w-[50%] h-10'>FREELANCE  . . . . .  Available</span>
              <span className='w-[50%] h-10'>ADDRESS  . . . . .  6TH Of October,Giza,Egypt</span>
            </div>
          </div>
        </div>
      </div> {/** About Me */}
      <div className='h-[2000px]' id='f'>
        fffffffffffffffff  loremsdff dsfsdfds fsd s fsdf sf sdf sdf sdf sf sdfsd fsdfsdf sdfsfsd s fdssd fsdfsdfsdfsdf sdf df sd fs fsdfsfd      
      </div>
    </div>
  )
}

export default AllInfo