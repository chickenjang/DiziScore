import Button from "@mui/material/Button";

function ScoreButtons() {
  const scoreButtons = [];
  for (let i = 0; i < 15; i++) {
    scoreButtons.push(
      <Button variant="outlined" key={i}>
        {i}점
      </Button>
    );
  }

  return <div>{scoreButtons}</div>;
}

export default ScoreButtons;
