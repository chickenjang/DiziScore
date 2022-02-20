import { useContext } from "react";
import "./ResetButton.css";

function ResetButton({ name, ScoreContext }) {
  const { setScore } = useContext(ScoreContext);

  return (
    <button
      className="reset-btn"
      onClick={() =>
        setScore((current) => {
          const newScore = { ...current };
          newScore[name] = 0;
          return newScore;
        })
      }
    >
      Reset Score
    </button>
  );
}

export default ResetButton;
