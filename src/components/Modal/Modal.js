import React, { useState } from "react";

const Modal = ({
  setOpenModal,
  setPlayer1Name,
  setPlayer2Name,
  player1Name,
  handleNames,
}) => {
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");

  const handleChange1 = (e) => {
    setP1(e.target.value);
    console.log(p1);
  };
  const handleChange2 = (e) => {
    setP2(e.target.value);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button
          onClick={() => {
            setOpenModal(false);
          }}>
          X
        </button>
        <div className="modal_title">
          <h1>Do You Want to Input a Custom Player Name?</h1>
        </div>
        <div className="modal_body">
          <input
            type="text"
            className="modal_player1_input"
            placeholder="Player1"
            value={p1}
            onChange={handleChange1}></input>
          <input
            type="text"
            className="modal_player2_input"
            placeholder="Player2"
            value={p2}
            onChange={handleChange2}></input>
        </div>
        <div className="modal_footer">
          <button
            type="button"
            onClick={() => {
              setOpenModal(false);
            }}>
            Cancel
          </button>

          <button
            type="button"
            onClick={() => {
              handleNames(p1, p2);
            }}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
