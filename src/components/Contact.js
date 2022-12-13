import '../assets/scss/contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Form from './Form'
const Contact = () => {
  return (
    <div className='md:overflow-hidden my-10 w-full h-full md:m-10 relative inline-block md:flex items-center justify-around'>
      <div className='px-5 mb-10 md:mb-0 md:h-3/4 text-center md:w-1/3 '>
        <h3 className='text-2xl text-center'>Link Up</h3>
        <hr className='my-6 h-0.5' />
        <ul className='text-justify'>
          <li>
          <FontAwesomeIcon icon={faEnvelope} size='2x' className='f-icon email'/>
          <a className='tracking-widest' href='mailto:jeremymunroe0@gmail.com' target='_blank'
          rel="noopener noreferrer">
          Email
          </a>
          </li>
          <li>
          <FontAwesomeIcon icon={faLinkedin} size='2x' className='f-icon linkedin'/>
          <a className='tracking-widest' href='https://www.linkedin.com/in/jeremy-munroe-b5ab711a4/' target='_blank'
          rel="noopener noreferrer">
          Linked In
          </a>
          </li>
          <li>
          <FontAwesomeIcon icon={faGithub} size='2x' className='f-icon github'/>
          <a className='tracking-widest' href='https://github.com/j3rryl' target='_blank'
          rel="noopener noreferrer">
          Github
          </a>
          </li>
          <li>
          <FontAwesomeIcon icon={faInstagram} size='2x' className='f-icon instagram'/>
          <a className='tracking-widest' href='https://instagram.com/_warsie' target='_blank'
          rel="noopener noreferrer">
          Instagram
          </a>
          </li>
          <li>
          <FontAwesomeIcon icon={faTwitter} size='2x' className='f-icon twitter'/>
          <a className='tracking-widest' href='https://twitter.com/jeremymunroe0' target='_blank'
          rel="noopener noreferrer">
          Twitter
          </a>
          </li>
        </ul>
      
      </div>
      <div className='h-fit md:h-2/3 md:w-2/5 m-auto mx-4 md:mx-10'>
        <Form />
      </div>
    </div>
  )
}

export default Contact