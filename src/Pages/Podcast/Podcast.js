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
  import AOS from 'aos';
import 'aos/dist/aos.css'
import PodcastPlayer from '../../Components/PodcastPlayer/PodcastPlayer';
import RecentEpisode from '../../Components/Recent Episode/RecentEpisode';
import PodcastFeature from '../../Components/Podcast Feature/PodcastFeature';
import PodcastSubscribe from '../../Components/Podcast Subscribe/PodcastSubscribe';
import VerticalBreaker from '../../Components/Vertical Breaker/VerticalBreaker';
import { Link } from 'react-router-dom';
import PodcastLoader from '../../Components/PodcastLoader/PodcastLoader';
export const Podcast = () => {
    const [screen_loader, setscreen_loader] = useState(true)
    useEffect(() => {
        // setscreen_loader(true)
    //    var t = setTimeout(() => {
    //         setscreen_loader(false)
    //         clearTimeout(t)
    //     }, 2800);
        
        fetchPodcast()
        
    }, [])

    // const condi = 1 +1;

    // useEffect(() => {
    //     setTimeout(() => {
    //         setscreen_loader(false)
    //     }, 2800);
    // }, [condi])

    useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            
          
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
          
          });
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
        fetch("https://udokaokoye.com/Portfolio%20Backend/podcast/get.php?mode=*", {
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

    //   if (screen_loader) {
    //       return (
    //           <PodcastLoader />
    //       )
    //   } 
    return (
        <div className="container">
            <div className="hero_section">
            <div className='float_btn' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1700" data-aos-offset="-100"></div>
            <div className="left">
                <h1> <span data-aos="fade" data-aos-duration="1000">The</span> <span data-aos="fade" data-aos-duration="1000" data-aos-delay="1000">Reactive</span> <span data-aos="fade" data-aos-duration="1000" data-aos-delay="2000">Developer</span></h1>
                <div className="hosted" data-aos="fade" data-aos-duration="1500" data-aos-delay="1700"><h3>Hosted by: Udoka Okoye</h3> <div className="hosted_img"></div></div>
                <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1700">A weekly conversation where we break down the challenges as an entrepreneur in the developer/coding space, the lessons learnt along the way & how technologies such as Javascript and React were able to and continue to transform my everyday life.</p>
                <div className="buttons">
                   <Link to="/podcast/episodes" className="listen_now_button" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1700" data-aos-offset="-100"><FontAwesomeIcon className="li" color="#000" icon={faHeadphones} /> <span>Listen Now</span></Link>
                   <a href="#subscribe" className="fav_button" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1700" data-aos-offset="-100"><FontAwesomeIcon className="li" color="#fff" icon={faHeart} /> <span>Subscribe</span></a>
                </div>
                <div className="listen_platforms">

                </div>
            </div>

            <div className="right">
                <div className="gif"></div>
            </div>
            </div>
        

        <div className="latestEpisode">
            <div className="tp_br">EPISODE <span><span className="odd_txt">{allEpisodes[0]?.episode.charAt(0)}</span>{allEpisodes[0]?.episode.charAt(1)}{allEpisodes[0]?.episode.charAt(2)}</span>{getTime(audioInfo.duration)}</div>
            
                <div className="main_container">
                    <div className="left" style={{background: `url(${allEpisodes[0]?.cover})`}} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0" data-aos-offset="-202" ></div>
                    <div className="right">
                        <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0" data-aos-offset="-202">{allEpisodes[0]?.title}</h1>
                        <p data-aos="fade" data-aos-duration="1000" data-aos-delay="0">{allEpisodes[0]?.description}</p>

                        <Link style={{textDecoration: 'none'}} to={`/podcast/episode/${allEpisodes[0]?.id}`}  data-aos="fade-left" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-sine"><span className="more_btn">MORE <FontAwesomeIcon icon={faArrowRight} color="white" className="more_icn" /></span></Link>
                    </div>
                </div>
            
            <div className="audioPlayer_latest_container">
                <div className="audio_latest_controls">
                    <span onClick={() => update15SecHandler('back')}><FontAwesomeIcon icon={faArrowLeft} className='ctrl_icn ctrl_icn_lft' /> 15</span>
                    <div onClick={() => togglePlayPause()} className='ply_btn'><FontAwesomeIcon icon={ isPlaying ? faPause : faPlay} /></div>
                    <span onClick={() => update15SecHandler('forward')}> 15 <FontAwesomeIcon icon={faArrowRight} className='ctrl_icn ctrl_icn_rgt' /></span>
                </div>

                <div className="audio_latest_info">
                    <span>{getTime(audioInfo.currentTime)} </span>
                        <input 
                        type="range" 
                        value={audioInfo.currentTime}
                        min={0}
                        max={audioInfo.duration || 0}
                        onChange={dragHandler}
                        className='song_range'/> 

                     <span>   {getTime(audioInfo.duration)}</span>
                    <audio 
                    ref={audioRef} 
                    src={allEpisodes[0]?.audio}
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
