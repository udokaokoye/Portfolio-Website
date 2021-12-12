import React from 'react'
import './PodcastLoader.css'
import loderGif from '../../Assets/Podcast/lodaer gif.gif'
const PodcastLoader = () => {
    return (
        <div className="loader_main_container">
            <div className="loder_cont">
            <img className='loader_gif' src={loderGif} alt="loading..." />
            </div>
        </div>
    )
}

export default PodcastLoader
