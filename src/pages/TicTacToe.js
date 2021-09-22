import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import theme from "../theme";
import calculateWinner from "../utils/calculateWinner";
import Board from "../components/TicTacToe-components/Board";

const useStyles = makeStyles((theme) => ({
  body: {
    font: '14px "Century Gothic", Futura, sans-serif',
    margin: "20px",
  },

  status: {
    marginBottom: "10px",
  },

  game: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  gameInfo: {
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "center",
  },
  resetBtn: {
    marginTop: "20px",
  }
}));

export default function Game() {
  const classes = useStyles();

  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setStepNumber(newHistory.length);
    setHistory(
      newHistory.concat([
        {
          squares: squares,
        },
      ])
    );
  };

  const clearGame = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const clear = history.slice(0).squares;
    setHistory(newHistory.concat([
      {
        squares: clear,
      },
    ])
    );
    setXIsNext(xIsNext);
    setStepNumber(0);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  // const moves = history.map((step, move) => {
  //   const desc = move ? "Go to move #" + move : "Go to game start";
  //   return (
  //     <li key={move}>
  //       <Button size="small" color="secondary" variant="outlined" onClick={() => jumpTo(move)}>{desc}</Button>
  //     </li>
  //   );
  // });
  // const jumpTo = (step) => {
  //   setStepNumber(step);
  //   setXIsNext(step % 2 === 0);
  // };

  let status;
  let gameTitle = "Tic-Tac-Toe!";
  if (winner) {
    gameTitle = "Winner:   " + winner;
    status = "Game Over";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <div className={classes.game}>
      <h1 className={classes.gameTitle}>{gameTitle}</h1>

      <div className={classes.gameBoard}>
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className={classes.gameInfo}>
        <div>{status}</div>
        <Button
          className={classes.resetBtn}
          size="small"
          color="secondary"
          variant="outlined"
          onClick={() => clearGame()}
        >
          Reset Game
        </Button>
        {/* <div>{moves}</div> */}
      </div>
    </div>
  );
}
