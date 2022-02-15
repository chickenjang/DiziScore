import { useContext } from "react";
import Button from "@mui/material/Button";

function ResetButton({ name, ScoreContext }) {
  const { setScore } = useContext(ScoreContext);

  return (
    <Button
      variant="contained"
      onClick={() =>
        setScore((current) => {
          const newScore = { ...current };
          newScore[name] = 0;
          return newScore;
        })
      }
    >
      Reset Score
    </Button>
  );
}

export default ResetButton;
