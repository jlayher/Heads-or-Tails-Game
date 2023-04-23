import React from "react";
import "./scorechart.css";

const ScoreChart = ({ playerOneScore, playerTwoScore }) => {
  

  //whos in first
  const calcCurrentWinner = () => {
    if (playerOneScore > playerTwoScore) {
      return "Player 1"
    } else if (playerTwoScore > playerOneScore) {
      return "Player 2"
    } else {
      return ""
    }
  }

  // LosingPlayer owes WinningPlayer winningPlayerScore

  return (
    <div className="score_container">
      <div className="score_container-title">Current Sum of Bets</div>

      <div className="score_container-playerbox">
        <div>Current Winner: {calcCurrentWinner()}</div>
        <div>Amount Owed: ${Math.abs(playerOneScore)}</div>

      </div>
      {/* be able to name the 2 players */}
      {/* <div>
        <input type="text" placeholder="Player Name"></input>
      </div> */}

      
    </div>
  );
};

export default ScoreChart;
