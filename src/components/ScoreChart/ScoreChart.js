import React from "react";
import "./scorechart.css";

const ScoreChart = ({ playerOneScore, playerTwoScore }) => {
  //whos in first
  const calcCurrentWinner = () => {
    if (playerOneScore > playerTwoScore) {
      return "Player 1";
    } else if (playerTwoScore > playerOneScore) {
      return "Player 2";
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
            <div>Current Winner:</div>
            <div>{calcCurrentWinner()}</div>
            <br/>
            <br/>
            <div>Amount Owed:</div>
            <div>${Math.abs(playerOneScore)}</div>
          </div>
          <div className="score_container_explain">
            <div>
            This application allows users to place a monetary bet, a guess as to
            the outcome of the coing flip, manages a log of the flip history,
            and displays the current winner and money owed! To play, place your
            bet, select and submit your guess, click "Flip!", and click "Start
            Next Game"!
            </div>
          </div>
        </div>
      </div>
      {/* be able to name the 2 players */}
      {/* <div>
        <input type="text" placeholder="Player Name"></input>
      </div> */}
    </>
  );
};

export default ScoreChart;
