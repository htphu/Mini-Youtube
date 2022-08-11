import './Videos.scss'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { UPDATE } from './redux/reducer/handleVideos'
import Video from './Video'


const Videos = () => {
    const dispatch = useDispatch();
    const {videos} = useSelector(state => state.dataVideo)

    useEffect(() => {
        fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=VN&key='+process.env.REACT_APP_YT_KEY)
        .then(data => {
            return data.json()
        })
        .then(data => {
            dispatch(UPDATE(data.items))
            console.log(data.items);
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