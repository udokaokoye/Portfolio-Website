import React from 'react'
import './PodcastFooter.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUp,
    faCopyright,
    faEnvelope,
  } from "@fortawesome/free-solid-svg-icons";
  import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
const PodcastFooter = () => {
    return (
        <div className="footer_container">
            <div className="social_pltf_ftr">
                    <a href="https://www.facebook.com/UdokaDev" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} color="white" className="social_icns" /></a>
                    <a href="https://www.instagram.com/udoka.okoye/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} color="white" className="social_icns" /></a>
                    <a href="https://twitter.com/udokaokoye2" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} color="white" className="social_icns" /></a>
                    <a href="mailto: leviokoye@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} color="white" className="social_icns" /></a>

            </div>
            <hr />
            <p>copyright <FontAwesomeIcon icon={faCopyright} color="white" /> 2021 . Udoka Okoye || Dev Podcast . All Rights Reserved</p>
            <a href='#top' className='to_top_pdct_btn'><FontAwesomeIcon icon={faArrowUp} /></a>
            <br />
            <br />
            <br />
        </div>
    )
}

export default PodcastFooter
