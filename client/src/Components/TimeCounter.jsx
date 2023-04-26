import React from 'react'
import "./Time.css"

const TimeCounter = ({value,text}) => {
  return (
    <div className='timeCounter-div'>
      <div className="counter-section">
          <h1>{value}</h1>
      </div>
<br />
      <div className="timeCounter-div-text">{text}</div>
    </div>
  )
}

export default TimeCounter
