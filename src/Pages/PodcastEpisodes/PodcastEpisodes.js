import React, {useEffect, useState} from 'react'
import './PodcastEpisodes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowRight,
    faArrowLeft,
    faPlay,
    faPause
  } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
const PodcastEpisodes = () => {
    const [allEpisodes, setallEpisodes] = useState([])
    const [reavealNumber, setreavealNumber] = useState(3)
    useEffect(() => {
        fetchPodcast()
        topFunction();
    }, [])
    

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    const fetchPodcast = () => {
        fetch("https://udokaokoye.com/Portfolio%20Backend/podcast/get.php?mode=*", {
            method: "POST"
        }).then((res) => res.json()).then((data) => {
            setallEpisodes(data)
        })
    }

    const updateReavealNumber = () => {
        // alert("HGello")
        setreavealNumber(reavealNumber + 3)

        // alert(reavealNumber + " " + allEpisodes.length)
    }
    return (
        <React.Fragment>
            <div className="all_showcase">
                <h1>Dev <span>Podcast</span></h1>
                <span className='show_second_txt'>All Episodes</span>
            </div>
        <div className='episodes_container'>
            {allEpisodes?.slice(0, reavealNumber).map((episode) => (
                <div key={episode.id} className="show_episode">
                <div className="br_title">
                    <h4>EPISODE <span>{episode?.episode.charAt(0)}<span>{episode?.episode.charAt(1)}{episode?.episode.charAt(2)}</span></span> 10.05.21</h4>
                </div>

                <div className="pdct_det">
                    <div className="left" style={{background: `url(${episode.cover})`}} ></div>
                    <div className="right">
                        <h1>{episode.title}</h1>
                        <p>{episode.description}</p>
                        <span className='more_btn'><Link style={{textDecoration: 'none'}} to={`/podcast/episode/${episode.id}`}>MORE <FontAwesomeIcon icon={faArrowRight} color="white" className='more_icn' /></Link></span>
                    </div>
                </div>
            </div>
            ))}

            <div className="view_more_cnt">
            <button className="view_more_btn" disabled={reavealNumber == allEpisodes.length} onClick={() => updateReavealNumber()}>View More</button>
            </div>

        </div>
        </React.Fragment>
    )
}

export default PodcastEpisodes
