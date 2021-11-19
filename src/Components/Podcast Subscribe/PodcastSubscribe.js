import React from 'react'
import './PodcastSubscribe.css'
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
const PodcastSubscribe = () => {
    return (
        <div className="subscribe" id="subscribe">
                <h1>SUB<span>SCRIBE</span></h1>
                <h3>Do you want to be the first to get info on new episodes?</h3>
                <h4>drop your email addrerss below!!!</h4>
                <div className="input">
                    <input type="email" placeholder="Email Address" />
                    <span><FontAwesomeIcon icon={faArrowRight} /></span>
                </div>
            </div>
    )
}

export default PodcastSubscribe
