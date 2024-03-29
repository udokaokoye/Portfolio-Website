import React, {useEffect, useState} from 'react';
import './Nav.css'
import logo from '../../Assets/icon.PNG';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

const Nav = () => {

  const [sideNav, setsideNav] = useState(false)

    const [navTrans, setnavTrans] = useState("");

    function vhToPixels (vh) {
        return Math.round(window.innerHeight / (100 / vh));
      }

    useEffect(() => {

        window.onscroll = () => {
            if (window.scrollY > 20) {
              setnavTrans("scroll_def");
            }

            if (window.scrollY > vhToPixels(100) - 3) {
                setnavTrans("scroll");
              }
      
            if (window.scrollY < 1) {
              setnavTrans("");
            }
        }
    }, [])
  
    function enableScrolling() {
      window.onscroll = () => {
        if (window.scrollY > 20) {
          setnavTrans("scroll_def");
        }

        if (window.scrollY > vhToPixels(100) - 3) {
            setnavTrans("scroll");
          }
  
        if (window.scrollY < 1) {
          setnavTrans("");
        }
    }
    }

    if (sideNav === false) {
      enableScrolling();
    }
    
    const open = {
      transition: "all 0.5s ease-in-out",
      width: "100%",
      transform: "scale(1)",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    };
  
    const close = {
      transition: "all 0.5s ease-in-out",
      width: "100%",
      transform: "scale(0.001)",
      opacity: 0
    };
    return (
      <React.Fragment>
        
        <div className={`main-nav ${navTrans}`}>
            <nav 
                data-aos="fade-down" 
                data-aos-duration="1500" 
                data-aos-delay="">
                  <div className="logo">
                    
                
                <img onClick={() => window.location.href = 'https://udokaokoye.com'} src={logo} alt="code"/>
                <h1 onClick={() => window.location.href = 'https://udokaokoye.com'}>Udoka Okoye</h1>
                
                </div>

                <div className="links">
                    <div className="inner">
                        <a 
                            data-aos="fade-in" 
                            data-aos-duration="500" 
                            data-aos-delay="800"

                        href={"#home"}><span>Home</span></a>
                        <a 
                        data-aos="fade-in" 
                        data-aos-duration="600" 
                        data-aos-delay="1300"
                        href="#about"><span>About</span></a>
                        <a 
                        data-aos="fade-in" 
                        data-aos-duration="600" 
                        data-aos-delay="1700"
                        href="#experience"><span>Experience</span></a>
                        
                        <a 
                        data-aos="fade-in" 
                        data-aos-duration="600" 
                        data-aos-delay="1900"
                        href="#portfolio"><span>Portfolio</span></a>

                        <Link 
                        data-aos="fade-in" 
                        data-aos-duration="600" 
                        data-aos-delay="2100"
                        to="/podcast"><span>Podcast</span></Link>
                        <a 
                        data-aos="fade-in" 
                        data-aos-duration="600" 
                        data-aos-delay="2300"
                        href="#contact"><span>Contact</span></a>
                    </div>
                </div>

                <div onClick={() => {
                  setsideNav(true);
                  }}
                  data-aos="fade-right" 
                  data-aos-duration="1250" 
                  data-aos-delay="1500"
                   className="menu_bar">
                <svg role="img" aria-label="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="app__menu-icon" width="30" height="60"><path d="M4 6H20M4 12H12M4 18H20" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                </div>
            </nav>

           
        </div>
        
        {sideNav ? (
          <div className="side-nav" style={sideNav ? open : close}>
          <div onClick={() => {
                    setsideNav(false);
                    enableScrolling()
                    }} className='close-bar'><span>&times;</span></div>
                <div className="side-nav-inner">
                  

                    <ul>
                      <a data-aos="fade-down" data-aos-duration="800" data-aos-delay="300" onClick={() => setsideNav(false)} href="#home"><li>Home</li></a>
                      <a data-aos="fade-down" data-aos-duration="800" data-aos-delay="500" onClick={() => setsideNav(false)} href="#about"><li>About</li></a>
                      <a data-aos="fade-down" data-aos-duration="800" data-aos-delay="700" onClick={() => setsideNav(false)} href="#experience"><li>Experience</li></a>
                      <a data-aos="fade-down" data-aos-duration="800" data-aos-delay="800" onClick={() => setsideNav(false)} href="#portfolio"><li>Portfolio</li></a>
                      <Link data-aos="fade-down" data-aos-duration="800" data-aos-delay="800" onClick={() => setsideNav(false)} to="/podcast"><li>Podcast</li></Link>
                      <a data-aos="fade-down" data-aos-duration="800" data-aos-delay="1000" data-aos-offset="5" onClick={() => setsideNav(false)} href="#contact"><li>Contact</li></a>
                    </ul>
                </div>
            </div>
        ) : (
          <div className="side-nav" style={sideNav ? open : close}></div>
        )}
      </React.Fragment>
    )
}

export default Nav
