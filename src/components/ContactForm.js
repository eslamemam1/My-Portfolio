import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
function ContactForm() {
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
  };
    return (
    <div>
        <div className=' w-full h-[50px] border-b border-gray-500 text-4xl mt-2  '>
          <h2 className=' pb-3'><span className='text-[#ff9800]'>Contact</span> Form</h2>
        </div> {/** header */}
        <div className=' w-full h-[400px]' id='CONTACT'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
            <div className=' flex'>
              <input className='focus:outline-none hover:border-b hover:border-[#ff9800]
                w-[48%] mr-[2%] h-20 bg-[#34343f] border-b border-gray-500' type="text"
                placeholder='Enter Your Full Name' name='user_name' required />
              <input className='focus:outline-none hover:border-b hover:border-[#ff9800]
              w-[48%] ml-[2%] h-20 bg-[#34343f] border-b border-gray-500' type="email"
                placeholder='Enter Your Email Address' name='user_email' required />
            </div>
            <textarea className='focus:outline-none hover:border-b hover:border-[#ff9800]
           w-full h-36 mt-5 border-b bg-[#34343f] border-gray-500' rows="4" cols="50" name='message' required>
            </textarea>
            <button type="submit" className=' mt-5 w-40 h-16 border-dotted border 
            rounded border-gray-500 hover:bg-slate-700 font-semibold text-xl'>
            SEND MESSAGE
          </button>
          </form>
        </div>
      </div>
  )
}

export default ContactForm