import '../assets/scss/contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Form from './Form'
const Contact = () => {
  return (
    <div className='md:overflow-hidden my-10 w-full h-full md:m-10 relative inline-block md:flex items-center justify-around'>
      <div className='px-5 mb-10 md:mb-0 md:h-3/4 text-justify md:w-1/3 '>
        <h3 className='text-2xl text-center'>Link Up</h3>
        <hr className='bg-portfolio-gray my-6 h-0.5' />
        <p className='text-black text-justify tracking-widest'>
        Email
        </p>
        <p className='text-black text-justify tracking-widest'>
        <FontAwesomeIcon icon={faLinkedin}/>Linked In
        </p>
        <p className='text-black text-justify tracking-widest'>
        <FontAwesomeIcon icon={faGithub}/>Github
        </p>
        <p className='text-black text-justify tracking-widest'>
        <FontAwesomeIcon icon={faInstagram}/>Instagram
        </p>
        <p className='text-black text-justify tracking-widest'>
        <FontAwesomeIcon icon={faTwitter}/>Twitter
        </p>
      </div>
      <div className='h-fit md:h-2/3 md:w-2/5 m-auto mx-4 md:mx-10'>
        <Form />
      </div>
    </div>
  )
}

export default Contact