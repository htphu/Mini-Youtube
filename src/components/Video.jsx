import './Video.scss'
import { useEffect, useState } from 'react'
import moment from 'moment';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";

const Video = ({ videos }) => {
    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            title,
            thumbnails: { medium },
            categoryId
        },
    } = videos
    const [thumbChannel, setThumbChannel] = useState(null)
    const navigate = useNavigate();
    const [duration, setDuration] = useState(null)

    const second = moment.duration(duration).asSeconds()
    const _duration = moment.utc(second * 1000).format('mm:ss')

    useEffect(() => {
        //get thoi gian video
        fetch('https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Cstatistics&id=' + id + '&regionCode=VN&key=AIzaSyDUiIK6Z-UK6YBXKgyXw8Vkn2VAko0PwWk')
            .then(data => {
                return data.json()
            })
            .then(data => {
                setDuration(data.items[0].contentDetails.duration)
            })
            .catch(err => console.log(err))
    }, [id])
    useEffect(() => {
        //get hinh dai dien channel
        fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=' + channelId + '&regionCode=VN&key=AIzaSyDUiIK6Z-UK6YBXKgyXw8Vkn2VAko0PwWk')
            .then(data => {
                return data.json()
            })
            .then(data => {
                setThumbChannel(data.items[0].snippet.thumbnails.default.url)
            })
            .catch(err => console.log(err))
    }, [channelId])

    const handleClick =()=>{
        navigate('/Mini-Youtube/watch/'+id+'/'+categoryId)
    }

    return (
        <div className="videos-item" onClick={handleClick}>
            <div className="thumb">
                <img src={medium.url} alt='thumb' />
                <span className="duration">{_duration}</span>
            </div>
            <div className="bottom">
                <div className="avt">
                    <img src={thumbChannel} alt="avatar" />
                </div>
            <Tooltip title={title}>
                <div className="title">{title}</div>
            </Tooltip>
                <div className="name-channel">{channelTitle}</div>
            </div>
        </div>
    )
}
export default Video