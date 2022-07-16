import './SearchVideos.scss'
import React, {useEffect, useState} from 'react'
import SideBar from './SideBar'
import { useParams, useNavigate } from 'react-router'
import moment from 'moment';

const SearchItems = ({video}) => {
    const {
        id:{videoId},
        snippet:{
            channelId,
            title,
            channelTitle,
            thumbnails:{medium}
        }
    } = video
    const navigate = useNavigate();
    const [thumbChannel, setThumbChannel] = useState(null)

    const [duration, setDuration] = useState(null)
    const second = moment.duration(duration).asSeconds()
    const _duration = moment.utc(second * 1000).format('mm:ss')

    useEffect(() => {
        //get thoi gian video
        fetch('https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&id='+videoId+'&regionCode=VN&key=AIzaSyDUiIK6Z-UK6YBXKgyXw8Vkn2VAko0PwWk')
            .then(data => {
                return data.json()
            })
            .then(data => {
                setDuration(data.items[0].contentDetails.duration)
            })
            .catch(err => console.log(err))
    }, [videoId])
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

    const handleClick=(x)=>{
        let category =''
        fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id='+x+'&key=AIzaSyDUiIK6Z-UK6YBXKgyXw8Vkn2VAko0PwWk')
        .then(data => {
            return data.json()
        })
        .then(data => {
           category = data.items[0].snippet.categoryId
           navigate('/Mini-Youtube/watch/'+x+'/'+category)
        })
        .catch(err => console.log(err))

        
    }
    return (
        <div className="SearchVideos-item" onClick={()=>{handleClick(videoId)}}>
            <div className="SearchVideos-thumb">
                <img src={medium.url} alt="thumb" />
                <span>{_duration}</span>
            </div>
            <div className="SearchVideos-detail">
                <div className="SearchVideos-detail-title">
                    {title}
                </div>
                <div className="SearchVideos-detail-avt">
                    <img src={thumbChannel} alt="avt" />
                </div>
                <div className="SearchVideos-detail-titleChannel">
                    {channelTitle}
                </div>
            </div>
        </div>
    )
}
const SearchVideos = () => {
    const {q}=useParams()
    const [resultSearch, setResultSearch] = useState()
    useEffect(() => {
        fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='+q+'&regionCode=VN&type=video&key=AIzaSyDUiIK6Z-UK6YBXKgyXw8Vkn2VAko0PwWk')
        .then(data=> {return data.json()})
        .then(data=> {
            setResultSearch(data.items)
        })
    }, [q])
    return (
        <div className="SearchVideos">
            <SideBar />

            {resultSearch && resultSearch.map((video,index)=><SearchItems video={video} key={index}/>)}
        </div>
    )
}

export default SearchVideos