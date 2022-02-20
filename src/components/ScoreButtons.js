import { useContext } from "react";
import Button from "@mui/material/Button";
import "./ScoreButtons.css";

function ScoreButtons({ name, ScoreContext }) {
  const { setScore } = useContext(ScoreContext);

  const scoreButtons = [];
  for (let i = 1; i < 13; i++) {
    scoreButtons.push(
      <Button
        variant="outlined"
        key={i}
        onClick={() =>
          setScore((current) => {
            const newScore = { ...current };
            newScore[name] += i;
            return newScore;
          })
        }
      >
        {i}점
      </Button>
    );
  }

  return <div className="score-btns">{scoreButtons}</div>;
}

export default ScoreButtons;
