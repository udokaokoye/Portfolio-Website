import React, {useState, useEffect} from 'react'
import './Home.css';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Isotope from 'isotope-layout';
// import $ from 'jquery';
import {
  faArrowRight,
  faTachometerAlt,
  faMobileAlt,
  faLightbulb,
  faRocket,
  faEye,
  faLongArrowAltUp,
  faFileAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import  {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import FadeWhenVisible from '../../FadeWhenVisible';
import projects from '../../projects';
import { parse } from '@fortawesome/fontawesome-svg-core';
const Home = () => {

    useEffect(() => {
        fetchSkills()
        fetchExperience()
        // fetchProjects()
    }, [])

    const [filterkey, setfilterkey] = useState('*')

    // !Project Popup

    const [project_popup, setproject_popup] = useState([false, {}])

        // !Skills
        const [skills, setskills] = useState([]);
        const [skills_msg, setskills_msg] = useState(['', ''])
    
        // !EXPERIENCE
        const [experience, setexperience] = useState([])
        const [experience_msg, setexperience_msg] = useState(['', ''])
    
        // !PROJECTS
        // const [projects, setprojects] = useState([])
        const [projects_msg, setprojects_msg] = useState(['', ''])
    // const skills = [
    //     {
    //         skill: "HTML",
    //         percent: 90
    //     },
    //     {
    //         skill: "CSS",
    //         percent: 90
    //     },
    //     {
    //         skill: "React",
    //         percent: 80
    //     },
    //     {
    //         skill: "HTML",
    //         percent: 80
    //     },
    //     {
    //         skill: "Angular",
    //         percent: 20
    //     },
    //     {
    //         skill: "Node.js",
    //         percent: 60
    //     },
    //     {
    //         skill: "PHP",
    //         percent: 90
    //     },
    //     {
    //         skill: "UI/UX",
    //         percent: 60
    //     },
    //     {
    //         skill: "XD",
    //         percent: 50
    //     },
    // ];

    const controls = useAnimation();
    const [ref, inView] = useInView();

    
    const [newarray, setnewarray] = useState(projects)

    // var newArray = [projects];

    useEffect(() => {
        if (inView) {
          controls.start("visible");
        //   alert("inview")
        }
      }, [controls, inView]);

    useEffect(() => {
    
        var updatedArray = projects.filter(function (el) {

            if (filterkey === '*') {
                return projects
            } else {
                return el.category === filterkey
            }
          });

        //   console.log(updatedArray)
          setnewarray(updatedArray)
    }, [filterkey])


    const fetchSkills = () => {
        const url = 'http://localhost/Portfolio%20Backend/get_cms.php?section=skills'

        fetch(url, {
            method: 'POST'
        })
        .then((data) => data.json())
        .then((res) => {
            setskills(res)
        });
    }

    const fetchExperience = () => {
        const url = 'http://localhost/Portfolio%20Backend/get_cms.php?section=experience'

        fetch(url, {
            method: 'POST'
        })
        .then((data) => data.json())
        .then((res) => {
            setexperience(res)
        });
    }

    // const fetchProjects = () => {
    //     const url = 'http://localhost/Portfolio%20Backend/get_cms.php?section=projects'

    //     fetch(url, {
    //         method: 'POST'
    //     })
    //     .then((data) => data.json())
    //     .then((res) => {
    //         setprojects(res)
    //     });
    // }


    const openProjectPopup = {
        transition: "all 0.5s ease-in-out",
        display: 'flex'
      };
    
      const closeProjectPopup = {
        transition: "all 0.5s ease-in-out",
        display: 'block'
      };



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
                            <a href="https://github.com/udokaokoye" target='_blank'><FontAwesomeIcon className="li" color="#fff" icon={faGithub} /></a>
                            <a href="https://web.facebook.com/udokovic" target='_blank'><FontAwesomeIcon className="fb" color="#fff" icon={faFacebookF} /></a>
                            <a href="#" target='_blank'><FontAwesomeIcon className="tw" color="#fff" icon={faTwitter} /></a>
                            <a href="#" target='_blank'><FontAwesomeIcon className="fb" color="#fff" icon={faInstagram} /></a>
                            <a href="https://linkedin.com/in/udoka-okoye-abba591ab/" target='_blank'><FontAwesomeIcon className="ig" color="#fff" icon={faLinkedinIn} /></a>
                            {/* <a href=""><FontAwesomeIcon className="li" color="#fff" icon={faLinkedinIn} /></a> */}
                        </div>
                        <div className="my-det">
                            <motion.h3 animate={{opacity: 1, transition: {duration: 2}}} initial={{opacity: 0}}>I am Okoye Udoka</motion.h3>
                            <p> Hello i'm Okoye Udoka A Freelance Web Designer & Developer based in Lagos, Nigeria.
                                Highly experienced in designing & developing websites.</p>
                        </div>
                        <motion.div 
                        animate={{translateY: 0, opacity: 1, transition: {duration: 2, delay: 2}}} initial={{translateY: 50, opacity: 0}}
                        className="show-btns">
                            <a href="#projects">
                           <button>Veiw My Portfolio <span><FontAwesomeIcon className="arrwrgt" color="#fff" icon={faArrowRight} /></span></button> 
                           </a>
                        </motion.div>
                    </div>
                    <div
                    //  animate={{opacity: 1, transition: {duration: 3}}} initial={{opacity: 0}}
                     className="right">
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
                        <FadeWhenVisible><h1>ABOUT</h1></FadeWhenVisible>
                        <motion.hr 
                        animate={{translateX: 0, opacity: 1, transition: {duration: 1}}} initial={{translateX: 100, opacity: 0}}
                        />
                    </div>

                    <div className="boxes">
                        <div className="bx1">
                            <motion.div 
                            animate={{opacity: 1, transition: {duration: 2}}} initial={{opacity: 0}}
                            className="shape">
                                <span><FontAwesomeIcon className="li" color="#fff" icon={faTachometerAlt} /></span>
                            </motion.div>
                            <h1>Fast</h1>
                            <p>Fast load times and lag free interaction is my highest priority.</p>
                        </div>
                        <div className="bx2">
                            <motion.div 
                            animate={{opacity: 1, transition: {duration: 2, delay: 0.8}}} initial={{opacity: 0}}
                            className="shape">
                                <span><FontAwesomeIcon className="li" color="#fff" icon={faMobileAlt} /></span>
                            </motion.div>
                            <h1>Responsive</h1>
                            <p>Website layout will work on any device, big or small.
                            </p>
                        </div>
                        <div className="bx3">
                            <motion.div 
                            animate={{opacity: 1, transition: {duration: 2, delay: 1}}} initial={{opacity: 0}}
                            className="shape">
                            <span><FontAwesomeIcon className="li" color="#fff" icon={faLightbulb} /></span>
                            </motion.div>
                            <h1>Intuitive</h1>
                            <p>Strong preference for easy to use, intuitive UX/UI.</p>
                        </div>
                        <div className="bx4">
                            <motion.div 
                            animate={{opacity: 1, transition: {duration: 2, delay: 1.2}}} initial={{opacity: 0}}
                            className="shape">
                            <span><FontAwesomeIcon className="li" color="#fff" icon={faRocket} /></span>
                            </motion.div>
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
                                <a href="../../Assets/Profile.pdf"><button className='resume'><FontAwesomeIcon className="resm" color="#fff" icon={faFileAlt} /> Resume</button></a>
                            </div>
                            <div className="skills">
                                {skills.map((skill) => {
                                    return (
                                        <div className="skill_bar">
                                    <div className="skill_fill">
                                        <motion.div title={skill.skill + " - " + skill.percent + "%"}
                                         animate={{opacity: 1, width: parseInt(skill.percent) + 10 + "%", transition: {duration: 2}}} initial={{opacity: 0, width: 0}}
                                         style={{}} className="inner_fill"></motion.div>
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
                        {experience.map((exp) => {
                            return (
                                <div className="experience_container">
                            <h1 className="jb_title">{exp.job_title}</h1>
                            <h3 className="organization">{exp.company}</h3>
                            <span className="date_location">{exp.duration}</span>
                            <div className="jb_function">
                                <ul>
                                    {exp.job_description}
                                    {/* <li>Frontend Styling and Design</li>
                                    <li>MYSQL Database – PHP</li>
                                    <li>Management and Updating of web contents either via CMS (Content Management System – WordPress) or server-side (cPanel).</li> */}
                                </ul>
                            </div>
                        </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        
        
        <div id='projects' className="projects project_grid">
            <div style={{display: project_popup[0] ? 'block' : 'none'}} className="project_popup">
                <div style={project_popup[0] ? openProjectPopup : closeProjectPopup} className="project_inner">
                <div className="project_popup_main">
                    <div className="img_slide">Project Image</div>
                    <div className="project_title"><h3>{project_popup[1].name}</h3></div>
                    <div className="prj_description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores quisquam explicabo eaque praesentium deserunt quia sint aliquid commodi autem! Repellat, iusto repudiandae culpa doloribus vitae quo vero laboriosam velit optio, totam hic sequi dolores eos at iure recusandae maiores, officia odit odio. Quod quaerat cumque at iure, ullam, beatae, nisi facilis pariatur modi natus vero. Voluptates, minus, perferendis sapiente in recusandae quam officiis ab eum ullam, aspernatur consequatur cumque? Iusto hic in deserunt voluptatum. Ad amet explicabo eos perferendis cum fugiat aliquid, neque dolores debitis nobis eum id reprehenderit consectetur totam mollitia in voluptatibus! Dolores illum itaque ea optio delectus repellat ad, esse totam excepturi dolorem nisi ullam cupiditate, sint accusantium necessitatibus autem vero vel eligendi, neque aliquid? Dolores!</p>
                    </div>
                    <div className="prj_btns">
                        <button className='view_site'><FontAwesomeIcon className="arr_icn" color="red" icon={faLongArrowAltUp} /> View Site</button>
                        <button onClick={() => {setproject_popup([false, []])}} className='cls_btn'>Close</button>
                    </div>
                </div>
                </div>
            </div>
           <div className="inner">
           <div className="left">
               <h1>Projects</h1>
           </div>
           <div className="right">
               <div className="bar">
                   <div onClick={() => {setfilterkey('*')}} className={`br1 ${filterkey === '*' ? 'active_br' : ''} `}><span>All</span></div>
                   <div 
                    onClick={() => {setfilterkey('react js')}} 
                    className={`br2 ${filterkey === 'react js' ? 'active_br' : ''} `} data-filter='react'><span>React Js</span></div>
                   <div onClick={() => {setfilterkey('react native')}} className={`br3 ${filterkey === 'react native' ? 'active_br' : ''} `} ><span>React Native</span></div>
                   <div onClick={() => {setfilterkey('php')}} className={`br4 ${filterkey === 'php' ? 'active_br' : ''} `}><span>PHP</span></div>
                   <div onClick={() => {setfilterkey('python')}} className={`br5 ${filterkey === 'python' ? 'active_br' : ''} `}><span>Python</span></div>
               </div>

               <div className="prjs" id="prjs">

                   {newarray.slice(0, 6).map((project) => {
                       return (
                           
                        <div style={{backgroundImage: `url(${project.images[0].default})`, backgroundSize: `${project.type === 'web' ? 'cover' : 'contain'}` }} className="project_div prj1 reactnative">
                        <div className="prj_card">
                        <div className="prj_txt"><span>{project.name}<br/> <span className='lng_used'>{project.tools}</span></span></div>
                        <div className="prj_but"><button onClick={() => {
                            setproject_popup([true, project])
                            
                            }}>Learn More</button></div>
                        </div>
                        
                        </div>
                       );
                   })}
                    
               </div>
           </div>
           </div>
        </div>
        </div>
        
    )
}

export default Home
