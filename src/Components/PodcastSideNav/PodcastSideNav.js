import React, {useEffect} from 'react'
import './PodcastSideNav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes
  } from "@fortawesome/free-solid-svg-icons";
  import AOS from 'aos';
  import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
const PodcastSideNav = ({sidebar, setsidebar}) => {

    useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            
          
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
          
          });
    }, [])
    const linkCliked = () => {
        setsidebar(false)
    }
    return (
            <div data-aos="zoom-in-right" data-aos-duration="700" className="side_container" style={{display: sidebar ? "block" : 'none'}}>
                <div className="side_top_br" onClick={() => setsidebar(false)}>
                    <FontAwesomeIcon className="cls_icn" icon={faTimes} />
                </div>

                <div className="side_links">
                    <Link to="/" onClick={() => linkCliked()} style={{textDecoration: 'none'}}><span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="-200">Main Website</span></Link>
                    <Link to="/podcast/episodes" onClick={() => linkCliked()} style={{textDecoration: 'none'}}><span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="-200">Library</span></Link>
                    {/* <Link to="" onClick={() => linkCliked()} style={{textDecoration: 'none'}}><span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700" data-aos-offset="-200">Favorites</span></Link> */}
                    <a href="#subscribe" onClick={() => linkCliked()} style={{textDecoration: 'none'}}><span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900" data-aos-offset="-200">Subscribe</span></a>
                    <a href="#feature" onClick={() => linkCliked()} style={{textDecoration: 'none'}}><span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1100" data-aos-offset="-200">Feature</span></a>

                </div>
            </div>
        
    )
}

export default PodcastSideNav
