import { React, useState } from 'react'
import "./coin.css"


const Coin = ({ currentPlayer, currentBet, coinFlip, flipValue, setCurrentBet, handleSubmit }) => {
  
  const [bet, setBet] = useState(0);


  return (
    <div className="coin_container">
      <div className="coin_container-current">
        <div>Current Player: {currentPlayer}</div>
        {/* update on button click */}
        <div>Player's Guess: Heads/Tails</div>
        <div>Current Bet: {currentBet}</div>
        <div>Flip Value: {flipValue}</div>
      </div>

      <div className="coin">
        <img src="/heads_test.jpg" />
      </div>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(bet);
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
        {/* player choses heads or tails using buttons or radio buttons
            The current player's choice should be reflected in the top, under current player */}
      </div>

      <div>
        <button onClick={coinFlip}>Flip!</button>
      </div>
    </div>
  );
}

export default Coin





      {/* <div>
          Input Bet!
        <input type='number' name="bet" placeholder={currentBet} onChange={(e) => setCurrentBet(e.target.value)} />
        <input type='submit' name="submit bet"/>
      </div> */}