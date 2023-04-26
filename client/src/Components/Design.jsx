import React from 'react'
import "./design.css";


const Design = ( {Description,Title,imgURL,video}) => {
  return (
    <div>
   <div className="Design-section">

   <img src={imgURL} alt="image" /><br />
   <h1>{Title}</h1>
   <p>{Description}</p>
   {/* <video src={video} autoPlay loop muted /> */}

   <a href="#" class="btn btn-primary" title='click the button see more design'>Click Here</a>

   </div>
      
    </div>
  )
}

export default Design
