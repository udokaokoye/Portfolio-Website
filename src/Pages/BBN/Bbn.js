import React, {useEffect} from 'react'
import './Bbn.css'
const Bbn = () => {



    
    return (
        <div className='Container'>
            <h1>Welcome To Big Brother Naija 2021 S6 Live Stream</h1>

            <div className="liveContainer">
            <iframe src="https://player.twitch.tv/?channel=udokaokoye&parent=udokaokoye.com&parent=www.udokaokoye.com" frameBorder="0" allowFullScreen={true} scrolling="no" height="378" width="620" style={{width: "100%", height: "100%"}}></iframe>
            </div>

            <p className='broghttoyou'><i>This stream is brought to you by udoka okoye</i></p>

            <div className="credits">
                <p>Please like and follow <a href="https://www.facebook.com/UdokaDev" target="_blank">Udoka Okoye</a> on facebook</p>
                <p>Please subscribe to my channel on Youtube - <a href="https://www.youtube.com/channel/UCWWUb0JP0l8vME6x0BEVJFA" target="_blank">Udoka Okoye</a></p>
            </div>
        </div>
    )
}

export default Bbn
