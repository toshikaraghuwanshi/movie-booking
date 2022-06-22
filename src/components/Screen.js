import React from 'react'

const Screen = () => {
  return (
    <>
      <div id="reserve-seat">Reserve Seat ↓</div>
      <div id="sample-seat">
        <ul class="showcase">
          <li>
            <span class="seat"></span>
            <small className='text'>N/A</small>
          </li>
          <li>
            <span class="seat selected"></span>
            <small className='text'>Selected</small>
          </li>
          <li><span class="seat occupied"></span>
            <small className='text'>Occupied</small>
          </li>
        </ul>
      </div>
      <div className="screen">
        <div className="screen-view"></div>
      </div>
    </>
  )
}

export default Screen