import React from "react"
import '../assets/css/button.css'
import '../assets/css/form.css'

const Footer = () => {
  return (
    <div className='md:overflow-hidden my-10 w-full h-full md:m-10 relative inline-block md:flex items-center justify-around'>
      

      <div className='px-5 mb-10 md:mb-0 md:h-3/4 text-center md:h-2/3 md:w-1/3 '>
        <h3 className='text-2xl text-center'>Link Up</h3>
        <hr className='bg-portfolio-gray my-6 h-0.5' />
        <p className='text-black text-center tracking-widest'>
        Email
        </p>
        <p className='text-black text-center tracking-widest'>
        Linked In
        </p>
        <p className='text-black text-center tracking-widest'>
        Github
        </p>
      </div>
      <div className='h-3/4 md:h-2/3 md:w-2/5 m-auto mx-4 md:mx-10'>
      <form className='h-full text-center border-2 border-portfolio-gray rounded-2xl'>
            <h3 className=" text-2xl text-center my-3">Contact Me</h3>
            <hr className='w-3/4 m-auto bg-portfolio-gray my-6 h-0.5' />
            <input type='text' className="input-field" placeholder='Your Name'/><br />
            <input type='email' className="input-field" placeholder='Your Email'/><br />
            <input type='text' className="input-field" placeholder='Subject'/><br />
            <textarea type='text' className="textarea-field" placeholder='Message'>

            </textarea><br></br>
            <button className="explore px-10 py-5 text-base my-5 mx-auto text-center h-fit w-fit">Send Message</button>
        </form>
      </div>
      
      </div>
  )
}

export default Footer