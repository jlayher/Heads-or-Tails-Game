import React from 'react'
import './fliplog.css'
import Log from './Log/Log'


const FlipLog = ({currentPlayer, currentBet, flipValue, winner, currentGuess, flipTime}) => {
  return (
    <div className='flip_container'>
      <div className='flip_container-title'>Flip Log</div>

      {/* make this into a card component */}
      
      <Log
        currentBet={currentBet}
        currentPlayer={currentPlayer} 
        flipValue={flipValue}
        winner={winner}
        currentGuess={currentGuess}
        flipTime={flipTime}
        />

    </div>
  )
}

export default FlipLog


//create an empty array in state to track moves