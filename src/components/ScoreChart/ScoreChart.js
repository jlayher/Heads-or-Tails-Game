import React from "react";
import "./scorechart.css";

const ScoreChart = () => {
  return (
    <div className="score_container">
      <div className="score_container-title">Score Chart</div>

      <div className="score_container-playerbox">
        <div>Player 1 owes $10</div>
        <div>Player 2 won $10</div>
      </div>
    </div>
  );
};

export default ScoreChart;
