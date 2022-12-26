import React from 'react'
import FirstPage from './ResponsiveComponents/FirstPage'
import AboutMeResponsive from './ResponsiveComponents/AboutMeResponsive'
import ResumePageResponsive from './ResponsiveComponents/ResumePageResponsive'
import MySkillsPageResponsive from './ResponsiveComponents/MySkillsPageResponsive'
import ProjectsResponsive from './ResponsiveComponents/ProjectsResponsive';
import ContactFormResponsive from './ResponsiveComponents/ContactFormResponsive'
function ResponsiveWindow() {
  return (
    <div className=' flex flex-col bg-[#31313a]'>
      <FirstPage/>
      <AboutMeResponsive/>
      <ResumePageResponsive/>
      <MySkillsPageResponsive/>
      <ProjectsResponsive/>
      <ContactFormResponsive/>
    </div>
  )
}

export default ResponsiveWindow