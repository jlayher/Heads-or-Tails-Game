import React from 'react'
import './fliplog.css'
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils'


const FlipLog = ({currentPlayer, currentBet}) => {
  return (
    <div className='flip_container'>
      <div className='flip_container-title'>Flip Log</div>

      {/* make this into a card component */}
      <div>
        <ul>
        <li>Time of Flip: 4-2-22, 7:42pm</li>
          <li>Player: {currentPlayer}</li>
          <li>Player Guess: Heads</li>
          <li>Flip Value: Heads</li>
      

          <li>Bet Amount: ${currentBet}</li>
          <li>Player X Wins/Loses Xamount</li>
        </ul>
      </div>

    </div>
  )
}

export default FlipLog


//create an empty array in state to track moves