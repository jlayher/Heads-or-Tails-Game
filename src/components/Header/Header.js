import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header_container">
      <div className="title_container">
        <div>Flip a Coin!</div>
      </div>

      <div className="explain_container">
    This application allows users to place a monetary bet, a guess as to the outcome
          of the coing flip, manages a log of the flip history, and displays the current winner and money owed!
        To play, place your bet, select and submit your guess, click "Flip!", and click "Start Next Game"!</div>

    </div>
  );
};

export default Header;
