import React, {useEffect, useState} from 'react'
import './ComingPodcast.css'
import audio from '../../Assets/Podcast/My pd Audio.mp3';
const ComingPodcast = () => {
    const [audioFile, setaudioFile] = useState(new Audio(audio))
    const [playing, setplaying] = useState(false)

        


    const playAudio = () => {
        if (playing) {
            audioFile.pause()
        } else {
            audioFile.play()
        }
        setplaying(!playing)
      }
    return (
        <div className="Cont">
            <div className="ovrly">
                
            <h1>PODCAST COMING SOON</h1>

            <div onClick={() => playAudio()} className="sqr">

            </div>

            <div  className="imageco">

            </div>
            {/* <audio src={require('../../Assets/Podcast/My pd Audio.mp3').default} controls autoPlay></audio> */}
            </div>
        </div>
    )
}

export default ComingPodcast
