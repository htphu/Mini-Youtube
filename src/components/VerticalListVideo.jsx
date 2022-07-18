import './VerticalListVideo.scss'
import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import moment from 'moment';

const ListVideoItem = ({video}) => {
    const navigate = useNavigate();
    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            title,
            thumbnails:{medium},
            categoryId
        },
    } = video
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
    const handleClick =()=>{
        navigate('/Mini-Youtube/watch/'+id+'/'+categoryId)
    }

    return (

        <div className="listVideo-item" onClick={handleClick}>
            <div className="listVideo-thumb">
                <img src={medium.url} alt="thumb" />
                <span>{_duration}</span>
            </div>
            <div className="listVideo-right">
                <div className="listVideo-title">
                    {title}
                </div>
                <div className="listVideo-nameChannel">
                    {channelTitle}
                </div>
            </div>
        </div>
    )
}
function VerticalListVideo() {
    const { categoryId} = useParams()
    const [listVideo, setListVideo] = useState([])
    useEffect(() => {
        fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&videoCategoryId='+categoryId+'&regionCode=VN&key=AIzaSyDUiIK6Z-UK6YBXKgyXw8Vkn2VAko0PwWk')
        .then(data=> {return data.json()})
        .then(data=> {
            setListVideo(data.items)
        })
    }, [])

    return (
        <div className="listVideo">
            {listVideo && listVideo.map((video,index)=>(<ListVideoItem video={video} key={index}/>))}

        </div>
    )
}

export default VerticalListVideo