import '../assets/css/button.css'
import '../assets/css/form.css'

const Form = () => {
  return (
  <form className='h-fit text-center border-2 border-portfolio-gray rounded-2xl'>
        <h3 className=" text-2xl text-center my-3">Contact Me</h3>
        <hr className='w-3/4 m-auto my-6 h-0.5' />
        <input type='text' className="input-field" placeholder='Your Name'/><br />
        <input type='email' className="input-field" placeholder='Your Email'/><br />
        <input type='text' className="input-field" placeholder='Subject'/><br />
        <textarea type='text' className="input-field !h-24" placeholder='Message'>

        </textarea><br></br>
        <button className="explore md:!border-none px-10 py-5 text-base my-5 mx-auto text-center h-fit w-fit">Send Message</button>
    </form>
  )
}

export default Form