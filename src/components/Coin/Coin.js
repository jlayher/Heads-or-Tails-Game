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
          <div>Current Bet: {currentBet}</div>
          <div>Flip Outcome: {flipValue}</div>
        </div>
      </div>

      <div className="coin">
        <img src="/heads_test.jpg" />
      </div>

      <div className="coin_container-main">
        <div className="coin_container-main_bet">
          <div className="coin_container_main_bet_title">Place Your Bet!</div>
          <div className="coin_container_main_bet_form">
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
          </div>
        </div>

        <div className="coin_container-main_guess">
          <div className="coin_container_main_guess_title">
            Select Your Guess {currentPlayer}
          </div>
          <div className="coin_container_main_guess_form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setGuess(guess);
                handleGuess(guess);
              }}>
              <div className="coin_container_main_guess_form_radio">
                <div>
                  <label for="heads">Heads</label>
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

                <div>
                  <label for="tails">Tails</label>
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
              </div>

              <div className="coin_container-main_guess-submit">
                <button type="submit" name="submit guess" >
                  Submit Your Guess!
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="coin_container-main_buttons">
          <div className="coin_container-main_flip">
            <button onClick={coinFlip}>Flip!</button>
          </div>
          <div className="coin_container-main_reset">
            <button onClick={resetGame}>Start Next Game</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Coin;
