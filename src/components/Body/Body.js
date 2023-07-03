import { React, useState, useEffect } from 'react'
import "./body.css"
import Coin from '../Coin/Coin'
import ScoreChart from '../ScoreChart/ScoreChart'
import FlipLog from '../FlipLog/FlipLog'
import Outcome from '../Outcome/Outcome'
import Modal from '../Modal/Modal'

const Body = () => {
  const [currentPlayer, setCurrentPlayer] = useState("Player 1");
  const [currentBet, setCurrentBet] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [flipValue, setFlipValue] = useState("");
  const [flipTime, setFlipTime] = useState("");
  let [playerOneScore, setPlayerOneScore] = useState(0);
  let [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [winner, setWinner] = useState("");
  const [checked, setChecked] = useState(false);
  // const [flipArray, setFlipArray] = useState([]);
  const [toggleOutcome, setToggleOutcome] = useState(false);
  const [history, setHistory] = useState([]);
  // const [updateHistory, setUpdateHistory] = useState(false)
  const [openModal, setOpenModal] = useState(false);
  const [player1Name, setPlayer1Name] = useState("Player 1")
  const [player2Name, setPlayer2Name] = useState("Player 2")



  //set this to true in the modal
  const [playerNameChange, setPlayerNameChange] = useState(false);


  useEffect(() => {
    calculateWinner();
  }, [flipValue])



//DEAL WITH THIS!  Swap names out after input
  useEffect(() => {
    
  }, []);

  const handleNames = (name1, name2) => {
    setPlayer1Name(name1);
    setPlayer2Name(name2);
    setCurrentPlayer(name1)
  }

//LOOK THIS OVER
  const createNewHistory = () => {
    let newHistory = {
      time: `${flipTime}`,
      player: `${currentPlayer}`,
      bet: currentBet,
      guess: `${currentGuess}`,
      flip: `${flipValue}`,
      winner: `${winner}`,
    }
    setHistory([...history, newHistory])
  }

  const calculateWinner = () => {
    if (currentPlayer === `${player1Name}` && flipValue === currentGuess) {
      setWinner(`${player1Name}`)
    } else if (currentPlayer === `${player2Name}` && flipValue === currentGuess) {
      setWinner(`${player2Name}`)
    } else if (currentPlayer === `${player1Name}` && flipValue !== currentGuess) {
      setWinner(`${player2Name}`)
    } else {
      setWinner(`${player1Name}`)
    }
  }

  const resetGame = () => {
    if (currentGuess !== "" && flipTime !== "") {
      setCurrentBet(0)
    updateScores();
    createNewHistory();
   
    setFlipValue("");
    // setCurrentBet(0);
    changePlayer();
    setCurrentGuess("");
    setToggleOutcome(false);
      setChecked(false);

    }

  };


  const timeOfFlip = () => {
    const today = new Date();
    const month = today.getMonth() +1;
    const day = today.getDate();
    const year = today.getFullYear(); 
    let hour = today.getHours();
    if (hour > 12) {
      hour = hour - 12;
    }
    if (hour < 10) {
      hour = `0${hour}`   
    }
    let mins = today.getMinutes();
    if (mins < 10) {
      mins = `0${mins}`   
    }
    let secs = today.getSeconds();
    if (secs < 10) {
      secs = `0${secs}` 
    }
    const amPm = ( hour >= 12) ? "AM" : "PM";
    const timeOfFlip = `${hour}:${mins}:${secs} ${amPm} ${month}-${day}-${year}`;
    setFlipTime(timeOfFlip);
  };

  //calculate heads or tails when coin flips
  const calcFlip = () => {
      const randomFlip = Math.floor(Math.random() * 2);
      const flip = randomFlip ? "Heads" : "Tails";
      setFlipValue(flip);
  };

  //change current player when coin flips
  const changePlayer = () => {
    if (currentPlayer === `${player1Name}`) {
      setCurrentPlayer(`${player2Name}`);
    } else {
      setCurrentPlayer(`${player1Name}`);
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


  //current bet gets added like a string
  const updateScores = () => {
    let bet = parseInt(currentBet)
    if (currentPlayer === `${player1Name}` && winner === `${player1Name}`) {
      setPlayerOneScore((playerOneScore) => playerOneScore + bet);
      setPlayerTwoScore((playerTwoScore) => playerTwoScore - bet);
    } else if (currentPlayer === `${player1Name}` && winner === `${player2Name}`) {
      setPlayerOneScore((playerOneScore) => playerOneScore - bet);
      setPlayerTwoScore((playerTwoScore) => playerTwoScore + bet);
    } else if (currentPlayer === `${player2Name}` && winner === `${player2Name}`) {
      setPlayerTwoScore((playerTwoScore) => playerTwoScore + bet);
      setPlayerOneScore((playerOneScore) => playerOneScore - bet);
    }else if (currentPlayer === `${player2Name}` && winner === `${player1Name}`) {
      setPlayerTwoScore((playerTwoScore) => playerTwoScore - bet);
      setPlayerOneScore((playerOneScore) => playerOneScore + bet);
    }
  }

  return (
    <>
         {toggleOutcome
        ? 
          <div className='body_outcome_container' >
        <Outcome
          currentPlayer={currentPlayer}
          currentBet={currentBet}
          currentGuess={currentGuess}
          flipValue={flipValue}
          winner={winner}
            flipTime={flipTime}
            resetGame={resetGame}
        />
      </div> 
        :
        <></>
      }
      <div className="body_container">
        
        {openModal && <Modal
          setOpenModal={setOpenModal} 
          player1Name={player1Name}
          player2Name={player2Name}
          setPlayer1Name={setPlayer1Name}
          setPlayer2Name={setPlayer2Name}
          handleNames={handleNames}
          />}
        <ScoreChart
          playerOneScore={playerOneScore}
          playerTwoScore={playerTwoScore}
          player1Name={player1Name}
          player2Name={player2Name}
          currentBet={currentBet}
          setOpenModal={setOpenModal}
          openModal={openModal}
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
          history={history}
          currentPlayer={currentPlayer}
          currentBet={currentBet} 
          flipValue={flipValue}
          winner={winner}
          currentGuess={currentGuess}
          flipTime={flipTime}
        />
      </div>

   
    </>
  );
}

export default Body
