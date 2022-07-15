import React from 'react'
import './HomeVideos.scss'
import './Filter.scss'
import SideBar from './SideBar'
import Videos from './Videos'
import Filter from './Filter'

const HomeVideos = () => {
  return (
    <div className="homeVideos">
        <SideBar/>
        <Filter/>
        <Videos/>
    </div>
  )
}

export default HomeVideos