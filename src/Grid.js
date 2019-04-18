import React, { useState, useMemo } from "react";
import Switch from "./Switch";
import calculateNewValues from "./utils/calculateNewValues";
import checkVictory from "./utils/checkVictory";

import "./Grid.css";

function Grid() {
  const INITIAL_VALUES = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
  const INITIAL_STEPS_VALUE = 0;
  const [values, setValues] = useState(INITIAL_VALUES);
  const [stepCounter, setStepCounterValue] = useState(INITIAL_STEPS_VALUE);
  const haveYouWon = useMemo(() => checkVictory(values), [values]);

  function onClickSwitch(rowNumber, columnNumber) {
    if (haveYouWon) {
      return;
    }
    setValues(calculateNewValues(values, rowNumber, columnNumber));
    setStepCounterValue(stepCounter + 1);
  }

  function resetGame() {
    setValues(INITIAL_VALUES);
    setStepCounterValue(INITIAL_STEPS_VALUE);
  }

  return (
    <>
      {values.map(function(row, rowNumber) {
        return (
          <section key={"row" + rowNumber}>
            {row.map(function(value, columnNumber) {
              return (
                <Switch
                  key={"value" + rowNumber + columnNumber}
                  value={value}
                  onClick={() => onClickSwitch(rowNumber, columnNumber)}
                />
              );
            })}
          </section>
        );
      })}
      <h2>Steps: {stepCounter}</h2>
      {haveYouWon && (
        <section>
          <h1>🏆 YOU WON! 🏆</h1>
          <button className="start-again-button" onClick={resetGame}>
            Start Again
          </button>
        </section>
      )}
    </>
  );
}

export default Grid;
