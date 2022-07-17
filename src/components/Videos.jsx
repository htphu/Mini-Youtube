import './Videos.scss'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { UPDATE } from './redux/reducer/handleVideos'
import Video from './Video'


const Videos = () => {
    const dispatch = useDispatch();
    const {videos} = useSelector(state => state.dataVideo)

    useEffect(() => {
        fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=VN&key=AIzaSyDUiIK6Z-UK6YBXKgyXw8Vkn2VAko0PwWk')
        .then(data => {
            return data.json()
        })
        .then(data => {
            dispatch(UPDATE(data.items))
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <>
        <div className="videos">
            {videos && videos.map(i =>( <Video videos={i} key={i.id}/>))}
        </div>
        </>
    )
}

export default Videos