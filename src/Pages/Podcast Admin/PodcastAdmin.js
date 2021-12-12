import React, {useState, useEffect} from 'react'
 import './PodcastAdmin.css'
import {Link, useHistory} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeadphones,
    faTrash,
    faPen
  } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
const PodcastAdmin = () => {

    const [episodeTitle, setepisodeTitle] = useState('')
    const [episodeDescription, setepisodeDescription] = useState('')
    const [allEpisodes, setallEpisodes] = useState([])



    const history = useHistory();
    useEffect(() => {
        verifyAuth()
        fetchPodcast()
    }, [])

    const verifyAuth = () => {
        const user_token = localStorage.getItem('user_auth')
        if (user_token === 'true') {
            // alert('Valid')
        } else {
            history.push('/auth/admin');
            // alert("Helklo")
        }
    }

    const addEpisodeHandler = () => {
        const formData = new FormData()
        formData.append('title', episodeTitle)
        formData.append('description', episodeDescription)
        formData.append('date', moment().format('MMMM Do YYYY'))
        formData.append('time', moment().format('h:mm:ss a'))

        document.getElementById("audioFile").files[0] ? formData.append("audio", document.getElementById("audioFile").files[0]) : formData.append("audio", null)
        document.getElementById("coverFile").files[0] ? formData.append("cover", document.getElementById("coverFile").files[0]) : formData.append("cover", null)


        fetch("https://udokaokoye.com/Portfolio%20Backend/podcast/add.php", {
            method: 'POST',
            body: formData
        }).then((res) => res.json()).then((data) => {
            fetchPodcast()
            alert("Done")
        } )
    }

    const fetchPodcast = () => {
        fetch("https://udokaokoye.com/Portfolio%20Backend/podcast/get.php?mode=*", {
            method: "POST"
        }).then((res) => res.json()).then((data) => {
            setallEpisodes(data)
        })
    }

    const deletePodcast = (id) => {
        if (window.confirm("Are you sure you want to delete podcast?")) {
            fetch(`https://udokaokoye.com/Portfolio%20Backend/podcast/delete.php?id=${id}`, {
                method: "POST",
            }).then((res) => res.json()).then((data) => {
                console.log(data)
                fetchPodcast()
                alert("Deleted");
            
            })
        } else {
            alert("No")
        }
    }
    return (
        <div className='podcast_admin_container'>

           <div className="add_episodes">
               <h1>Add Episodes</h1>

                <div className="episodes_form">
                    <div className="field1">
                        <input required onChange={(txt) => setepisodeTitle(txt.target.value)} placeholder='Enter Podcast Title' type="text"/>
                    </div>
                    <div className="field2">
                        <small>Cover Image </small>
                        <input type="file" name="" id="coverFile" accept=" image/*" />
                    </div>

                    <div className="field3">
                        <small>Audio File   </small>
                        <input type="file" name="" id="audioFile" accept=" audio/*" />
                    </div>

                    <div className="field4">
                        <textarea required onChange={(txt) => setepisodeDescription(txt.target.value)} placeholder='Enter Podcast Description' cols="50" rows="10"></textarea>
                    </div>
                </div>

                <button onClick={() => addEpisodeHandler()} className='add_episode_button'>Add Episode!</button>
           </div>
       
       
           <div className="all_episodes">
                <h1>All Episodes</h1>

                {allEpisodes.map((episode) => (
                    <div className="epi_cont">
                    <div className="left" style={{background: `url(${episode.cover})`}}></div>
                    <div className="right">
                        <h1>{episode.title}</h1>
                        <p>{episode.description}</p>

                        <div className="btns_div">
                            <a href={episode.audio} target="_blank"><button className='ad'>Audio <FontAwesomeIcon icon={faHeadphones} /></button></a> 
                            <button on onClick={() => deletePodcast(episode.id)} className='del'>Delete <FontAwesomeIcon icon={faTrash} /></button>
                            <Link style={{textDecoration: 'none'}} to={`/admin/podcast/edit/${episode.id}`}><button className='edt'>Edit<FontAwesomeIcon icon={faPen} /></button></Link> 
                        </div>
                    </div>
                </div>
                ))}

                
           </div>
       
        </div>
    )
}

export default PodcastAdmin
