import React, {useState, useEffect} from 'react'
import './RecentEpisode.css'
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
  import AOS from 'aos';
  import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
const RecentEpisode = () => {
    const [allEpisodes, setallEpisodes] = useState([])

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
             // defines which position of the element regarding to window should trigger the animation
          
          });
    }, [])

    useEffect(() => {
        fetchPodcast()
    }, [])

    const fetchPodcast = () => {
        fetch("https://udokaokoye.com/Portfolio%20Backend/podcast/get.php?mode=*", {
            method: "POST"
        }).then((res) => res.json()).then((data) => {
            setallEpisodes(data)
            // console.log(data)
        })
    }
    
    return (
        <div id='episodes' className="recent_episodes">
        <div className="recent_bar">
            <h3 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0" >Recent Episode</h3>
        </div>

        <div className="recent_content" >
            {allEpisodes?.slice(0, 3).map((episode) => (
                <div key={episode.id} className="recent" data-aos="fade" data-aos-duration="1000" data-aos-delay="0" >
                    <span></span>
                <h4>EPISODE <span><span className="odd_txt">{episode.episode.charAt(0)}</span>{episode.episode.charAt(1)}{episode.episode.charAt(2)}</span></h4>
                <h1>{episode.title}</h1>
                <span className="date">{episode.date}</span>
                <p>{episode.description}</p>
                <Link style={{textDecoration: 'none'}} to={`/podcast/episode/${episode.id}`}><span className="more_btn">MORE <FontAwesomeIcon icon={faArrowRight} color="white" className="more_icn" /></span></Link>
            </div>
            ))}
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" data-aos-offset="-202" className='view_all'><Link to='/podcast/episodes'><button>View All</button> </Link></div>
    </div>

    )
}

export default RecentEpisode
