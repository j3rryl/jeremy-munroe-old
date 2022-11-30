import '../../assets/css/video.css'
import VideoPlayer from '../Video/VideoPlayer';
import sample from '../../assets/images/10.mp4'
import CanvasScene from '../CanvasScene';

const VideoSlider = () => {
  return (
    <CanvasScene className='video-slider' orthographic>
        <VideoPlayer className='video-player' videoSource={sample}/>
    </CanvasScene>
  )
}

export default VideoSlider