import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
function ContactFormResponsive() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xugj23i', 'template_7mqwhts', form.current, 'VjDrntsNHnm0140BT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
  return (
    <div className='bg-[#31313a]'>
        <div className=' w-[90%] m-auto'>
          <div className=' w-full h-[40px] border-b border-gray-500 text-2xl mt-4' id='CONTACT2'>
            <h2><span className='text-[#ff9800]'>Contact</span> Form</h2>
          </div> {/** header */}
          <div className=' w-full pb-5 '>
            <form ref={form} onSubmit={sendEmail} className=' flex flex-col'>
              <input  name='user_name' required className='focus:outline-none hover:border-b hover:border-[#ff9900] mt-3 w-full h-20 bg-[#34343f] border-b border-gray-500' type="text" placeholder='Enter Your Full Name' />
              <input name='user_email' required className='focus:outline-none hover:border-b hover:border-[#ff9800] mt-3 w-full h-20 bg-[#34343f] border-b border-gray-500' type="email" placeholder='Enter Your Email Address' />
              <textarea name='message' required className='focus:outline-none hover:border-b hover:border-[#ff9800] w-full h-36 mt-5 border-b bg-[#34343f] border-gray-500' rows="4" cols="50"></textarea>
              <button type="submit" className=' mt-5 w-40 h-16 border-dotted border rounded border-gray-500 hover:bg-slate-700 font-semibold text-xl ' >SEND MESSAGE</button>
            </form>
          </div>
        </div> {/** contaner */}
    </div> 
  )
}

export default ContactFormResponsive