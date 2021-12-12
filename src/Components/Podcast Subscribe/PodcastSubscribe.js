import React, {useState} from 'react'
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

    const [email, setemail] = useState('')
    const [message, setmessage] = useState(['', ''])

    function validateEmail(emailadd) {
        var re = /^[^\s@]+@[^\s@]+$/;
        
        if (re.test(emailadd)) {
            return true;
        }
        
        else {
            return false;
        }
      }

    const subscribeHandler = () => {
        const formData = new FormData;
        formData.append('email', email);

        if (!validateEmail(email)) {
            // ! CHANGE TO SMALL MESSAGE ON SCREEN
                setmessage(['Invaild Email Address, Try Again.', 'red'])
            setTimeout(() => {
                setmessage(['', ''])
            }, 5000);
            return;
        }

        fetch("https://udokaokoye.com/Portfolio%20Backend/podcast/subscribe.php", {
            method: "POST",
            body: formData
        }).then((res) => res.json()).then((data) => {
            if (data == "SUCCESS") {
                setmessage(['Email Added To Subscription!', 'green'])
                setemail('')
                setTimeout(() => {
                    setmessage(['', ''])
                }, 5000);
            } else if(data == 'EXISTS') {
                setmessage(['Hmm...Email Already Exists In Our Subscriptions', '#FFCC00']);
            } else {
                setmessage(['Hmm... Email could not be added, report has been sent to developer', 'red']);
            }
        })
    }

    return (
        <div className="subscribe" id="subscribe">
                <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0"><small>SUB</small><span>SCRIBE</span></h1>
                <h3 data-aos="fade" data-aos-duration="700" data-aos-delay="200">Do you want to be the first to get info on new episodes?</h3>
                <h4 data-aos="fade" data-aos-duration="700" data-aos-delay="200">drop your email addrerss below!!!</h4>
                <br />
                <small className='subscribe_message' style={{color: message[1]}}>{message[0]}</small>
                <div className="input" data-aos="fade-right" data-aos-duration="700" data-aos-delay="200" data-aos-offset="-209">
                    <input value={email} onChange={(txt) => setemail(txt.target.value)} type="email" placeholder="Email Address" />
                    <span onClick={() => subscribeHandler()}><FontAwesomeIcon icon={faArrowRight} /></span>
                </div>
            </div>
    )
}

export default PodcastSubscribe
