import React, {useRef, useState, useEffect} from 'react'
import './Podcast.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeadphones,
    faHeart,
    faSearch,
    faShare,
    faDownload,
    faArrowRight,
    faArrowLeft,
    faPlay,
    faPause,
    faEnvelope
  } from "@fortawesome/free-solid-svg-icons";
  import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import PodcastPlayer from '../../Components/PodcastPlayer/PodcastPlayer';
import RecentEpisode from '../../Components/Recent Episode/RecentEpisode';
import PodcastFeature from '../../Components/Podcast Feature/PodcastFeature';
import PodcastSubscribe from '../../Components/Podcast Subscribe/PodcastSubscribe';
import VerticalBreaker from '../../Components/Vertical Breaker/VerticalBreaker';
import { Link } from 'react-router-dom';
export const Podcast = () => {
    useEffect(() => {
        fetchPodcast()
    }, [])

    
    const demo_array = [
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        // "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        // "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    ]
    const [isPlaying, setisPlaying] = useState(false) 
    const [currentSong, setcurrentSong] = useState(
        demo_array[0]
    )
    const [allEpisodes, setallEpisodes] = useState([])

    const [audioInfo, setaudioInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
        volume: 0,
      });

    const audioRef = useRef(null)

    const fetchPodcast = () => {
        fetch("http://192.168.1.157/Portfolio%20Backend/podcast/get.php?mode=*", {
            method: "POST"
        }).then((res) => res.json()).then((data) => {
            setallEpisodes(data)
        })
    }

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
    return (
        <div className="container">
            <div className="hero_section">
            <div className='float_btn'></div>
            <div className="left">
                <h1>The Reactive Developer</h1>
                <div className="hosted"><h3>Hosted by: Udoka Okoye</h3> <div className="hosted_img"></div></div>
                <p>A weekly conversation where we break down the challenges as an entrepreneur in the developer/coding space, the lessons learnt along the way & how technologies such as Javascript and React were able to and continue to transform my everyday life.</p>
                <div className="buttons">
                    <button className="listen_now_button"><FontAwesomeIcon className="li" color="#000" icon={faHeadphones} /> Listen Now</button>
                    <button className="fav_button"><FontAwesomeIcon className="li" color="#fff" icon={faHeart} /> Add to favorites</button>
                </div>
                <div className="listen_platforms">

                </div>
            </div>

            <div className="right">
                <div className="gif"></div>
            </div>
            </div>
        

        <div className="latestEpisode">
            <div className="tp_br">EPISODE <span><span className="odd_txt">0</span>01</span>00.00.00</div>
            
                <div className="main_container">
                    <div className="left" style={{background: `url(${allEpisodes[allEpisodes.length - 1]?.cover})`}} ></div>
                    <div className="right">
                        <h1>{allEpisodes[allEpisodes.length - 1]?.title}</h1>
                        <p>{allEpisodes[allEpisodes.length - 1]?.description}</p>

                        <Link style={{textDecoration: 'none'}} to={`/podcast/episode/${allEpisodes[allEpisodes.length - 1]?.id}`}><span className="more_btn">MORE <FontAwesomeIcon icon={faArrowRight} color="white" className="more_icn" /></span></Link>
                    </div>
                </div>
            
            <div className="audioPlayer_latest_container">
                <div className="audio_latest_controls">
                    <span onClick={() => update15SecHandler('back')}><FontAwesomeIcon icon={faArrowLeft} className='ctrl_icn ctrl_icn_lft' /> 15</span>
                    <div onClick={() => togglePlayPause()} className='ply_btn'><FontAwesomeIcon icon={ isPlaying ? faPause : faPlay} /></div>
                    <span onClick={() => update15SecHandler('forward')}> 15 <FontAwesomeIcon icon={faArrowRight} className='ctrl_icn ctrl_icn_rgt' /></span>
                </div>

                <div className="audio_latest_info">
                    <span>{getTime(audioInfo.currentTime)} 
                        <input 
                        type="range" 
                        value={audioInfo.currentTime}
                        min={0}
                        max={audioInfo.duration || 0}
                        onChange={dragHandler}
                        className='song_range'/> 

                        {getTime(audioInfo.duration)}</span>
                    <audio 
                    ref={audioRef} 
                    src={allEpisodes[allEpisodes.length - 1]?.audio}
                    onLoadedMetadata={timeUpdateHandler}
                    onTimeUpdate={timeUpdateHandler}
                    onEnded={() => setisPlaying(false)}
                    >
                    </audio>
                </div>
            </div>
        </div>

            <VerticalBreaker />

            <RecentEpisode />

            <VerticalBreaker />

            <PodcastFeature />

            <VerticalBreaker />

            <PodcastSubscribe />
        


        </div>
    )
}
