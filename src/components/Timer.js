import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return function () {
        clearInterval(id);
      };
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins.toString().padStart(2, 0)}:{seconds.toString().padStart(2, 0)}
    </div>
  );
}

export default Timer;
