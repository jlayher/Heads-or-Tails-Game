import { React, useState } from 'react'
import "./coin.css"


const Coin = ({ currentPlayer, currentBet, coinFlip, flipValue, setCurrentBet, handleSubmit, handleGuess, currentGuess, resetGame }) => {
  
  const [bet, setBet] = useState(0);
  const [guess, setGuess] = useState("");

  return (
    <div className="coin_container">
      <div className="coin_container-current">
        <div>Current Player: {currentPlayer}</div>
        <div>Player's Guess: {currentGuess}</div>
        <div>Current Bet: {currentBet}</div>
        <div>Flip Outcome: {flipValue}</div>
      </div>

      <div className="coin">
        <img src="/heads_test.jpg" />
      </div>

      <div>
      <div>Place Your Bet!</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(bet);
            setBet(0);
          }}>
          <input
            type="number"
            name="bet"
            placeholder={0}
            value={bet}
            onChange={(e) => setBet(e.target.value)}
          />
          <button type="submit" name="submit bet">
            Place Bet
          </button>
        </form>

        <div />

        <div>
          <div>Select Your Guess {currentPlayer}</div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setGuess(guess);
              handleGuess(guess);

            }}>

            <label for="heads">Heads</label>
            <input
              type="radio"
              id="heads"
              name="flipvalue"
              value="Heads"
              onChange={(e) => setGuess(e.target.value)}></input>
            <label for="tails">Tails</label>
            <input
              type="radio"
              id="tails"
              name="flipvalue"
              value="Tails"
            onChange={(e) => setGuess(e.target.value)}></input>
            <button type="submit" name="submit guess">
              Submit Your Guess!
            </button>
          </form>
        </div>
      </div>

      <div>
        <button onClick={coinFlip}>Flip!</button>
      </div>

      <div>
        <button onClick={resetGame}>Start Next Game</button>
      </div>
    </div>
  );
}

export default Coin
