import './WatchVideos.scss'
import React from 'react'
import VerticalListVideo from './VerticalListVideo';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

const VideoPlayer = ({ videoPlayer }) => {
    const [avtChannel, setAvtChannel] = useState()
    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            title
        }
    } = videoPlayer
    useEffect(() => {
        fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id='+channelId+'&key=AIzaSyDUiIK6Z-UK6YBXKgyXw8Vkn2VAko0PwWk')
        .then(data=> {return data.json()})
        .then(data=> {
            setAvtChannel(data.items[0].snippet.thumbnails.default.url)
        })
    }, [id])
    return (

        <div className="videoPlayer">
            <iframe title='videoPlayer' id="player" type="text/html" width="853" height="480"
                src={"https://www.youtube.com/embed/" + id + "?autoplay=1&fs=1"}
                frameborder="0"></iframe>
            <div className="videoDetails">
                <div className="videoTitle">{title}</div>
                <div className="videoReaction">
                    <ThumbUpOffAltIcon />
                    <span>Thích</span>
                    <ThumbDownOffAltIcon />
                    <span>Không thích</span>
                    <ShareIcon />
                    <span>Chia sẻ</span>
                </div>
                <div className="videoChannel">
                    <div className="videoChannel-c">
                        <div className="videoChannel-avt">
                            <img src={avtChannel} alt="avt" />
                        </div>
                        <div className="videoChannel-name">
                            {channelTitle}
                        </div>
                    </div>

                    <div className="btnSup">
                        ĐĂNG KÝ
                    </div>
                </div>
            </div>
        </div>
    )
}
const WatchVideos = () => {
    const { id } = useParams()
    const [videoPlayer, setVideoPlayer] = useState(null)
    useEffect(() => {
        fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=' + id + '&key=AIzaSyDUiIK6Z-UK6YBXKgyXw8Vkn2VAko0PwWk')
            .then(data => { return data.json() })
            .then(data => {
                setVideoPlayer(data.items[0])
            })
    }, [id])


    return (
        <div className='watchVideos'>
            {videoPlayer && <VideoPlayer videoPlayer={videoPlayer} />}
            <VerticalListVideo />
        </div>
    )
}

export default WatchVideos