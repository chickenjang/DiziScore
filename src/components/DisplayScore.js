import "./DisplayScore.css";

function DisplayScore({ name, score }) {
  return (
    <div className="display-score">
      <div>{name}</div>
      <div>{score}점</div>
    </div>
  );
}

export default DisplayScore;
