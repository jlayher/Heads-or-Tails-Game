import { React, useState, useEffect } from 'react'
import "./scorechart.css";

const ScoreChart = ({ playerOneScore, playerTwoScore, setOpenModal, openModal, player1Name, player2Name }) => {




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

            <div>Current Winner:</div>
            <div>{calcCurrentWinner()}</div>
            <br />
            <br />
            <div>Amount Owed:</div>
            <div>${Math.abs(playerOneScore)}</div>
            <div>
              {/* onClick open the modal, and set state*/}
              <button
                type="button"
                className="score_container_button"
                onClick={() => {
                  setOpenModal(true)
                }}>
                Set Player Names
              </button>
            </div>
          </div>

          <div className="score_container_explain">
            <div>
              This application allows users to place a monetary bet, a guess as
              to the outcome of the coin flip, manages a log of the flip
              history, and displays the current winner and money owed! To play,
              place your bet, select and submit your guess, click "Flip!", and
              click "Start Next Game"!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreChart;
