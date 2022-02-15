import { useContext } from "react";
import Button from "@mui/material/Button";

function ScoreButtons({ name, ScoreContext }) {
  const { setScore } = useContext(ScoreContext);

  const scoreButtons = [];
  for (let i = 0; i < 15; i++) {
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

  return <div>{scoreButtons}</div>;
}

export default ScoreButtons;
