import './Filter.scss'
import React from 'react'
import { useDispatch, useEffect} from 'react-redux'
import { FILTER } from './redux/reducer/handleVideos'


const Filter = () => {
    const dispatch = useDispatch()

    const getVideosCategory = (key) => {
        if(key === 'all'){
            fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=VN&key=AIzaSyDUiIK6Z-UK6YBXKgyXw8Vkn2VAko0PwWk')
                .then(data=> {return data.json()})
                .then(data=> {
                    console.log(data.items);
                    dispatch(FILTER(data.items))
                })
        }else{

            fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&videoCategoryId='+key+'&regionCode=VN&key=AIzaSyDUiIK6Z-UK6YBXKgyXw8Vkn2VAko0PwWk')
                .then(data=> {return data.json()})
                .then(data=> {
                    console.log(data.items);
                    dispatch(FILTER(data.items))
                })
        }
    }
    
    return (
        <div className="filter">
            <span className="filter-item" onClick={()=> {getVideosCategory('all')}}>
                Tất cả
            </span>
            <span className="filter-item" onClick={()=> {getVideosCategory('10')}}>
                Âm nhạc
            </span>
            <span className="filter-item" onClick={()=> {getVideosCategory('20')}}>
                Trò Chơi
            </span>
        </div>
    )
}

export default Filter