import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import MySkills from './components/MySkills';
import ContactForm from './components/ContactForm';
function AllInfo() {
 
  return (
    <div className=' w-[95%] m-auto' >
      <AboutMe/>
      <Resume/>
      <MySkills/>
      <Projects/>
      <ContactForm/>
    </div>
  )
}

export default AllInfo