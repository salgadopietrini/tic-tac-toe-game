import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [squares, setSquares] = useState({
    1: { id: 1, status: false, tipo: "." },
    2: { id: 2, status: false, tipo: "." },
    3: { id: 3, status: false, tipo: "." },
    4: { id: 4, status: false, tipo: "." },
    5: { id: 5, status: false, tipo: "." },
    6: { id: 6, status: false, tipo: "." },
    7: { id: 7, status: false, tipo: "." },
    8: { id: 8, status: false, tipo: "." },
    9: { id: 9, status: false, tipo: "." },
  });
  const [type, setType] = useState(false);
  const [win, setWin] = useState(false);
  const [tie, setTie] = useState(false);
  const [winLine, setWinLine] = useState([]);

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
    setTie(Object.values(squares).every((elem) => elem.status));

    setWinLine(
      winLines.find((line) =>
        line.every(
          (square) => square.status && square.tipo === (type ? "o" : "x")
        )
      )
    );
  }, [type, squares, win]);

  const handleClick = (event) => {
    if (win === false) {
      setSquares((prevValue) => ({
        ...prevValue,
        [event.target.value]: {
          id: prevValue[event.target.value].id,
          status: true,
          tipo: type ? "x" : "o",
        },
      }));
      setType(!type);
    }
  };

  const handleRestart = () => {
    setSquares({
      1: { id: 1, status: false, tipo: "." },
      2: { id: 2, status: false, tipo: "." },
      3: { id: 3, status: false, tipo: "." },
      4: { id: 4, status: false, tipo: "." },
      5: { id: 5, status: false, tipo: "." },
      6: { id: 6, status: false, tipo: "." },
      7: { id: 7, status: false, tipo: "." },
      8: { id: 8, status: false, tipo: "." },
      9: { id: 9, status: false, tipo: "." },
    });
    setWinLine([1, 2, 3]);
  };

  return (
    <div className="container">
      <h1>{win ? "WIN!" : tie ? "TIE" : "PLAY"}</h1>
      <div className="squaresGeneralDiv">
        <h2>Turn:</h2>
        <div>{type ? "x" : "o"}</div>
        <div>
          <div className="lineDiv">
            <button
              style={{
                color: squares[1].status ? "black" : "white",
                backgroundColor:
                  win &&
                  winLine.length > 0 &&
                  winLine.some((elem) => elem.id === 1)
                    ? "aqua"
                    : null,
              }}
              onClick={handleClick}
              value={1}
            >
              {squares[1].tipo}
            </button>
            <button
              style={{
                color: squares[2].status ? "black" : "white",
                backgroundColor:
                  win &&
                  winLine.length > 0 &&
                  winLine.some((elem) => elem.id === 2)
                    ? "aqua"
                    : null,
              }}
              onClick={handleClick}
              value={2}
            >
              {squares[2].tipo}
            </button>
            <button
              style={{
                color: squares[3].status ? "black" : "white",
                backgroundColor:
                  win &&
                  winLine.length > 0 &&
                  winLine.some((elem) => elem.id === 3)
                    ? "aqua"
                    : null,
              }}
              onClick={handleClick}
              value={3}
            >
              {squares[3].tipo}
            </button>
          </div>
          <div className="lineDiv">
            <button
              style={{
                color: squares[4].status ? "black" : "white",
                backgroundColor:
                  win &&
                  winLine.length > 0 &&
                  winLine.some((elem) => elem.id === 4)
                    ? "aqua"
                    : null,
              }}
              onClick={handleClick}
              value={4}
            >
              {squares[4].tipo}
            </button>
            <button
              style={{
                color: squares[5].status ? "black" : "white",
                backgroundColor:
                  win &&
                  winLine.length > 0 &&
                  winLine.some((elem) => elem.id === 5)
                    ? "aqua"
                    : null,
              }}
              onClick={handleClick}
              value={5}
            >
              {squares[5].tipo}
            </button>
            <button
              style={{
                color: squares[6].status ? "black" : "white",
                backgroundColor:
                  win &&
                  winLine.length > 0 &&
                  winLine.some((elem) => elem.id === 6)
                    ? "aqua"
                    : null,
              }}
              onClick={handleClick}
              value={6}
            >
              {squares[6].tipo}
            </button>
          </div>
          <div className="lineDiv">
            <button
              style={{
                color: squares[7].status ? "black" : "white",
                backgroundColor:
                  win &&
                  winLine.length > 0 &&
                  winLine.some((elem) => elem.id === 7)
                    ? "aqua"
                    : null,
              }}
              onClick={handleClick}
              value={7}
            >
              {squares[7].tipo}
            </button>
            <button
              style={{
                color: squares[8].status ? "black" : "white",
                backgroundColor:
                  win &&
                  winLine.length > 0 &&
                  winLine.some((elem) => elem.id === 8)
                    ? "aqua"
                    : null,
              }}
              onClick={handleClick}
              value={8}
            >
              {squares[8].tipo}
            </button>
            <button
              style={{
                color: squares[9].status ? "black" : "white",
                backgroundColor:
                  win &&
                  winLine.length > 0 &&
                  winLine.some((elem) => elem.id === 9)
                    ? "aqua"
                    : null,
              }}
              onClick={handleClick}
              value={9}
            >
              {squares[9].tipo}
            </button>
          </div>

          <div>
            {win || tie ? (
              <button onClick={handleRestart}>Play Again!</button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
