import '../assets/scss/contact.scss'
import Form from './Form'
const Contact = () => {
  return (
    <div className='md:overflow-hidden my-10 w-full h-full md:m-10 relative inline-block md:flex items-center justify-around'>
      <div className='px-5 mb-10 md:mb-0 md:h-3/4 text-center md:w-1/3 '>
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
      <div className='h-fit md:h-2/3 md:w-2/5 m-auto mx-4 md:mx-10'>
        <Form />
      </div>
    </div>
  )
}

export default Contact