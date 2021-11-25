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
import { Link } from 'react-router-dom';
const RecentEpisode = () => {
    const [allEpisodes, setallEpisodes] = useState([])

    useEffect(() => {
        fetchPodcast()
    }, [])

    const fetchPodcast = () => {
        fetch("http://192.168.1.157/Portfolio%20Backend/podcast/get.php?mode=*", {
            method: "POST"
        }).then((res) => res.json()).then((data) => {
            setallEpisodes(data)
            // console.log(data)
        })
    }
    
    return (
        <div id='episodes' className="recent_episodes">
        <div className="recent_bar">
            <h3>Recent Episode</h3>
        </div>

        <div className="recent_content">
            {allEpisodes?.slice(0, 3).map((episode) => (
                <div className="recent">
                <h4>EPISODE <span><span className="odd_txt">0</span>01</span></h4>
                <h1>{episode.title}</h1>
                <span className="date">{episode.date}</span>
                <p>{episode.description}</p>
                <span className="more_btn">MORE <FontAwesomeIcon icon={faArrowRight} color="white" className="more_icn" /></span>
            </div>
            ))}
        </div>

        <div className='view_all'><Link to='/podcast/episodes'><button>View All</button> </Link></div>
    </div>

    )
}

export default RecentEpisode
