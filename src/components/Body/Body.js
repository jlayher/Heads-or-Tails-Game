import { React, useState, useEffect } from 'react'
import "./body.css"
import Coin from '../Coin/Coin'
import ScoreChart from '../ScoreChart/ScoreChart'
import FlipLog from '../FlipLog/FlipLog'

const Body = () => {

  const [currentPlayer, setCurrentPlayer] = useState("Player 1")
  const [currentBet, setCurrentBet] = useState(0)
  const [guess, setGuess] = useState("")
  const [flipValue, setFlipValue] = useState("")
  const [flipTime, setFlipTime] = useState("")
  const [logsArray, setLogsArray] = useState([])
  

  const coinFlip = () => {
    calcFlip();
    //time of flip function
      //have state for current date
      // use a date object
      // return the date object values needed
      // setTimeOfFlip(new Date())
      // use the value like, timeOfFlip.getHour()
  

    //function to create a new log here?  have an array in state. (logsArray)
      // create a new array item (object)
        // generate a card that displays, currentPlayer, flipValue, timeOfFlip, currentBet, 
      // add to the array on coin flip by pushing a new array item
      // pass the array in state as props to the FlipLog Component

    //function to take in user input for heads/tails selection
      // update the guess state with setGuess
    
      changePlayer();
  }

  //calculate heads or tails when coin flips
  const calcFlip = () => {
    setFlipValue("");
    const randomFlip = Math.floor(Math.random() * 2)
    const flip = randomFlip ? "Heads" : "Tails"
    setFlipValue(flip);
    


  }

  //change current player when coin flips
  const changePlayer = () => {
    if (currentPlayer === "Player 1") {
      setCurrentPlayer("Player 2 ")
    } else {
      setCurrentPlayer("Player 1")
    }
  }


  const handleSubmit = (bet) => {
    setCurrentBet(bet)
  }

  return (
    <div className="body_container">
        <ScoreChart />
      <Coin
        currentPlayer={currentPlayer}
        currentBet={currentBet}
        coinFlip={coinFlip}
        flipValue={flipValue}
        setCurrentBet={setCurrentBet}
        handleSubmit={handleSubmit} />
        <FlipLog />
    </div>
  )
}

export default Body
