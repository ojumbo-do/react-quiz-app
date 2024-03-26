function Progress({ numQuestions, index, points, maxPossibelPoints, answer }) {
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numQuestions} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossibelPoints}
      </p>
    </header>
  );
}

export default Progress;
