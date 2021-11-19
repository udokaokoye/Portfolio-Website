import React, {useRef, useState, useEffect} from 'react'

const PodcastPlayer = ({isPlaying, setisPlaying, audioFile, id, currentSong, setCurrentSong, audioRef, audioInfo}) => {

    
    

      

      const demo_array = ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3","https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"]

    //   useEffect(() => {
    //       alert(currentSong)
    //   }, [currentSong])

    const PlayHandler = () => {
        
        if (isPlaying.play) {
                audioRef.current.pause();
                // if (isPlaying.id !== id) {
                //     audioRef.current.pause();
                //     // audioRef.current.play()
                //     // setisPlaying({play: !isPlaying.play, id: id})
                //     alert("False")
                // } else {
                //     alert("True")
                // }
                setisPlaying({play: !isPlaying.play})
            
        } else {
            audioRef.current.play()
            setisPlaying({play: !isPlaying.play})
        }
        // setCurrentSong(demo_array[id])
        // alert(isPlaying.play)
    }

    

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
    }
    return (
        <div>
            <div className="audio_player_container">
                                <button onClick={() => PlayHandler()}>play</button>
                                <br />
                                <input type="range" min={0} max={audioInfo.duration || 0} value={audioInfo.currentTime} onChange={dragHandler} />
                                
                            </div>
        </div>
    )
}

export default PodcastPlayer
