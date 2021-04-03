import React, {useState} from 'react'
import './Home.css';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Isotope from 'isotope-layout';
// import $ from 'jquery';
import {
  faArrowRight,
  faTachometerAlt,
  faMobile,
  faMobileAlt,
  faLightbulb,
  faRocket
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import  {motion} from 'framer-motion';
const Home = () => {

    const skills = [
        {
            skill: "HTML",
            percent: 90
        },
        {
            skill: "CSS",
            percent: 90
        },
        {
            skill: "React",
            percent: 80
        },
        {
            skill: "HTML",
            percent: 80
        },
        {
            skill: "Angular",
            percent: 20
        },
        {
            skill: "Node.js",
            percent: 60
        },
        {
            skill: "PHP",
            percent: 90
        },
        {
            skill: "UI/UX",
            percent: 60
        },
        {
            skill: "XD",
            percent: 50
        },
    ];

// const [filterKey, setFilterKey] = React.useState('*');

// const projects = [
//     {
//         name: 'All Saints AHQ Cathedral',
//         tools: 'React Js / PHP',
//         category: 'react js'
//     },

//     {
//         name: 'Crypto lion x2',
//         tools: 'PHP',
//         category: 'php'
        
//     },
// ];

// const [projects_arr, setprojects_arr] = useState(projects);



// const tools = ['react', 'python', 'react naive', 'php',];


    // const filterTools = (filterKey) => {
    //     // projects.filter((project) => {
    //     //     return(project.category == 'react')
    //     // })


    //     projects.map((prjc) => {
    //         return prjc.category === 'react';
    //     })
    // }

    // console.log(filterTools())


    return (
        <div>
            <div id='home' className="main-home">
            <Particles id="particles-js" 
            params={{
                "fps_limit": 60,
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                            "value_area": 1803.4120608655228
                        }
                    },
                    "color": {
                        "value": "#01A1A7"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 2,
                            "color": "#01A1A7"
                        },
                        "polygon": {
                            "nb_sides": 4
                        },
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
                        "value": 1,
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
                            "duration": 1
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
             
                <div className="show">
                    <div className="show_inner">

                    
                    <div className="left">
                        <div className="social-links">
                            <a href=""><FontAwesomeIcon className="li" color="#fff" icon={faGithub} /></a>
                            <a href=""><FontAwesomeIcon className="fb" color="#fff" icon={faFacebookF} /></a>
                            <a href=""><FontAwesomeIcon className="tw" color="#fff" icon={faTwitter} /></a>
                            <a href=""><FontAwesomeIcon className="ig" color="#fff" icon={faInstagram} /></a>
                            <a href=""><FontAwesomeIcon className="ig" color="#fff" icon={faLinkedinIn} /></a>
                            {/* <a href=""><FontAwesomeIcon className="li" color="#fff" icon={faLinkedinIn} /></a> */}
                        </div>
                        <div className="my-det">
                            <motion.h3 animate={{opacity: 1, transition: {duration: 2}}} initial={{opacity: 0}}>I am Okoye Udoka</motion.h3>
                            <p> Hello i'm Okoye Udoka A Freelance Web Designer & Developer based in Lagos, Nigeria.
                                Highly experienced in designing & developing websites.</p>
                        </div>
                        <div className="show-btns">
                            <a href="#about">
                           <button>Veiw My Portfolio <span><FontAwesomeIcon className="arrwrgt" color="#fff" icon={faArrowRight} /></span></button> 
                           </a>
                        </div>
                    </div>
                    <div className="right">
                        {/* <img src={mypic} alt=""/> */}
                    </div>
                    </div>
                    {/* <div className="dwn-btn">
                        <span><a href=""><FontAwesomeIcon className="dwnicn" color="#fff" icon={faAngleDoubleDown} /></a></span>
                    </div> */}
                </div>

                
                <div id="about"></div>
            </div>



            <div className="about">
                <div className="inner">
                    <div className="head_intro">
                        <h1>ABOUT</h1>
                        <hr/>
                    </div>

                    <div className="boxes">
                        <div className="bx1">
                            <div className="shape">
                                <span><FontAwesomeIcon className="li" color="#fff" icon={faTachometerAlt} /></span>
                            </div>
                            <h1>Fast</h1>
                            <p>Fast load times and lag free interaction is my highest priority.</p>
                        </div>
                        <div className="bx2">
                            <div className="shape">
                                <span><FontAwesomeIcon className="li" color="#fff" icon={faMobileAlt} /></span>
                            </div>
                            <h1>Responsive</h1>
                            <p>Website layout will work on any device, big or small.
                            </p>
                        </div>
                        <div className="bx3">
                            <div className="shape">
                            <span><FontAwesomeIcon className="li" color="#fff" icon={faLightbulb} /></span>
                            </div>
                            <h1>Intuitive</h1>
                            <p>Strong preference for easy to use, intuitive UX/UI.</p>
                        </div>
                        <div className="bx4">
                            <div className="shape">
                            <span><FontAwesomeIcon className="li" color="#fff" icon={faRocket} /></span>
                            </div>
                            <h1>Dynamic</h1>
                            <p>Websites don't have to be static, I love making pages come to life.</p>
                        </div>
                    </div>

                    <div className="me_skills">
                        <div className="inner">
                            <div className="me">
                                <div className="img"></div>
                                <h1>Who's this guy?</h1>

                                <p>I'm a Fullstack Developer in Lagos, Nigeria.
I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
Let's make something special</p>
                            </div>
                            <div className="skills">
                                {skills.map((skill) => {
                                    return (
                                        <div className="skill_bar">
                                    <div className="skill_fill">
                                        <div title={skill.skill + " - " + skill.percent + "%"} style={{width: skill.percent + 10 + "%"}} className="inner_fill"></div>
                                    <div title={skill.skill + " - " + skill.percent + "%"} className="skill_name">{skill.skill}</div>
                                    </div>
                                    <span title={skill.skill + " - " + skill.percent + "%"} className="skill_percent">{skill.percent}%</span>
                                </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        <div id="experience_div"></div>
        
        <div className="experience">
            <div className="inner">
                <div className="left">
                    <h1>Experience</h1>
                </div>
                <div className="middle"></div>
                <div className="right">
                    <div className="inner-rgt">
                        <div className="experience_container">
                            <h1 className="jb_title">Junior Web Developer</h1>
                            <h3 className="organization">First Lincoln Technologies</h3>
                            <span className="date_location">1 year Intern – August 2019 to September 2020 Lagos, Nigeria</span>
                            <div className="jb_function">
                                <ul>
                                    <li>Frontend Styling and Design</li>
                                    <li>MYSQL Database – PHP</li>
                                    <li>Management and Updating of web contents either via CMS (Content Management System – WordPress) or server-side (cPanel).</li>
                                </ul>
                            </div>
                        </div>

                        <div className="experience_container">
                            <h1 className="jb_title">Senior Web Developer</h1>
                            <h3 className="organization">Skello Technologies</h3>
                            <span className="date_location">3 months November 2020 to February 2021 Lagos, Nigeria</span>
                            <div className="jb_function">
                                <ul>
                                    <li>Frontend Development</li>
                                    <li>Mongo DB Database / MySQL Database – Node Js / PHP</li>
                                    <li>Management and Updating of web contents either via CMS (Content Management System – WordPress) or server-side (cPanel).</li>
                                </ul>
                            </div>
                        </div>

                        <div className="experience_container">
                            <h1 className="jb_title">Information Technology (IT) Specialist</h1>
                            <h3 className="organization">Royal Star Comprehensive College</h3>
                            <span className="date_location">1 month – March 2021  Lagos, Nigeria</span>
                        </div>

                        {/* <div className="experience_container">
                            <h1 className="jb_title">Software Engineer Intern</h1>
                            <h3 className="organization">Copart</h3>
                            <span className="date_location">Jun 2020 – Aug 2020  Dallas, TX</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        
        
        <div id='projects' className="projects project_grid">
           <div className="inner">
           <div className="left">
               <h1>Projects</h1>
           </div>
           <div className="right">
               <div className="bar">
                   <div className="br1 active_br"><span>All</span></div>
                   <div
                //    onClick={() => {filterTools('react')}}
                    // onClick={handleFilterKeyChange('react')} 
                    className="br2"><span>React Js</span></div>
                   <div className="br3"><span>React Native</span></div>
                   <div className="br4"><span>PHP</span></div>
                   <div className="br5"><span>Python</span></div>
               </div>

               <div className="prjs" id="prjs">

                   
                        <div className="project_div prj1">
                        <div className="prj_card">
                        <div className="prj_txt"><span>All Saints AHQ Cathedral<br/> <span className='lng_used'>React Js / PHP</span></span></div>
                        <div className="prj_but"><button>Learn More</button></div>
                        </div>
                        
                        </div>
                   
                   <div className="project_div prj2 react"></div>
                   <div className="project_div prj3"></div>
                   <div className="project_div prj4"></div>
                   <div className="project_div prj5"></div>
                   <div className="project_div prj6"></div>
               </div>
           </div>
           </div>
        </div>

                        {/* <div className="prjss"></div>
        <div className="react"></div> */}
        </div>
        
    )
}

export default Home
