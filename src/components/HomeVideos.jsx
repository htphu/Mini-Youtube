import React from 'react'
import './HomeVideos.scss'
import './Filter.scss'
import Videos from './Videos'
import Filter from './Filter'

const HomeVideos = () => {
  return (
    <div className="homeVideos">
        <Filter/>
        <Videos/>
    </div>
  )
}

export default HomeVideos