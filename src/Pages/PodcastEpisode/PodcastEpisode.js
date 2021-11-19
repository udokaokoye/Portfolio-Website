import React, {useState, useEffect, useRef} from 'react'
import './PodcastEpisode.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useParams} from 'react-router-dom'
import {
    faShare,
    faDownload,
    faPlay,
    faPause
  } from "@fortawesome/free-solid-svg-icons";
  import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import VerticalBreaker from '../../Components/Vertical Breaker/VerticalBreaker';
import RecentEpisode from '../../Components/Recent Episode/RecentEpisode';
import PodcastFeature from '../../Components/Podcast Feature/PodcastFeature';
import PodcastSubscribe from '../../Components/Podcast Subscribe/PodcastSubscribe';
const PodcastEpisode = () => {
    useEffect(() => {
        fetchEpisode();
    }, [])

    const [episode, setepisode] = useState();
    const [isPlaying, setisPlaying] = useState(false) 

    const {id} = useParams()
    const audioRef = useRef(null)

    const [audioInfo, setaudioInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
        volume: 0,
      });

      const togglePlayPause = () => {
        if (!isPlaying) {
            audioRef.current.play()
            setisPlaying(!isPlaying);
        } else {
            audioRef.current.pause()
            setisPlaying(!isPlaying);
        }
    }

    function getTime(time) {
        return (
          Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
      }

      const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setaudioInfo({ ...audioInfo, currentTime: e.target.value });
      };

      const update15SecHandler = (direction) => {
        if (direction == 'forward') {
            audioRef.current.currentTime = audioInfo.currentTime + 15;
            setaudioInfo({...audioInfo, currentTime: audioInfo.currentTime + 15})
        } else if (direction == 'back') {
            audioRef.current.currentTime = audioInfo.currentTime - 15;
            setaudioInfo({...audioInfo, currentTime: audioInfo.currentTime - 15})
        } 
      }

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
    
        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        const percentage = Math.round((roundedCurrent / roundedDuration) * 100);
        setaudioInfo({
          ...audioInfo,
          currentTime: current,
          duration: duration,
          animationPercentage: percentage,
          volume: e.target.volume,
        });
      };

    const fetchEpisode = () => {
        const formData = new FormData();
        formData.append('id', id)
        fetch("http://localhost/Portfolio%20Backend/podcast/get.php?mode=id", {
            method: "POST",
            body: formData
        }).then((res) => res.json()).then((data) => {
            setepisode(data)
        })
    }
    return (
        <div style={{backgroundColor: 'black', height: 'auto'}}>
        <div className="Container">
            <div className="top">
                <h1>Dev <span>Podcast</span> </h1>
            </div>

            <div className="podcast_info">
                <div className="left">
                    <div className="pod_date">{episode?.date}</div>

                    <h1>{episode?.title}</h1>
                </div>
                <div className="right">
                    <h1>0<span>26</span></h1>
                    <p>{episode?.description}</p>
                </div>
            </div>

            <div className="podcast_player">
                <div className="left">
                        
                </div>

                <div className="right">
                    <div className="podcast_br"><span>Dev Podcast - {getTime(audioInfo.duration)}</span></div>
                    <div className="podcast_title_download">
                        <h3>{episode?.title}</h3>
                        <div className="icns">
                            <FontAwesomeIcon icon={faDownload} color="white" />
                            <FontAwesomeIcon icon={faShare} color="white" />
                        </div>
                    </div>
                    <div className="podcast_audio_container">
                        <div className="left" onClick={() => togglePlayPause()}>
                            <FontAwesomeIcon icon={ isPlaying ? faPause : faPlay} color="white" />
                        </div>

                        <div className="right">
                            <div className="audio_time">
                                <span>{getTime(audioInfo.currentTime)}</span>
                                <span>-{getTime(audioInfo.duration)}</span>
                            </div>
                            <div className="audio_slider">
                                <input 
                                type="range"
                                value={audioInfo.currentTime}
                                min={0}
                                max={audioInfo.duration || 0}
                                onChange={dragHandler}
                                 />
                            </div>
                            <audio 
                            ref={audioRef}
                             src={episode?.audio}
                             onLoadedMetadata={timeUpdateHandler}
                             onTimeUpdate={timeUpdateHandler}
                             onEnded={() => setisPlaying(false)}
                             ></audio>
                        </div>
                    </div>
                </div>
            </div>

        </div>

                <br />
                <br />
                <br />
            <VerticalBreaker />

            <RecentEpisode />

            <VerticalBreaker />

            <PodcastFeature />

            <VerticalBreaker />
            
            <PodcastSubscribe />
        </div>
    )
}

export default PodcastEpisode
