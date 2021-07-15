import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [state, setstate] = useState({
    a: "",
    b: "",
    c: "",

    d: "",
    e: "",
    f: "",

    g: "",
    h: "",
    i: "",
  });

  const [disable, setdisable] = useState({
    a: false,
    b: false,
    c: false,

    d: false,
    e: false,
    f: false,

    g: false,
    h: false,
    i: false,
  });

  const [winner, setwinner] = useState("");
  const [count, setcount] = useState("X");
  const [start, setstart] = useState(0);

  const handleClick = (value) => {
    setstate({
      ...state,
      [value]: count,
    });

    setdisable({
      ...disable,
      [value]: true,
    });

    if (count === "X") {
      setcount("O");
    } else {
      setcount("X");
    }

    setstart(start + 1);
    console.log(start);
  };

  const handleReset = () => {
    setstate({
      a: "",
      b: "",
      c: "",

      d: "",
      e: "",
      f: "",

      g: "",
      h: "",
      i: "",
    });
    setdisable({
      a: false,
      b: false,
      c: false,

      d: false,
      e: false,
      f: false,

      g: false,
      h: false,
      i: false,
    });

    setwinner("");
    setcount("X");
    setstart(0);
  };

  const handleDisable = (value) => {
    setwinner(`${value} is a winner!`);
    setdisable({
      a: true,
      b: true,
      c: true,

      d: true,
      e: true,
      f: true,

      g: true,
      h: true,
      i: true,
    });
  };

  useEffect(() => {
    if ((state.a === state.b) & (state.b === state.c)) {
      if (state.a !== "") {
        handleDisable(state.a);
      }
    } else if ((state.d === state.e) & (state.e === state.f)) {
      if (state.d !== "") {
        handleDisable(state.d);
      }
    } else if ((state.g === state.h) & (state.h === state.i)) {
      if (state.g !== "") {
        handleDisable(state.g);
      }
    } else if ((state.a === state.d) & (state.d === state.g)) {
      if (state.a !== "") {
        handleDisable(state.a);
      }
    } else if ((state.b === state.e) & (state.e === state.h)) {
      if (state.b !== "") {
        handleDisable(state.b);
      }
    } else if ((state.c === state.f) & (state.f === state.i)) {
      if (state.c !== "") {
        handleDisable(state.c);
      }
    } else if ((state.a === state.e) & (state.e === state.i)) {
      if (state.a !== "") {
        handleDisable(state.a);
      }
    } else if ((state.c === state.e) & (state.e === state.g)) {
      if (state.c !== "") {
        handleDisable(state.c);
      }
    } else {
      if (start === 9) {
        handleDisable("No one");
      }
    }
  }, [state, start]);

  return (
    <div className="App">
      <h1>Tic Tac Toa</h1>
      <h3>{winner}</h3>

      <div>
        <button className="resetbox p-2 btn btn-primary" onClick={handleReset}>
          Reset
        </button>
      </div>

      <div className="center p-5">
        <div className="d-flex flex-row">
          <button
            className="box"
            disabled={disable.a}
            onClick={() => handleClick("a")}
          >
            {state.a}
          </button>
          <button
            className="box"
            disabled={disable.b}
            onClick={() => handleClick("b")}
          >
            {state.b}
          </button>
          <button
            className="box"
            disabled={disable.c}
            onClick={() => handleClick("c")}
          >
            {state.c}
          </button>
        </div>
        <div className="d-flex flex-row">
          <button
            className="box"
            disabled={disable.d}
            onClick={() => handleClick("d")}
          >
            {state.d}
          </button>
          <button
            className="box"
            disabled={disable.e}
            onClick={() => handleClick("e")}
          >
            {state.e}
          </button>
          <button
            className="box"
            disabled={disable.f}
            onClick={() => handleClick("f")}
          >
            {state.f}
          </button>
        </div>
        <div className="d-flex flex-row">
          <button
            className="box"
            disabled={disable.g}
            onClick={() => handleClick("g")}
          >
            {state.g}
          </button>
          <button
            className="box"
            disabled={disable.h}
            onClick={() => handleClick("h")}
          >
            {state.h}
          </button>
          <button
            className="box"
            disabled={disable.i}
            onClick={() => handleClick("i")}
          >
            {state.i}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
