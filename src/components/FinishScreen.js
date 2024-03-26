function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentageScore = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentageScore)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reStart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
