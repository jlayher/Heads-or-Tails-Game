import React from 'react'
import "./outcome.css"

const Outcome = ({currentPlayer, currentBet, currentGuess, flipValue, winner}) => {




  return (
    <>
      <div className='outcome_container'>
        <div>
          Current Player: {currentPlayer}
        </div>
        <div>
        Current Guess: {currentGuess}
      </div>
      <div>
        Current Flip Value: {flipValue}
      </div>
      <div>{winner} won ${currentBet}</div>
      </div>
    </>

  )
}

export default Outcome
