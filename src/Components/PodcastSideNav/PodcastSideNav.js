import React from 'react'
import './PodcastSideNav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes
  } from "@fortawesome/free-solid-svg-icons";
const PodcastSideNav = ({sidebar, setsidebar}) => {
    return (
        <div>
            <div className="side_container" style={{display: sidebar ? "block" : 'none'}}>
                <div className="side_top_br">
                    <FontAwesomeIcon icon={faTimes} onClick={() => setsidebar(false)} />
                </div>

                <div className="side_links">
                    <span>Hello</span>
                    <span>Hello</span>
                    <span>Hello</span>
                    <span>Hello</span>
                </div>
            </div>
        </div>
    )
}

export default PodcastSideNav
