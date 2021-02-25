import React from 'react'
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
const Home = () => {
    return (
        <div>
            <div className="main-home">
                <div className="show">
                    <div className="left">
                        <div className="social-links">
                            <a href=""><FontAwesomeIcon className="fb" color="#fff" icon={faFacebookF} /></a>
                            <a href=""><FontAwesomeIcon className="tw" color="#fff" icon={faTwitter} /></a>
                            <a href=""><FontAwesomeIcon className="ig" color="#fff" icon={faInstagram} /></a>
                            <a href=""><FontAwesomeIcon className="li" color="#fff" icon={faLinkedinIn} /></a>
                        </div>
                        <div className="my-det">
                            <h3>I am Okoye Udoka</h3>
                            <p>I'm Okoye Udoka A Freelance Web Designer & Developer based in Lagos, Nigeria.
                                Highly experienced in designing & developing websites.</p>
                        </div>
                        <div className="show-btns">
                           <button>Veiw My Portfolio <span><FontAwesomeIcon className="arrwrgt" color="#fff" icon={faArrowRight} /></span></button> 
                        </div>
                    </div>
                    <div className="right"></div>
                </div>
            </div>

        </div>
    )
}

export default Home
