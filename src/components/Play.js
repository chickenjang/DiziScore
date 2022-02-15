import Avatar from "./Avatar";
import ScoreButtons from "./ScoreButtons";
import DisplayScore from "./DisplayScore";
import ResetButton from "./ResetButton";
import { useEffect, useState, createContext } from "react";

function Play({ numOfPlayers, players }) {
  const [score, setScore] = useState({});
  const ScoreContext = createContext({
    score: score,
    setScore: setScore,
  });

  useEffect(() => {
    setScore((current) => {
      const newScore = { ...current };
      players.forEach((player) => (newScore[player] = 0));
      return newScore;
    });
  }, []);

  const playerCards = [];
  for (let i = 0; i < numOfPlayers; i++) {
    playerCards.push(
      <div key={i}>
        <Avatar numOfPlayers={numOfPlayers} />
        <ScoreButtons name={players[i]} ScoreContext={ScoreContext} />
        <DisplayScore name={players[i]} score={score[players[i]]} />
        <ResetButton />
      </div>
    );
  }

  return (
    <div>
      <ScoreContext.Provider value={{ score, setScore }}>
        {playerCards}
      </ScoreContext.Provider>
    </div>
  );
}

export default Play;
