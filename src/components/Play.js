import Avatar from "./Avatar";
import ScoreButtons from "./ScoreButtons";
import DisplayScore from "./DisplayScore";
import ResetButton from "./ResetButton";
import { useEffect, useState, createContext } from "react";
import "./Play.css";

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
    const name = players[i];
    playerCards.push(
      <div key={i} className="play-player">
        <Avatar order={i} />
        <ScoreButtons name={name} ScoreContext={ScoreContext} />
        <DisplayScore name={name} score={score[players[i]]} />
        <ResetButton name={name} ScoreContext={ScoreContext} />
      </div>
    );
  }
  // TODO: 현재 1등과 꼴등 텍스트로 표시해주기
  return (
    <div className="play">
      <ScoreContext.Provider value={{ score, setScore }}>
        {playerCards}
      </ScoreContext.Provider>
    </div>
  );
}

export default Play;
