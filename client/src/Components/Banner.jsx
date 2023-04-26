import "./banner.css";
import video from "../assets/banner.mp4"

import React from 'react'

const Banner = () => {
  return (
    <div>
      <video src={video} autoPlay loop muted />
    </div>
  )
}

export default Banner

