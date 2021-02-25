import React from 'react';
import './Nav.css'
import logo from '../../Assets/code.svg'
const Nav = () => {

    
    return (
        <div className='main-nav'>
            <nav>
                <div className="logo">
                    <img src={logo} alt="code"/>
                    <h1>Okoye Udoka</h1>
                </div>

                <div className="links">
                    <div className="inner">
                        <span>Home</span>
                        <span>About</span>
                        <span>Portfolio</span>
                        <span>Contact</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
