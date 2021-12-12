import React, {useEffect, useState} from 'react'
import "./Podcastnav.css"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars
  } from "@fortawesome/free-solid-svg-icons";
import PodcastSideNav from '../PodcastSideNav/PodcastSideNav';
const PodcastNav = () => {

    const [podcastNavTrans, setpodcastNavTrans] = useState("")

    
    const [sidebar, setsidebar] = useState(false)

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
            <a href="https://udokaokoye.com/podcast" className='logo'><div className="img"></div> <span>Dev Podcast</span></a>
            <div className="links">
                <Link to='/' className='nav_link'>Main Website</Link>
                <Link to="/podcast/episodes" className='nav_link'>Library</Link>
                <a href='#subscribe' className='nav_link'>Subscribe</a>
                <a href='#feature' className='nav_link'>Contact</a>
            </div>

            <div onClick={() => setsidebar(true)} className="menu">
              <FontAwesomeIcon icon={faBars} />
            </div>

            {sidebar ? (
              <PodcastSideNav sidebar={sidebar} setsidebar={setsidebar} />
            ) : ""}
        </div>
    )
}

export default PodcastNav
