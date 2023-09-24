import React, { useState } from "react";

const Board = () => {
  const [blockState, setBlockState] = useState(Array(9).fill(null));
  const [xNext, setXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState(0);

  const restart = () => {
    setBlockState(Array(9).fill(null));
    setXNext(true);
    setWinner(null);
    setTurn(0);
  };

  const checkResult = () => {
    let arr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < arr.length; i++) {
      if (
        blockState[arr[i][0]] === "X" &&
        blockState[arr[i][1]] === "X" &&
        blockState[arr[i][2]] === "X"
      ) {
        console.log(arr[i]);
        setWinner("X");
      } else if (
        blockState[arr[i][0]] === "O" &&
        blockState[arr[i][1]] === "O" &&
        blockState[arr[i][2]] === "O"
      ) {
        console.log(arr[i]);
        setWinner("O");
      }
    }
  };

  const squareClicked = (box) => {
    if (blockState[box] !== null || winner !== null) {
      return;
    }
    setTurn((prev) => prev + 1);
    if (xNext) blockState[box] = "X";
    else blockState[box] = "O";
    setXNext(!xNext);
    const newArr = [...blockState];
    setBlockState(newArr);
    checkResult();
  };

  return (
    <>
      <h2 className="heading">TIC TAC TOE</h2>
      <div className="board">
        <h3 className="result">
          {winner === null
            ? turn === 9
              ? "Match is draw restart again"
              : `NEXT TURN OF ${xNext ? "X" : "O"}`
            : `Winner is ${winner}`}
        </h3>

        <div className="row">
          <div className="block" onClick={() => squareClicked(0)}>
            {blockState[0]}
          </div>
          <div className="block" onClick={() => squareClicked(1)}>
            {blockState[1]}
          </div>
          <div className="block" onClick={() => squareClicked(2)}>
            {blockState[2]}
          </div>
        </div>

        <div className="row">
          <div className="block" onClick={() => squareClicked(3)}>
            {blockState[3]}
          </div>
          <div className="block" onClick={() => squareClicked(4)}>
            {blockState[4]}
          </div>
          <div className="block" onClick={() => squareClicked(5)}>
            {blockState[5]}
          </div>
        </div>

        <div className="row">
          <div className="block" onClick={() => squareClicked(6)}>
            {blockState[6]}
          </div>
          <div className="block" onClick={() => squareClicked(7)}>
            {blockState[7]}
          </div>
          <div className="block" onClick={() => squareClicked(8)}>
            {blockState[8]}
          </div>
        </div>
        <button className="restart" onClick={restart}>
          Restart
        </button>
      </div>
    </>
  );
};

export default Board;
