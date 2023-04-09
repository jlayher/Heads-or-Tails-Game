import React from 'react'
import './fliplog.css'
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils'


const FlipLog = () => {
  return (
    <div className='flip_container'>
      <div className='flip_container-title'>Flip Log</div>
      <div>
        <ul>
          <li>Player: Name</li>
          <li>Flip Value: Heads</li>
          <li>Time of Flip: 4-2-22, 7:42pm</li>
          <li>Bet Amount: $1</li>
          <li>Player X(current winning player) total owed: $X</li>
        </ul>
      </div>

    </div>
  )
}

export default FlipLog


//create an empty array in state to track moves