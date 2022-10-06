import { useNavigate } from 'react-router-dom'
import '../../css/splash.css'
const Splash = () => {
  let navigate=useNavigate()
  
  return (
    <div className='splash-screen'>
      <div className='details'>
      <h1 className='title'>Jeremy Munroe</h1>
      <h1 className='title'>UI/UX Developer</h1>
      <button className='explore' onClick={()=>{navigate('./home')}}>
        Explore
      </button>
      </div>
      
    </div>
  )
}
export default Splash