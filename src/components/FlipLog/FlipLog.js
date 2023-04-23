import { React, useState } from "react";
import "./fliplog.css";


const FlipLog = ({
  history
}) => {
  const logs = () => {
    if (history.length > 0) {
      return history.map((game) => (
        <>
          <div>Time of Flip: {game.time}</div>
          <div>Player: {game.player}</div>
          <div>Bet: ${game.bet}</div>
          <div>Player Guess: {game.guess}</div>
          <div>Flip Value: {game.flip}</div>
          <div>Winner: {game.winner}</div>
          <br />
        </>
      ));
    }
  };
  return (
    <div className="flip_container">
      <div className="flip_container-title">Flip Log</div>
      {logs()}
    </div>
  );
};

export default FlipLog;

//create an empty array in state to track moves
