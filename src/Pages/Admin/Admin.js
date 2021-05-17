import React, {useEffect, useState} from 'react'
import {
    useHistory
  } from "react-router-dom";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  import {
    faLink,
    faPlus,
    faTrash
  } from "@fortawesome/free-solid-svg-icons";
  import './Admin.css'
const Admin = () => {
    const history = useHistory()
    const formData = new FormData();
    // !States
    // !SKILLS STATE
    const [skill_name, setskill_name] = useState('')
    const [skill_percent, setskill_percent] = useState('')


    // !EXPERIENCE STATE

    const [jb_position, setjb_position] = useState('');
    const [jb_company, setjb_company] = useState('');
    const [jb_duration_location, setjb_duration_location] = useState('');
    const [jb_description, setjb_description] = useState('');


    // !PROJECTS STATE

    const [prj_title, setprj_title] = useState('')
    const [prj_tech, setprj_tech] = useState('')
    const [prj_url, setprj_url] = useState('')
    const [prj_filter_key, setprj_filter_key] = useState('');
    const [prj_platform, setprj_platform] = useState('');
    const [prj_description, setprj_description] = useState('')



    // !FETCHED

    // !Skills
    const [skills, setskills] = useState([]);
    const [skills_msg, setskills_msg] = useState(['', ''])

    // !EXPERIENCE
    const [experience, setexperience] = useState([])
    const [experience_msg, setexperience_msg] = useState(['', ''])

    // !PROJECTS
    const [projects, setprojects] = useState([])
    const [projects_msg, setprojects_msg] = useState(['', ''])

    useEffect(() => {
        verifyAuth();
        fetchSkills()
        fetchExperience();
        fetchProjects();
    }, [])


    const deleteSkill = (id) => {
        
        const url = 'http://localhost/Portfolio%20Backend/del_cms.php?section=skills'
        formData.append("id", id);

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then((data) => data.json())
        .then((res) => {
            fetchSkills()
        });
    }

    const deleteExperience = (id) => {
        
        const url = 'http://localhost/Portfolio%20Backend/del_cms.php?section=experience'
        formData.append("id", id);

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then((data) => data.json())
        .then((res) => {
            fetchExperience()
        });
    }

    const deleteProject = (id) => {
        
        const url = 'http://localhost/Portfolio%20Backend/del_cms.php?section=projects'
        formData.append("id", id);

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then((data) => data.json())
        .then((res) => {
            console.log(res)
            fetchProjects()
        });
    }

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

    const fetchProjects = () => {
        const url = 'http://localhost/Portfolio%20Backend/get_cms.php?section=projects'

        fetch(url, {
            method: 'POST'
        })
        .then((data) => data.json())
        .then((res) => {
            setprojects(res)
        });
    }

    const addSkill = () => {
        const url = 'http://localhost/Portfolio%20Backend/cms.php?section=skills'
        formData.append('skill_name', skill_name)
        formData.append('skill_percent', skill_percent)

        fetch(url, {
            method: "POST",
            body: formData
        })
        .then((data) => data.json())
        .then((res) => {
            if (res === 'SUCCESS') {
                setskills_msg(['Skill Added', '#20cf20']);
                fetchSkills();
            } else {
                setskills_msg(['An Error Occured', '#e60a0a'])
            }
        })
    }

    const addExperience = () => {
        const url = 'http://localhost/Portfolio%20Backend/cms.php?section=experience'
        formData.append('jb_position', jb_position)
        formData.append('jb_company', jb_company)
        formData.append('jb_duration_location', jb_duration_location)
        formData.append('jb_description', jb_description)

        fetch(url, {
            method: "POST",
            body: formData
        })
        .then((data) => data.json())
        .then((res) => {
            if (res === 'SUCCESS') {
                setexperience_msg(['Experience Added', '#20cf20']);
                fetchExperience()
            } else {
                setexperience_msg(['An Error Occured', '#e60a0a'])
            }
        })
    }

    const addProject = () => {
        const url = 'http://localhost/Portfolio%20Backend/cms.php?section=projects'
        formData.append('prj_title', prj_title)
        formData.append('prj_tech', prj_tech)
        formData.append('prj_url', prj_url)
        formData.append('prj_description', prj_description)
        formData.append('prj_filter_key', prj_filter_key)
        formData.append('prj_platform', prj_platform);

        var image1 = document.getElementById("prj_img1").files;
        var image2 = document.getElementById("prj_img2").files;
        var image3 = document.getElementById("prj_img3").files;
        var image4 = document.getElementById("prj_img4").files;
        var image5 = document.getElementById("prj_img5").files;

        if (image1[0] != null) {
            formData.append("prj_img1", image1[0]);
          }

          if (image2[0] != null) {
            formData.append("prj_img2", image2[0]);
          }
        
          if (image3[0] != null) {
            formData.append("prj_img3", image3[0]);
          }

          if (image4[0] != null) {
            formData.append("prj_img4", image4[0]);
          }

          if (image5[0] != null) {
            formData.append("prj_img5", image5[0]);
          }

        fetch(url, {
            method: "POST",
            body: formData
        })
        .then((data) => data.json())
        .then((res) => {
            console.log(res);
            if (res === 'SUCCESS') {
                setprojects_msg(['Project Added', '#20cf20']);
                fetchProjects()
            } else {
                setprojects_msg(['An Error Occured', '#e60a0a'])
            }
        })
    }

    const verifyAuth = () => {
        const user_token = localStorage.getItem('user_auth')
        if (user_token === 'true') {
            // alert('Valid')
        } else {
            history.push('/auth/admin');
        }
    }

    const LogoutHandler = () => {
        localStorage.removeItem('user_auth');
        history.push('/auth/admin');
    }
    return (
        <div>
            <div className="admin_main">
                <div className="nav">
                    <h1>Content Managment System</h1>
                    <button onClick={() => LogoutHandler()}>Logout</button>
                </div>

                <div className="main_body">
                    <h1 className='cms_welcome'>Welcome, Okoye Udoka</h1>

                    <div className="cms_skills">
                        <h1>Skills</h1>
                        <div className="ext_skills">
                            {skills.map((skill) => {
                                return (
                                    <div className="cnt">
                                        <span>{skill.skill + "  -  " + skill.percent + "%"}</span> <span onClick={() => deleteSkill(skill.id)} className='del_skill'>&times;</span>
                                    </div>
                                )
                            })}

                            {/* <div className="cnt">
                                <span>CSS - 90%</span> <span className='del_skill'>&times;</span>
                            </div>

                            <div className="cnt">
                                <span>Javascript - 90%</span> <span className='del_skill'>&times;</span>
                            </div> */}
                        </div>
                        <form onSubmit={(e) => {e.preventDefault(); addSkill();}}>
                        <div className="add_skills">
                            <h3>Add Skill</h3>
                            
                            <p style={{color: skills_msg[1]}}>{skills_msg[0]}</p>
                            <div className="skills_form">
                                <div className="field1">
                                    <input required onChange={(val) => setskill_name(val.target.value)} placeholder='Enter Skill' type="text"/>
                                </div>
                                <div className="field2">
                                    <input required onChange={(val) => setskill_percent(val.target.value)} placeholder='How Good Are You?' type="text"/> <small>%</small>
                                </div>

                            </div>

                            <div className="add_skill">
                                    <button type='submit'>Add Skill</button>
                            </div>
                        </div>
                        
                        </form>
                    </div>
                    <hr/>

                    <div className="cms_experience">
                        <h1>Experinence</h1>

                        <div className="ext_experience">
                            {experience.map((exp) => {
                                return (
                                    <div className="cnt">
                                        <span>{exp.job_title}</span> 
                                        <p className='company'>{exp.company}</p> 
                                        <p className='date_loc'>{exp.duration}</p> <span onClick={() => deleteExperience(exp.id)} className='del_experience'><FontAwesomeIcon className="li" icon={faTrash} /></span>
                                    </div>
                                )
                            })}

                            {/* <div className="cnt">
                                <span>Junior Web Developer </span> <p className='company'>First Lincoln Technologies</p> <p className='date_loc'>1 year Intern – August 2019 to September 2020 Lagos, Nigeria</p> <span className='del_experience'><FontAwesomeIcon className="li" icon={faTrash} /></span>
                            </div>

                            <div className="cnt">
                            <span>Junior Web Developer </span> <p className='company'>First Lincoln Technologies</p> <p className='date_loc'>1 year Intern – August 2019 to September 2020 Lagos, Nigeria</p> <span className='del_experience'><FontAwesomeIcon className="li" icon={faTrash} /></span>
                            </div> */}
                        </div>
                        <div className="add_experience">
                            <h3>Add Experience</h3>

                            <p style={{color: experience_msg[1]}}>{experience_msg[0]}</p>
                        <form onSubmit={(e) => {e.preventDefault(); addExperience()}}>
                            <div className="experience_form">
                                <div className="field1">
                                    <input required onChange={(val) => setjb_position(val.target.value)} placeholder='Enter Position' type="text"/>
                                </div>
                                <div className="field2">
                                    <input required onChange={(val) => setjb_company(val.target.value)} placeholder='Enter Company' type="text"/>
                                </div>

                                <div className="field3">
                                    <input required onChange={(val) => setjb_duration_location(val.target.value)} placeholder='Enter Duration & Location' type="text"/>
                                </div>

                                <div className="field4">
                                    <textarea required onChange={(val) => setjb_description(val.target.value)} placeholder='What were your roles?' cols="50" rows="10"></textarea>
                                </div>

                            </div>

                            <div className="add_experience">
                                    <button type='submit'>Add Experience</button>
                            </div>
                        </form>
                        </div>
                    </div>

                    <hr/>

                    <div className="cms_project">
                        <h1>Projects</h1>

                        <div className="ext_project">
                            <span>Filter Keys:- React Js - react js, React Native - react native PHP - php, Python - python</span>
                            {projects.map((project) => {
                                return (
                                    <div className="cnt">
                            <span>{project.project_name}</span> 
                            <p className='tech'>{project.project_tech}</p> 
                            <p className='description'>{project.project_description}</p> 
                            <p className='link'><FontAwesomeIcon className="link_icn" icon={faLink} /><a target='_blank' rel='noreferrer' href="https://www.linkedin.com/notifications/">{project.project_link}</a></p> 
                            <button onClick={() => deleteProject(project.id)} className='del_project'>Delete</button>
                            </div>
                                )
                            })}

                        </div>
                        <div className="add_project">
                            <h3>Add project</h3>
                            <p style={{color: projects_msg[1]}}>{projects_msg[0]}</p>
                            <form onSubmit={(e) => {e.preventDefault(); addProject()}}>
                            <div className="project_form">
                                <div className="field1">
                                    <input required onChange={(val) => setprj_title(val.target.value)} placeholder='Enter Project Title' type="text"/>
                                </div>
                                <div className="field2">
                                    <input required onChange={(val) => setprj_tech(val.target.value)} placeholder='Enter Project Tech' type="text"/>
                                </div>

                                <div className="field3">
                                    <input required onChange={(val) => setprj_url(val.target.value)} placeholder='Enter Project url' type="text"/>
                                </div>

                                <div className="field3">
                                    <input required onChange={(val) => setprj_filter_key(val.target.value)} placeholder='Enter Filter Key' type="text"/>
                                </div>

                                <div className="field4">
                                    <textarea required onChange={(val) => setprj_description(val.target.value)} placeholder='Enter Project Description' cols="50" rows="10"></textarea>
                                </div>
                                

                            </div>

                            <div className="prj_img">
                                <input required id='prj_img1' type="file"/>
                                <input id='prj_img2' type="file"/>
                                <input id='prj_img3' type="file"/>
                                <input id='prj_img4' type="file"/>
                                <input id='prj_img5' type="file"/>
                            </div>

                            <p>Select Platform</p>
                            <small>Mobile</small>
                            <input onChange={(val) => setprj_platform(val.target.value)} className='chkbx' type="radio" value='Mobile' name="platform" id=""/>
                            

                            <small>Web</small>
                            <input onChange={(val) => setprj_platform(val.target.value)} className='chkbx' type="radio" value='Web' name="platform" id=""/>
                            

                            <div className="add_project_btn">
                                    <button type='submit'>Add Project</button>
                            </div>
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Admin
