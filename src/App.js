import { useState } from "react";
import "./App.css";

function App() {
  const [grid, setGrid] = useState([
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  ]);

  function fireTorpedo(x, y) {
    let auxGrid = [...grid];
    if (auxGrid[x][y] === 1) {
      auxGrid[x][y] = 2;
    } else if (auxGrid[x][y] === 0) {
      auxGrid[x][y] = 3;
    }
    setGrid(auxGrid);
  }

  function getClassname(x, y) {
    if (grid[x][y] === 0 || grid[x][y] === 1) {
      return "blanco";
    }
    if (grid[x][y] === 2) {
      return "rojo";
    }
    if (grid[x][y] === 3) {
      return "gris";
    }
  }

  return (
    <div className="App">
      <div className="tablero">
        <div className="filas">
          <button
            className={getClassname(0, 0) + " boton-base"}
            onClick={() => fireTorpedo(0, 0)}
          ></button>
          <button
            className={getClassname(0, 1) + " boton-base"}
            onClick={() => fireTorpedo(0, 1)}
          ></button>
          <button
            className={getClassname(0, 2) + " boton-base"}
            onClick={() => fireTorpedo(0, 2)}
          ></button>
          <button
            className={getClassname(0, 3) + " boton-base"}
            onClick={() => fireTorpedo(0, 3)}
          ></button>
          <button
            className={getClassname(0, 4) + " boton-base"}
            onClick={() => fireTorpedo(0, 4)}
          ></button>
          <button
            className={getClassname(0, 5) + " boton-base"}
            onClick={() => fireTorpedo(0, 5)}
          ></button>
          <button
            className={getClassname(0, 6) + " boton-base"}
            onClick={() => fireTorpedo(0, 6)}
          ></button>
          <button
            className={getClassname(0, 7) + " boton-base"}
            onClick={() => fireTorpedo(0, 7)}
          ></button>
          <button
            className={getClassname(0, 8) + " boton-base"}
            onClick={() => fireTorpedo(0, 8)}
          ></button>
          <button
            className={getClassname(0, 9) + " boton-base"}
            onClick={() => fireTorpedo(0, 9)}
          ></button>
        </div>
        <div className="filas">
        <button
            className={getClassname(1, 0) + " boton-base"}
            onClick={() => fireTorpedo(1, 0)}
          ></button>
          <button
            className={getClassname(1, 1) + " boton-base"}
            onClick={() => fireTorpedo(1, 1)}
          ></button>
          <button
            className={getClassname(1, 2) + " boton-base"}
            onClick={() => fireTorpedo(1, 2)}
          ></button>
          <button
            className={getClassname(1, 3) + " boton-base"}
            onClick={() => fireTorpedo(1, 3)}
          ></button>
          <button
            className={getClassname(1, 4) + " boton-base"}
            onClick={() => fireTorpedo(1, 4)}
          ></button>
          <button
            className={getClassname(1, 5) + " boton-base"}
            onClick={() => fireTorpedo(1, 5)}
          ></button>
          <button
            className={getClassname(1, 6) + " boton-base"}
            onClick={() => fireTorpedo(1, 6)}
          ></button>
          <button
            className={getClassname(1, 7) + " boton-base"}
            onClick={() => fireTorpedo(1, 7)}
          ></button>
          <button
            className={getClassname(1, 8) + " boton-base"}
            onClick={() => fireTorpedo(1, 8)}
          ></button>
          <button
            className={getClassname(1, 9) + " boton-base"}
            onClick={() => fireTorpedo(1, 9)}
          ></button>
        </div>
        <div className="filas">
        <button
            className={getClassname(2, 0) + " boton-base"}
            onClick={() => fireTorpedo(2, 0)}
          ></button>
          <button
            className={getClassname(2, 1) + " boton-base"}
            onClick={() => fireTorpedo(2, 1)}
          ></button>
          <button
            className={getClassname(2, 2) + " boton-base"}
            onClick={() => fireTorpedo(2, 2)}
          ></button>
          <button
            className={getClassname(2, 3) + " boton-base"}
            onClick={() => fireTorpedo(2, 3)}
          ></button>
          <button
            className={getClassname(2, 4) + " boton-base"}
            onClick={() => fireTorpedo(2, 4)}
          ></button>
          <button
            className={getClassname(2, 5) + " boton-base"}
            onClick={() => fireTorpedo(2, 5)}
          ></button>
          <button
            className={getClassname(2, 6) + " boton-base"}
            onClick={() => fireTorpedo(2, 6)}
          ></button>
          <button
            className={getClassname(2, 7) + " boton-base"}
            onClick={() => fireTorpedo(2, 7)}
          ></button>
          <button
            className={getClassname(2, 8) + " boton-base"}
            onClick={() => fireTorpedo(2, 8)}
          ></button>
          <button
            className={getClassname(2, 9) + " boton-base"}
            onClick={() => fireTorpedo(2, 9)}
          ></button>
        </div>
        <div className="filas">
        <button
            className={getClassname(3, 0) + " boton-base"}
            onClick={() => fireTorpedo(3, 0)}
          ></button>
          <button
            className={getClassname(3, 1) + " boton-base"}
            onClick={() => fireTorpedo(3, 1)}
          ></button>
          <button
            className={getClassname(3, 2) + " boton-base"}
            onClick={() => fireTorpedo(3, 2)}
          ></button>
          <button
            className={getClassname(3, 3) + " boton-base"}
            onClick={() => fireTorpedo(3, 3)}
          ></button>
          <button
            className={getClassname(3, 4) + " boton-base"}
            onClick={() => fireTorpedo(3, 4)}
          ></button>
          <button
            className={getClassname(3, 5) + " boton-base"}
            onClick={() => fireTorpedo(3, 5)}
          ></button>
          <button
            className={getClassname(3, 6) + " boton-base"}
            onClick={() => fireTorpedo(3, 6)}
          ></button>
          <button
            className={getClassname(3, 7) + " boton-base"}
            onClick={() => fireTorpedo(3, 7)}
          ></button>
          <button
            className={getClassname(3, 8) + " boton-base"}
            onClick={() => fireTorpedo(3, 8)}
          ></button>
          <button
            className={getClassname(3, 9) + " boton-base"}
            onClick={() => fireTorpedo(3, 9)}
          ></button>
        </div>
        <div className="filas">
        <button
            className={getClassname(4, 0) + " boton-base"}
            onClick={() => fireTorpedo(4, 0)}
          ></button>
          <button
            className={getClassname(4, 1) + " boton-base"}
            onClick={() => fireTorpedo(4, 1)}
          ></button>
          <button
            className={getClassname(4, 2) + " boton-base"}
            onClick={() => fireTorpedo(4, 2)}
          ></button>
          <button
            className={getClassname(4, 3) + " boton-base"}
            onClick={() => fireTorpedo(4, 3)}
          ></button>
          <button
            className={getClassname(4, 4) + " boton-base"}
            onClick={() => fireTorpedo(4, 4)}
          ></button>
          <button
            className={getClassname(4, 5) + " boton-base"}
            onClick={() => fireTorpedo(4, 5)}
          ></button>
          <button
            className={getClassname(4, 6) + " boton-base"}
            onClick={() => fireTorpedo(4, 6)}
          ></button>
          <button
            className={getClassname(4, 7) + " boton-base"}
            onClick={() => fireTorpedo(4, 7)}
          ></button>
          <button
            className={getClassname(4, 8) + " boton-base"}
            onClick={() => fireTorpedo(4, 8)}
          ></button>
          <button
            className={getClassname(4, 9) + " boton-base"}
            onClick={() => fireTorpedo(4, 9)}
          ></button>
        </div>
        <div className="filas">
        <button
            className={getClassname(5, 0) + " boton-base"}
            onClick={() => fireTorpedo(5, 0)}
          ></button>
          <button
            className={getClassname(5, 1) + " boton-base"}
            onClick={() => fireTorpedo(5, 1)}
          ></button>
          <button
            className={getClassname(5, 2) + " boton-base"}
            onClick={() => fireTorpedo(5, 2)}
          ></button>
          <button
            className={getClassname(5, 3) + " boton-base"}
            onClick={() => fireTorpedo(5, 3)}
          ></button>
          <button
            className={getClassname(5, 4) + " boton-base"}
            onClick={() => fireTorpedo(5, 4)}
          ></button>
          <button
            className={getClassname(5, 5) + " boton-base"}
            onClick={() => fireTorpedo(5, 5)}
          ></button>
          <button
            className={getClassname(5, 6) + " boton-base"}
            onClick={() => fireTorpedo(5, 6)}
          ></button>
          <button
            className={getClassname(5, 7) + " boton-base"}
            onClick={() => fireTorpedo(5, 7)}
          ></button>
          <button
            className={getClassname(5, 8) + " boton-base"}
            onClick={() => fireTorpedo(5, 8)}
          ></button>
          <button
            className={getClassname(5, 9) + " boton-base"}
            onClick={() => fireTorpedo(5, 9)}
          ></button>
        </div>
        <div className="filas">
        <button
            className={getClassname(6, 0) + " boton-base"}
            onClick={() => fireTorpedo(6, 0)}
          ></button>
          <button
            className={getClassname(6, 1) + " boton-base"}
            onClick={() => fireTorpedo(6, 1)}
          ></button>
          <button
            className={getClassname(6, 2) + " boton-base"}
            onClick={() => fireTorpedo(6, 2)}
          ></button>
          <button
            className={getClassname(6, 3) + " boton-base"}
            onClick={() => fireTorpedo(6, 3)}
          ></button>
          <button
            className={getClassname(6, 4) + " boton-base"}
            onClick={() => fireTorpedo(6, 4)}
          ></button>
          <button
            className={getClassname(6, 5) + " boton-base"}
            onClick={() => fireTorpedo(6, 5)}
          ></button>
          <button
            className={getClassname(6, 6) + " boton-base"}
            onClick={() => fireTorpedo(6, 6)}
          ></button>
          <button
            className={getClassname(6, 7) + " boton-base"}
            onClick={() => fireTorpedo(6, 7)}
          ></button>
          <button
            className={getClassname(6, 8) + " boton-base"}
            onClick={() => fireTorpedo(6, 8)}
          ></button>
          <button
            className={getClassname(6, 9) + " boton-base"}
            onClick={() => fireTorpedo(6, 9)}
          ></button>
        </div>
        <div className="filas">
        <button
            className={getClassname(7, 0) + " boton-base"}
            onClick={() => fireTorpedo(7, 0)}
          ></button>
          <button
            className={getClassname(7, 1) + " boton-base"}
            onClick={() => fireTorpedo(7, 1)}
          ></button>
          <button
            className={getClassname(7, 2) + " boton-base"}
            onClick={() => fireTorpedo(7, 2)}
          ></button>
          <button
            className={getClassname(7, 3) + " boton-base"}
            onClick={() => fireTorpedo(7, 3)}
          ></button>
          <button
            className={getClassname(7, 4) + " boton-base"}
            onClick={() => fireTorpedo(7, 4)}
          ></button>
          <button
            className={getClassname(7, 5) + " boton-base"}
            onClick={() => fireTorpedo(7, 5)}
          ></button>
          <button
            className={getClassname(7, 6) + " boton-base"}
            onClick={() => fireTorpedo(7, 6)}
          ></button>
          <button
            className={getClassname(7, 7) + " boton-base"}
            onClick={() => fireTorpedo(7, 7)}
          ></button>
          <button
            className={getClassname(7, 8) + " boton-base"}
            onClick={() => fireTorpedo(7, 8)}
          ></button>
          <button
            className={getClassname(7, 9) + " boton-base"}
            onClick={() => fireTorpedo(7, 9)}
          ></button>
        </div>
        <div className="filas">
        <button
            className={getClassname(8, 0) + " boton-base"}
            onClick={() => fireTorpedo(8, 0)}
          ></button>
          <button
            className={getClassname(8, 1) + " boton-base"}
            onClick={() => fireTorpedo(8, 1)}
          ></button>
          <button
            className={getClassname(8, 2) + " boton-base"}
            onClick={() => fireTorpedo(8, 2)}
          ></button>
          <button
            className={getClassname(8, 3) + " boton-base"}
            onClick={() => fireTorpedo(8, 3)}
          ></button>
          <button
            className={getClassname(8, 4) + " boton-base"}
            onClick={() => fireTorpedo(8, 4)}
          ></button>
          <button
            className={getClassname(8, 5) + " boton-base"}
            onClick={() => fireTorpedo(8, 5)}
          ></button>
          <button
            className={getClassname(8, 6) + " boton-base"}
            onClick={() => fireTorpedo(8, 6)}
          ></button>
          <button
            className={getClassname(8, 7) + " boton-base"}
            onClick={() => fireTorpedo(8, 7)}
          ></button>
          <button
            className={getClassname(8, 8) + " boton-base"}
            onClick={() => fireTorpedo(8, 8)}
          ></button>
          <button
            className={getClassname(8, 9) + " boton-base"}
            onClick={() => fireTorpedo(8, 9)}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default App;
