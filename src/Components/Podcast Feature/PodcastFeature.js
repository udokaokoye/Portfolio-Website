import React from 'react'
import './PodcastFeature.css'
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
const PodcastFeature = () => {
    return (
        <div className="feature" id='feature'>
                <h1>FEA<span>TURE!</span></h1>
                <h3>Do you want to feature in my next podcast?</h3>
                <h4>Shoot me a message below!!!</h4>
                <div className="social_pltf">
                    <a href="https://www.facebook.com/UdokaDev" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} color="white" className="social_icns" /></a>
                    <a href="https://www.instagram.com/udoka.okoye/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} color="white" className="social_icns" /></a>
                    <a href="https://twitter.com/udokaokoye2" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} color="white" className="social_icns" /></a>
                    <a href="mailto: leviokoye@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} color="white" className="social_icns" /></a>

                </div>
                {/* <div className="input">
                    <input type="email" placeholder="Email Address" />
                    <span><FontAwesomeIcon icon={faArrowRight} /></span>
                </div> */}
            </div>
    )
}

export default PodcastFeature
