import React, {useEffect, useState} from 'react';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     NavLink,
//   } from "react-router-dom";
import './Nav.css'
import logo from '../../Assets/code.svg'

const Nav = () => {

    const [navTrans, setnavTrans] = useState("");

    function vhToPixels (vh) {
        return Math.round(window.innerHeight / (100 / vh));
        // console.log(Math.round(window.innerHeight / (100 / vh)) + 'px')
        // alert(Math.round(window.innerHeight / (100 / vh)) + 'px')
      }

    useEffect(() => {
        // vhToPixels(100)

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
    
    return (
        <div className={`main-nav ${navTrans}`}>
            {/* <div className="scr"></div> */}
            <nav>
                <div className="logo">
                    <img src={logo} alt="code"/>
                    <h1>Okoye Udoka</h1>
                </div>

                <div className="links">
                    <div className="inner">
                        <a href={"#home"}><span>Home</span></a>
                        <a href="#about"><span>About</span></a>
                        <a href="#experience_div"><span>Experience</span></a>
                        {/* <a href="#experience_div"><span>Projects</span></a> */}
                        <a href="#projects"><span>Portfolio</span></a>
                        <a><span>Contact</span></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
