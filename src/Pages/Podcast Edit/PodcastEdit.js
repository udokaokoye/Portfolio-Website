import React, {useEffect, useState} from 'react'
import './PodcastEdit.css'
import { useParams, useHistory } from 'react-router'
const PodcastEdit = () => {
    const {id} = useParams()
    const history = useHistory()

    const [episodeTitle, setepisodeTitle] = useState('')
    const [episodeDescription, setepisodeDescription] = useState('')
    const [episodeNumber, setepisodeNumber] = useState('')
    const [episodeCover, setepisodeCover] = useState('')
    const [episodeAudio, setepisodeAudio] = useState('')

    useEffect(() => {
        fetchPodcast()
    }, [])

    const fetchPodcast = () => {
        const formData = new FormData;
        formData.append('id', id)
        fetch("http://localhost/Portfolio%20Backend/podcast/get.php?mode=id", {
            method: "POST",
            body: formData
        }).then((res) => res.json()).then((data) => {
            setepisodeTitle(data.title)
            setepisodeDescription(data.description)
            setepisodeCover(data.cover)
            setepisodeAudio(data.audio)
            setepisodeNumber(data.episode)
            // console.log(data)
        })
    }

    const handleEdit = () => {
        const formData = new FormData;
        formData.append('title', episodeTitle)
        formData.append('description', episodeDescription)
        formData.append('episode', episodeNumber)
        formData.append('audio_url', episodeAudio)
        formData.append('cover_url', episodeCover)
        formData.append('id', id)
        document.getElementById("audioFile").files[0] ? formData.append("audio", document.getElementById("audioFile").files[0]) : formData.append("audio", null)
        document.getElementById("coverFile").files[0] ? formData.append("cover", document.getElementById("coverFile").files[0]) : formData.append("cover", null)

        fetch("http://localhost/Portfolio%20Backend/podcast/edit.php", {
            method: "POST",
            body: formData
        }).then((res) => res.json()).then((data) => {
            if (data == 'SUCCESS') {
                alert("SUCCESS");
                history.push('/admin/podcast')
            }
        })
    }



    return (
        <div className='edit_episode_container'>
            <h1>Edit Episode</h1>
            <div className="edit_episodes_form">
                    <div className="field1">
                        <input value={episodeTitle} onChange={(txt) => setepisodeTitle(txt.target.value)} placeholder='Enter Podcast Title' type="text"/>
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
                        <textarea value={episodeDescription} onChange={(txt) => setepisodeDescription(txt.target.value)} required placeholder='Enter Podcast Description' cols="50" rows="10"></textarea>
                    </div>
                </div>

                <div className="curr_cover">
                    <h3>Current Cover</h3>
                    <div className="img_curr" style={{display: episodeCover !== "" ? 'block' : 'none', background: `url(${episodeCover})`}}>

                    </div>
                </div>

                <audio src={episodeAudio} controls></audio>
                <br /><br />

                <button onClick={() => handleEdit()} className="edit_episode_button">Edit</button>
                <button onClick={() => history.push('/admin/podcast')} className="edit_episode_button cancel">Cancel</button>
        </div>
    )
}

export default PodcastEdit
