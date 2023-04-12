import React from 'react'
import "./log.css"


const Log = ({currentBet, currentPlayer, flipValue, winner, currentGuess, flipTime}) => {
  return (
    <div>
    <ul>
        <li>Time of Flip: {flipTime}</li>
        <li>{currentPlayer} Guess: {currentGuess}</li>
        <li>Flip Value: {flipValue}</li>
        <li>Bet Amount: ${currentBet}</li>
        <li>{winner} Wins ${currentBet}</li>
    </ul>
  </div>
  )
}

export default Log
