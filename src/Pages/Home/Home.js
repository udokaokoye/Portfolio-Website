import React from 'react'
import './Home.css';
import Particles from 'react-particles-js';
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
            {/* <Particles id="particles-js" 
            params={{
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                            value_area: 1000
                        }
                    },
                    color: {
                        value: '#fff'
                    },
                    opacity: {
                        value: 0.5,
                        anim: {
                            enable: true
                        }
                    },
                    size: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 10
                        }
                    },
                    line_linked: {
                        enable: true
                    },
                    move: {
                        speed: 0.9
                    },
                    
                 },
                
                 interactivity: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                 }
            }} 
             /> */}
             
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
                            <p> Hello i'm Okoye Udoka A Freelance Web Designer & Developer based in Lagos, Nigeria.
                                Highly experienced in designing & developing websites.</p>
                        </div>
                        <div className="show-btns">
                           <button>Veiw My Portfolio <span><FontAwesomeIcon className="arrwrgt" color="#fff" icon={faArrowRight} /></span></button> 
                        </div>
                    </div>
                    <div className="right"></div>
                </div>
            </div>

            <Particles id="particles-js" 
            params={{
                "particles": {
                    "number": {
                        "value": 150,
                        "density": {
                            "enable": true,
                            "value_area": 1803.4120608655228
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 2,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 4
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.4008530152163807,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 1.5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 100,
                        "color": "#ffffff",
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "window",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "bubble"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 100,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            }}
             />

        </div>
    )
}

export default Home
