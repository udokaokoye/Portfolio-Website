import React from 'react'
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
    
    return (
        <div id='episodes' className="recent_episodes">
        <div className="recent_bar">
            <h3>Recent Episode</h3>
        </div>

        <div className="recent_content">
            <div className="recent">
                <h4>EPISODE <span><span className="odd_txt">0</span>01</span></h4>
                <h1>Talking to Some of Our Favorite Content Creators</h1>
                <span className="date">September 22, 2021</span>
                <p>In this episode, we hear from 14 of our favorite content creators: their advice, thoughts on content creation, and how content has impacted their careers.</p>
                <span className="more_btn">MORE <FontAwesomeIcon icon={faArrowRight} color="white" className="more_icn" /></span>
            </div>
            <div className="recent">
                <h4>EPISODE <span><span className="odd_txt">0</span>02</span></h4>
                <h1>The Reactive Developer: How I Started Programming</h1>
                <span className="date">October 03, 2021</span>
                <p>In this episode, we hear from 14 of our favorite content creators: their advice, thoughts on content creation, and how content has impacted their careers.</p>
                <span className="more_btn">MORE <FontAwesomeIcon icon={faArrowRight} color="white" className="more_icn" /></span>
            </div>
            <div className="recent">
                <h4>EPISODE <span><span className="odd_txt">0</span>03</span></h4>
                <h1>Talking to Some of Our Favorite Content Creators</h1>
                <span className="date">September 22, 2021</span>
                <p>In this episode, we hear from 14 of our favorite content creators: their advice, thoughts on content creation, and how content has impacted their careers.</p>
                <span className="more_btn">MORE <FontAwesomeIcon icon={faArrowRight} color="white" className="more_icn" /></span>
            </div>
        </div>

        <div className='view_all'><Link to='/podcast/episodes'><button>View All</button> </Link></div>
    </div>

    )
}

export default RecentEpisode
