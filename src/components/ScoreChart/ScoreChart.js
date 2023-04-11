import React from "react";
import "./scorechart.css";

const ScoreChart = ({playerOneScore, playerTwoScore}) => {
  return (
    <div className="score_container">
      <div className="score_container-title">Current Sum of Bets</div>

      <div className="score_container-playerbox">
        <div>Player 1 owes Player 2 ${playerOneScore}</div>
      </div>
      {/* be able to name the 2 players */}
      <div>
        <input type="text" placeholder="Player Name"></input>
      </div>

      
    </div>
  );
};

export default ScoreChart;
