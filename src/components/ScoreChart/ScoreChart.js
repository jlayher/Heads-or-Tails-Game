import React from "react";
import "./scorechart.css";

const ScoreChart = () => {
  return (
    <div className="score_container">
      <div className="score_container-title">Score Chart</div>

      <div className="score_container-playerbox">
        {/* calculate the winning player in app component*/}
        <div>Player Losing owes Player Winning $10</div>
      </div>
    </div>
  );
};

export default ScoreChart;
