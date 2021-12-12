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
                <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0">FEA<span>TURE!</span></h1>
                <h3 data-aos="fade" data-aos-duration="700" data-aos-delay="200">Do you want to feature in my next podcast?</h3>
                <h4 data-aos="fade" data-aos-duration="700" data-aos-delay="200">Shoot me a message below!!!</h4>
                <div className="social_pltf">
                    <a data-aos="zoom-in" data-aos-duration="700" data-aos-delay="500" href="https://www.facebook.com/levi.okoye.dev" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} color="white" className="social_icns" /></a>
                    <a data-aos="zoom-in" data-aos-duration="700" data-aos-delay="700" href="https://www.instagram.com/levi.dev__/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} color="white" className="social_icns" /></a>
                    <a data-aos="zoom-in" data-aos-duration="700" data-aos-delay="900" href="https://twitter.com/levi_dev_" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} color="white" className="social_icns" /></a>
                    <a data-aos="zoom-in" data-aos-duration="700" data-aos-delay="1100" href="mailto: leviokoye@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} color="white" className="social_icns" /></a>

                </div>
                {/* <div className="input">
                    <input type="email" placeholder="Email Address" />
                    <span><FontAwesomeIcon icon={faArrowRight} /></span>
                </div> */}
            </div>
    )
}

export default PodcastFeature
