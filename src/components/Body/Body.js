import { React, useState, useEffect } from 'react'
import "./body.css"
import Coin from '../Coin/Coin'
import ScoreChart from '../ScoreChart/ScoreChart'
import FlipLog from '../FlipLog/FlipLog'
import Outcome from '../Outcome/Outcome'

const Body = () => {
  const [currentPlayer, setCurrentPlayer] = useState("Player 1");
  const [currentBet, setCurrentBet] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [flipValue, setFlipValue] = useState("");
  const [flipTime, setFlipTime] = useState("");
  const [logsArray, setLogsArray] = useState([]);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [winner, setWinner] = useState("");
  const [checked, setChecked] = useState(false);
  const [flipArray, setFlipArray] = useState([])
  const [toggleOutcome, setToggleOutcome] = useState(false)

//toggle classname normal or none when 


  useEffect(() => {
    if (currentPlayer === "Player 1" && flipValue === currentGuess) {
      setWinner("Player 1")
    } else if (currentPlayer === "Player 2" && flipValue === currentGuess) {
      setWinner("Player 2")
    } else if (currentPlayer === "Player 1" && flipValue !== currentGuess) {
      setWinner("Player 2")
    } else {
      setWinner("Player 1")
    }
    console.log(flipArray)
  }, [flipValue])



  // useEffect(() => {
  //   createLog();
  //   console.log(flipArray)   
  // }, [flipTime])

  const resetGame = () => {

    setFlipValue("");
    setCurrentBet(0);
    changePlayer();
    setCurrentGuess("");
    setToggleOutcome(false);
    setChecked(false);
  };

  //return to this
  const timeOfFlip = () => {
    const today = new Date();
    const month = today.getMonth() +1;
    const day = today.getDate();
    const year = today.getFullYear(); 
    let hour = today.getHours();
    if (hour < 10) {
      hour = `0${hour}`   
    }
    let mins = today.getMinutes();
    if (mins < 10) {
      mins = `0${mins}`   
    }
    const secs = today.getSeconds();
    const amPm = ( hour <= 12) ? "AM" : "PM";
    const timeOfFlip = `${month}-${day}-${year}, ${hour}:${mins} ${amPm}`;
   
    setFlipTime(timeOfFlip);
  };

  //calculate heads or tails when coin flips
  const calcFlip = () => {
    
      const randomFlip = Math.floor(Math.random() * 2);
      const flip = randomFlip ? "Heads" : "Tails";
      setFlipValue(flip);
    createLog();
  };

  //change current player when coin flips
  const changePlayer = () => {
    if (currentPlayer === "Player 1") {
      setCurrentPlayer("Player 2");
    } else {
      setCurrentPlayer("Player 1");
    }
  };

  const handleSubmit = (bet) => {
    setCurrentBet(bet);
  };

  const handleGuess = (guess) => {
    if (guess === "") {
      alert("Please select Heads or Tails")
    } else {
      setCurrentGuess(guess);
    }

  };

  const coinFlip = () => {
    if (currentGuess === "") {
      alert("Please select Heads or Tails");
    } else {
      calcFlip();
      setToggleOutcome(true)
      timeOfFlip();
  
    }
  };


  const createLog = () => {
    const arr = flipArray;
    let log = {
      flipTime: flipTime,
      currentPlayer: currentPlayer,
      flipValue: flipValue,
      winner: winner,
      currentBet: currentBet,

    }
    arr.push(log)
    setFlipArray(arr);

  }

  return (
    <>
      <div className="body_container">
        <ScoreChart
          playerOneScore={playerOneScore}
          playerTwoScore={playerTwoScore}
        />
        <Coin
          currentPlayer={currentPlayer}
          currentBet={currentBet}
          coinFlip={coinFlip}
          calcFlip={calcFlip}
          flipValue={flipValue}
          setFlipValue={setFlipValue}
          setCurrentBet={setCurrentBet}
          handleSubmit={handleSubmit}
          handleGuess={handleGuess}
          currentGuess={currentGuess}
          resetGame={resetGame}
          checked={checked}
          setChecked={setChecked}
        />
        <FlipLog
          flipArray={flipArray}
          currentPlayer={currentPlayer}
          currentBet={currentBet} 
          flipValue={flipValue}
          winner={winner}
          currentGuess={currentGuess}
          flipTime={flipTime}
        />
      </div>
      {toggleOutcome
        ? 
          <div className='body_outcome_container' >
        <Outcome
          currentPlayer={currentPlayer}
          currentBet={currentBet}
          currentGuess={currentGuess}
          flipValue={flipValue}
          winner={winner}
            
        />
      </div> 
        :
        <></>
      }
      
    </>
  );
}

export default Body
