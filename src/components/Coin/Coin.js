import { React, useState } from "react";
import "./coin.css";

const Coin = ({
  currentPlayer,
  currentBet,
  coinFlip,
  flipValue,
  setCurrentBet,
  checked,
  setChecked,
  handleSubmit,
  handleGuess,
  currentGuess,
  resetGame,
}) => {
  const [bet, setBet] = useState(0);
  const [guess, setGuess] = useState("");

  return (
    <div className="coin_container">
      
      <div className="coin_container-current">
        <div className="coin_container-current_player">
          <div>Current Player: {currentPlayer}</div>
          <div>Player's Guess: {currentGuess}</div>
        </div>
        <div className="coin_container-current_outcome">
          <div>Current Bet: ${currentBet}</div>
          <div>Flip Outcome: {flipValue}</div>
        </div>
      </div>

      <div className="coin">
        {flipValue === "Tails"
        ? <img className="coin_img" src="/tails-pic.png" />
        : <img className="coin_img" src="/heads-pic.png" />
        }
      </div>

    
      <div className="coin_container-main">
      <div className="coin_container_main_bet_title">Place Your Bet!</div>
        <div className="coin_container-main_bet">

          <div className="coin_container_main_bet_form">
            <form
              className="coin_container_main_bet_form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(bet);
                setBet(0);
              }}>
              <input
                type="number"
                name="bet"
                className="coin_container_main_bet_input"
                placeholder={0}
                value={bet}
                onChange={(e) => setBet(e.target.value)}
              />
              <button type="submit" name="submit bet" className="bet_btn">
                Place Bet
              </button>
            </form>
          </div>
        </div>

        <div className="coin_container-main_guess">
          
          <div className="coin_container_main_guess_title">
            Select Your Guess, {currentPlayer}
          </div>

          <div className="coin_container_main_guess_form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setGuess(guess);
                handleGuess(guess);
              }}>
              <div className="coin_container_main_guess_form_radio">
                
                <div className="coin_container_main_guess_form_radio_btn">
                  <label for="heads">Heads </label>
                  <input
                    type="radio"
                    id="heads"
                    name="flipvalue"
                    value="Heads"
                    checked={checked}
                    onChange={(e) => {
                      setGuess(e.target.value);
                      setChecked();
                    }}></input>
                </div>

                <div className="coin_container_main_guess_form_radio_btn">
                  <label for="tails">Tails </label>
                  <input
                    type="radio"
                    id="tails"
                    name="flipvalue"
                    value="Tails"
                    checked={checked}
                    onChange={(e) => {
                      setGuess(e.target.value);
                      setChecked();
                    }}></input>
                </div>

                <div className="coin_container-main_guess-submit">
                  <button type="submit" name="submit guess" >
                    Submit Your Guess!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="coin_container-main_buttons">
          <div className="coin_container-main_flip">
            <button type="submit" onClick={coinFlip}>Flip!</button>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Coin;
