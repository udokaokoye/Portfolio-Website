import React, {useEffect, useState} from 'react'
import './Bbn.css'
const Bbn = () => {

    const [frame, setframe] = useState('')

    useEffect(() => {
        getFrame()
    }, [])

    const getFrame = () => {
        fetch("https://udokaokoye.com/Portfolio%20Backend/bbnlive.php", {
            method: "GET"
        }).then((res) => res.json()).then((data) => {
            // console.log(data)
            setframe(data.frame)
        })
    }




    
    return (
        <div className='Container'>
            <h1>Welcome To Big Brother Naija 2021 S6 Live Stream</h1>

            <div className="liveContainer">


            {frame ? (
                <div
                style={{width: "100%", height: "100%"}}
                dangerouslySetInnerHTML={{
                  __html: frame,
                }}
                className="news_body_text"
              />
            ) : (<h1>Loading...</h1>)}





            {/* <iframe
        width="560"
        height="315"
        src="//ok.ru/videoembed/2936226127599"
        frameBorder="0"
        allow="autoplay"
        allowFullScreen
        style={{width: "100%", height: "100%"}}
      ></iframe> */}





            {/* <iframe
        src="//iframe.dacast.com/b/165826/c/540674"
        width="590"
        height="431"
        frameBorder="0"
        scrolling="no"
        allow="autoplay"
        allowFullScreen={true}
        style={{width: "100%", height: "100%"}}
      ></iframe> */}
            {/* <iframe src="https://player.twitch.tv/?channel=udokaokoye&parent=udokaokoye.com&parent=www.udokaokoye.com" frameBorder="0" allowFullScreen={true} scrolling="no" height="378" width="620" style={{width: "100%", height: "100%"}}></iframe> */}
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
