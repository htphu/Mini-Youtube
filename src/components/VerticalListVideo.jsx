import './VerticalListVideo.scss'
import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

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
    const handleClick =()=>{
        navigate('/Mini-Youtube/watch/'+id+'/'+categoryId)
    }

    return (

        <div className="listVideo-item" onClick={handleClick}>
            <div className="listVideo-thumb">
                <img src={medium.url} alt="thumb" />
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
            console.log(data.items);
        })
    }, [])

    return (
        <div className="listVideo">
            {listVideo.map(video=>(<ListVideoItem video={video}/>))}

        </div>
    )
}

export default VerticalListVideo