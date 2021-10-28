import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function App() {
  const [squares, setSquares] = useState({
    1: { status: false, tipo: "" },
    2: { status: false, tipo: "" },
    3: { status: false, tipo: "" },
    4: { status: false, tipo: "" },
    5: { status: false, tipo: "" },
    6: { status: false, tipo: "" },
    7: { status: false, tipo: "" },
    8: { status: false, tipo: "" },
    9: { status: false, tipo: "" },
  });
  const [type, setType] = useState(false);
  const [win, setWin] = useState(false);

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
  }, [type, squares]);

  const handleClick = (event) => {
    setSquares((prevValue) => ({
      ...prevValue,
      [event.target.value]: { status: true, tipo: type ? "x" : "o" },
    }));
    setType(!type);
  };

  return (
    <div>
      <h1>{win ? "WIN!" : "PLAY"}</h1>
      <div>
        <button onClick={handleClick} value={1}>
          1
        </button>
        <button onClick={handleClick} value={2}>
          2
        </button>
        <button onClick={handleClick} value={3}>
          3
        </button>
      </div>
      <div>
        <button onClick={handleClick} value={4}>
          4
        </button>
        <button onClick={handleClick} value={5}>
          5
        </button>
        <button onClick={handleClick} value={6}>
          6
        </button>
      </div>
      <div>
        <button onClick={handleClick} value={7}>
          7
        </button>
        <button onClick={handleClick} value={8}>
          8
        </button>
        <button onClick={handleClick} value={9}>
          9
        </button>
      </div>
    </div>
  );
}

export default App;
