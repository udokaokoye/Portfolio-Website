import React, {useEffect, useState} from 'react'
import "./Podcastnav.css"
import {Link} from 'react-router-dom'

const PodcastNav = () => {

    const [podcastNavTrans, setpodcastNavTrans] = useState("")

    function vhToPixels (vh) {
        return Math.round(window.innerHeight / (100 / vh));
      }

    useEffect(() => {

        window.onscroll = () => {
            if (window.scrollY > 20) {
              setpodcastNavTrans("scroll_min");
            }

            if (window.scrollY > vhToPixels(100) - 3) {
                setpodcastNavTrans("scroll_max");
              }
      
            if (window.scrollY < 1) {
              setpodcastNavTrans("");
            }
        }
    }, [])
    return (
        <div className={`nav_container ${podcastNavTrans}`}>
            <a href="http://localhost:3000/podcast" className='logo'><div className="img"></div> <span>Dev Podcast</span></a>
            <div className="links">
                <Link to='/podcast/episodes' className='nav_link'>Library</Link>
                <a className='nav_link'>Favorites</a>
                <a href='#subscribe' className='nav_link'>Subscribe</a>
                <a href='#feature' className='nav_link'>Contact</a>
            </div>
        </div>
    )
}

export default PodcastNav
