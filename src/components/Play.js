import Avatar from "./Avatar";
import ScoreButtons from "./ScoreButtons";
import DisplayScore from "./DisplayScore";
import ResetButton from "./ResetButton";

function Play({ numOfPlayers }) {
  return (
    <div>
      <Avatar numOfPlayers={numOfPlayers} />
      <ScoreButtons />
      <DisplayScore />
      <ResetButton />
    </div>
  );
}

export default Play;
