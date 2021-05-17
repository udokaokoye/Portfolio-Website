import React, {useState, useEffect, useRef} from 'react'
import './Home.css';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from 'nuka-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css'
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
  faFileAlt,
  faCopyright,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// import  {motion, useAnimation} from 'framer-motion';
// import {useInView} from 'react-intersection-observer';
// import FadeWhenVisible from '../../FadeWhenVisible';
// import projects from '../../projects';
import { parse } from '@fortawesome/fontawesome-svg-core';
const Home = () => {
    
    const formData = new FormData();

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
        fetchSkills()
        fetchExperience()
        fetchProjects()
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


        // !CONTACT
        const [cnt_name, setcnt_name] = useState('')
        const [cnt_email, setcnt_email] = useState('')
        const [cnt_message, setcnt_message] = useState('')
        const [messageSentSuccess, setmessageSentSuccess] = useState([, ''])
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

    // const controls = useAnimation();
    // const [ref, inView] = useInView();

    const [projects, setprojects] = useState([]);
    const [newarray, setnewarray] = useState([])


    // var newArray = [projects];

    const popupRef = useRef(null);

    // useEffect(() => {
    //     if (inView) {
    //       controls.start("visible");
    //     //   alert("inview")
    //     }
    //   }, [controls, inView]);

    useEffect(() => {
    
        var updatedArray = projects.filter(function (el) {

            if (filterkey === '*') {
                return projects
            } else {
                    return el.project_filter_key === filterkey;
            }
          });

          setnewarray(updatedArray)
    }, [filterkey, projects])


    const fetchSkills = () => {
        const url = 'http://192.168.200.146/Portfolio%20Backend/get_cms.php?section=skills'

        fetch(url, {
            method: 'POST'
        })
        .then((data) => data.json())
        .then((res) => {
            setskills(res)
        });
    }

    const fetchExperience = () => {
        const url = 'http://192.168.200.146/Portfolio%20Backend/get_cms.php?section=experience'

        fetch(url, {
            method: 'POST'
        })
        .then((data) => data.json())
        .then((res) => {
            setexperience(res)
        });
    }

    const fetchProjects = () => {
        const url = 'http://192.168.200.146/Portfolio%20Backend/get_cms.php?section=projects'

        fetch(url, {
            method: 'POST'
        })
        .then((data) => data.json())
        .then((res) => {
            setprojects(res)
            // console.log(res);
        });
    }

    const handelContact = () => {
        formData.append("name", cnt_name);
        formData.append('email', cnt_email);
        formData.append('message', cnt_message);

        const url = 'http://192.168.200.146/Portfolio%20Backend/contact.php';

        fetch(url, {
            method: 'post',
            body: formData
        })
        .then((data) => data.json())
        .then((res) => {
            if (res === 'SUCCESS') {
                setmessageSentSuccess([true, 'Your message was sent successfully. Thanks!'] )
            } else {
                setmessageSentSuccess([false, 'An error occurred while sending the message. Try again later'] )
            }

            setTimeout(() => {
                setmessageSentSuccess([, ''] )
            }, 7000);
        })
    }


    const openProjectPopup = {
        transition: "all 0.5s ease-in-out",
        display: 'flex'
      };
    
      const closeProjectPopup = {
        transition: "all 0.5s ease-in-out",
        display: 'block'
      };
      function isEmpty(str) {
        return (!str || str.length === 0 );
    }



    return (
        <div>
            <a
                data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1400" data-aos-offset="0"
                 className='page_up' href="#home"><FontAwesomeIcon className='page_up_icn' icon={faArrowUp} color='white' /></a>
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
                            <a 
                            data-aos="zoom-in" 
                            data-aos-duration="300" 
                            data-aos-delay=""
                            href="https://github.com/udokaokoye" rel="noreferrer" target='_blank'><FontAwesomeIcon className="li" color="#fff" icon={faGithub} /></a>
                            <a
                            data-aos="zoom-in" 
                            data-aos-duration="300" 
                            data-aos-delay="300"
                             href="https://web.facebook.com/udokovic" rel="noreferrer" target='_blank'><FontAwesomeIcon className="fb" color="#fff" icon={faFacebookF} /></a>
                            <a 
                            data-aos="zoom-in" 
                            data-aos-duration="300" 
                            data-aos-delay="500"
                            href="https://twitter.com/udokaokoye2" rel="noreferrer" target='_blank'><FontAwesomeIcon className="tw" color="#fff" icon={faTwitter} /></a>
                            <a 
                            data-aos="zoom-in" 
                            data-aos-duration="300" 
                            data-aos-delay="700"
                            href="https://www.instagram.com/okoye__udoka/" rel="noreferrer" target='_blank'><FontAwesomeIcon className="fb" color="#fff" icon={faInstagram} /></a>
                            <a 
                            data-aos="zoom-in" 
                            data-aos-duration="300" 
                            data-aos-delay="1000"
                            href="https://linkedin.com/in/udoka-okoye-abba591ab/" rel="noreferrer" target='_blank'><FontAwesomeIcon className="ig" color="#fff" icon={faLinkedinIn} /></a>
                            {/* <a href=""><FontAwesomeIcon className="li" color="#fff" icon={faLinkedinIn} /></a> */}
                        </div>
                        <div className="my-det">
                            <h3 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1000">I am Okoye Udoka</h3>
                            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1050">A Freelance Web Designer & Developer based in Cincinnati, Ohio.
                                Highly experienced in designing & developing websites.</p>
                        </div>
                        <div 
                        className="show-btns">
                            <a href="#portfolio">
                           <button data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1100">Veiw My Portfolio <span><FontAwesomeIcon className="arrwrgt" color="#fff" icon={faArrowRight} /></span></button> 
                           </a>
                        </div>
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
                        <h1>ABOUT</h1>
                        <hr 
                        
                        />
                    </div>

                    <div className="boxes">
                        <div className="bx1">
                            <div 
                            data-aos="flip-left" data-aos-duration="1000" data-aos-delay="" data-aos-offset="70"
                            className="shape">
                                <span><FontAwesomeIcon className="li" color="#fff" icon={faTachometerAlt} /></span>
                            </div>
                            <h1>Fast</h1>
                            <p>Fast load times and lag free interaction is my highest priority.</p>
                        </div>
                        <div className="bx2">
                            <div 
                            data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" data-aos-offset="70"
                            className="shape">
                                <span><FontAwesomeIcon className="li" color="#fff" icon={faMobileAlt} /></span>
                            </div>
                            <h1>Responsive</h1>
                            <p>Website layout will work on any device, big or small.
                            </p>
                        </div>
                        <div className="bx3">
                            <div 
                            data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="40"
                            className="shape">
                            <span><FontAwesomeIcon className="li" color="#fff" icon={faLightbulb} /></span>
                            </div>
                            <h1>Intuitive</h1>
                            <p>Strong preference for easy to use, intuitive UX/UI.</p>
                        </div>
                        <div className="bx4">
                            <div 
                            data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="40"
                            className="shape">
                            <span><FontAwesomeIcon className="li" color="#fff" icon={faRocket} /></span>
                            </div>
                            <h1>Dynamic</h1>
                            <p>Websites don't have to be static, I love making pages come to life.</p>
                        </div>
                    </div>

                    <div className="me_skills">
                        <div className="inner">
                            <div className="me">
                                <div data-aos="zoom-in" data-aos-duration="900" data-aos-delay="" className="img"></div>
                                <h1 data-aos="fade-up" data-aos-duration="900" data-aos-delay="50">Who's this guy?</h1>

                                <p data-aos="fade-in" data-aos-duration="900" data-aos-delay="200">I'm a Fullstack Developer in Cincinnati, Ohio.
I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
Let's make something special</p>
                                <div className="cnt_res_btns">
                                <a href="#contact" ><button className='resume'>Contact Me</button></a>
                                <a href="https://drive.google.com/file/d/1VcRyB5ChzmjZYwwj-p1KCiF-7a0AfjU6/view?usp=sharing" target='_blank'><button className='resume'><FontAwesomeIcon className="resm" color="#fff" icon={faFileAlt} /> Resume</button></a>
                                </div>
                            </div>
                            <div className="skills">
                                {skills.map((skill) => {
                                    return (
                                        <div className="skill_bar">
                                    <div className="skill_fill">
                                        <div title={skill.skill + " - " + skill.percent + "%"}
                                         data-aos="fade-right" data-aos-duration="1000" data-aos-offset="50"
                                         style={{ width: parseInt(skill.percent) + 10 + "%"}} className="inner_fill"></div>
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
        
        <div id="experience"></div>
        
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
                                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="" className="experience_container">
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
        
        
        <div id='portfolio' className="projects project_grid">
            <div ref={popupRef} style={{display: project_popup[0] ? 'block' : 'none'}} className="project_popup">
                <div style={project_popup[0] ? openProjectPopup : closeProjectPopup} className="project_inner">
                <div className="project_popup_main">
                    <div 
                    // style={{backgroundImage: `url(${project_popup[1].prj_img1})`, backgroundSize: `${project_popup[1].project_platform === 'Web' ? 'cover' : 'contain'}` }} 
                    className="img_slide">
                        <Carousel style={{widows: "100%", height: "100%"}}>
                            <img style={{width: project_popup[1].project_platform === 'Mobile' ? '30%' : '100%'}} className='slider_img' src={project_popup[1].prj_img1} />
                            <img style={{width: project_popup[1].project_platform === 'Mobile' ? '30%' : '100%'}} className='slider_img' src={project_popup[1].prj_img2} />
                            <img style={{width: project_popup[1].project_platform === 'Mobile' ? '30%' : '100%'}} className='slider_img' src={project_popup[1].prj_img3} />
                            <img style={{width: project_popup[1].project_platform === 'Mobile' ? '30%' : '100%'}} className='slider_img' src={project_popup[1].prj_img4} />
                            <img style={{width: project_popup[1].project_platform === 'Mobile' ? '30%' : '100%'}} className='slider_img' src={project_popup[1].prj_img5} />
                        </Carousel>
                    </div>
                    <div className="project_title"><h3>{project_popup[1].project_name}</h3></div>
                    <div className="prj_description">
                        <p>{project_popup[1].project_description}</p>
                    </div>
                    <div className="prj_btns">
                       <a href={project_popup[1].project_link} rel="noreferrer" target='_blank'><button className='view_site'><FontAwesomeIcon className="arr_icn" color="red" icon={faLongArrowAltUp} /> View Site</button></a> 
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
                           
                        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="" style={{backgroundImage: `url(${project.prj_img1})`, backgroundSize: `${project.project_platform === 'Web' ? 'cover' : 'contain'}` }} className="project_div prj1">
                        <div className="prj_card">
                        <div className="prj_txt"><span>{project.project_name}<br/> <span className='lng_used'>{project.project_tech}</span></span></div>
                        <div className="prj_but"><button onClick={() => {
                            setproject_popup([true, project])
                            // popupRef.current.scrollIntoView()
                            }}>Learn More</button></div>
                        </div>
                        
                        </div>
                       );
                   })}
                    
               </div>
           </div>
           </div>
        </div>
        
        
        
        <div id='contact' className="contact">
                <div className="cnt_inner">
                   <div className="intro">
                        <h1>Contact Me</h1>
                        <p>Have a question or want to work together?</p>
                        <h3>Let's Make It Happen!</h3>
                        
                   </div>

                   {messageSentSuccess[0] === true ? 
                        (
                        <div style={{padding: messageSentSuccess[0] ? 25 : 0}} className="msg_div">
                        <p>{messageSentSuccess[1]}</p>
                       </div>
                       )
                    :  (
                        <div style={{backgroundColor: 'red', padding: messageSentSuccess[0] === false ? 25 : 0}} className="msg_div">
                    <p>{messageSentSuccess[1]}</p>
                   </div>
                   )}

                   <div className="cnt_form">
                       <form onSubmit={(e) => {e.preventDefault(); handelContact()}}>
                                <div className="nor_inpt">
                                <div className="field">
                                    <input required onChange={(val) => setcnt_name(val.target.value)} placeholder='Name' type="text"/>
                                </div>

                                <div className="field">
                                    <input required onChange={(val) => setcnt_email(val.target.value)} placeholder='Email' type="email"/>
                                </div>
                                </div>

                                <div className="field">
                                <textarea required onChange={(val) => setcnt_message(val.target.value)} placeholder='Message' cols="53" rows="10"></textarea>
                                </div>
                                <div className="submitt_cnt">
                                    <button type='submit'>Submit</button>
                                </div>
                       </form>
                   </div>
                </div>
        </div>
        
        <div className="footer">
            <div className="ft_inner">
            {/* <h1>Footer</h1> */}
            {/* <div className="soc_icns">
                <div className="github">

                </div>
                <div className="facebook"></div>
                <div className="twitter"></div>
                <div className="insta"></div>
                <div className="linkedln"></div>
            </div> */}

            <div className="social-links">
                            <a href="https://github.com/udokaokoye" rel="noreferrer" target='_blank'><FontAwesomeIcon className="li icn" color="#fff" icon={faGithub} /></a>
                            <a href="https://web.facebook.com/udokovic" rel="noreferrer" target='_blank'><FontAwesomeIcon className="fb icn" color="#fff" icon={faFacebookF} /></a>
                            <a href="https://twitter.com/udokaokoye2" rel="noreferrer" target='_blank'><FontAwesomeIcon className="tw icn" color="#fff" icon={faTwitter} /></a>
                            <a href="https://www.instagram.com/okoye__udoka/" rel="noreferrer" target='_blank'><FontAwesomeIcon className="fb icn" color="#fff" icon={faInstagram} /></a>
                            <a href="https://linkedin.com/in/udoka-okoye-abba591ab/" rel="noreferrer" target='_blank'><FontAwesomeIcon className="ig icn" color="#fff" icon={faLinkedinIn} /></a>
                            {/* <a href=""><FontAwesomeIcon className="li" color="#fff" icon={faLinkedinIn} /></a> */}
            </div>

            <div className="cprght">
                <p><FontAwesomeIcon className="li" color="#fff" icon={faCopyright} /> <span>Okoye Udoka 2021</span></p>
            </div>
            </div>
        </div>
        
        </div>
        
    )
}

export default Home
