import { React, useState, useEffect } from "react";
import "./scorechart.css";

const ScoreChart = ({
  playerOneScore,
  playerTwoScore,
  setOpenModal,
  openModal,
  player1Name,
  player2Name,
}) => {
  //whos in first
  const calcCurrentWinner = () => {
    if (playerOneScore > playerTwoScore) {
      return `${player1Name}`;
    } else if (playerTwoScore > playerOneScore) {
      return `${player2Name}`;
    } else {
      return "";
    }
  };

  // LosingPlayer owes WinningPlayer winningPlayerScore

  return (
    <>
      <div className="score_container">
        <div className="score_container-title">Current Sum of Bets</div>

        <div className="score_container_content">
          <div className="score_container-playerbox">
            {/* <div>Players:</div>
            <div>Player 1</div>
            <div>Player 2</div> */}

            <div className="score_container-playerbox_current">
              Current Winner
            </div>
            <div>{calcCurrentWinner()}</div>
            <br />
            <br />
            <div>Amount Owed</div>
            <div>${Math.abs(playerOneScore)}</div>
            <br />
            <br />
          </div>
        </div>
        <div className="score_container_explain">
          <div>
            This application allows users to:
            <br />
            -Place a monetary bet.
            <br />
            -Guess the outcome of a coin flip.
            <br />
            -Calculate the current winner, and money owed.
            <br/>
            -Review previous game outcomes by scrolling down the "Flip Log" Panel.
            <br />
            <br />
            <br />
            <div>
              How To Play,<br/><br/>
              1. Player 1 places the first bet!
Select the amount you wish to bet by hovering over the "Place Your Bet!" box, and using the up/down arrows that appear, or by entering a number 
              using your keyboard.<br/><br/>

              2. Select your Guess by clicking either Heads or Tails.<br/><br/>
              3. Submit your Guess by clicking the "Submit Your Guess!" Button.<br/><br/>
              4. Click the "Flip!" Button to see the Outcome!<br/><br/>
              5. Click "Start Next Game" to Play Again, but with Player 2 choosing their guess!
              &nbsp;The Application will track who is Winning and by How Much for You!!<br/><br/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreChart;
