import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [squares, setSquares] = useState({
    1: { status: false, tipo: "." },
    2: { status: false, tipo: "." },
    3: { status: false, tipo: "." },
    4: { status: false, tipo: "." },
    5: { status: false, tipo: "." },
    6: { status: false, tipo: "." },
    7: { status: false, tipo: "." },
    8: { status: false, tipo: "." },
    9: { status: false, tipo: "." },
  });
  const [type, setType] = useState(false);
  const [win, setWin] = useState(false);
  const [tie, setTie] = useState(false);

  useEffect(() => {
    const winLines = [
      [squares[1], squares[2], squares[3]],
      [squares[4], squares[5], squares[6]],
      [squares[7], squares[8], squares[9]],
      [squares[1], squares[4], squares[7]],
      [squares[2], squares[5], squares[8]],
      [squares[3], squares[6], squares[9]],
      [squares[1], squares[5], squares[9]],
      [squares[3], squares[5], squares[7]],
    ];

    setWin((win) =>
      winLines.some((line) =>
        line.every(
          (square) => square.status && square.tipo === (type ? "o" : "x")
        )
      )
    );

    setTie(Object.values(squares));
  }, [type, squares]);

  const handleClick = (event) => {
    if (win === false) {
      setSquares((prevValue) => ({
        ...prevValue,
        [event.target.value]: { status: true, tipo: type ? "x" : "o" },
      }));
      setType(!type);
    }
  };

  const handleRestart = () => {
    setSquares({
      1: { status: false, tipo: "." },
      2: { status: false, tipo: "." },
      3: { status: false, tipo: "." },
      4: { status: false, tipo: "." },
      5: { status: false, tipo: "." },
      6: { status: false, tipo: "." },
      7: { status: false, tipo: "." },
      8: { status: false, tipo: "." },
      9: { status: false, tipo: "." },
    });
  };

  return (
    <div className="container">
      <h1>{win ? "WIN!" : "PLAY"}</h1>
      <div className="squaresGeneralDiv">
        <h2>Turn:</h2>
        <div>{type ? "x" : "o"}</div>
        <div>
          <div className="lineDiv">
            <button
              style={{ color: squares[1].status ? "black" : "white" }}
              onClick={handleClick}
              value={1}
            >
              {squares[1].tipo}
            </button>
            <button
              style={{ color: squares[2].status ? "black" : "white" }}
              onClick={handleClick}
              value={2}
            >
              {squares[2].tipo}
            </button>
            <button
              style={{ color: squares[3].status ? "black" : "white" }}
              onClick={handleClick}
              value={3}
            >
              {squares[3].tipo}
            </button>
          </div>
          <div className="lineDiv">
            <button
              style={{ color: squares[4].status ? "black" : "white" }}
              onClick={handleClick}
              value={4}
            >
              {squares[4].tipo}
            </button>
            <button
              style={{ color: squares[5].status ? "black" : "white" }}
              onClick={handleClick}
              value={5}
            >
              {squares[5].tipo}
            </button>
            <button
              style={{ color: squares[6].status ? "black" : "white" }}
              onClick={handleClick}
              value={6}
            >
              {squares[6].tipo}
            </button>
          </div>
          <div className="lineDiv">
            <button
              style={{ color: squares[7].status ? "black" : "white" }}
              onClick={handleClick}
              value={7}
            >
              {squares[7].tipo}
            </button>
            <button
              style={{ color: squares[8].status ? "black" : "white" }}
              onClick={handleClick}
              value={8}
            >
              {squares[8].tipo}
            </button>
            <button
              style={{ color: squares[9].status ? "black" : "white" }}
              onClick={handleClick}
              value={9}
            >
              {squares[9].tipo}
            </button>
          </div>

          <div>
            {win ? <button onClick={handleRestart}>Play Again!</button> : null}
          </div>

          <div>
            {tie ? <button onClick={handleRestart}>Restart</button> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
