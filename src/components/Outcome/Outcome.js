import React from 'react'
import "./outcome.css"

const Outcome = ({currentPlayer, currentBet, currentGuess, resetGame, flipValue, winner, flipTime}) => {




  return (
    <>
      <div className='outcome_container'>
        <div>Current Player: {currentPlayer}</div>
        <div>Current Guess: {currentGuess}</div>
        <div>Current Flip Value: {flipValue}</div>
        <div>Time of Flip: {flipTime}</div>
        <div>{winner} won ${currentBet}</div>
        <button className="coin_container-main_reset" type="submit" onClick={resetGame}>Start Next Game</button>
      </div>
    </>

  )
}

export default Outcome
